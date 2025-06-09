import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 md:gap-8">
          {/* Основная информация */}
          <div className="lg:col-span-2">
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">
              Образовательная платформа
            </h3>
            <p className="text-gray-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
              Профессиональные курсы для развития карьеры. Обучение с
              практическим опытом и поддержкой экспертов в области IT и бизнеса.
            </p>
            <div className="flex space-x-3 md:space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors p-1"
              >
                <Icon name="Mail" size={18} className="md:w-5 md:h-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors p-1"
              >
                <Icon name="Phone" size={18} className="md:w-5 md:h-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors p-1"
              >
                <Icon
                  name="MessageCircle"
                  size={18}
                  className="md:w-5 md:h-5"
                />
              </a>
            </div>
          </div>

          {/* Курсы */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">
              Обучение
            </h4>
            <ul className="space-y-1.5 md:space-y-2 text-gray-300 text-sm md:text-base">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Программа курса
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Форматы обучения
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Отзывы студентов
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Сертификация
                </a>
              </li>
            </ul>
          </div>

          {/* Поддержка */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">
              Поддержка
            </h4>
            <ul className="space-y-1.5 md:space-y-2 text-gray-300 text-sm md:text-base">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Частые вопросы
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Техподдержка
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Обратная связь
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Помощь в обучении
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Разделитель */}
        <div className="border-t border-gray-700 mt-8 md:mt-12 pt-6 md:pt-8">
          <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
            {/* Юридическая информация */}
            <div>
              <h5 className="text-sm font-semibold mb-2 md:mb-3 text-gray-200">
                Юридическая информация
              </h5>
              <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Политика конфиденциальности
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Пользовательское соглашение
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Договор оферты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Возврат и отмена
                  </a>
                </li>
              </ul>
            </div>

            {/* Реквизиты */}
            <div>
              <h5 className="text-sm font-semibold mb-2 md:mb-3 text-gray-200">
                Реквизиты
              </h5>
              <div className="text-xs md:text-sm text-gray-400 space-y-0.5 md:space-y-1">
                <p>ИП Иванов И.И.</p>
                <p>ИНН: 123456789012</p>
                <p>ОГРНИП: 123456789012345</p>
                <p>Адрес: г. Москва, ул. Примерная, д. 1</p>
              </div>
            </div>

            {/* Лицензия и сертификация */}
            <div>
              <h5 className="text-sm font-semibold mb-2 md:mb-3 text-gray-200">
                Сертификация
              </h5>
              <div className="text-xs md:text-sm text-gray-400 space-y-0.5 md:space-y-1">
                <p>Образовательная лицензия №12345</p>
                <p>Сертифицированные программы</p>
                <p>Соответствие ГОСТ Р ИСО 21500</p>
              </div>
            </div>
          </div>
        </div>

        {/* Нижняя строка */}
        <div className="border-t border-gray-700 mt-6 md:mt-8 pt-4 md:pt-6 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-400 space-y-3 md:space-y-0">
          <p>&copy; 2024 Образовательная платформа. Все права защищены.</p>
          <div className="flex items-center space-x-3 md:space-x-4 text-xs md:text-sm">
            <span className="flex items-center">
              <Icon name="Shield" size={14} className="mr-1 md:w-4 md:h-4" />
              Защищенные платежи
            </span>
            <span className="flex items-center">
              <Icon name="Award" size={14} className="mr-1 md:w-4 md:h-4" />
              Сертифицированное обучение
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
