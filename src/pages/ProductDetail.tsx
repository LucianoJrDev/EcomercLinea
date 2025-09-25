import { useParams } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ProductImageGallery from "../components/product/ProductImageGallery";
import ProductInfo from "../components/product/ProductInfo";
import ProductDescription from "../components/product/ProductDescription";
import SimilarProducts from "../components/product/SimilarProducts";

const ProductDetail = () => {
  const { productId } = useParams();
  
  // Get current product category based on productId (simplified logic)
  const getCurrentCategory = () => {
    const productCategories: { [key: string]: string } = {
      "1": "Earrings",
      "2": "Bracelets", 
      "3": "Rings",
      "4": "Necklaces",
      "5": "Earrings",
      "6": "Bracelets",
    };
    return productCategories[productId || "1"] || "Earrings";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-6">
        <section className="w-full px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <ProductImageGallery />
            
            <div className="lg:pl-12 mt-8 lg:mt-0 lg:sticky lg:top-6 lg:h-fit">
              <ProductInfo />
              <ProductDescription />
            </div>
          </div>
        </section>
        
        <SimilarProducts currentCategory={getCurrentCategory()} />
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;