import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import pantheonImage from "@/assets/pantheon.jpg";
import eclipseImage from "@/assets/eclipse.jpg";
import haloImage from "@/assets/halo.jpg";
import obliqueImage from "@/assets/oblique.jpg";
import lintelImage from "@/assets/lintel.jpg";
import shadowlineImage from "@/assets/shadowline.jpg";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Pantheon",
    category: "Earrings",
    price: "€2,850",
    image: pantheonImage,
  },
  {
    id: 2,
    name: "Eclipse",
    category: "Bracelets",
    price: "€1,450",
    image: eclipseImage,
  },
  {
    id: 3,
    name: "Halo",
    category: "Rings",
    price: "€3,200",
    image: haloImage,
  },
  {
    id: 4,
    name: "Oblique",
    category: "Necklaces",
    price: "€2,100",
    image: obliqueImage,
  },
  {
    id: 5,
    name: "Lintel",
    category: "Earrings",
    price: "€1,850",
    image: lintelImage,
  },
  {
    id: 6,
    name: "Shadowline",
    category: "Bracelets",
    price: "€1,650",
    image: shadowlineImage,
  },
];

interface SimilarProductsProps {
  currentCategory: string;
}

const SimilarProducts = ({ currentCategory }: SimilarProductsProps) => {
  // Filter products by category for the second carousel
  const categoryProducts = products.filter(product => product.category === currentCategory);
  
  // Get different products for "You might also like" (exclude current category or mix categories)
  const suggestedProducts = products.slice(0, 6);

  const ProductCarousel = ({ products, title }: { products: Product[]; title: string }) => (
    <div className="mb-16">
      <div className="flex justify-center mb-8">
        <h2 className="text-lg font-light text-foreground">{title}</h2>
      </div>
      
      <Carousel className="w-full max-w-6xl mx-auto">
        <CarouselContent className="-ml-2 md:-ml-4">
          {products.map((product) => (
            <CarouselItem key={product.id} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
              <Card className="border-none bg-transparent shadow-none">
                <CardContent className="p-0">
                  <Link to={`/product/${product.id}`}>
                    <div className="aspect-square mb-3 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="text-center space-y-1">
                      <p className="text-xs font-light text-muted-foreground uppercase tracking-wide">
                        {product.category}
                      </p>
                      <h3 className="text-sm font-light text-foreground">{product.name}</h3>
                      <p className="text-sm font-light text-foreground">{product.price}</p>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
    </div>
  );

  return (
    <section className="w-full py-16 px-6">
      <ProductCarousel products={suggestedProducts} title="You might also like" />
      {categoryProducts.length > 0 && (
        <ProductCarousel products={categoryProducts} title={`Our other ${currentCategory}`} />
      )}
    </section>
  );
};

export default SimilarProducts;