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
}

// Base product templates with unique images
const productTemplates = [
  // Mild Steel Products
  { name: "MS TMT BARS", category: "Mild Steel", image: msTmtBars },
  { name: "MS SHEETS", category: "Mild Steel", image: msSheetsPlates },
  { name: "MS PLATES", category: "Mild Steel", image: msSheetsPlates },
  { name: "MS CHANNEL", category: "Mild Steel", image: msChannel },
  { name: "MS BEAMS", category: "Mild Steel", image: msBeamsJoist },
  { name: "MS JOIST", category: "Mild Steel", image: msBeamsJoist },
  { name: "MS ANGLES", category: "Mild Steel", image: msAngles },
  { name: "MS SQUARE PIPE", category: "Mild Steel", image: msSquarePipe },
  { name: "MS ROUND BARS", category: "Mild Steel", image: msRoundBars },
  { name: "HR COILS", category: "Mild Steel", image: hrCoils },
  { name: "CR COILS", category: "Mild Steel", image: crCoils },
  { name: "MS RECTANGULAR PIPE", category: "Mild Steel", image: msRoundPipes },
  { name: "MS FLAT BARS", category: "Mild Steel", image: msSheetsPlates },
  { name: "MS ROUND PIPE", category: "Mild Steel", image: msRoundPipes },
  { name: "MS I-BEAMS", category: "Mild Steel", image: msBeamsJoist },
  { name: "MS U-CHANNELS", category: "Mild Steel", image: msChannel },
  { name: "MS EQUAL ANGLES", category: "Mild Steel", image: msAngles },
  { name: "MS UNEQUAL ANGLES", category: "Mild Steel", image: msAngles },
  { name: "MS HEXAGONAL BARS", category: "Mild Steel", image: msRoundBars },
  { name: "MS SQUARE BARS", category: "Mild Steel", image: msSquarePipe },

  // Stainless Steel Products
  { name: "SS SHEETS", category: "Stainless Steel", image: ssSheets },
  { name: "SS PLATES", category: "Stainless Steel", image: ssSheets },
  { name: "SS COILS", category: "Stainless Steel", image: ssSheets },
  { name: "SS ERW PIPES", category: "Stainless Steel", image: ssPipes },
  { name: "SS ROUND BARS", category: "Stainless Steel", image: msRoundBars },
  { name: "SS SQUARE PIPES", category: "Stainless Steel", image: msSquarePipe },
  { name: "SS RECTANGULAR PIPES", category: "Stainless Steel", image: msRoundPipes },
  { name: "SS CHANNELS", category: "Stainless Steel", image: steelChannelsImg },
  { name: "SS ANGLES", category: "Stainless Steel", image: msAngles },
  { name: "SS FLAT BARS", category: "Stainless Steel", image: ssSheets },
  { name: "SS HEXAGONAL BARS", category: "Stainless Steel", image: msRoundBars },
  { name: "SS SQUARE BARS", category: "Stainless Steel", image: msSquarePipe },
  { name: "SS SEAMLESS PIPES", category: "Stainless Steel", image: ssPipes },
  { name: "SS WELDED PIPES", category: "Stainless Steel", image: ssPipes },
  { name: "SS WIRE RODS", category: "Stainless Steel", image: msTmtBars },
  { name: "SS PERFORATED SHEETS", category: "Stainless Steel", image: ssSheets },
  { name: "SS CHECKERED PLATES", category: "Stainless Steel", image: ssSheets },
  { name: "SS HOLLOW BARS", category: "Stainless Steel", image: msRoundBars },

  // Construction Materials
  { name: "CEMENT", category: "Construction Materials", image: cement },
  { name: "CONCRETE BLOCKS", category: "Construction Materials", image: steelSheetsImg },
  { name: "BRICKS", category: "Construction Materials", image: steelSheetsImg },
  { name: "SAND", category: "Construction Materials", image: steelSheetsImg },
  { name: "GRAVEL", category: "Construction Materials", image: steelSheetsImg },
  { name: "STONE AGGREGATES", category: "Construction Materials", image: steelSheetsImg },
  { name: "READY MIX CONCRETE", category: "Construction Materials", image: steelSheetsImg },
  { name: "BITUMEN", category: "Construction Materials", image: steelSheetsImg },
  { name: "ROOFING SHEETS", category: "Construction Materials", image: steelSheetsImg },
  { name: "WATERPROOFING MEMBRANE", category: "Construction Materials", image: steelSheetsImg },
  { name: "INSULATION MATERIALS", category: "Construction Materials", image: steelSheetsImg },
  { name: "TILE ADHESIVE", category: "Construction Materials", image: steelSheetsImg },
  { name: "WALL PUTTY", category: "Construction Materials", image: steelSheetsImg },
  { name: "PLASTER OF PARIS", category: "Construction Materials", image: steelSheetsImg },
  { name: "CERAMIC TILES", category: "Construction Materials", image: steelSheetsImg },
  { name: "VITRIFIED TILES", category: "Construction Materials", image: steelSheetsImg },
  { name: "MARBLE", category: "Construction Materials", image: steelSheetsImg },
  { name: "GRANITE", category: "Construction Materials", image: steelSheetsImg },

  // Electrical Materials
  { name: "ELECTRICAL CABLES", category: "Electrical Materials", image: electricalCables },
  { name: "PVC CONDUITS", category: "Electrical Materials", image: steelPipesImg },
  { name: "COPPER WIRES", category: "Electrical Materials", image: steelPipesImg },
  { name: "ALUMINUM WIRES", category: "Electrical Materials", image: steelPipesImg },
  { name: "ELECTRICAL PANELS", category: "Electrical Materials", image: steelSheetsImg },
  { name: "SWITCHGEAR", category: "Electrical Materials", image: steelSheetsImg },
  { name: "TRANSFORMERS", category: "Electrical Materials", image: steelSheetsImg },
  { name: "CIRCUIT BREAKERS", category: "Electrical Materials", image: steelSheetsImg },
  { name: "ELECTRICAL FITTINGS", category: "Electrical Materials", image: steelSheetsImg },
  { name: "JUNCTION BOXES", category: "Electrical Materials", image: steelSheetsImg },
  { name: "CABLE TRAYS", category: "Electrical Materials", image: steelChannelsImg },
  { name: "EARTHING MATERIALS", category: "Electrical Materials", image: steelPipesImg },
  { name: "LIGHTING FIXTURES", category: "Electrical Materials", image: steelSheetsImg },
  { name: "ELECTRICAL METERS", category: "Electrical Materials", image: steelSheetsImg },
  { name: "MOTOR CONTROL PANELS", category: "Electrical Materials", image: steelSheetsImg }
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
    const variantsCount = Math.floor(Math.random() * 6) + 20; // 20-25 variants

    for (let i = 0; i < variantsCount; i++) {
      const brand = brands[Math.floor(Math.random() * brands.length)];
      const size = sizes[Math.floor(Math.random() * sizes.length)];
      const grade = grades[Math.floor(Math.random() * grades.length)];

      let productName = template.name;

      if (template.category === "Mild Steel" || template.category === "Stainless Steel") {
        productName += ` ${size}`;
        if (Math.random() > 0.5) {
          productName += ` ${grade}`;
        }
      }

      if (Math.random() > 0.3) {
        productName += ` - ${brand}`;
      }

      products.push({
        id: `product-${productId}`,
        name: productName,
        category: template.category,
        image: template.image,
        brand: brand,
        material: grade
      });

      productId++;
    }
  });

  return products;
};

export const allProducts = generateProducts();
