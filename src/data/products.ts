import msTmtBarsImg from "@/assets/ms-tmt-bars.jpg";
import steelSheetsImg from "@/assets/steel-sheets.jpg";
import steelChannelsImg from "@/assets/steel-channels.jpg";
import steelPipesImg from "@/assets/steel-pipes.jpg";
import msTmtBars from "@/assets/ms-tmt-bars.jpg";
import msSheetsPlates from "@/assets/ms-sheets-plates.jpg";
import msChannel from "@/assets/ms-channel.jpg";
import msBeamsJoist from "@/assets/ms-beams-joist.jpg";
import msAngles from "@/assets/ms-angles.jpg";
import msSquarePipe from "@/assets/ms-square-pipe.jpg";
import msRoundBars from "@/assets/ms-round-bars.jpg";
import hrCoils from "@/assets/hr-coils.jpg";
import crCoils from "@/assets/cr-coils.jpg";
import ssSheets from "@/assets/ss-sheets.jpg";
import ssPipes from "@/assets/ss-pipes.jpg";
import cement from "@/assets/cement.jpg";
import electricalCables from "@/assets/electrical-cables.jpg";
import msRoundPipes from "@/assets/ms-round-pipes.jpg";

export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  brand?: string;
  material?: string;
  description?: string;
}

// Base product templates with unique images
const productTemplates = [
  // Mild Steel Products
  { name: "MS TMT BARS", category: "Mild Steel", image: msTmtBars, description: "High-strength TMT bars for construction" },
  { name: "MS SHEETS", category: "Mild Steel", image: msSheetsPlates, description: "Quality mild steel sheets for various applications" },
  { name: "MS PLATES", category: "Mild Steel", image: msSheetsPlates, description: "Heavy duty mild steel plates" },
  { name: "MS CHANNEL", category: "Mild Steel", image: msChannel, description: "Structural steel channels for construction" },
  { name: "MS BEAMS", category: "Mild Steel", image: msBeamsJoist, description: "Load-bearing steel beams" },
  { name: "MS JOIST", category: "Mild Steel", image: msBeamsJoist, description: "Steel joists for structural support" },
  { name: "MS ANGLES", category: "Mild Steel", image: msAngles, description: "L-shaped steel angles" },
  { name: "MS SQUARE PIPE", category: "Mild Steel", image: msSquarePipe, description: "Square hollow steel pipes" },
  { name: "MS ROUND BARS", category: "Mild Steel", image: msRoundBars, description: "Solid round steel bars" },
  { name: "HR COILS", category: "Mild Steel", image: hrCoils, description: "Hot rolled steel coils" },
  { name: "CR COILS", category: "Mild Steel", image: crCoils, description: "Cold rolled steel coils" },
  { name: "MS RECTANGULAR PIPE", category: "Mild Steel", image: msRoundPipes, description: "Rectangular hollow steel pipes" },
  { name: "MS FLAT BARS", category: "Mild Steel", image: msSheetsPlates, description: "Flat steel bars for various uses" },
  { name: "MS ROUND PIPE", category: "Mild Steel", image: msRoundPipes, description: "Round hollow steel pipes" },

  // Stainless Steel Products
  { name: "SS SHEETS", category: "Stainless Steel", image: ssSheets, description: "Premium stainless steel sheets" },
  { name: "SS PLATES", category: "Stainless Steel", image: ssSheets, description: "Corrosion-resistant SS plates" },
  { name: "SS COILS", category: "Stainless Steel", image: ssSheets, description: "Stainless steel coils" },
  { name: "SS ERW PIPES", category: "Stainless Steel", image: ssPipes, description: "Electric resistance welded SS pipes" },
  { name: "SS ROUND BARS", category: "Stainless Steel", image: msRoundBars, description: "Solid stainless steel bars" },
  { name: "SS SQUARE PIPES", category: "Stainless Steel", image: msSquarePipe, description: "Square stainless steel pipes" },
  { name: "SS RECTANGULAR PIPES", category: "Stainless Steel", image: msRoundPipes, description: "Rectangular SS pipes" },
  { name: "SS CHANNELS", category: "Stainless Steel", image: steelChannelsImg, description: "Stainless steel channels" },
  { name: "SS ANGLES", category: "Stainless Steel", image: msAngles, description: "Stainless steel angles" },
  { name: "SS FLAT BARS", category: "Stainless Steel", image: ssSheets, description: "Flat stainless steel bars" },

  // Construction Materials
  { name: "CEMENT", category: "Construction Materials", image: cement, description: "High-grade construction cement" },
  { name: "CONCRETE BLOCKS", category: "Construction Materials", image: steelSheetsImg, description: "Precast concrete blocks" },
  { name: "BRICKS", category: "Construction Materials", image: steelSheetsImg, description: "Quality construction bricks" },
  { name: "SAND", category: "Construction Materials", image: steelSheetsImg, description: "Construction grade sand" },
  { name: "GRAVEL", category: "Construction Materials", image: steelSheetsImg, description: "Construction gravel" },
  { name: "STONE AGGREGATES", category: "Construction Materials", image: steelSheetsImg, description: "Stone aggregates for concrete" },
  { name: "READY MIX CONCRETE", category: "Construction Materials", image: steelSheetsImg, description: "Ready-to-use concrete mix" },
  { name: "ROOFING SHEETS", category: "Construction Materials", image: steelSheetsImg, description: "Durable roofing sheets" },

  // Electrical Materials
  { name: "ELECTRICAL CABLES", category: "Electrical Materials", image: electricalCables, description: "High-quality electrical cables" },
  { name: "PVC CONDUITS", category: "Electrical Materials", image: steelPipesImg, description: "PVC electrical conduits" },
  { name: "COPPER WIRES", category: "Electrical Materials", image: steelPipesImg, description: "Pure copper electrical wires" },
  { name: "ALUMINUM WIRES", category: "Electrical Materials", image: steelPipesImg, description: "Aluminum electrical wires" },
  { name: "ELECTRICAL PANELS", category: "Electrical Materials", image: steelSheetsImg, description: "Electrical distribution panels" },
  { name: "SWITCHGEAR", category: "Electrical Materials", image: steelSheetsImg, description: "Industrial switchgear" },
  { name: "TRANSFORMERS", category: "Electrical Materials", image: steelSheetsImg, description: "Power transformers" },
  { name: "CIRCUIT BREAKERS", category: "Electrical Materials", image: steelSheetsImg, description: "Electrical circuit breakers" },
];

// Brands and specifications
const brands = ["TATA", "SAIL", "JSW", "Jindal", "RINL", "Essar", "JSPL", "Kamdhenu", "Shyam Steel", "Mahamaya Steel"];
const sizes = ["6mm", "8mm", "10mm", "12mm", "16mm", "20mm", "25mm", "32mm", "40mm", "50mm"];
const grades = ["Grade A", "Grade B", "Grade C", "Grade D", "IS2062", "IS1786", "SS304", "SS316", "SS201"];

// Generate comprehensive product list
export const generateProducts = (): Product[] => {
  const products: Product[] = [];
  let productId = 1;

  productTemplates.forEach(template => {
    const variantsCount = Math.floor(Math.random() * 8) + 15; // 15-23 variants

    for (let i = 0; i < variantsCount; i++) {
      const brand = brands[Math.floor(Math.random() * brands.length)];
      const size = sizes[Math.floor(Math.random() * sizes.length)];
      const grade = grades[Math.floor(Math.random() * grades.length)];

      let productName = template.name;

      if (template.category === "Mild Steel" || template.category === "Stainless Steel") {
        productName += ` ${size}`;
        if (Math.random() > 0.4) {
          productName += ` ${grade}`;
        }
      }

      if (Math.random() > 0.2) {
        productName += ` - ${brand}`;
      }

      products.push({
        id: `product-${productId}`,
        name: productName,
        category: template.category,
        image: template.image,
        brand: brand,
        material: grade,
        description: template.description
      });

      productId++;
    }
  });

  return products;
};

export const allProducts = generateProducts();