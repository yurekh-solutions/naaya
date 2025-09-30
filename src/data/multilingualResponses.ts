// Comprehensive multilingual responses for NaayaConstruction AI Assistant - 40+ Languages
export interface MultilingualResponse {
  english: string;
  hindi: string;
  tamil?: string;
  telugu?: string;
  bengali?: string;
  gujarati?: string;
  marathi?: string;
  punjabi?: string;
  kannada?: string;
  malayalam?: string;
  urdu?: string;
  odia?: string;
  assamese?: string;
  nepali?: string;
  sindhi?: string;
  konkani?: string;
  manipuri?: string;
  bodo?: string;
  santhali?: string;
  maithili?: string;
  dogri?: string;
  kashmiri?: string;
  spanish?: string;
  french?: string;
  german?: string;
  portuguese?: string;
  italian?: string;
  russian?: string;
  chinese?: string;
  japanese?: string;
  korean?: string;
  arabic?: string;
  turkish?: string;
  persian?: string;
  dutch?: string;
  swedish?: string;
  norwegian?: string;
  danish?: string;
  finnish?: string;
  polish?: string;
  czech?: string;
  hungarian?: string;
  romanian?: string;
  bulgarian?: string;
  ukrainian?: string;
  vietnamese?: string;
  thai?: string;
  indonesian?: string;
  malay?: string;
  filipino?: string;
  swahili?: string;
}

export const procurementKnowledge = {
  // Expanded material categories with detailed information
  materials: {
    tmt_steel: {
      grades: ['Fe415', 'Fe500', 'Fe550', 'Fe600', 'Fe650'],
      sizes: ['6mm', '8mm', '10mm', '12mm', '16mm', '20mm', '25mm', '28mm', '32mm', '36mm', '40mm'],
      brands: ['TATA Steel', 'JSW', 'SAIL', 'Jindal', 'Kamdhenu', 'Vizag Steel', 'Rathi', 'Agni', 'Mukand'],
      specifications: 'IS 1786:2008 standards, BIS certified',
      applications: 'RCC construction, bridges, high-rise buildings, industrial structures'
    },
    mild_steel: {
      grades: ['IS 2062', 'Grade A', 'Grade B', 'Grade C'],
      types: ['MS Plates', 'MS Angles', 'MS Channels', 'MS Beams', 'MS Pipes'],
      brands: ['TATA Steel', 'JSW', 'SAIL', 'Essar', 'RINL'],
      applications: 'Structural work, fabrication, general engineering'
    },
    stainless_steel: {
      grades: ['SS304', 'SS316', 'SS316L', 'SS409', 'SS430'],
      types: ['Sheets', 'Coils', 'Pipes', 'Fittings', 'Fasteners'],
      brands: ['JINDAL', 'TATA Steel', 'Outokumpu', 'Aperam'],
      applications: 'Kitchen equipment, pharmaceutical, chemical industries'
    },
    cement: {
      types: ['OPC 43', 'OPC 53', 'PPC', 'PSC', 'White Cement', 'Rapid Hardening', 'Sulphate Resistant'],
      brands: ['UltraTech', 'ACC', 'Ambuja', 'JK Cement', 'Shree Cement', 'Dalmia', 'Birla', 'Ramco'],
      specifications: 'IS 269:2015, IS 1489:1991, IS 455:1989',
      packaging: '50kg bags, bulk cement, mini bulk bags'
    },
    aggregates: {
      types: ['Coarse Aggregate', 'Fine Aggregate', 'Stone Chips', 'River Sand', 'M-Sand', 'P-Sand'],
      sizes: ['6mm', '10mm', '12mm', '20mm', '25mm', '40mm'],
      applications: 'Concrete mix, plastering, road construction, landscaping'
    },
    bricks: {
      types: ['Clay Bricks', 'Fly Ash Bricks', 'AAC Blocks', 'Concrete Blocks', 'Hollow Blocks', 'Solid Blocks'],
      sizes: ['230x110x70mm', '230x110x100mm', '600x200x100mm', '600x200x150mm', '600x200x200mm'],
      strength: 'Compressive strength 3.5-35 N/mm²'
    },
    electrical_materials: {
      types: ['Cables', 'Wires', 'Switches', 'Sockets', 'MCBs', 'Distribution Boards', 'Conduits'],
      brands: ['Havells', 'Polycab', 'Finolex', 'KEI', 'RR Kabel', 'Anchor'],
      specifications: 'ISI marked, BIS approved'
    },
    plumbing_materials: {
      types: ['PVC Pipes', 'CPVC Pipes', 'GI Pipes', 'Fittings', 'Valves', 'Fixtures'],
      brands: ['Supreme', 'Ashirvad', 'Prince', 'Finolex', 'Astral'],
      sizes: ['½ inch', '¾ inch', '1 inch', '1.5 inch', '2 inch', '3 inch', '4 inch', '6 inch']
    },
    paints_finishes: {
      types: ['Emulsion', 'Enamel', 'Distemper', 'Primer', 'Putty', 'Texture Paint'],
      brands: ['Asian Paints', 'Berger', 'Nerolac', 'Dulux', 'Indigo Paints'],
      coverage: '120-140 sq ft per litre'
    },
    hardware_tools: {
      types: ['Fasteners', 'Hinges', 'Locks', 'Hand Tools', 'Power Tools', 'Safety Equipment'],
      brands: ['Godrej', 'Dorset', 'Harrison', 'Bosch', 'Makita', 'DeWalt']
    }
  },

  // Current market prices (updated comprehensive data)
  currentPrices: {
    tmt_steel: {
      'Fe415-8mm': '₹55,000-58,000 per MT',
      'Fe500-12mm': '₹56,000-59,000 per MT',
      'Fe550-16mm': '₹57,000-60,000 per MT',
      'Fe600-20mm': '₹58,000-61,000 per MT'
    },
    mild_steel: {
      'MS_Plates': '₹52,000-55,000 per MT',
      'MS_Angles': '₹53,000-56,000 per MT',
      'MS_Channels': '₹54,000-57,000 per MT'
    },
    stainless_steel: {
      'SS304_Sheet': '₹280-320 per kg',
      'SS316_Pipe': '₹350-400 per kg'
    },
    cement: {
      'OPC43': '₹380-420 per bag',
      'OPC53': '₹400-440 per bag',
      'PPC': '₹350-390 per bag',
      'White_Cement': '₹450-500 per bag'
    },
    aggregates: {
      'River_Sand': '₹800-1200 per brass',
      'M_Sand': '₹600-900 per brass',
      'Stone_Chips_20mm': '₹1400-1800 per brass'
    },
    bricks: {
      'Clay_Bricks': '₹6-8 per piece',
      'Fly_Ash_Bricks': '₹4-6 per piece',
      'AAC_Blocks': '₹45-65 per piece'
    }
  }
};

export const greetingResponses: MultilingualResponse[] = [
  {
    english: "Hello! I'm Bani, your intelligent AI procurement assistant from NaayaConstruction. I'm here to help you with all your construction material needs. How can I assist you today?",
    hindi: "नमस्ते! मैं बानी हूं, NaayaConstruction की आपकी बुद्धिमान AI procurement assistant। मैं आपकी सभी construction materials की जरूरतों में आपकी मदद करने के लिए यहां हूं। आज मैं आपकी कैसे सहायता कर सकती हूं?",
    tamil: "வணக்கம்! நான் பானி, NaayaConstruction-ன் உங்கள் புத்திசாலி AI கொள்முதல் உதவியாளர். உங்கள் எல்லா கட்டுமான பொருள் தேவைகளிலும் உங்களுக்கு உதவ நான் இங்கே இருக்கிறேன்। இன்று நான் உங்களுக்கு எப்படி உதவ முடியும்?",
    telugu: "నమస్కారం! నేను బానీ, NaayaConstruction నుండి మీ తెలివైన AI procurement assistant. మీ అన్ని నిర్మాణ వస్తువుల అవసరాలతో మీకు సహాయం చేయడానికి నేను ఇక్కడ ఉన్నాను. ఈరోజు నేను మీకు ఎలా సహాయం చేయగలను?",
    bengali: "নমস্কার! আমি বানী, NaayaConstruction থেকে আপনার বুদ্ধিমান AI procurement assistant। আপনার সমস্ত নির্মাণ সামগ্রীর প্রয়োজনে আপনাকে সাহায্য করার জন্য আমি এখানে আছি। আজ আমি আপনাকে কীভাবে সাহায্য করতে পারি?",
    gujarati: "નમસ્તે! હું બાની છું, NaayaConstruction તરફથી તમારી બુદ્ધિશાળી AI procurement assistant. તમારી બધી બાંધકામ સામગ્રીની જરૂરિયાતોમાં તમારી મદદ કરવા હું અહીં છું. આજે હું તમારી કેવી રીતે મદદ કરી શકું?",
    marathi: "नमस्कार! मी बानी आहे, NaayaConstruction चे तुमचे हुशार AI procurement assistant. तुमच्या सर्व बांधकाम साहित्याच्या गरजांमध्ये तुम्हाला मदत करण्यासाठी मी इथे आहे. आज मी तुमची कशी मदत करू शकते?",
    punjabi: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ ਬਾਨੀ ਹਾਂ, NaayaConstruction ਤੋਂ ਤੁਹਾਡੀ ਸਿਆਣੀ AI procurement assistant। ਤੁਹਾਡੀਆਂ ਸਾਰੀਆਂ ਉਸਾਰੀ ਸਮੱਗਰੀ ਦੀਆਂ ਲੋੜਾਂ ਵਿੱਚ ਤੁਹਾਡੀ ਮਦਦ ਕਰਨ ਲਈ ਮੈਂ ਇੱਥੇ ਹਾਂ। ਅੱਜ ਮੈਂ ਤੁਹਾਡੀ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦੀ ਹਾਂ?"
  }
];

export const askNameResponses: MultilingualResponse[] = [
  {
    english: "Great! I'd love to help you with your construction material requirements. May I know your name please? This will help me provide personalized assistance.",
    hindi: "बहुत अच्छा! मैं आपकी construction materials की जरूरतों में मदद करना चाहूंगी। कृपया अपना नाम बताएं? इससे मुझे आपको व्यक्तिगत सहायता प्रदान करने में मदद मिलेगी।",
    tamil: "அருமை! உங்கள் கட்டுமான பொருள் தேவைகளில் உங்களுக்கு உதவ விரும்புகிறேன். தயவுசெய்து உங்கள் பெயரைச் சொல்லுங்கள்? இது எனக்கு தனிப்பட்ட உதவி வழங்க உதவும்।",
    telugu: "అద్భుతం! మీ నిర్మాణ వస్తువుల అవసరాలతో మీకు సహాయం చేయాలని అనుకుంటున్నాను. దయచేసి మీ పేరు చెప్పగలరా? ఇది నాకు వ్యక్తిగత సహాయం అందించడంలో సహాయపడుతుంది।",
    bengali: "দুর্দান্ত! আমি আপনার নির্মাণ সামগ্রীর প্রয়োজনীয়তায় আপনাকে সাহায্য করতে চাই। অনুগ্রহ করে আপনার নাম বলুন? এটি আমাকে ব্যক্তিগত সহায়তা প্রদান করতে সাহায্য করবে।"
  }
];

export const askLocationResponses: MultilingualResponse[] = [
  {
    english: "Nice to meet you, {name}! Could you please tell me your location or city? This will help me connect you with the best suppliers and provide accurate pricing in your area.",
    hindi: "आपसे मিलकर खुशी हुई, {name}! कृপया अपना स्थान या शहर बताएं? इससे मैं आपको आपके क्षेत्र के बेहतरीन suppliers से जोड़ सकूंगी और सटीक कीमतें दे सकूंगी।",
    tamil: "உங்களை சந்தித்ததில் மகிழ்ச்சி, {name}! தயவுசெய்து உங்கள் இடம் அல்லது நகரத்தைச் சொல்லுங்கள்? இது உங்கள் பகுதியில் சிறந்த சப்ளையர்களுடன் உங்களை இணைக்கவும் துல்லியமான விலைகளை வழங்கவும் உதவும்।",
    telugu: "మిమ్మల్ని కలవడం ఆనందంగా ఉంది, {name}! దయచేసి మీ ప్రాంతం లేదా నగరం చెప్పగలరా? ఇది మీ ప్రాంతంలో ఉత్తమ సప్లయర్లతో మిమ్మల్ని కనెక్ట్ చేయడానికి మరియు ఖచ్చితమైన ధరలను అందించడానికి సహాయపడుతుంది।"
  }
];

export const categoryResponses: MultilingualResponse[] = [
  {
    english: "Perfect, {name} from {location}! Now, which category of construction materials are you looking for? We specialize in:\n\n🏗️ TMT Steel & Reinforcement\n⚔️ Mild Steel & Structural Steel\n✨ Stainless Steel Products\n🧱 Cement & Concrete\n🪨 Aggregates & Sand\n🏠 Bricks & Blocks\n⚡ Electrical Materials\n🚿 Plumbing Supplies\n🎨 Paints & Finishes\n🔧 Hardware & Tools\n🔩 Fasteners & Fittings\n🛡️ Safety Equipment\n\nWhich category interests you the most?",
    hindi: "बहुत बढ़िया, {location} के {name}! अब बताएं, आप किस category के construction materials की तलाश में हैं? हमारी विशेषताएं हैं:\n\n🏗️ TMT Steel & Reinforcement\n⚔️ Mild Steel & Structural Steel\n✨ Stainless Steel Products\n🧱 Cement & Concrete\n🪨 Aggregates & Sand\n🏠 Bricks & Blocks\n⚡ Electrical Materials\n🚿 Plumbing Supplies\n🎨 Paints & Finishes\n🔧 Hardware & Tools\n🔩 Fasteners & Fittings\n🛡️ Safety Equipment\n\nकौन सी category में आपकी सबसे ज्यादा रुचि है?",
    tamil: "சரியானது, {location}-ன் {name}! இப்போது, நீங்கள் எந்த வகையான கட்டுமான பொருட்களைத் தேடுகிறீர்கள்? எங்கள் சிறப்புத் துறைகள்:\n\n🏗️ TMT Steel & Reinforcement\n⚔️ Mild Steel & Structural Steel\n✨ Stainless Steel Products\n🧱 Cement & Concrete\n🪨 Aggregates & Sand\n🏠 Bricks & Blocks\n⚡ Electrical Materials\n🚿 Plumbing Supplies\n🎨 Paints & Finishes\n🔧 Hardware & Tools",
    telugu: "అద్భుతం, {location} నుండి {name}! ఇప్పుడు, మీరు ఏ రకమైన నిర్మాణ వస్తువుల కోసం చూస్తున్నారు? మా ప్రత్యేకతలు:\n\n🏗️ TMT Steel & Reinforcement\n⚔️ Mild Steel & Structural Steel\n✨ Stainless Steel Products\n🧱 Cement & Concrete\n🪨 Aggregates & Sand\n🏠 Bricks & Blocks\n⚡ Electrical Materials\n🚿 Plumbing Supplies\n🎨 Paints & Finishes\n🔧 Hardware & Tools"
  }
];

export const materialDetailsResponses = {
  tmt_steel: {
    english: "Excellent choice! TMT Steel is crucial for strong construction. I can help you with:\n\n🔹 All grades: Fe415, Fe500, Fe550, Fe600, Fe650\n🔹 All sizes: 6mm to 40mm diameter\n🔹 Top brands: TATA, JSW, SAIL, Jindal, Kamdhenu\n🔹 Current market rates: ₹55,000-61,000 per MT\n🔹 Quality certificates & test reports\n🔹 Fast delivery scheduling\n\nWhat specific requirements do you have? Please tell me:\n- Quantity needed (MT/Tons)\n- Grade preference (Fe415/500/550/600)\n- Diameter sizes required\n- Delivery timeline\n- Project location",
    hindi: "बेहतरीन चुनाव! TMT Steel मजबूत निर्माण के लिए अत्यंत महत्वपूर्ण है। मैं आपकी इनमें मदद कर सकती हूं:\n\n🔹 सभी grades: Fe415, Fe500, Fe550, Fe600, Fe650\n🔹 सभी sizes: 6mm से 40mm diameter तक\n🔹 Top brands: TATA, JSW, SAIL, Jindal, Kamdhenu\n🔹 Current market rates: ₹55,000-61,000 प्रति MT\n🔹 Quality certificates और test reports\n🔹 तेज delivery scheduling\n\nआपकी specific requirements क्या हैं? कृपया बताएं:\n- कितनी quantity चाहिए (MT/Tons)\n- Grade की पसंद (Fe415/500/550/600)\n- Diameter sizes\n- Delivery timeline\n- Project का स्थान"
  },
  mild_steel: {
    english: "Perfect! Mild Steel is essential for structural work. I can provide:\n\n🔹 All types: MS Plates, Angles, Channels, Beams\n🔹 Grades: IS 2062 Grade A, B, C\n🔹 Top brands: TATA, JSW, SAIL, Essar\n🔹 Competitive rates: ₹52,000-57,000 per MT\n🔹 Custom cutting & fabrication\n🔹 Quality assurance\n\nYour requirements:\n- Type needed (Plates/Angles/Channels)\n- Thickness and dimensions\n- Quantity required\n- Delivery schedule",
    hindi: "परफेक्ट! Mild Steel structural work के लिए आवश्यक है। मैं provide कर सकती हूं:\n\n🔹 सभी types: MS Plates, Angles, Channels, Beams\n🔹 Grades: IS 2062 Grade A, B, C\n🔹 Top brands: TATA, JSW, SAIL, Essar\n🔹 Competitive rates: ₹52,000-57,000 प्रति MT\n🔹 Custom cutting और fabrication\n🔹 Quality assurance\n\nआपकी requirements:\n- कौन सा type चाहिए (Plates/Angles/Channels)\n- Thickness और dimensions\n- कितनी quantity\n- Delivery schedule"
  },
  stainless_steel: {
    english: "Excellent! Stainless Steel for premium applications. Available options:\n\n🔹 All grades: SS304, SS316, SS316L, SS409, SS430\n🔹 Forms: Sheets, Coils, Pipes, Fittings\n🔹 Premium brands: JINDAL, TATA, Outokumpu\n🔹 Current rates: ₹280-400 per kg\n🔹 Corrosion resistance guaranteed\n🔹 Food grade & pharmaceutical quality\n\nYour specifications:\n- Grade required (304/316/316L)\n- Form needed (Sheet/Pipe/Fitting)\n- Thickness/Diameter\n- Quantity and finish type",
    hindi: "एक्सिलेंट! Premium applications के लिए Stainless Steel। उपलब्ध विकल्प:\n\n🔹 सभी grades: SS304, SS316, SS316L, SS409, SS430\n🔹 Forms: Sheets, Coils, Pipes, Fittings\n🔹 Premium brands: JINDAL, TATA, Outokumpu\n🔹 Current rates: ₹280-400 प्रति kg\n🔹 Corrosion resistance की गारंटी\n🔹 Food grade और pharmaceutical quality\n\nआपकी specifications:\n- कौन सा grade चाहिए (304/316/316L)\n- कौन सा form (Sheet/Pipe/Fitting)\n- Thickness/Diameter\n- Quantity और finish type"
  },
  cement: {
    english: "Great choice! Cement is the foundation of all construction. I can assist you with:\n\n🔹 All types: OPC 43, OPC 53, PPC, PSC, White Cement\n🔹 Premium brands: UltraTech, ACC, Ambuja, JK, Shree\n🔹 Best prices: ₹350-500 per bag\n🔹 Bulk supply options available\n🔹 Quality assurance & certificates\n🔹 Timely delivery guaranteed\n\nPlease share your requirements:\n- Cement type needed (OPC43/OPC53/PPC)\n- Quantity (bags/MT/truck loads)\n- Budget considerations\n- Project timeline & location",
    hindi: "शानदार चुनाव! Cement सभी निर्माण की आधारशिला है। मैं आपकी इनमें सहायता कर सकती हूं:\n\n🔹 सभी प्रकार: OPC 43, OPC 53, PPC, PSC, White Cement\n🔹 Premium brands: UltraTech, ACC, Ambuja, JK, Shree\n🔹 Best prices: ₹350-500 प्रति bag\n🔹 Bulk supply options उपलब्ध\n🔹 Quality assurance और certificates\n🔹 समय पर delivery की गारंटी\n\nकृपया अपनी requirements बताएं:\n- किस प्रकार का cement चाहिए (OPC43/OPC53/PPC)\n- Quantity (bags/MT/truck loads)\n- Budget की बात\n- Project timeline और location"
  },
  aggregates: {
    english: "Perfect for your construction needs! Aggregates & Sand options:\n\n🔹 Types: River Sand, M-Sand, P-Sand, Stone Chips\n🔹 Sizes: 6mm, 10mm, 12mm, 20mm, 25mm, 40mm\n🔹 Quality: Sieve tested, graded material\n🔹 Rates: ₹600-1800 per brass\n🔹 Direct from quarries\n🔹 Timely delivery with tipper trucks\n\nYour requirements:\n- Type needed (River Sand/M-Sand/Stone Chips)\n- Size specifications\n- Quantity (brass/cubic feet)\n- Delivery location",
    hindi: "आपकी construction needs के लिए परफेक्ट! Aggregates और Sand के विकल्प:\n\n🔹 Types: River Sand, M-Sand, P-Sand, Stone Chips\n🔹 Sizes: 6mm, 10mm, 12mm, 20mm, 25mm, 40mm\n🔹 Quality: Sieve tested, graded material\n🔹 Rates: ₹600-1800 प्रति brass\n🔹 Quarries से directly\n🔹 Tipper trucks के साथ timely delivery\n\nआपकी requirements:\n- कौन सा type चाहिए (River Sand/M-Sand/Stone Chips)\n- Size specifications\n- Quantity (brass/cubic feet)\n- Delivery location"
  },
  electrical_materials: {
    english: "Great choice for electrical work! Complete range available:\n\n🔹 Cables & Wires: All sizes, ISI marked\n🔹 Switches & Sockets: Modular ranges\n🔹 Protection: MCBs, RCCBs, Distribution Boards\n🔹 Brands: Havells, Polycab, Finolex, KEI\n🔹 Conduits & Accessories\n🔹 Industrial & residential grades\n\nYour electrical requirements:\n- Type of material needed\n- Specifications (Amp rating, wire gauge)\n- Quantity required\n- Application (residential/commercial/industrial)",
    hindi: "Electrical work के लिए बेहतरीन चुनाव! Complete range उपलब्ध:\n\n🔹 Cables और Wires: सभी sizes, ISI marked\n🔹 Switches और Sockets: Modular ranges\n🔹 Protection: MCBs, RCCBs, Distribution Boards\n🔹 Brands: Havells, Polycab, Finolex, KEI\n🔹 Conduits और Accessories\n🔹 Industrial और residential grades\n\nआपकी electrical requirements:\n- किस प्रकार का material चाहिए\n- Specifications (Amp rating, wire gauge)\n- कितनी quantity\n- Application (residential/commercial/industrial)"
  }
};

export const completionResponses: MultilingualResponse[] = [
  {
    english: "Thank you {name}! I've captured all your requirements for {category}. Your procurement request has been submitted successfully!\n\n✅ Requirements recorded\n✅ Location: {location}\n✅ Connecting with verified suppliers\n✅ Price comparison in progress\n\nOur expert procurement team will contact you within 30 minutes with:\n🔸 3-5 competitive quotes\n🔸 Quality certifications\n🔸 Delivery schedules\n🔸 Payment terms\n\nIs there anything else I can help you with today?",
    hindi: "धन्यवाद {name}! मैंने {category} के लिए आपकी सभी requirements capture कर ली हैं। आपका procurement request सफलतापूर्वक submit हो गया है!\n\n✅ Requirements दर्ज की गईं\n✅ Location: {location}\n✅ Verified suppliers से जुड़ा जा रहा है\n✅ Price comparison जारी है\n\nहमारी expert procurement team 30 मिनट के अंदर आपसे संपर्क करेगी:\n🔸 3-5 competitive quotes के साथ\n🔸 Quality certifications के साथ\n🔸 Delivery schedules के साथ\n🔸 Payment terms के साथ\n\nक्या आज और कुछ मदद चाहिए?"
  }
];

export const helpTopics = {
  english: [
    "Material pricing and availability",
    "Supplier verification and ratings",
    "Quality certifications and standards",
    "Delivery scheduling and logistics",
    "Payment terms and financing",
    "Technical specifications",
    "Market trends and insights",
    "Bulk purchase discounts",
    "Project material estimation",
    "Alternative material suggestions"
  ],
  hindi: [
    "Material की कीमत और उपलब्धता",
    "Supplier की जांच और ratings",
    "Quality certifications और standards",
    "Delivery scheduling और logistics",
    "Payment terms और financing",
    "Technical specifications",
    "Market trends और insights",
    "Bulk purchase discounts",
    "Project material estimation",
    "Alternative material सुझाव"
  ]
};