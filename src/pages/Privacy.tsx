import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Lock, Eye, UserCheck, FileText, AlertTriangle } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background py-10 sm:py-16">
      {/* Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-6 sm:p-8 md:p-10 space-y-8">
          {/* Preamble */}
          <section>
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">Preamble: Our Commitment to Privacy</h2>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              We, at Naayatrade, understand the critical importance of privacy and data security in 
              the B2B construction sector. Our commitment is to protect the personal and 
              proprietary information of our clients, partners, and website visitors. This Privacy 
              Policy outlines our practices regarding the collection, use, and protection of 
              information in a manner that respects the professional and confidential nature of 
              our business relationships.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">1. Information We Collect: Tailored to the B2B Construction Context</h2>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
              In the course of providing our services and operating our website, we may collect 
              information that is specifically relevant to B2B operations. This includes, but is not 
              limited to:
            </p>
            
            <div className="space-y-4 sm:space-y-6">
              {/* Cards */}
              <div className="glass-card-premium p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 flex items-center space-x-2">
                  <UserCheck className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                  <span>Professional and Company Information:</span>
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  We collect data necessary for business transactions, such as company name, business address, professional contact 
                  details (name, job title, email address, phone number), and tax identification 
                  numbers. This is distinct from personal consumer information and is used for 
                  contract management, invoicing, and service delivery.
                </p>
              </div>

              <div className="glass-card-premium p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 flex items-center space-x-2">
                  <FileText className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                  <span>Project-Specific Data:</span>
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  To provide accurate quotes, project management, and 
                  material supply services, we may collect information related to specific 
                  construction projects. This could include project name, location, blueprints or 
                  schematics, project timelines, and material specifications. We treat this data with the highest level 
                  of confidentiality.
                </p>
              </div>

              <div className="glass-card-premium p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 flex items-center space-x-2">
                  <Lock className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                  <span>Website Usage and Analytics:</span>
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  We use standard web analytics tools to understand how our website is used by business professionals. This includes IP 
                  addresses (anonymized where possible), browser type, referring pages, and 
                  time spent on our site.
                </p>
              </div>

              <div className="glass-card-premium p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 flex items-center space-x-2">
                  <AlertTriangle className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                  <span>B2B Communications and Inquiries:</span>
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  When you contact us through forms, email, or phone, we retain the content of those communications along with your 
                  contact information. This is essential for providing customer support and maintaining a record of our business dialogue.
                </p>
              </div>
            </div>
          </section>

          {/* The rest of the sections can follow the same pattern */}
          {/* Make sure to replace all fixed margins like m-20 with responsive padding */}
          {/* Example: */}
          <section>
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Lock className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">2. How We Use Your Information</h2>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
              The information we collect is not for marketing to individuals but for the legitimate 
              purposes of our B2B operations. We use your data to facilitate transactions, support projects, and ensure legal compliance.
            </p>
          </section>

          {/* Contact Section */}
          <section className="glass-card-premium p-4 sm:p-6 bg-gradient-subtle">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">Contact Us</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="space-y-1 sm:space-y-2 text-sm sm:text-base text-muted-foreground">
              <p><strong>Email:</strong> construction@naayatrade.com</p>
              <p><strong>Phone:</strong> +91 70390 47070</p>
              <p><strong>Address:</strong> Hill View Apartments, 302, 2, Hill Rd, W, Bandra West, Mumbai, Maharashtra 400050</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Privacy;
