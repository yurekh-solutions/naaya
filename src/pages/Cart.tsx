import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Trash2, ArrowLeft, ArrowRight } from "lucide-react";
import { useRFQStore } from "@/stores/rfqStore";
import { useToast } from "@/hooks/use-toast";

const Cart = () => {
  const { items, removeItem, updateQuantity, clearCart } = useRFQStore();
  const [step, setStep] = useState(1);
  const [customerData, setCustomerData] = useState({
    name: "",
    company: "",
    location: "",
    email: "",
    phone: ""
  });
  const { toast } = useToast();

  // Ensure page scrolls to top whenever step changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity > 0) {
      updateQuantity(id, quantity);
    }
  };

  const handleSubmitRFQ = () => {
    if (!customerData.name || !customerData.company || !customerData.location || !customerData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Generate WhatsApp message
    let message = `I need quotation for below materials:\n\n`;
    
    items.forEach((item, index) => {
      message += `${index + 1}. Product: ${item.name}\n`;
      message += `Brand: ${item.brand}\n`;
      message += `Material: ${item.material}\n`;
      message += `Quantity: ${item.quantity} MT\n\n`;
    });

    message += `Customer Details:\n`;
    message += `Name: ${customerData.name}\n`;
    message += `Company: ${customerData.company}\n`;
    message += `Location: ${customerData.location}\n`;
    message += `Email: ${customerData.email || 'Not provided'}\n`;
    message += `Phone: ${customerData.phone}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=918425047309&text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    clearCart();
    toast({
      title: "RFQ Submitted",
      description: "Your request has been sent via WhatsApp. We'll get back to you soon!",
    });
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background py-8 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <GlassCard className="max-w-md mx-auto p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Your RFQ Cart is Empty</h2>
            <p className="text-muted-foreground mb-6">
              Add some products to your RFQ to get started with your quotation request.
            </p>
            <Button asChild className="bg-gradient-primary">
              <Link to="/products">Browse Products</Link>
            </Button>
          </GlassCard>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Request for Quotation - Step {step} of 2
          </h1>
          <div className="flex items-center space-x-4">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              step >= 1 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
            }`}>
              1
            </div>
            <div className={`flex-1 h-1 ${step >= 2 ? 'bg-primary' : 'bg-muted'}`} />
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              step >= 2 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
            }`}>
              2
            </div>
          </div>
        </div>

        {step === 1 && (
          <div className="space-y-6">
            <div className="space-y-4">
              {items.map((item) => (
                <GlassCard key={item.id} className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">Brand: {item.brand}</p>
                      <p className="text-sm text-muted-foreground">Material: {item.material}</p>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                          className="w-20 bg-glass-bg border-glass-border"
                        />
                        <span className="text-sm text-muted-foreground">MT</span>
                      </div>
                      
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item.id)}
                        className="text-destructive hover:text-destructive hover:bg-destructive/10"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>

            <div className="flex justify-between">
              <Button variant="outline" onClick={clearCart} className="bg-glass-bg border-glass-border">
                Clear Cart
              </Button>
              <Button 
                onClick={() => setStep(2)}
                className="bg-gradient-primary"
              >
                Next
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <GlassCard className="p-6">
              <h2 className="text-xl font-semibold text-foreground mb-6">Customer Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={customerData.name}
                    onChange={(e) => setCustomerData({ ...customerData, name: e.target.value })}
                    className="bg-glass-bg border-glass-border mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="company">Company *</Label>
                  <Input
                    id="company"
                    placeholder="Your company name"
                    value={customerData.company}
                    onChange={(e) => setCustomerData({ ...customerData, company: e.target.value })}
                    className="bg-glass-bg border-glass-border mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="location">Delivery Location *</Label>
                  <Input
                    id="location"
                    placeholder="Delivery location"
                    value={customerData.location}
                    onChange={(e) => setCustomerData({ ...customerData, location: e.target.value })}
                    className="bg-glass-bg border-glass-border mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    value={customerData.email}
                    onChange={(e) => setCustomerData({ ...customerData, email: e.target.value })}
                    className="bg-glass-bg border-glass-border mt-2"
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    id="phone"
                    placeholder="Your phone number"
                    value={customerData.phone}
                    onChange={(e) => setCustomerData({ ...customerData, phone: e.target.value })}
                    className="bg-glass-bg border-glass-border mt-2"
                  />
                </div>
              </div>
            </GlassCard>

            <div className="flex justify-between">
              <Button 
                variant="outline" 
                onClick={() => setStep(1)}
                className="bg-glass-bg border-glass-border"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Cart
              </Button>
              <Button 
                onClick={handleSubmitRFQ}
                className="bg-gradient-primary hover:shadow-glow"
              >
                Submit RFQ
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;