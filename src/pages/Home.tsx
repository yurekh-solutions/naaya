import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { TrendingUp, Users, Package, Clock, Mic, BarChart3, Zap, Shield, Globe, Award, ArrowRight, Play } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import SEOHead from "@/components/SEOHead";
import heroImage from "../assets/hero-construction.jpg";
import warehouseImage from "../assets/materials-warehouse.jpg";

const Home = () => {
  const statsRef = useRef(null);
  const featuresRef = useRef(null);
  const dashboardRef = useRef(null);
  
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const isFeaturesInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const isDashboardInView = useInView(dashboardRef, { once: true, margin: "-100px" });

  const stats = [
    { label: "Total Orders", value: 1234, change: "+2.4%", icon: Package, positive: true },
    { label: "Pending Approvals", value: 28, change: "-3.2%", icon: Clock, positive: false },
    { label: "Suppliers", value: 87, change: "+5.1%", icon: Users, positive: true },
    { label: "Avg. Delivery Time", value: 4.2, unit: "days", change: "-1.2%", icon: TrendingUp, positive: true },
  ];

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

  const realtimeMetrics = [
    { label: "Active Quotes", value: 124, unit: "", trend: "up" },
    { label: "Processing", value: 47, unit: "", trend: "up" },
    { label: "Completed Today", value: 89, unit: "", trend: "up" },
    { label: "Avg Response", value: 23, unit: "min", trend: "down" }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "NaayaConstruction",
    "description": "AI-powered construction material Naayaconstruction platform",
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
        title="NaayaConstruction - AI-Powered Construction Material Naayaconstruction Platform"
        description="Revolutionize your construction material sourcing with NaayaConstruction's AI-powered platform. Get instant quotes from 500+ verified suppliers across India. TMT, Steel, Cement & more."
        keywords="construction materials, AI Naayaconstruction, B2B marketplace, TMT steel, construction supplies, material sourcing, building materials, construction platform"
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
                      Naayaconstruction
                    </span>
                  </motion.h1>

                  <motion.p
                    className="text-xl text-white/80 max-w-lg leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                  >
                    AI-powered Naayaconstruction platform revolutionizing the way businesses source TMT, Structures, 
                    Flats & Bitumen. Get instant quotes, verify suppliers, and track deliveries in real-time.
                  </motion.p>
                </div>
                
                <motion.div
                  className="flex flex-col sm:flex-row gap-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  <Button 
                    size="lg" 
                    className="bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105 text-lg px-8 py-4"
                  >
                    <Link to="/products" className="flex items-center space-x-2">
                      <span>Submit RFQ</span>
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="glass-morphism border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4"
                  >
                    <Mic className="h-5 w-5 mr-2" />
                    Voice AI
                  </Button>
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
                            duration={2}
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

        {/* Enhanced Features Section */}
        <section className="py-20 bg-white" ref={featuresRef}>
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
                Experience the future of construction material Naayaconstruction with our cutting-edge platform
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

        {/* Demo Video Section */}
        <section className="py-20 bg-gradient-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-6">See It In Action</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Watch how NaayaConstruction transforms traditional Naayaconstruction processes
              </p>
            </div>

            <motion.div
              className="relative max-w-4xl mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <GlassCard variant="premium" className="relative overflow-hidden">
                <div 
                  className="aspect-video bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${warehouseImage})` }}
                >
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <motion.button
                      className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play className="h-8 w-8 text-white ml-1" />
                    </motion.button>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </section>

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
                Ready to Transform Your Naayaconstruction?
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
                    <span>Get Started Today</span>
                    <ArrowRight className="h-6 w-6" />
                  </Link>
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 text-xl px-12 py-6 backdrop-blur-sm"
                >
                  <Link to="/about" className="flex items-center space-x-2">
                    <span>Learn More</span>
                    <Play className="h-6 w-6" />
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