import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Lock, Eye, UserCheck, FileText, AlertTriangle } from "lucide-react";

const Privacy = () => {
    const [step, setStep] = useState(1);
  
   useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, [step]);
  return (
    <div className="min-h-screen bg-background py-10 sm:py-16">
      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <header className="text-center mb-10 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            At NaayaConstruction, your privacy is our priority. We are committed to protecting
            your information in the B2B construction sector.
          </p>
        </header>

        <div className="glass p-6 sm:p-8 md:p-10 space-y-8">
          {/* Preamble */}
          <section>
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                Preamble: Our Commitment to Privacy
              </h2>
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
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                1. Information We Collect
              </h2>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
              In the course of providing our services and operating our website, we may collect 
              information that is specifically relevant to B2B operations. This includes, but is not 
              limited to:
            </p>

            <div className="space-y-4 sm:space-y-6">
              {/* Professional Info Card */}
              <div className="glass p-4 sm:p-6 rounded-lg">
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 flex items-center space-x-2">
                  <UserCheck className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                  <span>Professional and Company Information</span>
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Data necessary for business transactions, such as company name, address, professional 
                  contact details, and tax identification numbers.
                </p>
              </div>

              {/* Project-Specific Data */}
              <div className="glass p-4 sm:p-6 rounded-lg">
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 flex items-center space-x-2">
                  <FileText className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                  <span>Project-Specific Data</span>
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Includes project name, location, blueprints, timelines, and material specifications.
                </p>
              </div>

              {/* Website Analytics */}
              <div className="glass p-4 sm:p-6 rounded-lg">
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 flex items-center space-x-2">
                  <Lock className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                  <span>Website Usage and Analytics</span>
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Standard web analytics to understand site usage by professionals, including anonymized IP addresses, browser type, and referring pages.
                </p>
              </div>

              {/* B2B Communications */}
              <div className="glass p-4 sm:p-6 rounded-lg">
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 flex items-center space-x-2">
                  <AlertTriangle className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                  <span>B2B Communications and Inquiries</span>
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Records of communications via forms, email, or phone for customer support and business dialogue.
                </p>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section>
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Lock className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                2. How We Use Your Information
              </h2>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
              The information we collect is used for legitimate B2B purposes: facilitating transactions, supporting projects, and ensuring legal compliance.
            </p>
          </section>

          {/* Contact Section */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">Contact Us</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
              For questions about this Privacy Policy, contact us:
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
