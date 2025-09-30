import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { z } from "zod";
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

const contactFormSchema = z.object({
  firstName: z.string()
    .trim()
    .min(1, "First name is required")
    .max(50, "First name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "First name can only contain letters and spaces"),
  lastName: z.string()
    .trim()
    .min(1, "Last name is required")
    .max(50, "Last name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Last name can only contain letters and spaces"),
  email: z.string()
    .trim()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),
  phone: z.string()
    .trim()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be less than 15 digits")
    .regex(/^[\+]?[0-9\s\-\(\)]+$/, "Please enter a valid phone number"),
  company: z.string()
    .trim()
    .min(1, "Company name is required")
    .max(100, "Company name must be less than 100 characters"),
  message: z.string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
  productCategories: z.string()
    .trim()
    .max(200, "Product categories must be less than 200 characters")
    .optional()
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {

  

  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    productCategories: ""
  });
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<Partial<ContactFormData>>({});
  const { toast } = useToast();
  const [step, setStep] = useState(1);
   useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, [step]);
  const statsRef = useRef(null);
  const formRef = useRef(null);
  const contactInfoRef = useRef(null);
  
  const isStatsInView = useInView(statsRef, { once: true, margin: "-50px" });
  const isFormInView = useInView(formRef, { once: true, margin: "-50px" });
  const isContactInfoInView = useInView(contactInfoRef, { once: true, margin: "-50px" });

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
      value: "+91 86574 94046",
      description: "Direct line to our support team",
      available: "24/7 Available",
      action: "tel:+918657494046"
    },
    {
      icon: Mail,
      title: "Email Support", 
      value: "construction@naayatrade.com",
      description: "Detailed inquiries and documentation",
      available: "Response within 1 hour",
      action: "mailto:construction@naayatrade.com"
    },
    {
      icon: MapPin,
      title: "Office Location",
      value: "Hill View Building, 302, 2, Hill Rd, W, Bandra West, Mumbai, Maharashtra 400050",
      description: "Visit our headquarters",
      available: "Mon-Fri: 9AM-6PM",
      action: "https://share.google/cRDG71xpJLGpsbFgU"
    }
  ];

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (formErrors[field]) {
      setFormErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (type: string) => {
    try {
      let dataToValidate = { ...formData };
      
      if ((type === "Supplier" || type === "Partnership") && !formData.productCategories?.trim()) {
        const fieldName = type === "Supplier" ? "Product Categories" : "Partnership Type";
        toast({
          title: "Missing Information",
          description: `${fieldName} is required.`,
          variant: "destructive",
        });
        return false;
      }

      contactFormSchema.parse(dataToValidate);

      if (!agreedToPrivacy) {
        toast({
          title: "Privacy Policy Agreement Required",
          description: "Please accept the privacy policy to continue.",
          variant: "destructive",
        });
        return false;
      }

      setFormErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors: Partial<ContactFormData> = {};
        error.issues.forEach((issue) => {
          const field = issue.path[0] as keyof ContactFormData;
          errors[field] = issue.message;
        });
        setFormErrors(errors);
        
        const firstError = error.issues[0];
        toast({
          title: "Validation Error",
          description: firstError.message,
          variant: "destructive",
        });
      }
      return false;
    }
  };

  const handleSubmit = async (type: string) => {
    if (!validateForm(type) || isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    try {
      const emailSubject = encodeURIComponent(
        `${type} Enquiry from ${formData.firstName} ${formData.lastName} - NaayaConstruction`
      );
      
      let emailBody = `New ${type} Enquiry - NaayaConstruction Contact Form\n\n`;
      emailBody += `Contact Details:\n`;
      emailBody += `Name: ${formData.firstName} ${formData.lastName}\n`;
      emailBody += `Email: ${formData.email}\n`;
      emailBody += `Phone: ${formData.phone}\n`;
      emailBody += `Company: ${formData.company}\n\n`;
      
      if (formData.productCategories) {
        const fieldName = type === "Supplier" ? "Product Categories" : 
                         type === "Partnership" ? "Partnership Type" : "Additional Info";
        emailBody += `${fieldName}: ${formData.productCategories}\n\n`;
      }
      
      emailBody += `Message:\n${formData.message}\n\n`;
      emailBody += `Enquiry Type: ${type}\n`;
      emailBody += `Submitted: ${new Date().toLocaleString()}\n`;
      emailBody += `Source: NaayaConstruction Contact Form`;
      
      const encodedEmailBody = encodeURIComponent(emailBody);
      const emailUrl = `mailto:construction@naayatrade.com?subject=${emailSubject}&body=${encodedEmailBody}`;
      
      window.open(emailUrl, '_blank');
      
      toast({
        title: "Message Sent Successfully! 🎉",
        description: "Your enquiry has been prepared for email. Our team will respond within 15 minutes!",
      });

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
      setFormErrors({});
      
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an issue preparing your message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderFormFields = (tabId: string, type: string) => (
    <div className="space-y-4 md:space-y-6 ">
      <div className="text-center lg:text-left  mb-4 md:mb-6 ">
        <h3 className="text-xl md:text-2xl   font-semibold text-foreground mb-2">{type}</h3>
        <p className="text-muted-foreground  text-sm md:text-base leading-relaxed">
          {type === "General Enquiry" && "Have a question? We're here to help with any general inquiries about our platform, services, or partnerships."}
          {type === "Become a Supplier" && "Join our network of trusted suppliers and grow your business with us. Access thousands of potential customers across India."}
          {type === "Partnership" && "Explore partnership opportunities and collaborate with us to revolutionize the construction material industry."}
          {type === "Investor Relations" && "Get in touch with our investor relations team to learn about investment opportunities and company performance."}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="space-y-2">
          <Label htmlFor={`firstName-${tabId}`} className="text-foreground font-medium">
            First name *
          </Label>
          <Input
            id={`firstName-${tabId}`}
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            className={`glass-morphism ${formErrors.firstName ? 'border-destructive' : ''}`}
            required
          />
          {formErrors.firstName && (
            <p className="text-destructive text-xs">{formErrors.firstName}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor={`lastName-${tabId}`} className="text-foreground font-medium">
            Last name *
          </Label>
          <Input
            id={`lastName-${tabId}`}
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
            className={`glass-morphism ${formErrors.lastName ? 'border-destructive' : ''}`}
            required
          />
          {formErrors.lastName && (
            <p className="text-destructive text-xs">{formErrors.lastName}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="space-y-2">
          <Label htmlFor={`email-${tabId}`} className="text-foreground font-medium">
            Email *
          </Label>
          <Input
            id={`email-${tabId}`}
            type="email"
            placeholder="your.email@company.com"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className={`glass-morphism ${formErrors.email ? 'border-destructive' : ''}`}
            required
          />
          {formErrors.email && (
            <p className="text-destructive text-xs">{formErrors.email}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor={`phone-${tabId}`} className="text-foreground font-medium">
            Phone number *
          </Label>
          <Input
            id={`phone-${tabId}`}
            placeholder="+91 12345 67890"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            className={`glass-morphism ${formErrors.phone ? 'border-destructive' : ''}`}
            required
          />
          {formErrors.phone && (
            <p className="text-destructive text-xs">{formErrors.phone}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor={`company-${tabId}`} className="text-foreground font-medium">
          Company name *
        </Label>
        <Input
          id={`company-${tabId}`}
          placeholder="Your company or organization name"
          value={formData.company}
          onChange={(e) => handleInputChange("company", e.target.value)}
          className={`glass-morphism ${formErrors.company ? 'border-destructive' : ''}`}
          required
        />
        {formErrors.company && (
          <p className="text-destructive text-xs">{formErrors.company}</p>
        )}
      </div>

      {(type === "Become a Supplier" || type === "Partnership") && (
        <div className="space-y-2">
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
            value={formData.productCategories || ""}
            onChange={(e) => handleInputChange("productCategories", e.target.value)}
            className="glass-morphism"
            required
          />
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor={`message-${tabId}`} className="text-foreground font-medium">
          Message *
        </Label>
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
          className={`glass-morphism min-h-[120px] resize-none ${formErrors.message ? 'border-destructive' : ''}`}
          required
        />
        {formErrors.message && (
          <p className="text-destructive text-xs">{formErrors.message}</p>
        )}
      </div>

      <div className="space-y-3">
        <div className="flex items-start space-x-3">
          <input 
            type="checkbox" 
            id={`privacy-${tabId}`}
            checked={agreedToPrivacy}
            onChange={(e) => setAgreedToPrivacy(e.target.checked)}
            className="mt-1 rounded border-glass-border glass-morphism" 
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
      </div>

      <Button 
        onClick={() => handleSubmit(type)}
        disabled={isSubmitting}
        className="w-full h-12 flex items-center justify-center bg-gradient-primary hover:shadow-glow transition-all duration-300"
      >
        <Send className="h-5 w-5 mr-2" />
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </div>
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact NaayaConstruction",
    "description": "Get in touch with NaayaConstruction for construction material platform, supplier partnerships, and business inquiries",
    "url": "https://naayaconstruction.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "NaayaConstruction",
      "telephone": "+91-86574-94046",
      "email": "construction@naayatrade.com",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN",
        "addressRegion": "Maharashtra",
        "addressLocality": "Mumbai"
      }
    }
  };

  return (
    <>
      <SEOHead
        title="Contact NaayaConstruction - Get in Touch for Construction Material Platform"
        description="Contact NaayaConstruction for construction material platform, supplier partnerships, investor relations, and business inquiries. Quick response within 15 minutes."
        keywords="contact naayaconstruction, construction materials contact, supplier partnership, investor relations, business inquiry, construction platform support"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gradient-subtle overflow-x-hidden">
        {/* Hero Section */}
        <section className="py-12 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary-glow/5 pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 md:mb-6 bg-primary/10 text-primary border-primary/30 px-4 md:px-6 py-1.5 md:py-2">
                Contact Us
              </Badge>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
                <span className="bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">
                  Get in Touch
                </span>
              </h1>
              <div className="w-24 md:w-32 h-1 bg-gradient-primary mx-auto rounded-full mb-6 md:mb-8" />
              <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
                We're here to help with any questions about our products, services, partnerships, 
                or investment opportunities. Our team responds within 15 minutes.
              </p>
            </motion.div>

            {/* Response Time Stats */}
            <div 
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16"
              ref={statsRef}
            >
              {responseStats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <GlassCard variant="interactive" className="p-4 md:p-6 text-center group">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="h-5 w-5 md:h-6 md:w-6 text-primary-foreground" />
                    </div>
                    <div className="text-xl md:text-2xl font-bold text-primary mb-1">
                      <AnimatedCounter 
                        end={stat.value} 
                        suffix={stat.unit}
                        duration={2}
                      />
                    </div>
                    <p className="text-xs md:text-sm font-medium text-foreground">{stat.label}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 pb-12 md:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2" ref={formRef}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6 }}
              >
                <GlassCard variant="premium" className="p-4 md:p-8">
                  <div className="mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Contact Us</h2>
                    <p className="text-muted-foreground text-sm md:text-base">
                      Choose the type of inquiry that best matches your needs for faster, more targeted assistance.
                    </p>
                  </div>
                  <Tabs defaultValue="general" className="w-full">
                    <TabsList className="grid w-full grid-cols-4 mb-6 glass-morphism bg-glass-bg/50 backdrop-blur-sm p-1">
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



            {/* Contact Info Sidebar */}
            <div className="space-y-6" ref={contactInfoRef}>
              {/* Contact Methods */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isContactInfoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.6 }}
              >
                <GlassCard variant="premium" className="p-4 md:p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-6">Contact Information</h3>
                  
                  <div className="space-y-4">
                    {contactMethods.map((method, index) => (
                      <div
                        key={index}
                        className="group cursor-pointer"
                        onClick={() => method.action && window.open(method.action)}
                      >
                        <div className="flex items-start space-x-4 p-4 rounded-lg glass-morphism group-hover:bg-primary/5 transition-all duration-300">
                          <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                            <method.icon className="h-6 w-6 text-primary-foreground" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                              {method.title}
                            </p>
                            <p className="text-sm text-muted-foreground break-words">
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
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>

              {/* Business Hours */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isContactInfoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <GlassCard variant="premium" className="p-4 md:p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-6">Business Hours</h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-glass-border">
                      <span className="text-muted-foreground text-sm">Monday - Friday</span>
                      <span className="text-foreground font-medium text-sm">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-glass-border">
                      <span className="text-muted-foreground text-sm">Saturday</span>
                      <span className="text-foreground font-medium text-sm">9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-muted-foreground text-sm">Sunday</span>
                      <span className="text-red-400 font-medium text-sm">Closed</span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <p className="text-sm font-medium text-primary mb-2">24/7 Emergency Support</p>
                    <p className="text-xs text-muted-foreground">
                      For urgent platform needs, our AI-powered system and emergency team are available round the clock.
                    </p>
                  </div>
                </GlassCard>
              </motion.div>

              {/* Google Maps */}
             
            </div>
          </div>
           <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isContactInfoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <GlassCard variant="premium" className="p-4 md:p-6 mt-6">
                  <h3 className="text-xl font-semibold text-foreground mb-6">Find Us</h3>
                  
                  <div className="rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0234589394357!2d72.8241995759203!3d19.056699552892843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce40f07dc9a1%3A0x2540418065ef0594!2sHill%20View%20Building%2C%20302%2C%202%2C%20Hill%20Rd%2C%20W%2C%20Bandra%20West%2C%20Mumbai%2C%20Maharashtra%20400050!5e0!3m2!1sen!2sin!4v1696150000000!5m2!1sen!2sin"
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg"
                    />
                  </div>
                  
                  <div className="mt-4 p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <p className="text-sm font-medium text-primary mb-2">Office Address</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Hill View Building, 302, 2, Hill Rd, W, Bandra West, Mumbai, Maharashtra 400050
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
        </div>
      </div>
    </>
  );
};

export default Contact;