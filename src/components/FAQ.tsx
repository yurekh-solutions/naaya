import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { ChevronDown, Users, Building2 } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<"vendors" | "builders">("vendors");

  // Vendor FAQs
  const vendorFAQs = [
    { question: "Why should we pay subscription fees when other platforms are free?", answer: "Our paid model ensures premium services including dedicated logistics management, secure escrow protection, and verified builder matching, while free platforms often lack these essential risk mitigation features." },
    { question: "How do we know local builders are qualified and financially stable?", answer: "We implement comprehensive verification processes during builder onboarding, including documentation checks, creditworthiness assessment, and performance tracking to ensure only qualified builders access our platform." },
    { question: "What if builders don't pay or there are payment disputes?", answer: "Our integrated escrow services protect every transaction, holding payments securely until delivery confirmation, eliminating payment risks that plague direct vendor-builder relationships." },
    { question: "Why can't we just find builders through existing networks?", answer: "Our platform provides access to pre-qualified builders across multiple markets simultaneously, with detailed needs assessment and matching algorithms that traditional networking cannot scale." },
    { question: "How do you handle logistics and customs for international shipping?", answer: "We partner with established logistics providers and maintain customs compliance expertise, offering end-to-end supply chain coordination with real-time tracking that individual vendors cannot achieve." },
    { question: "What if we get locked into your platform and can't switch?", answer: "Our subscription model allows flexibility with annual or monthly options, and we provide data portability to ensure vendors maintain control over their business relationships and information." },
    { question: "How do we compete with lower-priced vendors on your platform?", answer: "We emphasize value-based matching over price competition, highlighting quality certifications, delivery reliability, and service capabilities to help differentiate premium vendors." },
    { question: "What if there aren't enough active builders in our target markets?", answer: "Our geographic expansion strategy targets emerging economies with growing construction sectors, and we actively recruit builders through trade shows, associations, and direct sales efforts." },
    { question: "How do we protect our proprietary product information?", answer: "Our platform includes robust security protocols and data protection measures, allowing vendors to control information visibility and maintain competitive advantages." },
    { question: "What support do you provide for vendors new to digital platforms?", answer: "We offer comprehensive onboarding, multi-language customer support, and regular training on platform features to ensure successful adoption regardless of technical expertise." },
  ];

  // Builder FAQs
  const builderFAQs = [
    { question: "Why pay for another platform when we have existing supplier relationships?", answer: "Our platform expands access to international suppliers with competitive pricing and specialized products unavailable through local networks, backed by secure transaction processing." },
    { question: "How do we verify product quality from international vendors?", answer: "We implement vendor verification during onboarding, maintain performance tracking systems, and provide case studies and testimonials from similar construction projects." },
    { question: "What if shipments are delayed or products don't meet specifications?", answer: "Our escrow services protect against delivery failures, and our logistics partnerships include real-time tracking and quality assurance protocols to minimize risks." },
    { question: "How do we get approval from stakeholders for new vendor relationships?", answer: "We provide ROI calculators, case studies, and detailed vendor profiles that builders can share internally to demonstrate value and reduce procurement risks." },
    { question: "What if we need immediate materials and international shipping takes too long?", answer: "Our logistics network includes regional distribution centers in key markets to reduce delivery times, plus real-time inventory visibility to plan procurement effectively." },
    { question: "How do we handle warranty and after-sales support from international vendors?", answer: "Our platform facilitates direct communication channels and tracks vendor performance including support responsiveness, with escrow protection for warranty claims." },
    { question: "What if language barriers create communication problems?", answer: "We provide multi-language platform support and facilitate communication through standardized documentation and translation services for technical specifications." },
    { question: "How do we manage regulatory compliance with international products?", answer: "Our logistics network includes customs and regulatory compliance expertise, ensuring all products meet local construction standards and certification requirements." },
    { question: "What if we can't find specialized products for our specific projects?", answer: "Our advanced search and matching algorithms connect builders with vendors offering specialized products, complemented by our direct sales team for complex requirements." },
    { question: "How do we justify the subscription cost to our finance team?", answer: "Our ROI calculator demonstrates cost savings through competitive international pricing, reduced procurement time, and risk mitigation that typically exceed subscription fees within the first few transactions." },
  ];

  const currentFAQs = activeTab === "vendors" ? vendorFAQs : builderFAQs;

  // JSON-LD Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [...vendorFAQs, ...builderFAQs].map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
    })),
  };

  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

        {/* Heading */}
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Frequently Asked Questions</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Get answers to common questions from vendors and builders</p>
        </motion.div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <GlassCard variant="premium" className="p-2 inline-flex">
            <button
              onClick={() => setActiveTab("vendors")}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                activeTab === "vendors" ? "bg-gradient-primary text-primary-foreground shadow-glow" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Building2 className="h-5 w-5" />
              <span className="font-medium">For Vendors</span>
            </button>
            <button
              onClick={() => setActiveTab("builders")}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                activeTab === "builders" ? "bg-gradient-primary text-primary-foreground shadow-glow" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Users className="h-5 w-5" />
              <span className="font-medium">For Builders</span>
            </button>
          </GlassCard>
        </div>

        {/* FAQ Grid - 2 Columns */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentFAQs.map((faq, index) => (
            <motion.div
              key={`${activeTab}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="h-full"
            >
              <GlassCard
                variant="interactive"
                className={`cursor-pointer transition-all duration-300 flex flex-col h-full ${openIndex === index ? "border-primary/50" : ""}`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center justify-between p-6">
                  <h3 className="text-lg font-semibold text-foreground pr-4 min-h-[3rem]">{faq.question}</h3>
                  <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className="h-5 w-5 text-primary flex-shrink-0" />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden flex-grow"
                    >
                      <div className="px-6 pb-6 pt-0">
                        <div className="w-full h-px bg-border mb-4" />
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
