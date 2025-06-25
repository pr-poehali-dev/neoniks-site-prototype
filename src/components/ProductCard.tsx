import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  colors: string[];
  sizes: string[];
  category: string;
  isNew?: boolean;
  isSale?: boolean;
}

const ProductCard = ({
  name,
  price,
  originalPrice,
  image,
  colors,
  sizes,
  category,
  isNew,
  isSale,
}: ProductCardProps) => {
  return (
    <div className="fashion-card group relative">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <Badge className="bg-neoniks-pink text-white">Новинка</Badge>
          )}
          {isSale && <Badge className="bg-red-500 text-white">Скидка</Badge>}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button size="icon" variant="secondary" className="rounded-full">
            <Icon name="Heart" size={16} />
          </Button>
          <Button size="icon" variant="secondary" className="rounded-full">
            <Icon name="Eye" size={16} />
          </Button>
        </div>

        {/* Add to Cart Overlay */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <Button className="w-full neoniks-gradient text-white" size="sm">
            <Icon name="ShoppingCart" size={16} className="mr-2" />В корзину
          </Button>
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <Badge variant="outline" className="text-xs">
            {category}
          </Badge>
        </div>

        <h3 className="font-heading font-semibold text-lg mb-2 text-neoniks-dark group-hover:text-neoniks-pink transition-colors">
          {name}
        </h3>

        <div className="flex items-center gap-2 mb-3">
          <span className="font-bold text-xl text-neoniks-dark">
            {price.toLocaleString()} ₽
          </span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              {originalPrice.toLocaleString()} ₽
            </span>
          )}
        </div>

        {/* Colors */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs text-gray-600">Цвета:</span>
          <div className="flex gap-1">
            {colors.map((color, index) => (
              <div
                key={index}
                className="w-4 h-4 rounded-full border-2 border-gray-300"
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
          </div>
        </div>

        {/* Sizes */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-600">Размеры:</span>
          <div className="flex gap-1 flex-wrap">
            {sizes.slice(0, 3).map((size, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 px-2 py-1 rounded"
              >
                {size}
              </span>
            ))}
            {sizes.length > 3 && (
              <span className="text-xs text-gray-500">+{sizes.length - 3}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
