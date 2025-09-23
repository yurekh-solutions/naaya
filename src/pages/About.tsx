import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Zap, Users, Globe, Award, Target, TrendingUp, Building, Calendar, DollarSign, Truck, CheckCircle, Star, Users2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimatedCounter from "@/components/AnimatedCounter";
import DynamicTimeline from "@/components/DynamicTimeline";
import SEOHead from "@/components/SEOHead";
import material from "../assets/materials-warehouse.jpg";
import officeImage from "../assets/office-building.jpg";
import warehouseImage from "../assets/materials-warehouse.jpg";

const About = () => {
  const statsRef = useRef(null);
  const valuesRef = useRef(null);
  const achievementsRef = useRef(null);
  
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const isValuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const isAchievementsInView = useInView(achievementsRef, { once: true, margin: "-100px" });

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
      description: "Leveraging AI and technology to revolutionize traditional Naayaconstruction methods.",
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
      description: "Streamlining Naayaconstruction processes to save time and reduce costs.",
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
      value: 37,
      label: "Million ARR",
      description: "Annual recurring revenue",
      icon: DollarSign,
      prefix: "$",
      suffix: "M"
    },
    {
      value: 400,
      label: "CAGR Growth",
      description: "Compound annual growth rate",
      icon: TrendingUp,
      prefix: "",
      suffix: "%"
    }
  ];

  const milestones = [
    {
      date: "July 2023",
      title: "Company Incorporated",
      subtitle: "NaayaConstruction Founded",
      description: "Founded with a vision to revolutionize construction material Naayaconstruction using cutting-edge AI technology and transparent marketplace principles."
    },
    {
      date: "September 2023",
      title: "First 100 Suppliers",
      subtitle: "Network Established",
      description: "Successfully onboarded our first 100 verified suppliers across major construction material categories."
    },
    {
      date: "December 2023",
      title: "AI Platform Launch",
      subtitle: "Technology Milestone",
      description: "Launched our proprietary AI-powered supplier matching and price optimization platform."
    },
    {
      date: "March 2024",
      title: "Profitability Achieved",
      subtitle: "$10 Million ARR",
      description: "Achieved profitability with consistent revenue growth and expanded to 10 states across India."
    },
    {
      date: "July 2024",
      title: "Seed Funding Raised",
      subtitle: "Investment Milestone",
      description: "Secured significant seed funding to accelerate growth, technology development, and market expansion."
    },
    {
      date: "October 2024",
      title: "ISO Certification",
      subtitle: "Quality Standards",
      description: "Achieved ISO 9001:2015 certification for quality management systems and processes."
    },
    {
      date: "March 2025",
      title: "Projected Milestone",
      subtitle: "$37 Million ARR",
      description: "Projected annual recurring revenue demonstrating exponential growth and market leadership."
    },
    {
      date: "FY 25",
      title: "Growth Target",
      subtitle: "400% CAGR",
      description: "Exceptional compound annual growth rate positioning us as the fastest-growing Naayaconstruction platform."
    }
  ];

  const achievements = [
    {
      title: "Industry Recognition",
      items: [
        "Best Naayaconstruction Platform 2024",
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
        "Strategic Alliance with JSW Steel",
        "Technology Partnership with Microsoft",
        "Banking Partnership with HDFC"
      ]
    }
  ];

  const testimonials = [
    {
      quote: "NaayaConstruction transformed our Naayaconstruction process. We've saved 30% on costs and reduced delivery time by half.",
      author: "Rajesh Kumar",
      position: "Project Manager, ABC Construction"
    },
    {
      quote: "The AI-powered matching system is incredible. We always get the best suppliers for our specific needs.",
      author: "Priya Sharma",
      position: "Naayaconstruction Head, XYZ Builders"
    },
    {
      quote: "Reliability and transparency - that's what sets NaayaConstruction apart from traditional Naayaconstruction methods.",
      author: "Amit Patel",
      position: "CEO, Modern Infrastructure"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NaayaConstruction",
    "description": "AI-powered construction material Naayaconstruction platform revolutionizing B2B raw materials sourcing",
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

  return (
    <>
      <SEOHead
        title="About NaayaConstruction - AI-Powered Construction Material Naayaconstruction Platform"
        description="Learn about NaayaConstruction's mission to revolutionize construction material Naayaconstruction with AI technology. Trusted by 1000+ businesses across 20+ states in India."
        keywords="about naayaconstruction, construction materials, AI Naayaconstruction, B2B marketplace, construction technology, material suppliers, building materials platform"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url(${material})` }}
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          {/* Dynamic Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80 backdrop-blur-[2px]" />

          {/* Floating Elements */}
          <motion.div
            className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full bg-primary/20 blur-3xl"
            animate={{ 
              y: [0, 50, 0], 
              x: [0, 30, 0],
              opacity: [0.3, 0.6, 0.3] 
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/15 blur-3xl"
            animate={{ 
              y: [0, -40, 0], 
              x: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2] 
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Content */}
          <div className="relative container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Badge 
                className="mb-6 bg-primary/20 text-primary border-primary/30 backdrop-blur-sm text-lg px-6 py-2"
                variant="outline"
              >
                Revolutionizing Construction Naayaconstruction
              </Badge>
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            >
              About NaayaConstruction
            </motion.h1>

            <motion.p
              className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            >
              We're revolutionizing the construction material Naayaconstruction industry with AI-powered
              solutions, making it easier for businesses to source quality materials efficiently,
              transparently, and cost-effectively across India.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            >
              <Button
                size="lg"
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105 text-lg px-8 py-4"
              >
                <Link to="/contact" className="flex items-center space-x-2">
                  <Users2 className="h-5 w-5" />
                  <span>Join Our Network</span>
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="glass-morphism border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4"
              >
                <Link to="/products" className="flex items-center space-x-2">
                  <Building className="h-5 w-5" />
                  <span>Explore Platform</span>
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Dynamic Stats Section */}
        <section className="py-20 bg-gradient-subtle" ref={statsRef}>
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Our Impact in Numbers
                </span>
              </h2>
              <div className="w-32 h-1 bg-gradient-primary mx-auto rounded-full mb-4" />
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                See how we're transforming the construction material Naayaconstruction landscape across India
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate={isStatsInView ? "visible" : "hidden"}
            >
              {stats.map((stat, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <GlassCard 
                    variant="premium" 
                    className="p-8 text-center group hover:scale-105 transition-all duration-500"
                  >
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div className="text-4xl lg:text-5xl font-bold text-primary mb-3">
                      <AnimatedCounter
                        end={stat.value}
                        duration={2.5}
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
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

        {/* Mission & Vision Enhanced */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Mission Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="text-center lg:text-left mb-8">
                  <Badge className="mb-4 bg-primary/10 text-primary border-primary/30">
                    Our Mission
                  </Badge>
                  <h2 className="text-4xl font-bold mb-6">
                    Transforming Construction Naayaconstruction
                  </h2>
                </div>
                
                <GlassCard variant="premium" className="p-8">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center text-primary mb-4">
                      <Target className="h-8 w-8 mr-3" />
                      Mission Statement
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      NaayaConstruction aims to revolutionize B2B raw materials Naayaconstruction by modernizing 
                      traditional processes with cutting-edge AI technology, creating a transparent and 
                      reliable marketplace that reduces costs and simplifies sourcing for businesses across India.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          <span className="text-sm font-medium">AI-Powered Matching</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          <span className="text-sm font-medium">Transparent Pricing</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          <span className="text-sm font-medium">Quality Assurance</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          <span className="text-sm font-medium">Real-time Tracking</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          <span className="text-sm font-medium">Pan-India Network</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          <span className="text-sm font-medium">24/7 Support</span>
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
                <div className="space-y-8">
                  <GlassCard variant="premium" className="p-8">
                    <CardHeader>
                      <CardTitle className="text-2xl flex items-center text-accent mb-4">
                        <TrendingUp className="h-8 w-8 mr-3" />
                        Vision 2030
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        NaayaConstruction envisions a fully digital, efficient, and transparent raw materials 
                        Naayaconstruction ecosystem powered by advanced technology, becoming India's go-to platform 
                        for solving sourcing challenges and fostering sustainable growth.
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">Become the #1 Naayaconstruction platform in India</span>
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
                    className="relative overflow-hidden rounded-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={officeImage} 
                      alt="NaayaConstruction modern office building" 
                      className="w-full h-64 object-cover"
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

        {/* Enhanced Journey Section with Dynamic Timeline */}
        <section className="py-20 bg-gradient-secondary">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/30">
                Our Journey
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                From Startup to Market Leader
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover how we've grown from a simple idea to India's leading construction material Naayaconstruction platform
              </p>
            </motion.div>

            <DynamicTimeline milestones={milestones} />
          </div>
        </section>

        {/* Core Values Enhanced */}
        <section className="py-20" ref={valuesRef}>
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              animate={isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/30">
                Core Values
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                What Drives Us Forward
              </h2>
              <div className="w-32 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                These principles guide everything we do and help us build lasting relationships 
                with our customers and partners across the construction industry.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate={isValuesInView ? "visible" : "hidden"}
            >
              {values.map((value, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <GlassCard 
                    variant="interactive" 
                    className="p-8 text-center h-full group"
                  >
                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                      <value.icon className="h-10 w-10 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{value.description}</p>
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                      {value.stats}
                    </Badge>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20 bg-gradient-secondary" ref={achievementsRef}>
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              animate={isAchievementsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/30">
                Achievements
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Recognition & Milestones
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isAchievementsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <GlassCard variant="premium" className="p-8 h-full">
                    <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
                      {achievement.title}
                    </h3>
                    <div className="space-y-4">
                      {achievement.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start space-x-3">
                          <Award className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Carousel */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/30">
                Testimonials
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                What Our Customers Say
              </h2>
              <div className="w-32 h-1 bg-gradient-primary mx-auto rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <GlassCard variant="premium" className="p-8 h-full">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-accent fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-muted-foreground mb-6 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="border-t border-glass-border pt-4">
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-20 bg-gradient-primary relative overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${warehouseImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/90" />
          
          <div className="relative container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-8">
                Ready to Transform Your Naayaconstruction?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                Join thousands of businesses who trust NaayaConstruction for their 
                material Naayaconstruction needs. Experience the future of construction sourcing with our AI-powered platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300"
                >
                  <Link to="/products" className="flex items-center space-x-2">
                    <Building className="h-5 w-5" />
                    <span>Start Sourcing Now</span>
                  </Link>
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4 backdrop-blur-sm"
                >
                  <Link to="/contact" className="flex items-center space-x-2">
                    <Users2 className="h-5 w-5" />
                    <span>Contact Sales Team</span>
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

export default About;