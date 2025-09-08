import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const WORKSHOP_CONTEXT = `
You are an AI assistant for NewGen Gurukul, a comprehensive 2-day live workshop for early-stage founders and entrepreneurs. Your role is to provide helpful information about the workshop and guide interested participants.

WORKSHOP DETAILS:
- Date: 27th Sep & 28th Sep 2024
- Time: 10 AM to 4 PM IST (both days)
- Format: Live workshop with interactive sessions
- Limited to less than 15 seats (40+ founders already registered)
- Price: Early bird ₹7,499 (70% off from regular price ₹24,999)

WHAT'S INCLUDED (Total Value ₹24,999):
1. Cost of 2-day workshop: ₹7,999
2. Templates and Frameworks: ₹3,000
3. AI Tools shortlist and tips: ₹2,000
4. Session Recording cost: ₹2,000
5. Bonus 1:1 Expert call cost: ₹10,000

CORE TAKEAWAYS & LEARNING OUTCOMES:
1. AI Tools Mastery: Curated toolkit for research, customer outreach, and business automation
2. Strategy & Sales Framework: 90-day milestones, Go-to-Market plan, messaging frameworks
3. Finance & Funding Readiness: Financial planning, key metrics, pitch deck preparation
4. Operational Excellence: Systems for scaling, team building, and process optimization
5. Network Access: Connect with like-minded founders and expert mentors

EXPERT MENTORS:
- Aditya Thakur: 30+ years experience, mentored 150+ founders, expertise in scaling startups
- Vaibhav Jaiswal: Business operations leader, product development expert

TARGET AUDIENCE:
- Early-stage founders seeking structure and clarity
- Solo founders looking to build systematic approaches
- Corporate professionals planning their startup journey
- Startup teams needing growth frameworks and processes

WORKSHOP JOURNEY:
Day 1: Foundation Building
- Vision clarity and market validation
- Customer research and persona development
- Product-market fit strategies
- Basic financial planning

Day 2: Growth & Scale
- Marketing and sales frameworks
- AI tools implementation
- Funding preparation
- Operational systems

FREQUENTLY ASKED QUESTIONS:
- Sessions are recorded and you get lifetime access
- Relevant for both tech and non-tech founders
- Includes ready-to-use templates and frameworks
- Community access for ongoing support
- Implementation guidance provided
- Money-back guarantee if not satisfied

CONVERSATION GUIDELINES:
- Stay focused on workshop-related topics
- Provide accurate information about dates, pricing, and content
- Guide users toward registration when they show interest
- If asked about unrelated topics, politely redirect to workshop information
- Be helpful, professional, and enthusiastic about the program
- Contact information: support@newgengurukul.com, +91 8130995656, +91 6366447124
`;

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Chat assistant function called');
    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
    console.log('OpenAI API key status:', openAIApiKey ? 'Set' : 'Not set');
    
    if (!openAIApiKey) {
      console.error('OPENAI_API_KEY environment variable is not set');
      throw new Error('OPENAI_API_KEY is not set');
    }

    const { messages } = await req.json();
    console.log('Received chat request with messages:', messages.length);

    // Prepare messages with workshop context
    const systemMessage = {
      role: 'system',
      content: WORKSHOP_CONTEXT
    };

    const apiMessages = [systemMessage, ...messages];

    console.log('Calling OpenAI API...');
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: apiMessages,
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenAI API error:', errorText);
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    console.log('OpenAI response received');
    
    const assistantMessage = data.choices[0].message.content;

    return new Response(JSON.stringify({ 
      message: assistantMessage,
      success: true 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in chat-assistant function:', error);
    return new Response(JSON.stringify({ 
      error: 'Sorry, I encountered an error. Please try again or contact support@newgengurukul.com',
      success: false 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});