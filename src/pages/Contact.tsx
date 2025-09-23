import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Phone, Mail, MapPin, MessageSquare, Building, Users, TrendingUp, Clock, CheckCircle, Star, Send, Headphones } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import AnimatedCounter from "@/components/AnimatedCounter";
import SEOHead from "@/components/SEOHead";

const Contact = () => {
    const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    productCategories: ""
  });
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);
  const { toast } = useToast();

  const statsRef = useRef(null);
  const formRef = useRef(null);
  const contactInfoRef = useRef(null);
  
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const isFormInView = useInView(formRef, { once: true, margin: "-100px" });
  const isContactInfoInView = useInView(contactInfoRef, { once: true, margin: "-100px" });

  const responseStats = [
    { label: "Avg Response Time", value: 15, unit: "min", icon: Clock },
    { label: "Customer Satisfaction", value: 98, unit: "%", icon: Star },
    { label: "Issues Resolved", value: 99, unit: "%", icon: CheckCircle },
    { label: "Support Availability", value: 24, unit: "/7", icon: Headphones }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      value: "+91 84250 47309",
      description: "Direct line to our support team",
      available: "24/7 Available",
      action: "tel:+918425047309"
    },
    {
      icon: Mail,
      title: "Email Support",
      value: "yuvraj@naayatrade.com",
      description: "Detailed inquiries and documentation",
      available: "Response within 1 hour",
      action: "mailto:yuvraj@naayatrade.com"
    },
    {
      icon: MapPin,
      title: "Office Location",
      value: "Mumbai, Maharashtra",
      description: "Visit our headquarters",
      available: "Mon-Fri: 9AM-6PM",
      action: null
    }
  ];

  const officeFeatures = [
    "Modern workspace with latest technology",
    "Meeting rooms for client consultations",
    "Demonstration center for platform features",
    "Easy access via public transportation"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };
 useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);
  const validateForm = (type: string) => {
    const requiredFields = [
      { field: "firstName", label: "First name" },
      { field: "lastName", label: "Last name" },
      { field: "email", label: "Email" },
      { field: "phone", label: "Phone number" },
      { field: "company", label: "Company name" },
      { field: "message", label: "Message" }
    ];

    // Check all required fields
    for (const { field, label } of requiredFields) {
      if (!formData[field as keyof typeof formData].trim()) {
        toast({
          title: "Missing Information",
          description: `${label} is required.`,
          variant: "destructive",
        });
        return false;
      }
    }

    // For supplier and partnership forms, check product categories
    if ((type === "Supplier" || type === "Partnership") && !formData.productCategories.trim()) {
      const fieldName = type === "Supplier" ? "Product Categories" : "Partnership Type";
      toast({
        title: "Missing Information",
        description: `${fieldName} is required.`,
        variant: "destructive",
      });
      return false;
    }

    // Check privacy policy agreement
    if (!agreedToPrivacy) {
      toast({
        title: "Privacy Policy Agreement Required",
        description: "Please accept the privacy policy to continue.",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const formatWhatsAppMessage = (type: string) => {
    let message = `*${type} Enquiry from NaayaConstruction Website*\n\n`;
    message += `👤 *Name:* ${formData.firstName} ${formData.lastName}\n`;
    message += `📧 *Email:* ${formData.email}\n`;
    message += `📱 *Phone:* ${formData.phone}\n`;
    message += `🏢 *Company:* ${formData.company}\n`;
    
    if (formData.productCategories) {
      const fieldName = type === "Supplier" ? "Product Categories" : 
                       type === "Partnership" ? "Partnership Type" : "Additional Info";
      const emoji = type === "Supplier" ? "📦" : type === "Partnership" ? "🤝" : "ℹ️";
      message += `${emoji} *${fieldName}:* ${formData.productCategories}\n`;
    }
    
    message += `💬 *Message:*\n${formData.message}\n\n`;
    message += `*Sent via NaayaConstruction Contact Form*\n`;
    message += `*Timestamp:* ${new Date().toLocaleString()}`;
    
    return message;
  };

  const formatEmailMessage = (type: string) => {
    let message = `New ${type} Enquiry - NaayaConstruction Contact Form\n\n`;
    message += `Contact Details:\n`;
    message += `Name: ${formData.firstName} ${formData.lastName}\n`;
    message += `Email: ${formData.email}\n`;
    message += `Phone: ${formData.phone}\n`;
    message += `Company: ${formData.company}\n\n`;
    
    if (formData.productCategories) {
      const fieldName = type === "Supplier" ? "Product Categories" : 
                       type === "Partnership" ? "Partnership Type" : "Additional Info";
      message += `${fieldName}: ${formData.productCategories}\n\n`;
    }
    
    message += `Message:\n${formData.message}\n\n`;
    message += `Enquiry Type: ${type}\n`;
    message += `Submitted: ${new Date().toLocaleString()}\n`;
    message += `Source: NaayaConstruction Contact Form`;
    
    return message;
  };

  const handleSubmit = (type: string) => {
    if (!validateForm(type)) {
      return;
    }

    try {
      // Format WhatsApp message with proper encoding
      const whatsappMessage = formatWhatsAppMessage(type);
      const encodedWhatsAppMessage = encodeURIComponent(whatsappMessage);
      
      // Create WhatsApp URL
      const phoneNumber = "919930670707";
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedWhatsAppMessage}`;
      
      // Format email message
      const emailMessage = formatEmailMessage(type);
      const emailSubject = `${type} Enquiry from ${formData.firstName} ${formData.lastName} - NaayaConstruction`;
      const encodedEmailSubject = encodeURIComponent(emailSubject);
      const encodedEmailBody = encodeURIComponent(emailMessage);
      
      // Create email URL
      const emailUrl = `mailto:yuvraj@naayatrade.com?subject=${encodedEmailSubject}&body=${encodedEmailBody}`;
      
      // Open WhatsApp first (primary method)
      window.open(whatsappUrl, '_blank');
      
      // Open email client after a short delay (secondary method)
      setTimeout(() => {
        window.open(emailUrl, '_blank');
      }, 1500);
      
      // Show success message
      toast({
        title: "Message Sent Successfully! 🎉",
        description: "Your enquiry has been sent via WhatsApp and email. Our team will respond within 15 minutes!",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        productCategories: ""
      });
      setAgreedToPrivacy(false);
      
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "There was an issue sending your message. Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

  const renderFormFields = (tabId: string, type: string) => (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="text-center lg:text-left mb-8">
        <h3 className="text-2xl font-semibold text-foreground mb-3">{type}</h3>
        <p className="text-muted-foreground leading-relaxed">
          {type === "General Enquiry" && "Have a question? We're here to help with any general inquiries about our platform, services, or partnerships."}
          {type === "Become a Supplier" && "Join our network of trusted suppliers and grow your business with us. Access thousands of potential customers across India."}
          {type === "Partnership" && "Explore partnership opportunities and collaborate with us to revolutionize the construction material Naayaconstruction industry."}
          {type === "Investor Relations" && "Get in touch with our investor relations team to learn about investment opportunities and company performance."}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Label htmlFor={`firstName-${tabId}`} className="text-foreground font-medium">First name *</Label>
          <Input
            id={`firstName-${tabId}`}
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            className="mt-2 glass-morphism border-glass-border backdrop-blur-sm transition-all duration-300 hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20"
            required
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Label htmlFor={`lastName-${tabId}`} className="text-foreground font-medium">Last name *</Label>
          <Input
            id={`lastName-${tabId}`}
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
            className="mt-2 glass-morphism border-glass-border backdrop-blur-sm transition-all duration-300 hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20"
            required
          />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Label htmlFor={`email-${tabId}`} className="text-foreground font-medium">Email *</Label>
          <Input
            id={`email-${tabId}`}
            type="email"
            placeholder="your.email@company.com"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className="mt-2 glass-morphism border-glass-border backdrop-blur-sm transition-all duration-300 hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20"
            required
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Label htmlFor={`phone-${tabId}`} className="text-foreground font-medium">Phone number *</Label>
          <Input
            id={`phone-${tabId}`}
            placeholder="+91 12345 67890"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            className="mt-2 glass-morphism border-glass-border backdrop-blur-sm transition-all duration-300 hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20"
            required
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <Label htmlFor={`company-${tabId}`} className="text-foreground font-medium">Company name *</Label>
        <Input
          id={`company-${tabId}`}
          placeholder="Your company or organization name"
          value={formData.company}
          onChange={(e) => handleInputChange("company", e.target.value)}
          className="mt-2 glass-morphism border-glass-border backdrop-blur-sm transition-all duration-300 hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20"
          required
        />
      </motion.div>

      {(type === "Become a Supplier" || type === "Partnership") && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Label htmlFor={`categories-${tabId}`} className="text-foreground font-medium">
            {type === "Become a Supplier" ? "Product Categories *" : "Partnership Type *"}
          </Label>
          <Input
            id={`categories-${tabId}`}
            placeholder={
              type === "Become a Supplier" 
                ? "e.g., TMT Steel, Cement, Construction Equipment, Electrical Supplies" 
                : "e.g., Technology Partner, Distribution Partner, Channel Partner"
            }
            value={formData.productCategories}
            onChange={(e) => handleInputChange("productCategories", e.target.value)}
            className="mt-2 glass-morphism border-glass-border backdrop-blur-sm transition-all duration-300 hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20"
            required
          />
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <Label htmlFor={`message-${tabId}`} className="text-foreground font-medium">Message *</Label>
        <Textarea
          id={`message-${tabId}`}
          placeholder={`Please provide details about ${
            type === "Become a Supplier" ? "your products, services, and business capabilities..." :
            type === "Partnership" ? "your partnership proposal and how we can collaborate..." :
            type === "Investor Relations" ? "your investment inquiry and specific interests..." :
            "your inquiry and how we can assist you..."
          }`}
          value={formData.message}
          onChange={(e) => handleInputChange("message", e.target.value)}
          className="mt-2 glass-morphism border-glass-border backdrop-blur-sm min-h-[120px] transition-all duration-300 hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
          required
        />
      </motion.div>

      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 1.0 }}
      >
        <div className="flex items-start space-x-3">
          <input 
            type="checkbox" 
            id={`privacy-${tabId}`}
            checked={agreedToPrivacy}
            onChange={(e) => setAgreedToPrivacy(e.target.checked)}
            className="mt-1 rounded border-glass-border glass-morphism transition-all duration-300 hover:border-primary/50 focus:ring-2 focus:ring-primary/20" 
            required
          />
          <label htmlFor={`privacy-${tabId}`} className="text-sm text-muted-foreground leading-relaxed">
            I confirm that I have read and accepted the privacy policy and agree to the processing of my personal data for the purpose of handling this inquiry. *
          </label>
        </div>
        <p className="text-xs text-muted-foreground">
          By submitting this form, you agree to our Terms of Service and Privacy Policy. 
          We respect your privacy and will only use your information to respond to your inquiry.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 1.1 }}
      >
        <Button 
          onClick={() => handleSubmit(type)}
          className=" items-center bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-[1.02] border-0 text-lg py-6"
        >
          <Send className="h-5 w-5 mr-2" />
          Send Message
        </Button>
      </motion.div>
    </motion.div>
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact NaayaConstruction",
    "description": "Get in touch with NaayaConstruction for construction material Naayaconstruction, supplier partnerships, and business inquiries",
    "url": "https://naayaconstruction.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "NaayaConstruction",
      "telephone": "+91-84250-47309",
      "email": "yuvraj@naayatrade.com",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN",
        "addressRegion": "Maharashtra",
        "addressLocality": "Mumbai"
      }
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
        title="Contact NaayaConstruction - Get in Touch for Construction Material Naayaconstruction"
        description="Contact NaayaConstruction for construction material Naayaconstruction, supplier partnerships, investor relations, and business inquiries. Quick response within 15 minutes."
        keywords="contact naayaconstruction, construction materials contact, supplier partnership, investor relations, business inquiry, construction Naayaconstruction support"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gradient-subtle ">
        {/* Hero Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary-glow/5" />
          
          {/* Floating Elements */}
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"
            animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-48 h-48 bg-accent/10 rounded-full blur-2xl"
            animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/30 text-lg px-6 py-2">
                Contact Us
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">
                  Get in Touch
                </span>
              </h1>
              <div className="w-32 h-1 bg-gradient-primary mx-auto rounded-full mb-8" />
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                We're here to help with any questions about our products, services, partnerships, 
                or investment opportunities. Our team responds within 15 minutes.
              </p>
            </motion.div>

            {/* Response Time Stats */}
            <motion.div 
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
              ref={statsRef}
              variants={containerVariants}
              initial="hidden"
              animate={isStatsInView ? "visible" : "hidden"}
            >
              {responseStats.map((stat, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <GlassCard variant="interactive" className="p-6 text-center group">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-2">
                      <AnimatedCounter 
                        end={stat.value} 
                        suffix={stat.unit}
                        duration={2}
                      />
                    </div>
                    <p className="text-sm font-medium text-foreground">{stat.label}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Enhanced Contact Form */}
            <div className="lg:col-span-2" ref={formRef}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8 }}
              >
                <GlassCard variant="premium" className="p-8 m-10">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-foreground mb-4">Contact Us</h2>
                    <p className="text-muted-foreground text-lg">
                      Choose the type of inquiry that best matches your needs for faster, more targeted assistance.
                    </p>
                  </div>

                  <Tabs defaultValue="general" className="w-full">
                    <TabsList className="grid w-full grid-cols-4 mb-8 glass-morphism bg-glass-bg/50 backdrop-blur-sm p-1">
                      <TabsTrigger 
                        value="general" 
                        className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
                      >
                        <MessageSquare className="h-4 w-4" />
                        <span className="hidden sm:inline">General</span>
                      </TabsTrigger>
                      <TabsTrigger 
                        value="supplier"
                        className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
                      >
                        <Building className="h-4 w-4" />
                        <span className="hidden sm:inline">Supplier</span>
                      </TabsTrigger>
                      <TabsTrigger 
                        value="partnership"
                        className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
                      >
                        <Users className="h-4 w-4" />
                        <span className="hidden sm:inline">Partnership</span>
                      </TabsTrigger>
                      <TabsTrigger 
                        value="investor"
                        className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
                      >
                        <TrendingUp className="h-4 w-4" />
                        <span className="hidden sm:inline">Investor</span>
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="general">
                      {renderFormFields("general", "General Enquiry")}
                    </TabsContent>

                    <TabsContent value="supplier">
                      {renderFormFields("supplier", "Become a Supplier")}
                    </TabsContent>

                    <TabsContent value="partnership">
                      {renderFormFields("partnership", "Partnership")}
                    </TabsContent>

                    <TabsContent value="investor">
                      {renderFormFields("investor", "Investor Relations")}
                    </TabsContent>
                  </Tabs>
                </GlassCard>
              </motion.div>
            </div>

            {/* Enhanced Contact Info Sidebar */}
            <div className="space-y-8 mt-10" ref={contactInfoRef}>
              {/* Contact Methods */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isContactInfoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8 }}
              >
                <GlassCard variant="premium" className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    {contactMethods.map((method, index) => (
                      <motion.div
                        key={index}
                        className="group cursor-pointer"
                        onClick={() => method.action && window.open(method.action)}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isContactInfoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-start space-x-4 p-4 rounded-lg glass-morphism group-hover:bg-primary/5 transition-all duration-300">
                          <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                            <method.icon className="h-6 w-6 text-primary-foreground" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                              {method.title}
                            </p>
                            <p className="text-sm text-muted-foreground break-all">
                              {method.value}
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                              {method.description}
                            </p>
                            <Badge variant="outline" className="mt-2 text-xs bg-primary/10 text-primary border-primary/30">
                              {method.available}
                            </Badge>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>

              {/* Business Hours */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isContactInfoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <GlassCard variant="premium" className="p-6 mb-4">
                  <h3 className="text-xl font-semibold text-foreground mb-6">Business Hours</h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-glass-border">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span className="text-foreground font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-glass-border">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="text-foreground font-medium">9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="text-red-400 font-medium">Closed</span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <p className="text-sm text-primary font-medium mb-2">24/7 Emergency Support</p>
                    <p className="text-xs text-muted-foreground">
                      For urgent Naayaconstruction needs, our AI-powered system and emergency team are available round the clock.
                    </p>
                  </div>
                </GlassCard>
              </motion.div>

              {/* Office Features */}
              {/* <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isContactInfoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <GlassCard variant="premium" className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-6">Visit Our Office</h3>
                  
                  <div className="space-y-4">
                    {officeFeatures.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={isContactInfoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                      >
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <Button 
                      variant="outline" 
                      className="w-full glass-morphism border-primary/30 text-primary hover:bg-primary/10"
                    >
                      Schedule Office Visit
                    </Button>
                  </div>
                </GlassCard>
              </motion.div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;