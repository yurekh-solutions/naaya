import { Link } from "react-router-dom";
import { ArrowLeft, FileText, Shield, AlertTriangle, Scale, Truck, CreditCard, UserCheck } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
   

      {/* Content */}
      <main className="container mx-auto px-6 py-12 max-w-6xl mt-5">
        {/* Hero Section */}
       
        {/* Content */}
        <div className="glass-card p-8 space-y-8">
          {/* Preamble */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Preamble: Agreement to Our Business Terms</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Welcome to NaayaTrade (the "Naayatrade.com"). This website is owned and operated by 
              Naaya Business Ventures Pvt. Ltd., a company specializing in construction materials, project 
              management software, engineering services. By accessing or using this Website, you, as a 
              business entity or a representative of a business entity ("Client," "You," or "Your"), agree to 
              be bound by these Terms and Conditions ("T&Cs"). These T&Cs govern your use of our 
              Website and all related services, content, and transactions. If you do not agree with any part 
              of these T&Cs, you must not use our Website.
            </p>
          </section>

          {/* Scope of Services */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <UserCheck className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">1. Scope of Services and B2B Relationship</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              This Website is intended for B2B use only. The services, products, and information provided 
              are for commercial purposes related to the construction, engineering, and architectural 
              industries. Our relationship with you is that of a business-to-business supplier or service 
              provider, not a consumer relationship. Any purchase order, contract, or agreement initiated 
              through this Website shall be subject to these T&Cs and any separate, written, and executed 
              Master Service Agreement or Purchase Agreement. In the event of a conflict, the terms of 
              any signed, executed agreement will prevail.
            </p>
          </section>

          {/* Intellectual Property */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">2. Intellectual Property and Confidentiality</h2>
            </div>
            
            <div className="space-y-6">
              <div className="glass-card-premium p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-primary" />
                  <span>Our Intellectual Property:</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  All content on this Website, including but not limited to text, 
                  graphics, logos, images, software, and proprietary information, is the property of 
                  NaayaTrade or its licensors and is protected by copyright, trademark, and other 
                  intellectual property laws. You may not reproduce, distribute, or create derivative 
                  works from our content without our express written permission.
                </p>
              </div>

              <div className="glass-card-premium p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center space-x-2">
                  <AlertTriangle className="w-5 h-5 text-primary" />
                  <span>Client Proprietary Information:</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  As a construction B2B platform, we may receive or you 
                  may upload confidential or proprietary project-specific information, such as blueprints, 
                  schematics, and project specifications. We are committed to protecting this information 
                  and will handle it in accordance with our Privacy Policy and any specific Non-Disclosure 
                  Agreement (NDA) that may be in place. By uploading such information, you warrant 
                  that you have the right to do so and grant us a limited, non-exclusive license to use it 
                  solely for the purpose of providing the agreed-upon services.
                </p>
              </div>
            </div>
          </section>

          {/* Order and Payment */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">3. Order Placement, Payments, and Invoicing</h2>
            </div>
            
            <div className="space-y-6">
              <div className="glass-card-premium p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Order Process:
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  All orders for products or services placed through this Website 
                  constitute an offer to purchase. An order is not binding until we issue a formal written 
                  confirmation or a signed contract. We reserve the right to refuse any order at our sole 
                  discretion.
                </p>
              </div>

              <div className="glass-card-premium p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Pricing:
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  All prices listed are for business transactions and are exclusive of applicable 
                  taxes, shipping, and handling charges, unless otherwise stated. Pricing for customized 
                  or project-based services will be provided via a formal quotation or proposal.
                </p>
              </div>

              <div className="glass-card-premium p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Payment Terms:
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Payment terms are strictly as stated on the invoice. Late payments 
                  may be subject to interest charges and may result in the suspension of services or 
                  delivery of goods. You agree to pay all invoices in full and without set-off, counterclaim, 
                  or deduction unless otherwise agreed upon in writing.
                </p>
              </div>
            </div>
          </section>

          {/* Delivery and Warranty */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Truck className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">4. Delivery, Risk, and Warranty</h2>
            </div>
            
            <div className="space-y-6">
              <div className="glass-card-premium p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Delivery:
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Delivery dates provided are estimates only. While we will make commercially 
                  reasonable efforts to meet these dates, we are not liable for any delays in delivery that 
                  are beyond our control. The risk of loss or damage to products passes to you upon 
                  delivery to the carrier.
                </p>
              </div>

              <div className="glass-card-premium p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Limited Warranty:
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We warrant that products and services supplied through this 
                  Website will be of merchantable quality and will conform to any mutually agreed-upon 
                  specifications. We disclaim all other warranties, express or implied, including, but not 
                  limited to, implied warranties of fitness for a particular purpose or non-infringement.
                </p>
              </div>

              <div className="glass-card-premium p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Defective Goods:
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  If you receive defective goods, you must notify us in writing within 
                  [e.g., 5 business days] of delivery. Our sole obligation and your exclusive remedy for a 
                  breach of this warranty is, at our option, to repair, replace, or issue a credit for the 
                  defective product.
                </p>
              </div>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">5. Limitation of Liability and Indemnification</h2>
            </div>
            
            <div className="space-y-6">
              <div className="glass-card-premium p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Limitation of Liability:
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  In no event shall Naaya Business Ventures Pvt. Ltd, its directors, 
                  employees, or affiliates, be liable to you or any third party for any indirect, 
                  consequential, incidental, special, or punitive damages, including loss of profits, data, or 
                  business opportunities, arising from your use of this Website or the products/services 
                  provided, even if we have been advised of the possibility of such damages. Our total 
                  liability for any claim arising out of or in connection with these T&Cs shall not exceed 
                  the total amount paid by you for the specific products or services giving rise to the claim.
                </p>
              </div>

              <div className="glass-card-premium p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Indemnification:
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to indemnify, defend, and hold harmless [Your Company 
                  Name] from and against any and all claims, damages, losses, liabilities, costs, and 
                  expenses (including reasonable legal fees) arising from your misuse of the Website, 
                  breach of these T&Cs, or any claims related to your specific construction projects or 
                  proprietary information.
                </p>
              </div>
            </div>
          </section>

          {/* Governing Law */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Scale className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">6. Governing Law and Dispute Resolution</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              These T&Cs shall be governed by and construed in accordance with the laws of [Your 
              Jurisdiction, e.g., the State of Maharashtra, India], without regard to its conflict of law 
              provisions. Any dispute, claim, or controversy arising out of or relating to these T&Cs or the 
              breach, termination, enforcement, interpretation, or validity thereof shall be resolved 
              through binding arbitration in Mumbai, in accordance with the rules of The Indian 
              Arbitration and Conciliation Act.
            </p>
          </section>

          {/* Contact Information */}
          <section className="glass-card-premium p-6 bg-gradient-subtle">
            <h2 className="text-2xl font-bold text-foreground mb-4">Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For any questions regarding these Terms & Conditions, please contact us:
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p><strong>Company:</strong> Naaya Business Ventures Pvt. Ltd.</p>
              <p><strong>Email:</strong> construction@naayatrade.com</p>
              <p><strong>Phone:</strong> +91 70390 47070</p>
              <p><strong>Address:</strong> Hill View Apartments, 302, 2, Hill Rd, W, Bandra West, Mumbai, Maharashtra 400050</p>
            </div>
          </section>

          {/* Last Updated */}
          
        </div>
      </main>
    </div>
  );
};

export default Terms;