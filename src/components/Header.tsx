import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Главная", href: "#home" },
    { name: "Каталог", href: "#products" },
    { name: "Лукбуки", href: "#lookbooks" },
    { name: "О нас", href: "#about" },
    { name: "Контакты", href: "#contact" },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-3xl font-heading font-bold text-neoniks-pink">
              NEONIKS
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-neoniks-dark hover:text-neoniks-pink transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Icon name="Search" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Heart" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <Icon name="ShoppingCart" size={20} />
              <span className="absolute -top-2 -right-2 bg-neoniks-pink text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </Button>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Facebook" size={20} />
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-6 mt-8">
                  <h2 className="text-2xl font-heading font-bold text-neoniks-pink">
                    NEONIKS
                  </h2>

                  <nav className="flex flex-col space-y-4">
                    {navItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-lg text-neoniks-dark hover:text-neoniks-pink transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </nav>

                  <div className="flex items-center space-x-4 pt-4 border-t">
                    <Button variant="ghost" size="icon">
                      <Icon name="Search" size={20} />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Icon name="Heart" size={20} />
                    </Button>
                    <Button variant="ghost" size="icon" className="relative">
                      <Icon name="ShoppingCart" size={20} />
                      <span className="absolute -top-2 -right-2 bg-neoniks-pink text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        2
                      </span>
                    </Button>
                  </div>

                  <div className="flex items-center space-x-4 pt-2">
                    <Button variant="ghost" size="icon">
                      <Icon name="Instagram" size={20} />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Icon name="Facebook" size={20} />
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
