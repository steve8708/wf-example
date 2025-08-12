import { Button } from "@/components/ui/button";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Product {
  id: string;
  title: string;
  price: string;
  originalPrice?: string;
  image: string;
  salePrice?: string;
  hasSale?: boolean;
  hasVerified?: boolean;
  openBoxPrice?: string;
}

const products: Product[] = [
  {
    id: "1",
    title: "Yee to the Haw Rodeo Skeleton",
    price: "$31.99",
    image:
      "https://assets.wfcdn.com/im/37595259/resize-h400-w400%5Ecompr-r85/2773/277331061/Yee+to+the+Haw+Rodeo+Skeleton.jpg",
  },
  {
    id: "2",
    title: "Jessica Simpson Plush Throw Blanket",
    price: "$30.00",
    originalPrice: "$39.99",
    image:
      "https://assets.wfcdn.com/im/59776279/resize-h400-w400%5Ecompr-r85/3043/304313716/Jessica+Simpson+Plush+Throw+Blanket.jpg",
  },
  {
    id: "3",
    title: "Amalfi Boucle Throw Pillow",
    price: "$67.00",
    originalPrice: "$75.00",
    openBoxPrice: "$30.40",
    hasVerified: true,
    image:
      "https://assets.wfcdn.com/im/40143060/resize-h400-w400%5Ecompr-r85/3242/324207755/Amalfi+Boucle+Throw+Pillow.jpg",
  },
  {
    id: "4",
    title: "Sunglasses For All II",
    price: "$29.99",
    image:
      "https://assets.wfcdn.com/im/76906249/resize-h400-w400%5Ecompr-r85/2584/258418446/%22+Sunglasses+For+All+II+%22.jpg",
  },
  {
    id: "5",
    title: "Camden Chambray Cozy Comforter Set",
    price: "$39.99",
    originalPrice: "$69.99",
    openBoxPrice: "$25.15",
    hasSale: true,
    image:
      "https://assets.wfcdn.com/im/76429920/resize-h400-w400%5Ecompr-r85/2616/261607777/Camden+Chambray+Cozy+Comforter+Set.jpg",
  },
  {
    id: "6",
    title: "Iron Over-the-Door 5 - Hook Coat Rack",
    price: "$19.99",
    image:
      "https://assets.wfcdn.com/im/47156621/resize-h400-w400%5Ecompr-r85/1273/127377232/Iron+Over-the-Door+5+-+Hook+Coat+Rack.jpg",
  },
  {
    id: "7",
    title: "Tommy Bahama Printed Percale Cotton Sheet Set",
    price: "$58.00",
    originalPrice: "$134.00",
    image:
      "https://assets.wfcdn.com/im/85628237/resize-h400-w400%5Ecompr-r85/2603/260352228/Tommy+Bahama+Printed+Percale+Cotton+Sheet+Set.jpg",
  },
];

export default function ProductCarousel() {
  return (
    <section className="bg-white py-8">
      <div className="max-w-[1600px] mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 px-2">
          <h2 className="text-2xl font-bold">now trending on campus</h2>
          <Button
            variant="link"
            className="text-[#7B189F] font-medium underline"
          >
            See all
          </Button>
        </div>

        {/* Product Grid */}
        <div className="relative">
          <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 scroll-smooth snap-x snap-mandatory">
            {products.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className="flex-none w-64 snap-start hover:scale-105 transition-transform duration-200">
                <div className="bg-white rounded-lg p-2 relative">
                  {/* Product Image */}
                  <div className="relative aspect-square mb-3 rounded-lg overflow-hidden">
                    {product.hasSale && (
                      <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-medium px-2 py-1 rounded z-10">
                        Sale
                      </span>
                    )}
                    {product.hasVerified && (
                      <span className="absolute top-2 right-2 bg-yellow-400 text-xs px-2 py-1 rounded-tr-lg rounded-bl-lg z-10">
                        ✓ Verified
                      </span>
                    )}
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      className="absolute top-2 right-2 w-9 h-9 rounded-full bg-white/70 border-none hover:bg-white/90"
                    >
                      <Heart className="h-4 w-4 text-[#7B189F]" />
                    </Button>
                  </div>

                  {/* Product Info */}
                  <div className="space-y-2">
                    <h3
                      className="text-sm leading-tight overflow-hidden"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {product.title}
                    </h3>

                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-lg font-semibold">
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>

                    {product.openBoxPrice && (
                      <div className="text-sm text-red-600">
                        <span>Open Box: </span>
                        <span className="font-medium">
                          {product.openBoxPrice}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="sm"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg border-gray-200"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg border-gray-200"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
