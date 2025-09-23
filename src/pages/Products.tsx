import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import { useRFQStore } from "@/stores/rfqStore";
import { useToast } from "@/hooks/use-toast";
import { allProducts, Product } from "@/data/products";

const shuffleArray = (array: Product[]): Product[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [brand, setBrand] = useState("");
  const [material, setMaterial] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { addItem } = useRFQStore();
  const { toast } = useToast();

  const categories = [
    "All",
    "Mild Steel", 
    "Stainless Steel",
    "Construction Materials",
    "Electrical Materials"
  ];

  const productsPerPage = 12;

  // Filter + Shuffle products
  const filteredProducts = useMemo(() => {
    const products = selectedCategory === "All" 
      ? allProducts 
      : allProducts.filter(product => product.category === selectedCategory);
    return shuffleArray(products);
  }, [selectedCategory]);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToPrevPage = () => {
    if (currentPage > 1) goToPage(currentPage - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) goToPage(currentPage + 1);
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const handleAddToRFQ = () => {
    if (!selectedProduct) return;

    addItem({
      id: `${selectedProduct.id}-${Date.now()}`,
      name: selectedProduct.name,
      category: selectedProduct.category,
      brand: brand || "N/A",
      material: material || "N/A",
      quantity,
      image: selectedProduct.image
    });

    toast({
      title: "Added to RFQ",
      description: `${selectedProduct.name} has been added to your RFQ cart.`,
    });

    setSelectedProduct(null);
    setQuantity(1);
    setBrand("");
    setMaterial("");
  };
  const isAddDisabled = !brand || !material;

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="bg-gradient-primary rounded-lg py-20 mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Our Products
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Discover our collection of premium products crafted with excellence
            </p>
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
            >
              Explore Collection
            </Button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => handleCategoryChange(category)}
              className={selectedCategory === category 
                ? "bg-gradient-primary hover:shadow-glow" 
                : "bg-glass-bg border-glass-border hover:bg-primary/10"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Subtitle & Stats */}
        <div className="text-center mb-8">
          <p className="text-lg text-muted-foreground">
            Order Ferrous and Non-Ferrous commodities
          </p>
          <p className="text-sm text-muted-foreground mb-4">
            Add any commodity you want to enquire about and get instant quotations.
          </p>
          <div className="flex justify-center items-center gap-6 text-sm">
            <span className="text-muted-foreground">
              Showing {startIndex + 1}-{Math.min(endIndex, filteredProducts.length)} of {filteredProducts.length} products
            </span>
            <span className="text-muted-foreground">
              Page {currentPage} of {totalPages}
            </span>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentProducts.map((product) => (
            <GlassCard key={product.id} className="group hover:shadow-elevation transition-all duration-300">
              <div className="aspect-square bg-gradient-secondary rounded-t-lg overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="secondary" 
                        size="sm"
                        onClick={() => setSelectedProduct(product)}
                        className="bg-white/90 text-primary"
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </DialogTrigger>
                  </Dialog>
                </div>
              </div>
              
              <div className="p-4 space-y-3">
                <div>
                  <h3 className="font-semibold text-foreground text-sm">{product.name}</h3>
                  <Badge variant="secondary" className="mt-1">
                    {product.category}
                  </Badge>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full bg-glass-bg border-glass-border hover:bg-primary/10"
                  onClick={() => setSelectedProduct(product)}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add to RFQ
                </Button>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12">
            <GlassCard className="p-6">
              <div className="flex items-center justify-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={goToPrevPage}
                  disabled={currentPage === 1}
                  className="bg-glass-bg border-glass-border disabled:opacity-50"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                <div className="flex items-center space-x-1">
                  {getPageNumbers()[0] > 1 && (
                    <>
                      <Button
                        variant={1 === currentPage ? "default" : "outline"}
                        size="sm"
                        onClick={() => goToPage(1)}
                        className={1 === currentPage
                          ? "bg-gradient-primary"
                          : "bg-glass-bg border-glass-border"
                        }
                      >
                        1
                      </Button>
                      {getPageNumbers()[0] > 2 && (
                        <span className="px-2 text-muted-foreground">...</span>
                      )}
                    </>
                  )}

                  {getPageNumbers().map((pageNum) => (
                    <Button
                      key={pageNum}
                      variant={pageNum === currentPage ? "default" : "outline"}
                      size="sm"
                      onClick={() => goToPage(pageNum)}
                      className={pageNum === currentPage
                        ? "bg-gradient-primary"
                        : "bg-glass-bg border-glass-border"
                      }
                    >
                      {pageNum}
                    </Button>
                  ))}

                  {getPageNumbers()[getPageNumbers().length - 1] < totalPages && (
                    <>
                      {getPageNumbers()[getPageNumbers().length - 1] < totalPages - 1 && (
                        <span className="px-2 text-muted-foreground">...</span>
                      )}
                      <Button
                        variant={totalPages === currentPage ? "default" : "outline"}
                        size="sm"
                        onClick={() => goToPage(totalPages)}
                        className={totalPages === currentPage
                          ? "bg-gradient-primary"
                          : "bg-glass-bg border-glass-border"
                        }
                      >
                        {totalPages}
                      </Button>
                    </>
                  )}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages}
                  className="bg-glass-bg border-glass-border disabled:opacity-50"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="text-center mt-4 text-sm text-muted-foreground">
                Go to page:{" "}
                <Input
                  type="number"
                  min="1"
                  max={totalPages}
                  value={currentPage}
                  onChange={(e) => {
                    const page = parseInt(e.target.value);
                    if (page >= 1 && page <= totalPages) {
                      goToPage(page);
                    }
                  }}
                  className="inline-block w-16 mx-2 text-center bg-glass-bg border-glass-border"
                />
                of {totalPages}
              </div>
            </GlassCard>
          </div>
        )}

        {/* Product Detail Modal */}
        <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
          <DialogContent className="max-w-2xl bg-gradient-glass backdrop-blur-xl border-glass-border">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-foreground">
                {selectedProduct?.name}
              </DialogTitle>
            </DialogHeader>
            
            {selectedProduct && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="aspect-square bg-gradient-secondary rounded-lg overflow-hidden mt-4">
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Description</h3>
                    <p className="text-muted-foreground">
                      {selectedProduct.name} are high-quality steel products used in various 
                      industries including construction, automotive, and fabrication.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="brand">Select Brand</Label>
                      <Select value={brand} onValueChange={setBrand}>
                        <SelectTrigger className="bg-glass-bg border-glass-border mt-2">
                          <SelectValue placeholder="Choose a brand" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tata">TATA</SelectItem>
                          <SelectItem value="sail">SAIL</SelectItem>
                          <SelectItem value="jsw">JSW</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="material">Select Material</Label>
                      <Select value={material} onValueChange={setMaterial}>
                        <SelectTrigger className="bg-glass-bg border-glass-border mt-2">
                          <SelectValue placeholder="Choose a material" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="is2062-a">IS2062 Grade A</SelectItem>
                          <SelectItem value="is2062-b">IS2062 Grade B</SelectItem>
                          <SelectItem value="ss316">SS316</SelectItem>
                          <SelectItem value="ss304">SS304</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="quantity">Quantity (MT)</Label>
                      <Input
                        id="quantity"
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                        className="bg-glass-bg border-glass-border mt-2"
                      />
                    </div>
                  </div>
                <Button
onClick={handleAddToRFQ}
className="w-full bg-gradient-primary hover:shadow-glow"
disabled={isAddDisabled}
>
Add to RFQ
</Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Products;