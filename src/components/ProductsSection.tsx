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
      name: "Классический жилет",
      price: 4500,
      originalPrice: 5500,
      image:
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop",
      colors: ["#000000", "#FFFFFF", "#808080", "#8B0000"],
      sizes: ["36", "38", "40", "42", "44", "46"],
      category: "Жилеты",
      isNew: true,
      isSale: true,
    },
    {
      id: 2,
      name: "Деловой пиджак",
      price: 7800,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
      colors: ["#000000"],
      sizes: ["38", "40", "42", "44", "46", "48", "50"],
      category: "Пиджаки",
      isNew: true,
    },
    {
      id: 3,
      name: "Классические брюки",
      price: 3200,
      image:
        "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=600&fit=crop",
      colors: ["#000000"],
      sizes: ["38/158", "40/164", "42/170", "44/176"],
      category: "Брюки",
    },
    {
      id: 4,
      name: "Элегантный жилет",
      price: 5200,
      image:
        "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=400&h=600&fit=crop",
      colors: ["#FFFFFF", "#808080", "#8B0000"],
      sizes: ["36", "38", "40", "42"],
      category: "Жилеты",
    },
    {
      id: 5,
      name: "Строгий пиджак",
      price: 8900,
      originalPrice: 10200,
      image:
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&h=600&fit=crop",
      colors: ["#000000"],
      sizes: ["40", "42", "44", "46"],
      category: "Пиджаки",
      isSale: true,
    },
    {
      id: 6,
      name: "Повседневные брюки",
      price: 2800,
      image:
        "https://images.unsplash.com/photo-1506629905607-c28b47a40eb5?w=400&h=600&fit=crop",
      colors: ["#000000"],
      sizes: ["40/164", "42/170", "44/176", "46/182"],
      category: "Брюки",
      isNew: true,
    },
  ];

  const categories = ["all", "Жилеты", "Пиджаки", "Брюки"];
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
