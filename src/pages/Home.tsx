import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { TrendingUp, Users, Package, Clock, Mic, BarChart3, Zap, Shield, Globe, Award, ArrowRight, Play } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import SEOHead from "@/components/SEOHead";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import HowItWorks from "@/components/HowItWorks";
import MarketIntelligence from "@/components/MarketIntelligence";
import CaseStudies from "@/components/CaseStudies";
import heroImage from "../assets/hero-construction.jpg";
import warehouseImage from "../assets/materials-warehouse.jpg";

const Home = () => {
  const statsRef = useRef(null);
  const featuresRef = useRef(null);
  const dashboardRef = useRef(null);
  const servicesRef = useRef(null);

  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const isFeaturesInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const isDashboardInView = useInView(dashboardRef, { once: true, margin: "-100px" });
  const isServicesInView = useInView(servicesRef, { once: true, margin: "-100px" });

  // Dynamic stats based on current time
  const generateDynamicStats = () => {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const day = now.getDate();
    
    const baseMultiplier = 1 + Math.sin((hour + minute / 60) * Math.PI / 12) * 0.15;
    const dayMultiplier = 1 + Math.sin(day * Math.PI / 15) * 0.08;
    
    return [
      { 
        label: "Total Orders", 
        value: Math.round(1234 * baseMultiplier * dayMultiplier), 
        change: "+2.4%", 
        icon: Package, 
        positive: true 
      },
      { 
        label: "Pending Approvals", 
        value: Math.round(28 * (2 - baseMultiplier) * dayMultiplier), 
        change: "-3.2%", 
        icon: Clock, 
        positive: false 
      },
      { 
        label: "Suppliers", 
        value: Math.round(87 * (1 + dayMultiplier * 0.1)), 
        change: "+5.1%", 
        icon: Users, 
        positive: true 
      },
      { 
        label: "Avg. Delivery Time", 
        value: Math.round(4.2 * (2 - baseMultiplier) * 10) / 10, 
        unit: "days", 
        change: "-1.2%", 
        icon: TrendingUp, 
        positive: true 
      },
    ];
  };

  const stats = generateDynamicStats();

  const features = [
    {
      icon: "500+",
      title: "Suppliers Network",
      description: "Trusted partners across the country",
      detail: "Verified suppliers in TMT, Cement, Steel & more",
      bgGradient: "from-primary/20 to-accent/20"
    },
    {
      icon: "24/7",
      title: "AI Support",
      description: "Round-the-clock intelligent assistance",
      detail: "Voice AI and chat support available",
      bgGradient: "from-accent/20 to-primary-glow/20"
    },
    {
      icon: "98%",
      title: "Delivery Rate",
      description: "On-time delivery guarantee",
      detail: "Real-time tracking and updates",
      bgGradient: "from-primary-glow/20 to-primary/20"
    }
  ];

  const suppliers = [
    "Ceigall India", "VRC Constructions", "RCC Developers Pvt Ltd", "HMM Infra",
    "N S Associates", "Kaluwala", "Himalayan Infra", "Rashmi Metals",
    "JSW Steel", "Tata Steel", "MSP Steel", "Ultratech Cement", "ACC Limited"
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get quotes in under 60 seconds with our AI-powered matching system"
    },
    {
      icon: Shield,
      title: "100% Verified",
      description: "All suppliers are thoroughly verified and quality-assured"
    },
    {
      icon: Globe,
      title: "Pan-India Coverage",
      description: "Access materials from suppliers across 20+ states in India"
    },
    {
      icon: Award,
      title: "Best Prices",
      description: "Competitive pricing with transparent cost breakdowns"
    }
  ];

  const productCategories = [
    {
      title: "TMT & Steel",
      description: "High-grade TMT bars, structural steel, and reinforcement materials",
      icon: "🏗️",
      items: ["TMT Bars", "Structural Steel", "Mild Steel", "Steel Pipes"],
      gradient: "from-primary/20 to-accent/20"
    },
   
    {
      title: "Construction Materials",
      description: "Complete range of construction essentials",
      icon: "🏢",
      items: ["Cement", "Aggregates", "Bricks", "Tiles"],
      gradient: "from-primary-glow/20 to-primary/20"
    },
    {
      title: "Electrical Materials",
      description: "Quality electrical components and systems",
      icon: "🔌",
      items: ["Cables", "Switches", "MCBs", "Panels"],
      gradient: "from-primary/20 to-accent/20"
    },
     {
      title: "Stainless Steel",
      description: "Premium stainless steel in various grades and forms",
      icon: "⚡",
      items: ["SS 304 Sheets", "SS 316 Pipes", "SS Bars", "SS Coils"],
      gradient: "from-accent/20 to-primary-glow/20"
    },
  ];

  // Dynamic real-time metrics that change
  const generateRealtimeMetrics = () => {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    
    const activeMultiplier = 1 + Math.sin((hour + minute / 30) * Math.PI / 6) * 0.2;
    
    return [
      { label: "Active Quotes", value: Math.round(124 * activeMultiplier), unit: "", trend: "up" },
      { label: "Processing", value: Math.round(47 * activeMultiplier), unit: "", trend: "up" },
      { label: "Completed Today", value: Math.round(89 * (1 + hour / 24)), unit: "", trend: "up" },
      { label: "Avg Response", value: Math.round(23 * (2 - activeMultiplier)), unit: "min", trend: "down" }
    ];
  };

  const realtimeMetrics = generateRealtimeMetrics();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "NaayaConstruction",
    "description": "AI-powered construction material procurement platform",
    "url": "https://naayaconstruction.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://naayaconstruction.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <>
      <SEOHead
        title="NaayaConstruction - AI-Powered Construction Material Procurement Platform"
        description="Revolutionize your construction material sourcing with NaayaConstruction's AI-powered platform. Get instant quotes from 500+ verified suppliers across India. TMT, Steel, Cement & more."
        keywords="construction materials, AI procurement, B2B marketplace, TMT steel, construction supplies, material sourcing, building materials, construction platform"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-background">
        {/* Enhanced Hero Section */}
             <section className="relative overflow-hidden py-20 lg:py-32">
          {/* Background with Parallax Effect */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url(${heroImage})` }}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
          
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80" />
          
          {/* Floating Elements */}
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
            animate={{ 
              x: [0, 50, 0], 
              y: [0, 30, 0],
              scale: [1, 1.1, 1] 
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl"
            animate={{ 
              x: [0, -30, 0], 
              y: [0, -50, 0],
              scale: [1, 0.9, 1] 
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                  >
                    <div className="inline-flex items-center space-x-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 text-primary font-medium">
                      <Zap className="h-4 w-4" />
                      <span>Trusted AI-Powered Platform</span>
                    </div>
                  </motion.div>

                  <motion.h1
                    className="text-4xl lg:text-6xl font-bold text-white leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 1 }}
                  >
                    Raw Material
                    <br />
                    <span className="bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">
                      Procurement
                    </span>
                  </motion.h1>

                  <motion.p
                    className="text-xl text-white/80 max-w-lg leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                  >
                    AI-powered Procurement platform revolutionizing the way businesses source raw material like TMT, Structures, 
                    Flats & Bitumen. Get instant quotes, verify suppliers, and track deliveries in real-time.
                  </motion.p>
                </div>
                
               <motion.div
  className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.7, duration: 0.8 }}
>
  {/* Submit RFQ */}
  <Button
    size="lg"
    className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-red-500 hover:scale-105 transition-all duration-300 text-lg px-6 py-3"
  >
    <Link to="/products" className="flex items-center justify-center space-x-2">
      <span>Submit RFQ</span>
      <ArrowRight className="h-5 w-5" />
    </Link>
  </Button>

  {/* Voice AI */}
  <Link to="/bani" className="w-full sm:w-auto">
    <Button
      variant="outline"
      size="lg"
      className="w-full sm:w-auto glass-morphism border-white/30 text-white hover:bg-white/10 text-lg px-6 py-3"
    >
      <Mic className="h-5 w-5 mr-2" />
      Voice AI
    </Button>
  </Link>
</motion.div>


                {/* Trust Indicators */}
                <motion.div
                  className="flex items-center space-x-8 pt-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">
                      <AnimatedCounter end={500} suffix="+" />
                    </div>
                    <div className="text-sm text-white/60">Suppliers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">
                      <AnimatedCounter end={98} suffix="%" />
                    </div>
                    <div className="text-sm text-white/60">On-time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">
                      <AnimatedCounter end={20} suffix="+" />
                    </div>
                    <div className="text-sm text-white/60">States</div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Content - Enhanced Analytics Dashboard */}
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
                ref={dashboardRef}
              >
                {/* Main Analytics Card */}
                <GlassCard variant="premium" className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">Live Analytics</h3>
                      <p className="text-sm text-muted-foreground">Real-time Naayaconstruction insights</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-xs text-green-500 font-medium">LIVE</span>
                    </div>
                  </div>
                  
                  {/* Live Metrics Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {realtimeMetrics.map((metric, index) => (
                      <motion.div
                        key={index}
                        className="glass-morphism p-4 rounded-lg"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isDashboardInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-muted-foreground">{metric.label}</span>
                          <div className={`w-2 h-2 rounded-full ${
                            metric.trend === 'up' ? 'bg-green-500' : 'bg-blue-500'
                          }`} />
                        </div>
                        <div className="text-2xl font-bold text-foreground">
                          <AnimatedCounter 
                            end={metric.value} 
                            duration={0}
                            suffix={metric.unit}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Chart Visualization */}
                  <div className="h-32 bg-gradient-secondary rounded-lg flex items-center justify-center p-4 relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20"
                      animate={{
                        x: ['-100%', '100%']
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    <BarChart3 className="h-16 w-16 text-primary/50 relative z-10" />
                    <div className="absolute bottom-2 right-2 text-xs text-muted-foreground">
                      Price Trends ↗ +2.4%
                    </div>
                  </div>
                </GlassCard>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isDashboardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                    >
                      <GlassCard variant="interactive" className="p-4 group">
                        <div className="flex items-center justify-between mb-3">
                          <stat.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                          <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                            stat.positive ? 'text-green-500 bg-green-500/10' : 'text-red-500 bg-red-500/10'
                          }`}>
                            {stat.change}
                          </span>
                        </div>
                        <div className="space-y-1">
                          <p className="text-2xl font-bold text-foreground">
                            <AnimatedCounter 
                              end={stat.value} 
                              decimals={stat.label.includes('Time') ? 1 : 0}
                              suffix={stat.unit || ''}
                            />
                          </p>
                          <p className="text-xs text-muted-foreground">{stat.label}</p>
                        </div>
                      </GlassCard>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="py-12  bg-gradient sm:py-16 lg:py-24">
  <div className="container mx-auto px-3 sm:px-4">
    {/* Section Heading */}
    <motion.div
      className="text-center mb-10 sm:mb-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Our Key Offerings        </span>
      </h2>
      <div className="w-16 sm:w-32 h-1 bg-gradient-primary mx-auto rounded-full mb-4 sm:mb-6" />
      <p className="text-sm sm:text-lg lg:text-xl text-muted-foreground max-w-2xl sm:max-w-3xl mx-auto">
        Transform your business with AI-powered procurement solutions designed
        for speed, intelligence, and always-on visibility.
      </p>
    </motion.div>

    {/* Solutions Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
      {/* Card Template */}
      {[
        {
          icon: "🌟",
          label: "Smart Deal Flow",
          title: "Supplier Matching Agent",
          desc: "Turn procurement chaos into clockwork. Smart AI handles negotiations, paperwork, and payments – while you focus on scaling your business.",
          stat: "2X",
          statLabel: "Accelerated Deal Velocity",
        },
        {
          icon: "💹",
          label: "Market Intelligence",
          title: "Pricing Intelligence Agent",
          desc: "Never overpay again. Real-time price intelligence across markets, with AI that spots the best deals before your competitors do.",
          stat: "12%",
          statLabel: "Average Cost Optimization",
        },
        {
          icon: "🛡️",
          label: "Risk Management",
          title: "Risk Management Agent",
          desc: "Minimize procurement risks with AI-powered monitoring of suppliers, compliance checks, and predictive alerts for disruptions.",
          stat: "99.9%",
          statLabel: "Risk-Free Operations",
        },
        {
          icon: "🔗",
          label: "Supply Chain Intelligence",
          title: "Supply Chain Agent",
          desc: "Your procurement command center. Real-time tracking, instant insights, and automated vendor communications – all in one place.",
          stat: "24/7",
          statLabel: "Always-On Supply Intelligence",
        },
      ].map((card, i) => (
       <GlassCard
  key={i}
  className="group flex flex-col justify-between p-5 sm:p-6 lg:p-8 rounded-2xl 
  border border-white/10 shadow-md shadow-black/20 
  hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300 ease-out
  h-auto sm:h-[420px]"
>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="p-2 bg-primary/10 rounded-lg text-primary text-lg">
                {card.icon}
              </span>
              <span className="text-xs sm:text-sm font-medium text-muted-foreground">
                {card.label}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-3 sm:mb-4">
              {card.title}
            </h3>
            <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed pt-1 sm:pt-2">
              {card.desc}
            </p>
          </div>
          <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-white/10">
            <div className="text-primary font-bold text-lg sm:text-2xl">
              {card.stat}
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">
              {card.statLabel}
            </p>
          </div>
        </GlassCard>
      ))}
    </div>
  </div>
</section>
 <section className="py-20 bg-gradient-subtle" ref={servicesRef}>
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Our Products
                </span>
              </h2>
              <div className="w-32 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive range of construction materials from verified suppliers across India
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate={isServicesInView ? "visible" : "hidden"}
            >
              {productCategories.map((category, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <GlassCard 
                    variant="premium" 
                    className={`p-6 h-full group bg-gradient-to-br ${category.gradient} hover:shadow-elevation transition-all duration-500`}
                  >
                    <div className="text-center">
                      <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">{category.title}</h3>
                      <p className="text-muted-foreground mb-4 text-sm">{category.description}</p>
                      <div className="space-y-1">
                       
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>             


        <HowItWorks />




        {/* Enhanced Features Section */}
        <section className="py-20 bg-gradient-subtle" ref={featuresRef}>
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              animate={isFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Why Choose NaayaConstruction?
                </span>
              </h2>
              <div className="w-32 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Experience the future of construction material procurement with our cutting-edge platform
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
              variants={containerVariants}
              initial="hidden"
              animate={isFeaturesInView ? "visible" : "hidden"}
            >
              {features.map((feature, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <GlassCard 
                    variant="premium" 
                    className={`text-center p-8 h-full group bg-gradient-to-br ${feature.bgGradient} hover:shadow-elevation transition-all duration-500`}
                  >
                    <div className="text-5xl font-bold text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground mb-4">{feature.description}</p>
                    <p className="text-sm text-primary font-medium">{feature.detail}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>

            {/* Benefits Grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate={isFeaturesInView ? "visible" : "hidden"}
            >
              {benefits.map((benefit, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <GlassCard variant="interactive" className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Enhanced Suppliers Section with Carousel */}
        <section className="py-20" ref={statsRef}>
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-foreground mb-6">Trusted by Industry Leaders</h2>
              <div className="w-32 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Join our network of verified suppliers and grow your business with reliable partnerships across India.
              </p>
            </motion.div>

            {/* Scrolling Supplier Names - Forward */}
            <div className="relative overflow-hidden mb-8">
              <div className="flex animate-scroll space-x-8">
                {[...suppliers, ...suppliers].map((supplier, index) => (
                  <motion.div
                    key={index}
                    className="flex-shrink-0 px-6 py-4 glass-morphism backdrop-blur-xl rounded-xl border border-glass-border group hover:border-primary/50 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <span className="text-foreground font-medium whitespace-nowrap group-hover:text-primary transition-colors duration-300">
                      {supplier}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Scrolling Supplier Names - Reverse */}
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll-reverse space-x-8">
                {[...suppliers.slice().reverse(), ...suppliers.slice().reverse()].map((supplier, index) => (
                  <motion.div
                    key={index}
                    className="flex-shrink-0 px-6 py-4 glass-morphism backdrop-blur-xl rounded-xl border border-glass-border group hover:border-accent/50 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <span className="text-foreground font-medium whitespace-nowrap group-hover:text-accent transition-colors duration-300">
                      {supplier}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories Section */}
       

        {/* How It Works Section */}
        

        {/* Market Intelligence Section */}
        {/* <MarketIntelligence /> */}

        {/* Case Studies Section */}
        {/* <CaseStudies /> */}

        {/* Testimonials Section */}

        {/* FAQ Section */}
        <FAQ />
        <Testimonials />

        {/* Enhanced CTA Section */}
        <section className="py-20 bg-gradient-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-accent/95" />
          
          {/* Floating Elements */}
          <motion.div
            className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
            animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl"
            animate={{ x: [0, -80, 0], y: [0, -60, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-8">
                Ready to Transform Your Procurement?
              </h2>
              <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-12 max-w-4xl mx-auto leading-relaxed">
                Start sourcing materials smarter with our AI-powered platform. Get instant quotes, 
                track deliveries, and connect with verified suppliers across India.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="bg-white text-primary hover:bg-white/90 text-xl px-12 py-6 transform hover:scale-105 transition-all duration-300"
                >
                                      <Link to="/products" className="flex items-center space-x-2">

                  <div className="flex items-center space-x-2">
                    <span>Get Started Today</span>
                    <ArrowRight className="h-6 w-6" />
                  </div>
                  </Link>
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 text-xl px-12 py-6 backdrop-blur-sm"
                >
                                      <Link to="/about" className="flex items-center space-x-2">

                  <div className="flex items-center space-x-2">
                    <span>Learn More</span>
                    <Play className="h-6 w-6" />
                  </div>
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;