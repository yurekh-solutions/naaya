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
import CustomProductRequest from "@/components/CustomProductRequest";

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

    // Search functionality (filtering on Name, Category, and Description)
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      products = products.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        (product.description && product.description.toLowerCase().includes(query))
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
    console.log(`Viewing details for Product ID: ${product.id}`);
    navigate(`/product/${product.id}`);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Header with Background Image */}
      <div 
        className="min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] flex items-center justify-center relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <AnimatedBackground />
        
        <div className="text-center px-4 py-12 sm:py-16 lg:py-20 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 animate-slide-up-fade">
              Our Products
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mt-6 sm:mt-8 lg:mt-10 text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto animate-slide-up-fade animation-delay-200">
              Discover our collection of premium construction materials crafted with excellence
            </p>
            <div className="flex justify-center animate-slide-up-fade animation-delay-400">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })}
                className="glass-card border-glass-border text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full
                          hover:bg-primary/20 hover:border-primary/30 interactive-hover
                          transition-all duration-300 hover:shadow-glow backdrop-blur-xl"
              >
                Explore Collection
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 sm:py-12">
        {/* Search + Categories Section */}
        <div className="text-center mb-6 sm:mb-8 space-y-3 sm:space-y-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground animate-fade-in">
            Order Ferrous and Non-Ferrous Commodities
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-200 px-4">
            Add any commodity you want to enquire about and get instant quotations.
          </p>
        </div>

        <div className="max-w-2xl mx-auto w-full space-y-4 sm:space-y-6 mb-8 sm:mb-12">
          {/* Search Bar */}
          <div className="relative">
            <Input
              type="text"
              placeholder="Search products by name, category, or description (e.g., TMT, SS, cement)"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="pl-10 sm:pl-12 pr-4 w-full bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-primary h-11 sm:h-12 text-sm sm:text-base"
            />
            <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => handleCategoryChange(category)}
                size="sm"
                className={`text-xs sm:text-sm md:text-base ${
                  selectedCategory === category
                    ? "bg-gradient-primary hover:shadow-glow transition-all duration-300 border-none"
                    : "glass-card border-glass-border hover:bg-primary/10 hover:border-primary/20 text-white"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Custom Product Request Form - Shows when no products found */}
        {filteredProducts.length === 0 && searchQuery.trim() !== "" ? (
          <CustomProductRequest searchQuery={searchQuery} />
        ) : (
          <>
            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
              {currentProducts.map((product, index) => (
                <GlassCard 
                  key={product.id} 
                  variant="interactive" 
                  className="group animate-blur-in"
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
                                   group-hover:translate-y-0 transition-all duration-300 text-xs sm:text-sm"
                      >
                        <Eye className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                        View Details
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                    <div>
                      <h3 className="font-semibold text-foreground text-sm sm:text-base line-clamp-2 mb-2">
                        {product.name.replace(/\d.*|-.*/g, "").trim()}
                      </h3>
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">
                        {product.category}
                      </Badge>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full glass-card border-glass-border hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 text-xs sm:text-sm"
                      onClick={() => handleViewProduct(product)}
                    >
                      <Plus className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                      Add to RFQ
                    </Button>
                  </div>
                </GlassCard>
              ))}
            </div>

            {/* Enhanced Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center px-4">
                <GlassCard variant="premium" className="p-4 sm:p-6 w-full max-w-2xl">
                  <div className="flex flex-col items-center space-y-4 sm:space-y-6">
                    {/* Page Navigation */}
                    <div className="flex items-center space-x-1 sm:space-x-2 flex-wrap justify-center gap-1 sm:gap-0">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={goToPrevPage}
                        disabled={currentPage === 1}
                        className="glass-card border-glass-border disabled:opacity-50 h-8 w-8 sm:h-10 sm:w-10 p-0"
                      >
                        <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
                      </Button>

                      <div className="flex items-center space-x-1 flex-wrap justify-center gap-1">
                        {getPageNumbers()[0] > 1 && (
                          <>
                            <Button
                              variant={1 === currentPage ? "default" : "outline"}
                              size="sm"
                              onClick={() => goToPage(1)}
                              className={`h-8 w-8 sm:h-10 sm:w-10 p-0 text-xs sm:text-sm ${
                                1 === currentPage ? "bg-gradient-primary" : "glass-card border-glass-border"
                              }`}
                            >
                              1
                            </Button>
                            {getPageNumbers()[0] > 2 && (
                              <span className="px-1 sm:px-2 text-muted-foreground text-xs sm:text-sm">...</span>
                            )}
                          </>
                        )}

                        {getPageNumbers().map((pageNum) => (
                          <Button
                            key={pageNum}
                            variant={pageNum === currentPage ? "default" : "outline"}
                            size="sm"
                            onClick={() => goToPage(pageNum)}
                            className={`h-8 w-8 sm:h-10 sm:w-10 p-0 text-xs sm:text-sm ${
                              pageNum === currentPage ? "bg-gradient-primary" : "glass-card border-glass-border"
                            }`}
                          >
                            {pageNum}
                          </Button>
                        ))}

                        {getPageNumbers()[getPageNumbers().length - 1] < totalPages && (
                          <>
                            {getPageNumbers()[getPageNumbers().length - 1] < totalPages - 1 && (
                              <span className="px-1 sm:px-2 text-muted-foreground text-xs sm:text-sm">...</span>
                            )}
                            <Button
                              variant={totalPages === currentPage ? "default" : "outline"}
                              size="sm"
                              onClick={() => goToPage(totalPages)}
                              className={`h-8 w-8 sm:h-10 sm:w-10 p-0 text-xs sm:text-sm ${
                                totalPages === currentPage ? "bg-gradient-primary" : "glass-card border-glass-border"
                              }`}
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
                        className="glass-card border-glass-border disabled:opacity-50 h-8 w-8 sm:h-10 sm:w-10 p-0"
                      >
                        <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
                      </Button>
                    </div>

                    {/* Page Info */}
                    <div className="text-center text-xs sm:text-sm text-muted-foreground space-y-2">
                      <div>
                        Showing {startIndex + 1}-{Math.min(endIndex, filteredProducts.length)} of {filteredProducts.length} products
                      </div>
                      <div className="flex items-center justify-center gap-2 flex-wrap">
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
                          className="w-16 sm:w-20 text-center bg-transparent border-glass-border h-8 sm:h-10 text-xs sm:text-sm"
                        />
                        <span>of {totalPages}</span>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Products;
