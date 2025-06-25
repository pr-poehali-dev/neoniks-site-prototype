import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neoniks-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1">
            <h3 className="text-3xl font-heading font-bold text-neoniks-pink mb-4">
              NEONIKS
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Современный бренд стильной одежды для успешных людей. Качество,
              комфорт и индивидуальность в каждом изделии.
            </p>
            <div className="flex space-x-4">
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-neoniks-pink/20"
              >
                <Icon name="Instagram" size={20} />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-neoniks-pink/20"
              >
                <Icon name="Facebook" size={20} />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-neoniks-pink/20"
              >
                <Icon name="Twitter" size={20} />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-neoniks-pink/20"
              >
                <Icon name="Youtube" size={20} />
              </Button>
            </div>
          </div>

          {/* Catalog */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Каталог</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-neoniks-pink transition-colors"
                >
                  Жилеты
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-neoniks-pink transition-colors"
                >
                  Пиджаки
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-neoniks-pink transition-colors"
                >
                  Брюки
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-neoniks-pink transition-colors"
                >
                  Новинки
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-neoniks-pink transition-colors"
                >
                  Распродажа
                </a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">
              Информация
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-neoniks-pink transition-colors"
                >
                  О нас
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-neoniks-pink transition-colors"
                >
                  Доставка и возврат
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-neoniks-pink transition-colors"
                >
                  Размерная сетка
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-neoniks-pink transition-colors"
                >
                  Уход за изделиями
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-neoniks-pink transition-colors"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">
              Подписка
            </h4>
            <p className="text-gray-300 mb-4">
              Получайте новости о новинках и специальных предложениях
            </p>
            <div className="flex gap-2 mb-4">
              <Input
                placeholder="Ваш email"
                className="bg-neoniks-gray border-neoniks-gray text-white placeholder:text-gray-400"
              />
              <Button className="neoniks-gradient">
                <Icon name="Send" size={16} />
              </Button>
            </div>
            <p className="text-xs text-gray-400">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neoniks-gray pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © {currentYear} NEONIKS. Все права защищены.
            </div>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-neoniks-pink transition-colors"
              >
                Политика конфиденциальности
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-neoniks-pink transition-colors"
              >
                Пользовательское соглашение
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-neoniks-pink transition-colors"
              >
                Публичная оферта
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
