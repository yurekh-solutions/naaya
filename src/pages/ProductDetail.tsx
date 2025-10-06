import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Plus } from "lucide-react";
import { useRFQStore } from "@/stores/rfqStore";
import { useToast } from "@/hooks/use-toast";
import { allProducts } from "@/data/products";

// Helper functions for enhanced product information
const getProductDescription = (product: any) => {
  const descriptions: { [key: string]: string } = {
    "Mild Steel": `${product.name} are premium quality mild steel products manufactured to the highest industry standards. These versatile steel products offer excellent strength, durability, and workability, making them ideal for a wide range of construction and industrial applications. Our mild steel products undergo rigorous quality testing to ensure consistent performance and reliability.`,
    "Stainless Steel": `${product.name} feature superior corrosion resistance and exceptional durability. Made from high-grade stainless steel alloys, these products maintain their appearance and structural integrity even in harsh environments. Perfect for applications requiring hygiene, chemical resistance, and long-term performance.`,
    "Construction Materials": `${product.name} are essential building materials that meet all construction industry standards. These materials are carefully selected and tested to ensure optimal performance, safety, and longevity in various construction projects from residential to commercial and industrial applications.`,
    "Electrical Materials": `${product.name} are high-quality electrical components designed for safe and reliable electrical installations. These products comply with all relevant electrical standards and regulations, ensuring optimal performance and safety in electrical systems and installations.`
  };
  return descriptions[product.category] || product.description || `High-quality ${product.name} for industrial and construction applications.`;
};

const getProductApplications = (product: any) => {
  const applications: { [key: string]: string[] } = {
    "Mild Steel": ["Construction & Infrastructure", "Automotive Industry", "Manufacturing & Fabrication", "Structural Engineering"],
    "Stainless Steel": ["Food & Beverage Industry", "Chemical Processing", "Marine Applications", "Architectural Projects"],
    "Construction Materials": ["Residential Construction", "Commercial Buildings", "Infrastructure Projects", "Renovation Work"],
    "Electrical Materials": ["Power Distribution", "Industrial Wiring", "Residential Electrical", "Control Systems"]
  };
  return applications[product.category] || ["Industrial Use", "Construction", "Manufacturing", "General Purpose"];
};

const getProductFeatures = (product: any) => {
  const features: { [key: string]: string[] } = {
    "Mild Steel": ["High Tensile Strength", "Easy to Weld", "Cost Effective", "Durable Finish"],
    "Stainless Steel": ["Corrosion Resistant", "Easy to Clean", "Temperature Resistant", "Long Lasting"],
    "Construction Materials": ["Weather Resistant", "High Durability", "Standard Compliant", "Quality Tested"],
    "Electrical Materials": ["Safety Certified", "High Conductivity", "Fire Resistant", "Standard Compliant"]
  };
  return features[product.category] || ["High Quality", "Reliable", "Durable", "Cost Effective"];
};

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [brand, setBrand] = useState("");
  const [material, setMaterial] = useState("");
  const { addItem } = useRFQStore();
  const { toast } = useToast();

  const product = allProducts.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center animate-fade-in px-4">
        <GlassCard className="p-6 sm:p-8 text-center max-w-md w-full">
          <h1 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Product Not Found</h1>
          <Button onClick={() => navigate('/products')} className="bg-gradient-primary w-full sm:w-auto">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Button>
        </GlassCard>
      </div>
    );
  }

  const handleAddToRFQ = () => {
    addItem({
      id: `${product.id}-${Date.now()}`,
      name: product.name,
      category: product.category,
      brand: brand || "N/A",
      material: material || "N/A",
      quantity,
      image: product.image
    });

    toast({
      title: "Added to RFQ",
      description: `${product.name} has been added to your RFQ cart.`,
    });

    setQuantity(1);
    setBrand("");
    setMaterial("");
  };

  const isAddDisabled = !brand || !material;

  return (
    <div className="min-h-screen bg-background py-4 sm:py-6 lg:py-8 animate-fade-in">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Back Button */}
        <div className="mb-4 sm:mb-6 animate-slide-in-left">
          <Button 
            variant="outline" 
            onClick={() => navigate('/products')}
            className="glass-card border-glass-border hover:bg-primary/10 hover-scale w-full sm:w-auto text-sm sm:text-base"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Button>
        </div>

        {/* Product Detail Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {/* Left Column - Product Image and Description */}
          <div className="space-y-4 sm:space-y-6">
            {/* Product Image */}
            <GlassCard className="p-0 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[410px] object-cover transition-transform duration-700"
                loading="lazy"
              />
            </GlassCard>

            <GlassCard variant="premium" className="p-4 sm:p-6">
              <div className="text-center sm:text-left">
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">
                  {product.name}
                </h1>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-sm sm:text-base px-3 sm:px-4 py-1 sm:py-2">
                  {product.category}
                </Badge>
              </div>
            </GlassCard>

            {/* Product Specifications */}
            <GlassCard className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-4 sm:mb-6 flex items-center">
                <span className="w-1 h-5 sm:h-6 bg-gradient-primary rounded-full mr-2 sm:mr-3"></span>
                Product Specifications
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-gradient-secondary/10 rounded-lg p-3 sm:p-4 border border-glass-border hover-scale">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                    <span className="text-muted-foreground font-medium text-sm sm:text-base">Category</span>
                    <Badge variant="secondary" className="self-start sm:self-center bg-primary/10 text-primary border-primary/20 hover-scale text-xs sm:text-sm">
                      {product.category}
                    </Badge>
                  </div>
                </div>
                <div className="bg-gradient-secondary/10 rounded-lg p-3 sm:p-4 border border-glass-border hover-scale animate-fade-in">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                    <span className="text-muted-foreground font-medium text-sm sm:text-base">Availability</span>
                    <span className="font-semibold text-success bg-success/10 px-2 sm:px-3 py-1 rounded-md self-start sm:self-center hover-scale animate-pulse text-xs sm:text-sm">
                      In Stock
                    </span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Right Column - Product Info and Order Form */}
          <div className="space-y-4 sm:space-y-6">
            {/* Product Header */}
            <GlassCard className="p-4 sm:p-6">
              <h2 className="text-base sm:text-lg lg:text-xl font-bold text-foreground mb-3 sm:mb-4 flex items-center">
                <span className="w-1 h-5 sm:h-6 bg-gradient-primary rounded-full mr-2 sm:mr-3"></span>
                Product Description
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                {getProductDescription(product)}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gradient-secondary/20 rounded-lg p-3 sm:p-4 border border-glass-border">
                  <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Applications</h4>
                  <ul className="text-xs sm:text-sm space-y-1">
                    {getProductApplications(product).map((app, index) => (
                      <li key={index} className="flex items-start animate-fade-in" style={{ animationDelay: `${0.6 + index * 0.1}s` }}>
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-1.5 animate-pulse flex-shrink-0"></span>
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-secondary/20 rounded-lg p-3 sm:p-4 border border-glass-border">
                  <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Features</h4>
                  <ul className="text-xs sm:text-sm space-y-1">
                    {getProductFeatures(product).map((feature, index) => (
                      <li key={index} className="flex items-start animate-fade-in" style={{ animationDelay: `${0.8 + index * 0.1}s` }}>
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2 mt-1.5 animate-pulse flex-shrink-0"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </GlassCard>

            {/* Order Form */}
            <GlassCard variant="premium" className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-4 sm:mb-6 flex items-center">
                <span className="w-1 h-5 sm:h-6 bg-gradient-primary rounded-full mr-2 sm:mr-3"></span>
                Request Quote
              </h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="animate-fade-in">
                  <Label htmlFor="brand" className="text-foreground font-medium flex items-center mb-2 text-sm sm:text-base">
                    Select Brand <span className="text-destructive ml-1">*</span>
                  </Label>
                  <Select value={brand} onValueChange={setBrand}>
                    <SelectTrigger className="bg-transparent border-glass-border h-10 sm:h-12 text-sm sm:text-base hover:border-primary/50">
                      <SelectValue placeholder="Choose a preferred brand" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border-glass-border">
                      <SelectItem value="tata" className="hover-scale text-sm sm:text-base">TATA Steel</SelectItem>
                      <SelectItem value="sail" className="hover-scale text-sm sm:text-base">SAIL</SelectItem>
                      <SelectItem value="jsw" className="hover-scale text-sm sm:text-base">JSW Steel</SelectItem>
                      <SelectItem value="jindal" className="hover-scale text-sm sm:text-base">Jindal Steel</SelectItem>
                      <SelectItem value="essar" className="hover-scale text-sm sm:text-base">Essar Steel</SelectItem>
                      <SelectItem value="other" className="hover-scale text-sm sm:text-base">Other Brand</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="animate-fade-in">
                  <Label htmlFor="material" className="text-foreground font-medium flex items-center mb-2 text-sm sm:text-base">
                    Select Material Grade <span className="text-destructive ml-1">*</span>
                  </Label>
                  <Select value={material} onValueChange={setMaterial}>
                    <SelectTrigger className="bg-transparent border-glass-border h-10 sm:h-12 text-sm sm:text-base hover:border-primary/50">
                      <SelectValue placeholder="Choose material specification" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border-glass-border">
                      <SelectItem value="is2062-a" className="hover-scale text-sm sm:text-base">IS2062 Grade A</SelectItem>
                      <SelectItem value="is2062-b" className="hover-scale text-sm sm:text-base">IS2062 Grade B</SelectItem>
                      <SelectItem value="is2062-c" className="hover-scale text-sm sm:text-base">IS2062 Grade C</SelectItem>
                      <SelectItem value="ss316" className="hover-scale text-sm sm:text-base">SS316 (Marine Grade)</SelectItem>
                      <SelectItem value="ss304" className="hover-scale text-sm sm:text-base">SS304 (Food Grade)</SelectItem>
                      <SelectItem value="ss201" className="hover-scale text-sm sm:text-base">SS201 (General Purpose)</SelectItem>
                      <SelectItem value="custom" className="hover-scale text-sm sm:text-base">Custom Specification</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="quantity" className="text-foreground font-medium mb-2 block text-sm sm:text-base">
                    Quantity (Metric Tons)
                  </Label>
                  <Input
                    id="quantity"
                    type="number"
                    min="1"
                    max="10000"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    className="bg-transparent border-glass-border h-10 sm:h-12 text-sm sm:text-base hover:border-primary/50"
                    placeholder="Enter required quantity"
                  />
                  <p className="text-xs text-muted-foreground mt-1">Minimum order quantity: 1 MT</p>
                </div>
              </div>
              <Button
                onClick={handleAddToRFQ}
                className="w-full mt-4 sm:mt-6 bg-gradient-primary hover:shadow-glow text-sm sm:text-base font-semibold h-10 sm:h-12 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isAddDisabled}
              >
                <Plus className="h-4 w-4 mr-2" />
                {isAddDisabled ? "Please complete all required fields" : "Add to RFQ Cart"}
              </Button>
              <p className="text-xs text-center text-muted-foreground mt-2 sm:mt-3 animate-fade-in">
                Get instant quotes from verified suppliers across World
              </p>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
