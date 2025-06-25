import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const AboutSection = () => {
  const features = [
    {
      icon: "Shirt",
      title: "Качественные материалы",
      description:
        "100% полиэстер обеспечивает долговечность, комфорт и легкость в уходе",
    },
    {
      icon: "Rulers",
      title: "Широкая размерная сетка",
      description: "От 36 до 60 размера - идеальная посадка для каждого",
    },
    {
      icon: "Palette",
      title: "Стильные цвета",
      description: "Классические оттенки: черный, белый, графит и бордовый",
    },
    {
      icon: "Award",
      title: "Безупречное качество",
      description: "Каждое изделие проходит строгий контроль качества",
    },
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-heading font-bold text-neoniks-dark mb-6">
              О бренде NEONIKS
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              NEONIKS - это современный российский бренд, который создает
              стильную и качественную одежду для успешных людей. Мы
              специализируемся на производстве жилетов, пиджаков и брюк из
              высококачественного полиэстера.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Наша миссия - предоставить каждому возможность выражать свою
              индивидуальность через одежду, которая сочетает в себе комфорт,
              стиль и долговечность.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="neoniks-gradient text-white neoniks-button"
              >
                <Icon name="ShoppingBag" size={20} className="mr-2" />
                Смотреть каталог
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-neoniks-pink text-neoniks-pink hover:bg-neoniks-pink hover:text-white"
              >
                <Icon name="BookOpen" size={20} className="mr-2" />
                Наша история
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover-scale"
              >
                <div className="w-12 h-12 neoniks-gradient rounded-lg flex items-center justify-center mb-4">
                  <Icon
                    name={feature.icon as any}
                    size={24}
                    className="text-white"
                  />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2 text-neoniks-dark">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
