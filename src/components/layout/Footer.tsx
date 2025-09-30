import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { Mail, Phone, MapPin, MessageCircle , ChevronUp } from "lucide-react";
import logo from "../../assets/logo.png";
import FAQ from "@/components/FAQ";
import logo1 from "../../assets/Naayatradelogo.png"

const Footer = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);
 useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Floating Contact Icons */}
   {/* Floating Contact Icons */}
<div className="fixed right-3 bottom-20 sm:right-6 sm:bottom-6 flex flex-col items-center space-y-3 z-50">

  {/* WhatsApp */}
  <a
    href="https://wa.me/+918657494046"
    target="_blank"
    rel="noopener noreferrer"
    className="group w-14 h-14 sm:w-14 sm:h-14 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-[#1e2532] shadow-lg hover:shadow-xl backdrop-blur-xl text-white hover:scale-110 transition-all duration-300 animate-pulse-glow"
    aria-label="Contact us on WhatsApp"
  >
    <MessageCircle className="w-6 h-6  text-orange-600" />
  </a>

  {/* Phone */}
  <a
  href="tel:+918657494046"
  className="group w-14 h-14 sm:w-14  sm:h-14 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-[#1e2532] shadow-lg hover:shadow-xl backdrop-blur-xl text-white hover:scale-110 transition-all duration-300"
  aria-label="Call us directly"
>
  <Phone className="w-6 h-6  " />
</a>

  {/* Back to Top */}
  {showScrollTop && (
    <button
      onClick={scrollToTop}
      className="group w-12 h-12 sm:w-14 sm:h-14 md:w-14 md:h-14 flex items-center justify-center rounded-full              bg-gradient-to-r from-orange-500 to-red-500 
 shadow-lg hover:shadow-xl backdrop-blur-xl text-white hover:scale-110 transition-all duration-300 animate-bounce-in"
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-6 h-6 sm:w-6 sm:h-6 md:w-6 md:h-6" />
      <span className="absolute right-full mr-3 px-3 py-1 bg-background text-foreground text-xs sm:text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none">
        Back to Top
      </span>
    </button>
  )}
</div>


      {/* Footer Section */}
      <footer className="bg-gradient-glass backdrop-blur-xl border-t border-glass-border">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
                  <img src={logo1} alt="NaayaConstruction Logo" className="w-9 h-9 object-contain" />
                </div>
                <span className="text-lg font-bold text-foreground">
                  NaayaConstruction
                </span>
              </div>

              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+91 86574 94046</span>
              </div>

              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a
                  href="mailto:construction@naayatrade.com"
                  className="hover:text-primary transition-colors break-words"
                >
                  construction@naayatrade.com
                </a>
              </div>

              <div className="flex items-start space-x-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="leading-snug max-w-[250px]">
                  Hill View Building, 302, 2, Hill Rd, W, Bandra West, Mumbai, Maharashtra 400050
                </span>
              </div>
            </div>

            {/* Company Links */}
            <div className="space-y-4">
              <h3 className="text-base font-semibold text-foreground">Company</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
                <li><Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
                                <li><Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms & Conditions</Link></li>

                <li><a href="http://naayaconstruction.blog/" className="text-muted-foreground hover:text-primary transition-colors">Blogs & Insights</a></li>
              </ul>
            </div>

            {/* Products Links */}
            <div className="space-y-4">
              <h3 className="text-base font-semibold text-foreground">Products</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="/products?category=mild-steel" className="text-muted-foreground hover:text-primary transition-colors">Mild Steel</Link></li>
                <li><Link to="/products?category=stainless-steel" className="text-muted-foreground hover:text-primary transition-colors">Stainless Steel</Link></li>
                <li><Link to="/products?category=construction" className="text-muted-foreground hover:text-primary transition-colors">Construction Materials</Link></li>
                <li><Link to="/products?category=electrical" className="text-muted-foreground hover:text-primary transition-colors">Electrical Materials</Link></li>
              </ul>
            </div>

            {/* Contact Links */}
            <div className="space-y-4">
              <h3 className="text-base font-semibold text-foreground">Support</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="mailto:construction@naayatrade.com" className="text-muted-foreground hover:text-primary transition-colors">Email Us</a></li>
                <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Page</Link></li>
                <li><a href="https://wa.me/918657494046" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">WhatsApp Support</a></li>
                <li><Link to="/FAQ" className="text-muted-foreground hover:text-primary transition-colors">FAQs</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t border-glass-border text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} NaayaConstruction. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
