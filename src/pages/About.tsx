import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Zap, Users, Globe, Award, Target, TrendingUp, Building, Download, Users2, Star, CheckCircle, Truck, DollarSign, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimatedCounter from "@/components/AnimatedCounter";
import SEOHead from "@/components/SEOHead";
import ImageCarousel from "@/components/ImageCarousel";
import materialWarehouse from "../assets/materials-warehouse.jpg";
import officeBuilding from "../assets/office-building.jpg";
import constructionSite from "../assets/construction-site.jpg";
import aiDashboard from "../assets/ai-dashboard.jpg";
import naayatradeLogo from '../assets/yuvi.png';

const About = () => {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const valuesRef = useRef(null);
  const achievementsRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const naayatradeRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const isValuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const isAchievementsInView = useInView(achievementsRef, { once: true, margin: "-100px" });
  const isAboutSectionInView = useInView(aboutSectionRef, { once: true, margin: "-100px" });
  const isNaayatradeInView = useInView(naayatradeRef, { once: true, margin: "-100px" });

  const carouselImages = [materialWarehouse, constructionSite, aiDashboard, officeBuilding];

  const values = [
    {
      icon: Shield,
      title: "Trust & Reliability",
      description: "Building long-term partnerships with verified suppliers and transparent processes.",
      stats: "99.8% reliability score"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Leveraging AI and technology to revolutionize traditional construction methods.",
      stats: "50% faster processing"
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Putting our customers' needs at the center of everything we do.",
      stats: "98% satisfaction rate"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connecting businesses across regions with the best material suppliers.",
      stats: "20+ states covered"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Ensuring every product meets the highest quality and safety standards.",
      stats: "ISO certified process"
    },
    {
      icon: Target,
      title: "Efficiency",
      description: "Streamlining construction processes to save time and reduce costs.",
      stats: "40% cost reduction"
    }
  ];

  const stats = [
    { 
      value: 500, 
      label: "Suppliers Network", 
      description: "Verified and trusted partners",
      icon: Building,
      prefix: "",
      suffix: "+"
    },
    { 
      value: 1000, 
      label: "Successful Deliveries", 
      description: "On-time and quality assured",
      icon: Truck,
      prefix: "",
      suffix: "+"
    },
    { 
      value: 98, 
      label: "Customer Satisfaction", 
      description: "Based on feedback surveys",
      icon: Star,
      prefix: "",
      suffix: "%"
    },
    { 
      value: 20, 
      label: "States Coverage", 
      description: "Pan-India presence",
      icon: Globe,
      prefix: "",
      suffix: "+"
    },
    {
      value: 2,
      label: "Million ARR",
      description: "Annual recurring revenue",
      icon: DollarSign,
      prefix: "$",
      suffix: "M"
    },
    {
      value: 200,
      label: "CAGR Growth",
      description: "Compound annual growth rate",
      icon: TrendingUp,
      prefix: "",
      suffix: "%"
    }
  ];

  const achievements = [
    {
      title: "Industry Recognition",
      items: [
        "Best Procurement Platform 2024",
        "AI Innovation Award",
        "Customer Excellence Award"
      ]
    },
    {
      title: "Certifications",
      items: [
        "ISO 9001:2015 Quality Management",
        "ISO 27001 Information Security",
        "GDPR Compliance Certified"
      ]
    },
    {
      title: "Partnerships",
      items: [
        "Strategic Alliance with Lalani Group",
        "Technology Partnership with NaayaAI",
        "Banking Partnership with HDFC"
      ]
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NaayaConstruction",
    "description": "AI-powered construction material procurement platform revolutionizing B2B raw materials sourcing",
    "url": "https://naayaconstruction.com",
    "logo": "https://naayaconstruction.com/logo.png",
    "foundingDate": "2023-07-01",
    "founders": [
      {
        "@type": "Person",
        "name": "Founder Name"
      }
    ],
    "numberOfEmployees": "50-100",
    "industry": "Construction Technology",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "Maharashtra",
      "addressLocality": "Mumbai"
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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <SEOHead
        title="About NaayaConstruction - AI-Powered Procurement Platform"
        description="Learn about NaayaConstruction's mission to revolutionize Procurement with AI technology. Trusted by 1000+ businesses across 20+ states in India."
        keywords="about naayaconstruction, construction materials, AI procurement, B2B marketplace, construction technology, material suppliers, building materials platform"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-background overflow-hidden">
        {/* Hero Section */}
        <section ref={heroRef} className="relative py-16 lg:py-24 min-h-[700px] overflow-hidden">
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${officeBuilding})` }}
            initial={{ scale: 1.2, opacity: 0}}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/20" />

          {/* Floating Elements */}
          <motion.div
            className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-primary/20 blur-xl"
            animate={{ 
              y: [0, 50, 0], 
              x: [0, 30, 0],
              opacity: [0.3, 0.6, 0.3] 
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-accent/15 blur-3xl"
            animate={{ 
              y: [0, -40, 0], 
              x: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2] 
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Content */}
          <div className="relative container mx-auto px-4 text-center h-full flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Badge 
                className="mb-6 bg-primary/20 text-primary border-primary/30 backdrop-blur-sm text-sm px-4 py-2"
                variant="outline"
              >
                Revolutionizing Procurement 
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight"
              initial={{ y: 40, opacity: 0 }}
              animate={isHeroInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">
                About NaayaConstruction
              </span>
            </motion.h1>

            <motion.p
              className="text-lg lg:text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={isHeroInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            >
              We're revolutionizing the construction industry with AI-powered
              solutions, making it easier for businesses to source quality materials efficiently,
              transparently, and cost-effectively across the world.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isHeroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:scale-105 transition-all duration-300 text-lg px-6 py-3"
              >
                <Users2 className="h-5 w-5 mr-2" />
                <span>Join Our Network</span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="glass-morphism border-white/30 text-white hover:bg-white/10 text-lg px-6 py-3"
              >
                <Building className="h-5 w-5 mr-2" />
                <span>Explore Platform</span>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* About Section with Carousel */}
        <section ref={aboutSectionRef} className="py-16 lg:py-20 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Image Carousel */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -100 }}
                animate={isAboutSectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <div className="relative transform-3d">
                  <div className="p-2">
                    <ImageCarousel 
                      images={carouselImages}
                      className="h-80 lg:h-96 rounded-xl"
                      autoPlay={true}
                      interval={5000}
                    />
                  </div>
                </div>
              </motion.div>

              {/* Right Side - Content */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 100 }}
                animate={isAboutSectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              >
                <motion.h2
                  className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent"
                  initial={{ y: 40, opacity: 0 }}
                  animate={isAboutSectionInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  About NaayaConstruction
                </motion.h2>

                <motion.p
                  className="text-base lg:text-lg text-muted-foreground leading-relaxed"
                  initial={{ y: 30, opacity: 0 }}
                  animate={isAboutSectionInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                  transition={{ delay: 0.7, duration: 1 }}
                >
                  Naaya Construction is India's next-generation AI-powered procurement platform for the construction industry, backed by the strength of Naaya Group. We are revolutionizing the way contractors, builders, and enterprises source their construction needs by making procurement seamless, digital-first, and cost-effective.
                </motion.p>

                <motion.p
                  className="text-base lg:text-lg text-muted-foreground leading-relaxed"
                  initial={{ y: 30, opacity: 0 }}
                  animate={isAboutSectionInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                  transition={{ delay: 0.9, duration: 1 }}
                >
                  Our team is committed to transforming the procurement ecosystem with a focus on innovation, technology, and sustainability. More than just a procurement platform, Naaya Construction delivers an integrated ecosystem — connecting buyers and suppliers, offering real-time sourcing intelligence, and ensuring end-to-end support across projects.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isAboutSectionInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ delay: 1.1, duration: 0.8 }}
                >
                  <Button
                    size="lg"
                    className="text-lg px-6 py-3 font-semibold bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg hover:scale-105 hover:shadow-glow transition-all duration-300"
                    onClick={() => {
                      const link = document.createElement("a");
                      link.href = "#";
                      link.download = "NaayaConstruction-Brochure.pdf";
                      link.click();
                    }}
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Download Brochure
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="lg"
                    className="glass-morphism border-primary/30 text-primary hover:bg-primary/10 text-lg px-6 py-3"
                  >
                    <Users2 className="h-5 w-5 mr-2" />
                    Contact Us
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Naayatrade Section */}
        <section ref={naayatradeRef} className="py-16 lg:py-20 bg-gradient-subtle overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Content */}
              <motion.div
                className="space-y-6 order-2 lg:order-1"
                initial={{ opacity: 0, x: -100 }}
                animate={isNaayatradeInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <motion.h2
                  className="text-3xl lg:text-4xl font-bold mb-4"
                  initial={{ y: 40, opacity: 0 }}
                  animate={isNaayatradeInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  <span className="bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">
                    NaayaConstruction, a proud division of Naayatrade
                  </span>
                </motion.h2>

                <motion.p
                  className="text-base lg:text-lg text-muted-foreground leading-relaxed"
                  initial={{ y: 30, opacity: 0 }}
                  animate={isNaayatradeInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                  transition={{ delay: 0.4, duration: 1 }}
                >
                  NaayaConstruction proudly operates as part of Naayatrade, the world's emerging powerhouse in global wholesale and digital trade. This association reflects our steadfast commitment to delivering the same excellence, innovation, and forward-thinking approach that define Naayatrade.
                </motion.p>

                <motion.p
                  className="text-base lg:text-lg text-muted-foreground leading-relaxed"
                  initial={{ y: 30, opacity: 0 }}
                  animate={isNaayatradeInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                  transition={{ delay: 0.6, duration: 1 }}
                >
                  By drawing on Naayatrade's expertise in building scalable marketplaces, supply chain networks, and cutting-edge digital ecosystems, NaayaConstruction provides unmatched value to contractors, builders, and enterprises.
                </motion.p>

                <motion.div
                  className="pt-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isNaayatradeInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="glass-morphism border-primary/30 text-primary hover:bg-primary/10 text-lg px-6 py-3 group"
                                        onClick={() => window.open('https://naayatrade.com/', '_blank')}

                  >
                    <ExternalLink className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                    More Details
                  </Button>
                </motion.div>
              </motion.div>

              {/* Right Side - Naayatrade Logo and Branding */}
              <motion.div
                className="relative order-1 lg:order-2"
                initial={{ opacity: 0, x: 100 }}
                animate={isNaayatradeInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              >
                <GlassCard variant="premium" className="p-8 lg:p-12 text-center">
                  <motion.div
                    className="relative mb-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-32 h-32 lg:w-40 lg:h-40 mx-auto mb-6 relative">
                      <img
                        src={naayatradeLogo}
                        alt="Naayatrade Logo"
                        className="w-full h-full object-contain animate-float-gentle"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl animate-glow-pulse" />
                    </div>
                  </motion.div>
                  
                  <motion.h3
                    className="text-2xl lg:text-3xl font-bold mb-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={isNaayatradeInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                  >
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      NAAYATRADE
                    </span>
                  </motion.h3>
                  
                  <motion.p
                    className="text-muted-foreground text-sm lg:text-base mb-6"
                    initial={{ y: 20, opacity: 0 }}
                    animate={isNaayatradeInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                  >
                    Global Wholesale & Digital Trade Platform
                  </motion.p>

                  <motion.div
                    className="grid grid-cols-2 gap-4 text-center"
                    initial={{ y: 20, opacity: 0 }}
                    animate={isNaayatradeInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ delay: 1.4, duration: 0.8 }}
                  >
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-primary">
                        <AnimatedCounter end={50} suffix="+" />
                      </div>
                      <p className="text-xs text-muted-foreground">Countries</p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-accent">
                        <AnimatedCounter end={10000} suffix="+" />
                      </div>
                      <p className="text-xs text-muted-foreground">Partners</p>
                    </div>
                  </motion.div>
                </GlassCard>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-subtle" ref={statsRef}>
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 40 }}
              animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Our Impact in Numbers
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4" />
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See how we're transforming the construction material landscape
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate={isStatsInView ? "visible" : "hidden"}
            >
              {stats.map((stat, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <GlassCard 
                    variant="premium" 
                    className="p-6 text-center group hover:scale-105 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                      <AnimatedCounter
                        end={stat.value}
                        duration={2.5}
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {stat.label}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {stat.description}
                    </p>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Mission Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="text-center lg:text-left mb-6">
                  <Badge className="mb-4 bg-primary/10 text-primary border-primary/30">
                    Our Mission
                  </Badge>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                    Transforming Procurement
                  </h2>
                </div>
                
                <GlassCard variant="premium" className="p-6">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center text-primary mb-4">
                      <Target className="h-6 w-6 mr-3" />
                      Mission Statement
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      NaayaConstruction aims to revolutionize B2B raw materials procurement by modernizing 
                      traditional processes with cutting-edge AI technology, creating a transparent and 
                      reliable marketplace that reduces costs and simplifies sourcing for businesses across India.
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm">AI-Powered Matching</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm">Transparent Pricing</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm">Quality Assurance</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm">Real-time Tracking</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm">Pan-India Network</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm">24/7 Support</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </GlassCard>
              </motion.div>

              {/* Vision Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="space-y-6">
                  <GlassCard variant="premium" className="p-6">
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center text-accent mb-4">
                        <TrendingUp className="h-6 w-6 mr-3" />
                        Vision 2030
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        NaayaConstruction envisions a fully digital, efficient, and transparent raw materials 
                        procurement ecosystem powered by advanced technology, becoming India's go-to platform 
                        for solving sourcing challenges and fostering sustainable growth.
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">Become the #1 AI-Powered Procurement platform in India</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">Expand to international markets</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">Achieve carbon-neutral operations</span>
                        </div>
                      </div>
                    </CardContent>
                  </GlassCard>

                  {/* Image Section */}
                  <motion.div
                    className="relative overflow-hidden rounded-xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={officeBuilding} 
                      alt="NaayaConstruction modern office building" 
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm font-medium">Our Modern Headquarters</p>
                      <p className="text-xs opacity-80">Mumbai, Maharashtra</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-16 bg-gradient-subtle" ref={valuesRef}>
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 40 }}
              animate={isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/30">
                Core Values
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                What Drives Us Forward
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4" />
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do and help us build lasting relationships 
                with our customers and partners across the construction industry.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate={isValuesInView ? "visible" : "hidden"}
            >
              {values.map((value, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <GlassCard 
                    variant="interactive" 
                    className="p-6 text-center h-full group"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{value.description}</p>
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30 text-xs">
                      {value.stats}
                    </Badge>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-16" ref={achievementsRef}>
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 40 }}
              animate={isAchievementsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/30">
                Achievements
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Recognition & Milestones
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isAchievementsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <GlassCard variant="premium" className="p-6 h-full">
                    <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
                      {achievement.title}
                    </h3>
                    <div className="space-y-3">
                      {achievement.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start space-x-3">
                          <Award className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-accent relative overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${materialWarehouse})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/90" />
          
          <div className="relative container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Transform?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join thousands of businesses who trust NaayaConstruction for their 
                procurement needs. Experience the future of sourcing with our AI-powered platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90 text-lg px-6 py-3 transform hover:scale-105 transition-all duration-300"
                >
                  <Building className="h-5 w-5 mr-2" />
                  <span>Start Sourcing Now</span>
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 text-lg px-6 py-3 backdrop-blur-sm"
                >
                  <Users2 className="h-5 w-5 mr-2" />
                  <span>Contact Sales Team</span>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
