import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const WORKSHOP_CONTEXT = `
You are a helpful AI assistant for the NewGen Gurukul workshop. Here's comprehensive information about the workshop:

**Workshop Details:**
- Program: NewGen Gurukul - Complete AI Transformation Workshop
- Duration: 3-day intensive program
- Format: In-person workshop with hands-on sessions
- Dates: Multiple batches available throughout the year
- Location: Premium venues in major cities (Mumbai, Delhi, Bangalore, Hyderabad)

**Pricing & Packages:**
- Early Bird: ₹9,999 (Limited time offer)
- Regular Price: ₹14,999
- Premium Package: ₹19,999 (includes additional resources and 1-on-1 mentoring)
- Group Discounts: Available for teams of 3+ people

**What's Included:**
- 3 days of intensive AI training
- Hands-on practical sessions
- Industry expert mentors
- Certificate of completion
- Networking opportunities
- Post-workshop support community
- Resource materials and tools access
- Meal and refreshments

**Target Audience:**
- Business professionals looking to integrate AI
- Entrepreneurs and startup founders
- Technical professionals wanting to upskill
- Students and recent graduates
- Anyone interested in AI transformation

**Key Learning Outcomes:**
- Understanding AI fundamentals and applications
- Hands-on experience with AI tools and platforms
- Strategic AI implementation for businesses
- Building AI-powered solutions
- Industry best practices and case studies

**Mentors & Instructors:**
- Industry experts with 10+ years experience
- AI researchers and practitioners
- Successful entrepreneurs who've implemented AI
- Technical specialists in machine learning and data science

**Registration Process:**
- Online registration through the website
- Payment options: Credit/Debit cards, UPI, Bank transfer
- Confirmation email with workshop details
- Pre-workshop materials sent 1 week before

**FAQs:**
- Prerequisites: Basic computer knowledge, no prior AI experience required
- Materials: Laptop required, all software provided
- Certificates: Industry-recognized completion certificates
- Refund Policy: Full refund if cancelled 7 days before workshop
- Accommodation: Assistance provided for outstation participants

Always be helpful, provide accurate information, and encourage registration. If asked about specific details not mentioned above, guide them to contact support at contact@newgengurukul.com or encourage them to register for more detailed information.
`;

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
    
    if (!openAIApiKey) {
      console.error('OpenAI API key not found');
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'OpenAI API key not configured' 
        }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const { messages } = await req.json();
    
    if (!messages || !Array.isArray(messages)) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Invalid messages format' 
        }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    console.log('Processing chat request with', messages.length, 'messages');

    // Prepare messages for OpenAI API
    const openAIMessages = [
      {
        role: 'system',
        content: WORKSHOP_CONTEXT
      },
      ...messages
    ];

    console.log('Calling OpenAI API...');
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: openAIMessages,
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenAI API error:', response.status, errorText);
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    console.log('OpenAI API response received');
    
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      throw new Error('Invalid response format from OpenAI');
    }

    const assistantMessage = data.choices[0].message.content;

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: assistantMessage 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );

  } catch (error) {
    console.error('Error in chat-assistant function:', error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error instanceof Error ? error.message : 'Internal server error' 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});