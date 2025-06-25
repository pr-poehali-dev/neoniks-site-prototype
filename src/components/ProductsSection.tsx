import { useState } from "react";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const ProductsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedColor, setSelectedColor] = useState("all");
  const [selectedSize, setSelectedSize] = useState("all");

  const products = [
    {
      id: 1,
      name: "Элегантные широкие брюки",
      price: 4200,
      originalPrice: 5200,
      image:
        "https://cdn.poehali.dev/files/7d4987ad-5094-408c-b21d-ff073a7b15a2.JPG",
      colors: ["#000000"],
      sizes: ["36", "38", "40", "42", "44", "46"],
      category: "Брюки",
      isNew: true,
      isSale: true,
    },
    {
      id: 2,
      name: "Классический жилет",
      price: 3800,
      image:
        "https://cdn.poehali.dev/files/26e901f3-f80a-4025-aa13-24b8483b146d.JPG",
      colors: ["#000000", "#8B4513"],
      sizes: ["36", "38", "40", "42", "44"],
      category: "Жилеты",
      isNew: true,
    },
    {
      id: 3,
      name: "Стильный пиджак",
      price: 6500,
      image:
        "https://cdn.poehali.dev/files/a2b19506-647f-4b14-b423-bcdbe4b27cd3.JPG",
      colors: ["#000000", "#4B0082"],
      sizes: ["38", "40", "42", "44", "46", "48"],
      category: "Пиджаки",
    },
    {
      id: 4,
      name: "Деловой костюм",
      price: 8900,
      image:
        "https://cdn.poehali.dev/files/3b839ea2-7089-454f-84c5-3fc71af988df.JPG",
      colors: ["#000000", "#2F4F4F"],
      sizes: ["38", "40", "42", "44", "46"],
      category: "Костюмы",
    },
    {
      id: 5,
      name: "Повседневный жилет",
      price: 3200,
      originalPrice: 4000,
      image:
        "https://cdn.poehali.dev/files/2b018902-c4af-4098-aba5-73dc7ffbad3d.JPG",
      colors: ["#8B4513", "#654321"],
      sizes: ["36", "38", "40", "42"],
      category: "Жилеты",
      isSale: true,
    },
  ];

  const categories = ["all", "Жилеты", "Пиджаки", "Брюки", "Костюмы"];
  const colors = ["all", "Черный", "Белый", "Серый", "Бордовый"];
  const sizes = ["all", "36", "38", "40", "42", "44", "46", "48", "50"];

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === "all" || product.category === selectedCategory;
    const colorMatch = selectedColor === "all" || true; // Simplified for demo
    const sizeMatch =
      selectedSize === "all" || product.sizes.includes(selectedSize);

    return categoryMatch && colorMatch && sizeMatch;
  });

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-neoniks-dark mb-4">
            Популярные товары
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Откройте для себя нашу коллекцию стильной одежды из качественного
            полиэстера
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Категория" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все категории</SelectItem>
              {categories.slice(1).map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedColor} onValueChange={setSelectedColor}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Цвет" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все цвета</SelectItem>
              {colors.slice(1).map((color) => (
                <SelectItem key={color} value={color}>
                  {color}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedSize} onValueChange={setSelectedSize}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Размер" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все размеры</SelectItem>
              {sizes.slice(1).map((size) => (
                <SelectItem key={size} value={size}>
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-neoniks-pink text-neoniks-pink hover:bg-neoniks-pink hover:text-white neoniks-button"
          >
            Показать больше товаров
            <Icon name="ChevronDown" size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
