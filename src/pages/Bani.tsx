import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/ui/glass-card';
import AIAvatar from '@/components/VoiceAI/AIAvatar';
import EnhancedBaaniChat from '@/components/VoiceAI/BaaniChat';
import EnhancedVoiceAIButton from '@/components/VoiceAI/VoiceAIButton';
import SEOHead from '@/components/SEOHead';
import { 
  Mic, 
  MessageCircle, 
  Zap, 
  Shield, 
  Globe,
  ArrowRight,
  Volume2,
  Users,
  Package,
  TrendingUp,
  Clock,
  CheckCircle,
  Languages,
  Bot,
  Sparkles
} from 'lucide-react';

const Bani = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { number: '24/7', label: 'Available', icon: Clock },
    { number: '8+', label: 'Languages', icon: Languages },
    { number: '500+', label: 'Verified Suppliers', icon: Users },
    { number: '1000+', label: 'Materials', icon: Package },
  ];

  const features = [
    {
      icon: Languages,
      title: "Multilingual Support",
      description: "Speak in English, Hindi, Tamil, Telugu, Bengali, Gujarati, Marathi, or Punjabi - Bani understands them all",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: Bot,
      title: "AI-Powered Intelligence",
      description: "Advanced procurement knowledge with real-time market insights, pricing, and supplier intelligence",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Shield,
      title: "Secure & Verified",
      description: "All suppliers verified, quality assured, with enterprise-grade security and privacy protection",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Zap,
      title: "Instant Processing",
      description: "Get quotes, prices, and supplier connections within minutes, not days",
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  const capabilities = [
    "Real-time material pricing across all major cities",
    "Instant supplier matching with verified credentials",
    "Quality certifications and compliance verification",
    "Delivery scheduling and logistics coordination",
    "Technical specifications and material recommendations",
    "Market trend analysis and procurement insights",
    "Bulk purchase negotiations and discount optimization",
    "Project material estimation and planning assistance"
  ];

  const testimonials = [
    {
      name: "राज कुमार",
      location: "Delhi",
      text: "Bani ने मेरी TMT steel की procurement में बहुत मदद की। हिंदी में बात करके मुझे सभी जानकारी मिली।",
      rating: 5
    },
    {
      name: "Priya Sharma",
      location: "Mumbai",
      text: "Amazing AI assistant! Got competitive cement prices from 5 suppliers within 30 minutes. Highly recommended!",
      rating: 5
    },
    {
      name: "அருண் குமார்",
      location: "Chennai", 
      text: "பானி எனக்கு தமிழில் பேசி construction materials கிடைக்க உதவியது. மிகவும் பயனுள்ளது!",
      rating: 5
    }
  ];

  // Rotate stats every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [stats.length]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <SEOHead
        title="Bani - Advanced AI Procurement Assistant | NaayaConstruction"
        description="Meet Bani, your multilingual AI procurement expert. Get instant help with construction materials in 8+ languages. Advanced AI, verified suppliers, real-time pricing."
        keywords="AI procurement assistant, multilingual chatbot, construction materials, voice AI, Bani AI, TMT steel prices, cement suppliers, construction procurement, Hindi AI assistant"
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-subtle" />
          
        

          <div className="relative container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <div className="inline-flex items-center space-x-2 glass-morphism border-primary/30 rounded-full px-4 py-2 text-primary font-medium backdrop-blur-xl">
                    <Sparkles className="h-4 w-4" />
                    <span>Advanced AI Procurement Assistant</span>
                  </div>
                </motion.div>

                <motion.h1
                  className="text-5xl lg:text-7xl font-bold text-foreground leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 1 }}
                >
                  Meet 
                   <span className='bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent'>  Bani</span>
                </motion.h1>

                <motion.p
                  className="text-xl text-muted-foreground max-w-2xl leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  Your multilingual AI procurement expert. Get instant construction material 
                  sourcing assistance in 8+ languages with advanced AI intelligence, 
                  real-time pricing, and verified supplier networks.
                </motion.p>
                
                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  <Button
                    size="lg"
                    onClick={() => setIsChatOpen(true)}
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:scale-105 transition-all duration-300 text-lg px-8 py-4 shadow-ai-glow"
                  >
                    <Mic className="h-5 w-5 mr-2" />
                    Start Voice Chat
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => setIsChatOpen(true)}
                    className="glass-morphism border-white/30 text-foreground hover:bg-white/10 text-lg px-8 py-4 "
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Text Chat
                  </Button>
                </motion.div>

                {/* Animated Stats */}
                <motion.div
                  className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      className={`text-center p-4 glass-card transition-all duration-500 ${
                        currentStat === index ? 'shadow-ai-glow scale-105' : ''
                      }`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <stat.icon className="h-6 w-6 mx-auto mb-2 text-primary" />
                      <div className="text-2xl font-bold text-foreground">{stat.number}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right Content - Enhanced AI Visualization */}
         <motion.div 
  className="space-y-6"
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.4, duration: 1 }}
>
  <GlassCard variant="" className="p-6 sm:p-8 text-center relative overflow-hidden">
    {/* Animated background pattern */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute inset-0 bg-gradient-ai" />
      <motion.div
        className="absolute inset-0"
        animate={{ 
          background: [
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </div>

    <div className="relative z-10">
      {/* Centered Avatar */}
      <div className="flex justify-center mb-6">
        <AIAvatar 
          size="xl" 
          isOnline={true}
          className="w-28 h-28 sm:w-32 sm:h-32" 
        />
      </div>

      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Bani is Online</h3>
      <p className="text-sm sm:text-base text-muted-foreground mb-6">
        Advanced AI • Multilingual • Always Learning
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
        <div className="flex items-center justify-center space-x-2 glass-morphism p-3 rounded-lg">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-foreground">Connected</span>
        </div>
        <div className="flex items-center justify-center space-x-2 glass-morphism p-3 rounded-lg">
          <Volume2 className="h-4 w-4 text-primary" />
          <span className="text-foreground">Voice Ready</span>
        </div>
        <div className="flex items-center justify-center space-x-2 glass-morphism p-3 rounded-lg">
          <Languages className="h-4 w-4 text-primary" />
          <span className="text-foreground">8+ Languages</span>
        </div>
        <div className="flex items-center justify-center space-x-2 glass-morphism p-3 rounded-lg">
          <TrendingUp className="h-4 w-4 text-primary" />
          <span className="text-foreground">Live Data</span>
        </div>
      </div>
    </div>
  </GlassCard>
</motion.div>

            </div>
          </div>
        </section>

        {/* Enhanced Features Section */}
       

        {/* Capabilities Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Advanced AI Capabilities
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Bani combines cutting-edge AI with deep procurement expertise to deliver 
                  unmatched assistance:
                </p>
                
                <div className="space-y-4">
                  {capabilities.map((capability, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-3 p-3 glass-morphism rounded-lg hover:bg-white/10 transition-all duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">{capability}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <GlassCard variant="premium" className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-ai rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Get Started Instantly</h3>
                    <p className="text-muted-foreground">No signup required - start chatting immediately</p>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { icon: Users, text: "Connect with 500+ verified suppliers across India" },
                      { icon: Package, text: "Access comprehensive material database" },
                      { icon: Globe, text: "Pan-India coverage with local expertise" },
                      { icon: TrendingUp, text: "Real-time market insights and pricing" }
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-center space-x-3 p-3 bg-secondary/20 rounded-lg"
                        whileHover={{ scale: 1.02 }}
                      >
                        <item.icon className="h-5 w-5 text-primary" />
                        <span className="text-sm text-foreground">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-foreground mb-6">
                What Our Users Say
              </h2>
              <p className="text-xl text-muted-foreground">
                Real feedback from construction professionals using Bani
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <GlassCard className="p-6 h-full">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-500 text-lg">★</span>
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-ai rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-ai relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-accent/95" />
          
          <div className="relative container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                Ready to Experience Bani?
              </h2>
              <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                Join thousands of construction professionals who trust Bani for their 
                procurement needs. Start your conversation now and experience the future.
              </p>
              <Button 
                size="lg"
                onClick={() => setIsChatOpen(true)}
                className="bg-white text-primary hover:bg-white/90 text-xl px-12 py-6 transform hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                <Mic className="h-6 w-6 mr-2" />
                Start Talking to Bani
                <ArrowRight className="h-6 w-6 ml-2" />
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
      
      <EnhancedBaaniChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      {/* <EnhancedVoiceAIButton /> */}
    </>
  );
};

export default Bani;