import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const NAAYA_CONSTRUCTION_KNOWLEDGE = `
# About NaayaConstruction

NaayaConstruction is India's leading construction materials procurement platform, revolutionizing how builders, contractors, and construction professionals source materials.

## What is NaayaConstruction?

NaayaConstruction is a comprehensive B2B construction materials marketplace that connects buyers with verified suppliers across India. We leverage technology and AI to make construction material procurement transparent, efficient, and cost-effective.

### Core Services:
1. **Material Procurement** - Access to 500+ verified suppliers for all construction materials
2. **Price Discovery** - Real-time pricing across multiple suppliers and cities
3. **Quality Assurance** - All suppliers verified with quality certifications
4. **AI Assistant (Bani)** - Multilingual AI support in 8+ Indian languages
5. **Pan-India Coverage** - Delivery to all major cities and towns

## Materials We Handle:

### Steel & Metal Products:
- **TMT Steel**: Fe415, Fe500, Fe550, Fe600, Fe650 grades
- Sizes: 6mm, 8mm, 10mm, 12mm, 16mm, 20mm, 25mm, 28mm, 32mm, 40mm
- Brands: Tata Tiscon, JSW Neosteel, SAIL, Jindal Panther, Kamdhenu
- Current Price Range: ₹55,000 - ₹60,000 per MT (varies by city)

- **Mild Steel**: MS Plates, Angles, Channels, Beams, Flats
- **Stainless Steel**: SS304, SS316 - Sheets, Pipes, Fittings
- **Other Metals**: Copper, Aluminum, Brass products

### Cement & Concrete:
- **OPC 43 Grade**: ₹380-420 per 50kg bag
- **OPC 53 Grade**: ₹400-440 per 50kg bag
- **PPC (Portland Pozzolana Cement)**: ₹360-400 per bag
- **PSC (Portland Slag Cement)**: ₹370-410 per bag
- **White Cement**: ₹450-550 per bag
- **Ready Mix Concrete**: All grades (M15 to M60)

Brands: UltraTech, ACC, Ambuja, Shree, Dalmia, JK Lakshmi, Birla

### Aggregates & Sand:
- **River Sand**: ₹800-1200 per brass (varies by location)
- **M-Sand (Manufactured Sand)**: ₹600-900 per brass
- **20mm Stone Aggregate**: ₹500-700 per brass
- **40mm Stone Aggregate**: ₹450-650 per brass
- **Stone Chips (6mm, 12mm)**: ₹400-600 per brass
- **Dust**: ₹300-500 per brass

### Bricks & Blocks:
- **Red Clay Bricks**: ₹6-8 per piece
- **Fly Ash Bricks**: ₹4-6 per piece
- **AAC Blocks**: ₹3500-4500 per cubic meter
- **Concrete Blocks**: ₹35-50 per piece
- **Hollow Blocks**: ₹40-60 per piece

### Plumbing Materials:
- **PVC Pipes**: 1/2" to 6" diameter
- **CPVC Pipes**: Hot & cold water
- **GI Pipes**: All sizes
- **Drainage Pipes**: SWR pipes, soil pipes
- **Fittings**: Elbows, tees, couplings, valves
- Brands: Finolex, Astral, Prince, Supreme

### Electrical Materials:
- **Cables & Wires**: All sizes - 1.5sqmm to 240sqmm
- **MCBs & RCCBs**: 6A to 63A ratings
- **Distribution Boards**: Single & three-phase
- **Switches & Sockets**: Modular switches
- **LED Lights**: All types
- Brands: Polycab, Havells, Finolex, Anchor, Legrand

### Paints & Finishes:
- **Emulsion Paint**: ₹150-400 per liter
- **Enamel Paint**: ₹200-500 per liter
- **Primer**: ₹100-250 per liter
- **Wall Putty**: ₹350-600 per 20kg bag
- **Distemper**: ₹80-150 per kg
- Brands: Asian Paints, Berger, Nerolac, Dulux

### Hardware & Tools:
- Hand tools, Power tools
- Fasteners: Nuts, bolts, screws, anchors
- Door/Window fittings
- Bathroom accessories

## Key Features:

### 1. Verified Suppliers
- 500+ suppliers across India
- Background verification completed
- Financial credibility checked
- Quality certifications verified
- Regular performance monitoring

### 2. Quality Assurance
- ISI marked materials
- Third-party testing reports
- Manufacturer warranties
- Quality guarantee on all products
- Return/replacement policy

### 3. Transparent Pricing
- Real-time market prices
- Multiple supplier quotes
- No hidden charges
- GST included pricing
- Volume discounts available

### 4. Fast Delivery
- 2-5 days typical delivery
- Pan-India logistics network
- Real-time tracking
- Scheduled deliveries
- Emergency rush orders available

### 5. Multilingual Support (Bani AI)
- English, Hindi, Tamil, Telugu, Bengali
- Gujarati, Marathi, Punjabi
- Voice and text support
- 24/7 availability

## Cities We Serve:

**Tier 1 Cities**: Delhi NCR, Mumbai, Bangalore, Chennai, Kolkata, Hyderabad, Pune, Ahmedabad

**Tier 2 Cities**: Jaipur, Lucknow, Kanpur, Nagpur, Indore, Bhopal, Visakhapatnam, Patna, Vadodara, Ghaziabad, Ludhiana, Agra, Nashik, Faridabad, Meerut, Rajkot, Varanasi, Srinagar, Amritsar, Allahabad

**Coverage**: 100+ cities across India

## How It Works:

1. **Tell us your requirement** - Via website, app, or Bani AI
2. **Get instant quotes** - From multiple verified suppliers
3. **Compare & choose** - Best price, quality, delivery time
4. **Place order** - Simple online booking
5. **Track delivery** - Real-time updates
6. **Receive materials** - Quality checked and certified

## Contact Information:
- Website: www.naayaconstruction.com
- Email: support@naayaconstruction.com
- Phone: 1800-XXX-XXXX (Toll-free)
- WhatsApp: +91-XXXXX-XXXXX

## Why Choose NaayaConstruction?

✅ **Save Time**: No need to visit multiple suppliers
✅ **Save Money**: Competitive prices through bulk procurement
✅ **Quality Assured**: Only verified, quality materials
✅ **Transparent**: Clear pricing, no hidden costs
✅ **Convenient**: Online ordering, doorstep delivery
✅ **Support**: 24/7 multilingual customer service
✅ **Trust**: Thousands of satisfied customers

## Recent Updates:

- Expanded supplier network to 500+ verified vendors
- Added 50+ new cities to delivery network
- Launched Bani AI assistant with 8+ language support
- Introduced same-day delivery in metro cities
- Started quality certification program

---

As Bani, I can help you with:
- Material requirements and specifications
- Current market prices in your city
- Supplier recommendations
- Quality certifications
- Delivery schedules
- Bulk order discounts
- Technical advice on materials
- Project material estimation
`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, language = "english" } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      throw new Error("Messages array is required");
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    // Create system prompt with NaayaConstruction knowledge
    const systemPrompt = `You are Bani, an advanced AI procurement assistant for NaayaConstruction. You are friendly, professional, and knowledgeable.

${NAAYA_CONSTRUCTION_KNOWLEDGE}

IMPORTANT INSTRUCTIONS:
1. Always be helpful, friendly, and conversational
2. Provide accurate information about NaayaConstruction and construction materials
3. If asked about pricing, provide the ranges mentioned above but clarify they may vary by location
4. Always encourage users to share their specific requirements for accurate quotes
5. Be multilingual - respond in the language the user is speaking
6. Keep responses concise but informative
7. Use emojis occasionally to be friendly (but not excessively)
8. If you don't know something specific, be honest and offer to connect them with the team
9. Always close by asking if they need anything else

Current conversation language: ${language}

Respond naturally and conversationally. Don't be repetitive. Each response should be unique and contextual.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        temperature: 0.8,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ 
            error: "Rate limit exceeded. Please try again in a moment." 
          }),
          {
            status: 429,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ 
            error: "AI service unavailable. Please contact support." 
          }),
          {
            status: 402,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      const errorText = await response.text();
      console.error("AI API error:", response.status, errorText);
      throw new Error("AI service error");
    }

    const data = await response.json();
    const assistantMessage = data.choices[0].message.content;

    console.log("Chat response generated successfully");

    return new Response(
      JSON.stringify({ message: assistantMessage }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error in bani-chat function:", error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : "Unknown error" 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
