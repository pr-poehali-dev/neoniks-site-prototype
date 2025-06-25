import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const LookbooksSection = () => {
  const lookbooks = [
    {
      id: 1,
      title: "Деловой стиль",
      description: "Элегантные образы для офиса и деловых встреч",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop",
      items: ["Черный пиджак", "Классические брюки", "Белая рубашка"],
    },
    {
      id: 2,
      title: "Повседневная элегантность",
      description: "Комфортные образы на каждый день",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=800&fit=crop",
      items: ["Серый жилет", "Темные брюки", "Кожаные аксессуары"],
    },
    {
      id: 3,
      title: "Вечерний шик",
      description: "Изысканные решения для особых событий",
      image:
        "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=600&h=800&fit=crop",
      items: ["Бордовый жилет", "Черный пиджак", "Стильные аксессуары"],
    },
  ];

  return (
    <section
      id="lookbooks"
      className="py-16 bg-gradient-to-br from-neoniks-light-pink/10 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-neoniks-dark mb-4">
            Лукбуки NEONIKS
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Вдохновитесь нашими стильными образами и создайте свой уникальный
            стиль
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {lookbooks.map((lookbook, index) => (
            <div
              key={lookbook.id}
              className="fashion-card group overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden h-80">
                <img
                  src={lookbook.image}
                  alt={lookbook.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <Button
                      size="sm"
                      className="w-full neoniks-gradient text-white"
                    >
                      <Icon name="Eye" size={16} className="mr-2" />
                      Смотреть образ
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-heading font-bold text-xl mb-2 text-neoniks-dark">
                  {lookbook.title}
                </h3>
                <p className="text-gray-600 mb-4">{lookbook.description}</p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-neoniks-dark">
                    В образе:
                  </h4>
                  <ul className="space-y-1">
                    {lookbook.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-600 flex items-center"
                      >
                        <Icon
                          name="Check"
                          size={14}
                          className="text-neoniks-pink mr-2"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Integration */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-heading font-bold text-neoniks-dark mb-4">
              Поделитесь своим стилем
            </h3>
            <p className="text-gray-600">
              Покажите, как вы носите NEONIKS! Отмечайте нас в Instagram и
              станьте частью нашего сообщества
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-6">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white neoniks-button"
            >
              <Icon name="Instagram" size={20} className="mr-2" />
              @neoniks_style
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-neoniks-pink text-neoniks-pink hover:bg-neoniks-pink hover:text-white"
            >
              <Icon name="Camera" size={20} className="mr-2" />
              Загрузить фото
            </Button>
          </div>

          <div className="text-center text-sm text-gray-500">
            Используйте хештег{" "}
            <span className="font-semibold text-neoniks-pink">
              #NEONIKS_STYLE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LookbooksSection;
