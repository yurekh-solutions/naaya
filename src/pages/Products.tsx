import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Plus, Eye, ChevronLeft, ChevronRight, Search } from "lucide-react";
import { allProducts, Product } from "@/data/products";
import heroBg from "@/assets/hero-bg-orange.jpg";
import AnimatedBackground from "@/components/AnimatedBackground";

const shuffleArray = (array: Product[]): Product[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const Products = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [step, setStep] = useState(1);

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
    let products = selectedCategory === "All" 
      ? allProducts 
      : allProducts.filter(product => product.category === selectedCategory);

    if (searchQuery.trim()) {
      products = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return shuffleArray(products);
  }, [selectedCategory, searchQuery]);

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

  const handleViewProduct = (product: Product) => {
    navigate(`/product/${product.id}`);
  };
useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);
  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Header with Background Image */}
      <div 
        className="min-h-[700px] flex items-center justify-center relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        {/* Reduced overlay opacity to 70% so image is more visible */}
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        
        {/* Animated Background Effects */}
        <AnimatedBackground />
        
        <div className="text-center px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-up-fade">
              Our Products
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl mt-10 text-white/90 mb-8 max-w-3xl mx-auto animate-slide-up-fade animation-delay-200">
              Discover our collection of premium construction materials crafted with excellence
            </p>
            <div className="flex justify-center animate-slide-up-fade animation-delay-400">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })}
                className="glass-card border-glass-border text-white px-8 py-4 text-lg font-semibold rounded-full
                          hover:bg-primary/20 hover:border-primary/30 interactive-hover
                          transition-all duration-300 hover:shadow-glow backdrop-blur-xl"
              >
                Explore Collection
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Search Bar */}
        

        {/* Category Tabs */}
       {/* Search + Categories Section */}
       <div className="text-center mb-8 space-y-4">
          <h2 className="text-2xl sm:text-4xl lg:text-4xl font-bold text-foreground animate-fade-in">
            Order Ferrous and Non-Ferrous Commodities
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-200">
            Add any commodity you want to enquire about and get instant quotations.
          </p>
        </div>
<div className="max-w-2xl mx-auto w-full space-y-6 mb-12">
  
  {/* Search Bar */}
  <div className="relative">
    <Input
      type="text"
      placeholder="Search products"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="pl-12 pr-4 w-full bg-transparent border-glass-border text-foreground placeholder:text-muted-foreground"
    />
    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
  </div>

  {/* Category Tabs */}
  <div className="flex flex-wrap justify-center gap-3">
    {categories.map((category) => (
      <Button
        key={category}
        variant={selectedCategory === category ? "default" : "outline"}
        onClick={() => handleCategoryChange(category)}
        className={selectedCategory === category 
          ? "bg-gradient-primary hover:shadow-glow transition-all duration-300" 
          : "glass-card border-glass-border hover:bg-primary/10 hover:border-primary/20"
        }
      >
        {category}
      </Button>
    ))}
  </div>
</div>


        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {currentProducts.map((product, index) => (
            <GlassCard 
              key={product.id} 
              variant="interactive" 
              className={`group animate-blur-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
             <div className="aspect-square bg-gradient-secondary rounded-t-xl overflow-hidden relative">
  <img 
    src={product.image} 
    alt={product.name}
    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
  />
  
  {/* Overlay with centered button */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent 
                  opacity-0 group-hover:opacity-100 transition-all duration-300 
                  flex items-center justify-center">
    <Button 
      variant="secondary" 
      size="sm"
      onClick={() => handleViewProduct(product)}
      className="bg-white/90 text-primary hover:bg-white transform translate-y-4 
                 group-hover:translate-y-0 transition-all duration-300"
    >
      <Eye className="h-4 w-4 mr-2" />
      View Details
    </Button>
  </div>
</div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground  truncate text-sm line-clamp-2 mb-2">
                    {product.name}
                  </h3>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {product.category}
                  </Badge>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full glass-card border-glass-border hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
                  onClick={() => handleViewProduct(product)}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add to RFQ
                </Button>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Enhanced Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center">
            <GlassCard variant="premium" className="p-6 w-full max-w-2xl">
              <div className="flex flex-col items-center space-y-6">
                {/* Page Navigation */}
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={goToPrevPage}
                    disabled={currentPage === 1}
                    className="glass-card border-glass-border disabled:opacity-50"
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
                            : "glass-card border-glass-border"
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
                          : "glass-card border-glass-border"
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
                            : "glass-card border-glass-border"
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
                    className="glass-card border-glass-border disabled:opacity-50"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>

                {/* Page Info */}
                <div className="text-center text-sm text-muted-foreground space-y-2">
                  <div>
                    Showing {startIndex + 1}-{Math.min(endIndex, filteredProducts.length)} of {filteredProducts.length} products
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span>Go to page:</span>
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
                      className="w-20 text-center bg-transparent border-glass-border"
                    />
                    <span>of {totalPages}</span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;