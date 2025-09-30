import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Quote, Star, Building, Factory } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Project Manager",
      company: "Metro Builders Pvt Ltd",
      location: "Mumbai, Maharashtra",
      rating: 4.2,
      text: "NaayaConstruction transformed our procurement process. We reduced material sourcing time by 70% and saved 15% on costs through their AI-powered supplier matching.",
      avatar: "RK",
      type: "builder",
      project: "₹50Cr+ Commercial Complex",
    },
    {
      name: "Priya Sharma",
      role: "Supply Chain Director",
      company: "JSW Steel Solutions",
      location: "Pune, Maharashtra",
      rating: 4,
      text: "The platform's escrow system gave us confidence to work with new builders. Our sales increased 40% in the first quarter, and payment disputes are now zero.",
      avatar: "PS",
      type: "vendor",
      speciality: "TMT & Structural Steel",
    },
    {
      name: "Amit Patel",
      role: "Construction Head",
      company: "Godrej Properties",
      location: "Ahmedabad, Gujarat",
      rating: 5,
      text: "Real-time tracking and quality assurance features helped us deliver projects 20% faster. The AI recommendations always match our exact requirements.",
      avatar: "AP",
      type: "builder",
      project: "₹200Cr+ Residential Township",
    },
    {
      name: "Sunita Reddy",
      role: "Managing Director",
      company: "Deccan Cement & Aggregates",
      location: "Hyderabad, Telangana",
      rating: 4,
      text: "NaayaConstruction connected us with verified builders across South India. Our monthly orders tripled, and the logistics support is exceptional.",
      avatar: "SR",
      type: "vendor",
      speciality: "Cement & Building Materials",
    },
    {
      name: "Vikram Singh",
      role: "Project Director",
      company: "DLF Limited",
      location: "Gurgaon, Haryana",
      rating: 3.5,
      text: "Voice AI feature is a game-changer for urgent requirements. We can place orders while on-site, and the 60-second quote system saves hours of back-and-forth.",
      avatar: "VS",
      type: "builder",
      project: "₹300Cr+ Mixed-Use Development",
    },
    {
      name: "Meera Iyer",
      role: "Business Head",
      company: "Tata Steel Processing",
      location: "Chennai, Tamil Nadu",
      rating: 4.5,
      text: "The platform's market intelligence helped us optimize pricing strategies. Revenue grew 60% while maintaining healthy margins through data-driven insights.",
      avatar: "MI",
      type: "vendor",
      speciality: "Steel Processing & Distribution",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <div className="w-16 sm:w-24 lg:w-32 h-1 bg-gradient-primary mx-auto rounded-full mb-4" />
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our partners who are revolutionizing construction procurement across India
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <GlassCard className="h-full group hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden p-5 sm:p-6 lg:p-8">
                
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-20 sm:w-28 lg:w-32 h-20 sm:h-28 lg:h-32 bg-gradient-primary opacity-5 rounded-full -mr-10 sm:-mr-14 lg:-mr-16 -mt-10 sm:-mt-14 lg:-mt-16 group-hover:opacity-10 transition-opacity duration-500" />

                {/* Rating + Type */}

               {/* Rating + Type */}
<div className="flex flex-wrap items-center justify-between mb-4">
  <div className="flex space-x-1">
    {[...Array(5)].map((_, i) => {
      const ratingValue = i + 1; // 1 to 5
      if (testimonial.rating >= ratingValue) {
        // Full Star
        return (
          <Star
            key={i}
            className="h-4 w-4 sm:h-5 sm:w-5 text-amber-400 fill-current"
          />
        );
      } else if (testimonial.rating >= ratingValue - 0.5) {
        // Half Star (using gradient trick)
        return (
          <Star
            key={i}
            className="h-4 w-4 sm:h-5 sm:w-5 text-amber-400"
            style={{
              fill: "url(#half-gradient)",
            }}
          />
        );
      } else {
        // Empty Star
        return (
          <Star
            key={i}
            className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground"
          />
        );
      }
    })}

    {/* Define gradient for half-filled stars */}
    <svg width="0" height="0">
      <defs>
        <linearGradient id="half-gradient" x1="0" x2="100%" y1="0" y2="0">
          <stop offset="50%" stopColor="#fbbf24" />  {/* amber-400 */}
          <stop offset="50%" stopColor="transparent" />
        </linearGradient>
      </defs>
    </svg>
  </div>

  <div className="flex items-center space-x-2">
    {testimonial.type === "builder" ? (
      <Building className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
    ) : (
      <Factory className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
    )}
    <span className="text-xs sm:text-sm font-medium text-primary capitalize">
      {testimonial.type}
    </span>
  </div>
</div>

                {/* Quote */}
                <div className="relative mb-5">
                  <Quote className="h-5 w-5 sm:h-7 sm:w-7 text-primary/30 absolute -top-2 -left-1" />
                  <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed pl-6 relative z-10">
                    "{testimonial.text}"
                  </p>
                </div>

                {/* Profile */}
                <div className="flex items-start space-x-3 mb-3">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xs sm:text-sm lg:text-lg flex-shrink-0">
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-foreground text-sm sm:text-base lg:text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-primary font-medium text-xs sm:text-sm">
                      {testimonial.role}
                    </p>
                    <p className="text-muted-foreground text-xs sm:text-sm truncate">
                      {testimonial.company}
                    </p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground mt-1">
                      📍 {testimonial.location}
                    </p>
                  </div>
                </div>

                {/* Project/Speciality Badge */}
                <div className="mt-3 pt-3 border-t border-border">
                  {testimonial.type === "builder" ? (
                    <div className="text-xs sm:text-sm font-medium text-success">
                      🏗️ {testimonial.project}
                    </div>
                  ) : (
                    <div className="text-xs sm:text-sm font-medium text-accent">
                      ⚡ {testimonial.speciality}
                    </div>
                  )}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
