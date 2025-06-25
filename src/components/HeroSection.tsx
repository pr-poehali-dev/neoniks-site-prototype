import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Новая коллекция NEONIKS",
      subtitle: "Стиль, который выделяет",
      description:
        "Откройте для себя уникальные жилеты, пиджаки и брюки из качественного полиэстера",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      cta: "Смотреть коллекцию",
    },
    {
      title: "Идеальная посадка",
      subtitle: "Размеры от 36 до 60",
      description:
        "Найдите свой идеальный размер в нашей расширенной размерной линейке",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=600&fit=crop",
      cta: "Подобрать размер",
    },
    {
      title: "Качество превыше всего",
      subtitle: "100% полиэстер",
      description:
        "Долговечность, комфорт и легкость в уходе - наши главные приоритеты",
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop",
      cta: "Узнать больше",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      id="home"
      className="relative h-[70vh] min-h-[500px] overflow-hidden"
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center bg-gray-900"
            style={{
              backgroundImage: `linear-gradient(rgba(32, 29, 27, 0.4), rgba(32, 29, 27, 0.4)), url(${slide.image})`,
            }}
          >
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="max-w-2xl text-white animate-fade-in">
                <h2 className="text-5xl md:text-7xl font-heading font-bold mb-4 leading-tight">
                  {slide.title}
                </h2>
                <h3 className="text-2xl md:text-3xl font-heading font-medium mb-6 text-neoniks-light-pink">
                  {slide.subtitle}
                </h3>
                <p className="text-lg md:text-xl mb-8 leading-relaxed opacity-90">
                  {slide.description}
                </p>
                <Button
                  size="lg"
                  className="neoniks-gradient text-white neoniks-button text-lg px-8 py-4"
                >
                  {slide.cta}
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200"
      >
        <Icon name="ChevronLeft" size={24} className="text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200"
      >
        <Icon name="ChevronRight" size={24} className="text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide
                ? "bg-neoniks-pink scale-125"
                : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
