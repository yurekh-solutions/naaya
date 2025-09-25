import { Link } from "react-router-dom";
import { ArrowLeft, FileText, Shield, AlertTriangle, Scale, Truck, CreditCard, UserCheck } from "lucide-react";
import { useState, useEffect } from "react";

const Terms = () => {
      const [step, setStep] = useState(1);
  
   useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, [step]);

  return (
    <div className="min-h-screen bg-background py-10 sm:py-16">
      {/* Header / Hero */}
      <header className="text-center mb-10 sm:mb-16">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <FileText className="w-10 h-10 text-white bg-gradient-primary p-2 rounded-lg" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Terms & Conditions
          </h1>
        </div>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Welcome to NaayaConstruction. Please read these Terms & Conditions carefully as they govern your access to our B2B services and website.
        </p>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="space-y-8">
          {/* Preamble */}
          <section>
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <FileText className="w-10 h-10 text-white bg-gradient-primary p-2 rounded-lg" />
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                Preamble: Agreement to Our Business Terms
              </h2>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Welcome to NaayaTrade ("Naayatrade.com"), owned by Naaya Business Ventures Pvt. Ltd. By accessing or using this Website, you agree to be bound by these Terms & Conditions. If you do not agree, do not use this Website.
            </p>
          </section>

          {/* Scope of Services */}
          <section>
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <UserCheck className="w-10 h-10 text-white bg-gradient-primary p-2 rounded-lg" />
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                1. Scope of Services and B2B Relationship
              </h2>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              This Website is for B2B use only. Our services and information are for commercial purposes in construction, engineering, and architectural industries. Contracts are subject to these T&Cs or any signed agreements.
            </p>
          </section>

          {/* Intellectual Property */}
          <section>
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <Shield className="w-10 h-10 text-white bg-gradient-primary p-2 rounded-lg" />
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                2. Intellectual Property & Confidentiality
              </h2>
            </div>

            <div className="space-y-6">
              <div className="p-4 sm:p-6 glass rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center space-x-2">
                  <Shield className="w-10 h-10 text-primary" />
                  <span>Our Intellectual Property</span>
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  All content, including text, graphics, logos, images, and software, belongs to NaayaTrade or its licensors and is protected by law.
                </p>
              </div>

              <div className="p-4 sm:p-6 glass rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center space-x-2">
                  <AlertTriangle className="w-10 h-10 text-primary" />
                  <span>Client Proprietary Information</span>
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Confidential or proprietary project-specific information uploaded by clients is protected and handled per our Privacy Policy and NDAs.
                </p>
              </div>
            </div>
          </section>

          {/* Order & Payment */}
          {/* Order & Payment */}
<section>
  <div className="flex items-center space-x-3 mb-4 sm:mb-6">
    <CreditCard className="w-6 h-6 sm:w-8 sm:h-8 text-white bg-gradient-primary p-2 rounded-lg" />
    <h2 className="text-xl sm:text-2xl font-bold text-foreground">
      3. Order Placement, Payments & Invoicing
    </h2>
  </div>

  <div className="space-y-4 sm:space-y-6">
    {/* Order Process */}
    <div className="p-4 sm:p-6 glass rounded-lg flex items-start space-x-3">
      <span className="text-primary mt-1 sm:mt-2 text-lg sm:text-xl">•</span>
      <div>
        <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-1">Order Process</h3>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          Orders are offers to purchase. Binding occurs upon formal confirmation. We may refuse orders at our discretion.
        </p>
      </div>
    </div>

    {/* Pricing */}
    <div className="p-4 sm:p-6 glass rounded-lg flex items-start space-x-3">
      <span className="text-primary mt-1 sm:mt-2 text-lg sm:text-xl">•</span>
      <div>
        <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-1">Pricing</h3>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          All prices are exclusive of taxes and shipping unless stated. Customized services are quoted separately.
        </p>
      </div>
    </div>

    {/* Payment Terms */}
    <div className="p-4 sm:p-6 glass rounded-lg flex items-start space-x-3">
      <span className="text-primary mt-1 sm:mt-2 text-lg sm:text-xl">•</span>
      <div>
        <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-1">Payment Terms</h3>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          Payment terms follow invoices. Late payments may incur interest and suspension of services.
        </p>
      </div>
    </div>
  </div>
</section>


          {/* Delivery, Liability, Law */}
          {/* Repeat similar structure with Truck, AlertTriangle, Scale icons */}

          {/* Contact Information */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
              Contact Information
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
              For any questions regarding these Terms & Conditions, please contact us:
            </p>
            <div className="space-y-1 sm:space-y-2 text-sm sm:text-base text-muted-foreground">
              <p><strong>Company:</strong> Naaya Business Ventures Pvt. Ltd.</p>
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

export default Terms;
