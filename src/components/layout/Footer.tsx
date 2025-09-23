import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-glass backdrop-blur-xl border-t border-glass-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">N</span>
              </div>
              <span className="text-lg font-bold text-foreground">NaayaConstruction</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Embrace the future of Construction Material Procurement with AI-powered solutions.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>+91 84250 47309</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span>info@naayaconstruction.com</span>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Products Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products?category=mild-steel" className="text-muted-foreground hover:text-primary transition-colors">
                  Mild Steel
                </Link>
              </li>
              <li>
                <Link to="/products?category=stainless-steel" className="text-muted-foreground hover:text-primary transition-colors">
                  Stainless Steel
                </Link>
              </li>
              <li>
                <Link to="/products?category=construction" className="text-muted-foreground hover:text-primary transition-colors">
                  Construction Materials
                </Link>
              </li>
              <li>
                <Link to="/products?category=electrical" className="text-muted-foreground hover:text-primary transition-colors">
                  Electrical Materials
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Email Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Page
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  WhatsApp Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-glass-border text-center text-sm text-muted-foreground">
          <p>&copy; 2024 NaayaConstruction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;