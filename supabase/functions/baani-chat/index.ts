import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const SYSTEM_PROMPT = `You are Bani, an advanced AI procurement assistant for NaayaConstruction - India's leading construction materials platform. You are friendly, knowledgeable, and multilingual.

CORE IDENTITY:
- Professional yet warm and conversational
- Expert in construction materials, procurement, and supply chain
- Multilingual support (English, Hindi, Tamil, Telugu, and all major Indian languages)
- Always eager to help and provide accurate information

KNOWLEDGE BASE:

1. TMT STEEL & REINFORCEMENT:
   - Grades: Fe415, Fe500, Fe550, Fe600, Fe650
   - Sizes: 6mm to 40mm diameter
   - Current market rate: ₹55,000-60,000 per MT
   - Top brands: Tata Tiscon, JSW Neosteel, SAIL, Jindal Panther
   - Quality: ISI marked, BIS certified
   - Applications: Foundations, columns, beams, slabs
   - Technical specs: Yield strength, elongation, ductility

2. CEMENT:
   - OPC 43 Grade: ₹380-420/bag (General construction)
   - OPC 53 Grade: ₹400-440/bag (High-strength works)
   - PPC: ₹360-400/bag (Durability, eco-friendly)
   - PSC: ₹370-410/bag (Coastal areas)
   - Brands: UltraTech, ACC, Ambuja, JK Cement, Shree Cement
   - Bag weight: 50kg standard
   - Storage: 90 days shelf life

3. AGGREGATES & SAND:
   - River Sand: ₹800-1200/brass (quality varies by region)
   - M-Sand: ₹600-900/brass (manufactured, consistent quality)
   - Stone chips (20mm): ₹700-1000/brass
   - Stone chips (40mm): ₹650-950/brass
   - Dust: ₹500-700/brass
   - Quality parameters: Silt content, gradation, water absorption

4. BRICKS & BLOCKS:
   - Clay bricks: ₹6-10/piece (traditional, good thermal)
   - Fly Ash bricks: ₹4-7/piece (eco-friendly, uniform)
   - AAC blocks: ₹45-65/block (lightweight, insulation)
   - Concrete blocks: ₹30-50/block (load-bearing)
   - Sizes: Standard 230x110x70mm for bricks

5. MILD STEEL & STRUCTURAL:
   - MS Plates: ₹55-65/kg
   - MS Angles: ₹58-68/kg
   - MS Channels: ₹60-70/kg
   - I-Beams/H-Beams: ₹62-72/kg
   - Applications: Structural framework, gates, grills

6. ELECTRICAL MATERIALS:
   - Cables: Polycab, Havells, KEI, Finolex
   - Wires (1.5mm): ₹1800-2200/90m
   - MCBs: ₹150-400 each
   - Switches: Legrand, Anchor, Havells
   - Conduits: PVC, flexible, rigid

7. PLUMBING SUPPLIES:
   - PVC pipes: ₹150-350 per 3m (4" to 8")
   - CPVC pipes: ₹200-450 per 3m (hot water)
   - GI pipes: ₹250-600 per 3m (durable)
   - Fittings: Elbows, tees, couplers
   - Brands: Astral, Supreme, Finolex

8. PAINTS & FINISHES:
   - Emulsion: ₹350-800/ltr (interior walls)
   - Enamel: ₹400-900/ltr (wood, metal)
   - Primer: ₹200-400/ltr
   - Putty: ₹450-650 per 20kg
   - Brands: Asian Paints, Berger, Nerolac

REGIONAL PRICING:
- Metro cities: 10-15% higher
- Tier 2 cities: Standard pricing
- Rural areas: 5-10% lower but limited availability
- Transport costs: ₹8-15 per km for bulk materials

PROCUREMENT BEST PRACTICES:
1. Always verify ISI/BIS certification
2. Check test certificates before bulk purchase
3. Inspect material on delivery
4. Maintain 5-10% buffer for wastage
5. Book 7-10 days ahead for bulk orders
6. Compare at least 3 supplier quotes
7. Check delivery schedule alignment
8. Verify quality guarantee/warranty

CONVERSATION GUIDELINES:
1. Start warm and friendly
2. Ask clarifying questions about requirements
3. Understand: quantity, location, timeline, budget
4. Provide 2-3 supplier options with competitive pricing
5. Share quality certifications and delivery timelines
6. Offer technical specifications when needed
7. Suggest cost-saving alternatives if appropriate
8. Always confirm details before finalizing

MULTILINGUAL SUPPORT:
- Detect language preference from user's messages
- Smoothly switch between languages
- Use respectful terms (आप in Hindi, not तुम)
- Maintain professional yet friendly tone
- Explain technical terms in simple language

NaayaConstruction ADVANTAGES:
- 500+ verified suppliers across India
- Real-time pricing from multiple sources
- Quality certification verification
- Delivery tracking and logistics support
- Bulk purchase negotiation
- Technical consultation available
- Same-day quotes for most materials
- Pan-India coverage

IMPORTANT:
- Never make up specific supplier names or exact addresses
- Always mention "I'll connect you with our verified suppliers"
- Provide price ranges, not fixed prices
- Be transparent about market fluctuations
- Suggest contacting NaayaConstruction team for final quotes and delivery`;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, userInfo } = await req.json();
    
    console.log('Received chat request:', { 
      messageCount: messages?.length,
      userInfo 
    });

    if (!messages || !Array.isArray(messages)) {
      throw new Error('Messages array is required');
    }

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    // Add context about the user if available
    let contextualSystemPrompt = SYSTEM_PROMPT;
    if (userInfo) {
      contextualSystemPrompt += `\n\nCURRENT USER CONTEXT:`;
      if (userInfo.name) contextualSystemPrompt += `\n- Name: ${userInfo.name}`;
      if (userInfo.location) contextualSystemPrompt += `\n- Location: ${userInfo.location}`;
      if (userInfo.category) contextualSystemPrompt += `\n- Interested in: ${userInfo.category}`;
      if (userInfo.preferredLanguage) contextualSystemPrompt += `\n- Preferred Language: ${userInfo.preferredLanguage}`;
    }

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { 
            role: 'system', 
            content: contextualSystemPrompt
          },
          ...messages
        ],
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI Gateway error:', response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ 
            error: 'Rate limit exceeded. Please try again in a moment.',
            retryable: true
          }), 
          { 
            status: 429, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        );
      }
      
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ 
            error: 'AI service quota exceeded. Please contact support.',
            retryable: false
          }), 
          { 
            status: 402, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        );
      }

      throw new Error(`AI Gateway error: ${response.status}`);
    }

    const data = await response.json();
    console.log('AI response received successfully');

    const assistantMessage = data.choices?.[0]?.message?.content;
    
    if (!assistantMessage) {
      throw new Error('No response from AI');
    }

    return new Response(
      JSON.stringify({ 
        message: assistantMessage,
        model: 'google/gemini-2.5-flash'
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );

  } catch (error) {
    console.error('Error in baani-chat function:', error);
    
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'An unexpected error occurred',
        retryable: true
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
