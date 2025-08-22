import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, history = [] } = await req.json();
    console.log('Received chat request:', { message, historyLength: history.length });

    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
    if (!openAIApiKey) {
      console.error('OpenAI API key not found');
      throw new Error('OpenAI API key not configured');
    }

    // System prompt for the learning program chatbot
    const systemPrompt = `You are an AI assistant for an entrepreneurial learning program designed to help founders transform their startup ideas into profitable businesses. 

    About the Program:
    - This is a comprehensive 90-day accelerator program
    - Focuses on five core areas: Strategy, Sales, Finance & Funding, Operations & Culture, and AI Tools
    - Helps founders go from idea to revenue engine in 90 days
    - Provides practical frameworks, templates, and actionable steps
    - Includes mentorship and proven methodologies
    - Covers go-to-market strategy, customer acquisition, financial planning, team building, and modern AI tools
    - Designed for early-stage founders who want to stop guessing and start building with proven systems

    Your Role:
    - Answer questions about the program professionally and authentically
    - Highlight the practical, outcome-based nature of the learning
    - Emphasize the 90-day transformation timeline
    - Be helpful and informative while maintaining marketing appeal
    - Focus on how the program helps founders overcome common startup challenges
    - Mention the comprehensive nature covering strategy, sales, finance, operations, and AI tools
    - If asked about pricing or enrollment, direct them to speak with the team

    Tone: Professional, knowledgeable, enthusiastic but not pushy, supportive of entrepreneurial dreams.`;

    // Prepare messages for OpenAI
    const messages = [
      { role: 'system', content: systemPrompt },
      ...history.map((msg: any) => ({
        role: msg.role,
        content: msg.content
      })),
      { role: 'user', content: message }
    ];

    console.log('Sending request to OpenAI with messages:', messages.length, 'total messages');
    const requestBody = {
      model: 'gpt-4.1-2025-04-14',
      messages: messages,
      max_completion_tokens: 500,
      // Note: temperature is not supported for GPT-4.1+ models
    };
    console.log('Request body:', JSON.stringify(requestBody, null, 2));

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenAI API error:', response.status, errorText);
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    console.log('OpenAI response received successfully');
    
    const assistantMessage = data.choices[0].message.content;

    return new Response(JSON.stringify({ 
      message: assistantMessage,
      role: 'assistant'
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in chat-support function:', error);
    return new Response(JSON.stringify({ 
      error: error.message || 'An error occurred while processing your request' 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});