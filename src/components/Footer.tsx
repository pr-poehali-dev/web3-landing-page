import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Основная информация */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4">
              Образовательная платформа
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Профессиональные курсы для развития карьеры. Обучение с
              практическим опытом и поддержкой экспертов в области IT и бизнеса.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Icon name="Mail" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Icon name="Phone" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
            </div>
          </div>

          {/* Курсы */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Обучение</h4>
            <ul className="space-y-2 text-gray-300">
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
            <h4 className="text-lg font-semibold mb-4">Поддержка</h4>
            <ul className="space-y-2 text-gray-300">
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
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Юридическая информация */}
            <div>
              <h5 className="text-sm font-semibold mb-3 text-gray-200">
                Юридическая информация
              </h5>
              <ul className="space-y-2 text-sm text-gray-400">
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
              <h5 className="text-sm font-semibold mb-3 text-gray-200">
                Реквизиты
              </h5>
              <div className="text-sm text-gray-400 space-y-1">
                <p>ИП Иванов И.И.</p>
                <p>ИНН: 123456789012</p>
                <p>ОГРНИП: 123456789012345</p>
                <p>Адрес: г. Москва, ул. Примерная, д. 1</p>
              </div>
            </div>

            {/* Лицензия и сертификация */}
            <div>
              <h5 className="text-sm font-semibold mb-3 text-gray-200">
                Сертификация
              </h5>
              <div className="text-sm text-gray-400 space-y-1">
                <p>Образовательная лицензия №12345</p>
                <p>Сертифицированные программы</p>
                <p>Соответствие ГОСТ Р ИСО 21500</p>
              </div>
            </div>
          </div>
        </div>

        {/* Нижняя строка */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2024 Образовательная платформа. Все права защищены.</p>
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <span className="flex items-center">
              <Icon name="Shield" size={16} className="mr-1" />
              Защищенные платежи
            </span>
            <span className="flex items-center">
              <Icon name="Award" size={16} className="mr-1" />
              Сертифицированное обучение
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
