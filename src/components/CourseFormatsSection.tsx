const CourseFormatsSection = () => {
  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8 max-w-7xl">
        <h2
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 md:mb-12 px-2 sm:px-0"
          style={{ fontSize: "clamp(24px, 5vw, 36px)" }}
        >
          Выберите свой путь в веб-разработке
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm h-full flex flex-col">
            <div
              className="inline-block text-white px-3 py-1 rounded-md text-sm font-medium mb-4 w-fit"
              style={{ backgroundColor: "#F87250" }}
            >
              -20% до 3 июля
            </div>

            <div className="text-gray-600 text-sm mb-2">Web3-разработчик</div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 md:mb-6 min-h-[3rem] md:min-h-[3rem] flex items-start">
              Разработка dApps и интеграция со смарт-контрактами
            </h3>

            <div className="mb-4 md:mb-6">
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                24 900 ₽/мес
                <span className="text-base md:text-lg text-gray-400 line-through ml-2">
                  29 900 ₽/мес
                </span>
              </div>
              <div className="text-gray-600 text-xs md:text-sm min-h-[2.5rem] flex items-start">
                при оплате частями в течение 10 месяцев
                <br />
                или единоразово — 240 000 ₽ со скидкой
              </div>
            </div>

            <button
              className="w-full text-white py-3 md:py-4 px-4 md:px-6 rounded-xl font-medium hover:opacity-90 transition-opacity mb-4 md:mb-6 text-sm md:text-base"
              style={{ backgroundColor: "#111827" }}
            >
              Оставить заявку
            </button>

            <div className="space-y-3 md:space-y-4 text-xs md:text-sm text-gray-700 min-h-[6rem] flex flex-col justify-start">
              <div>
                Node.js/Express, MongoDB/PostgreSQL + Разработка API для dApp,
                Интеграция с блокчейном (Web3.js/Ethers.js), обработка событий
              </div>
              <div className="font-medium">
                6 практических проектов в портфолио
              </div>
            </div>

            <div className="flex items-start gap-3 mt-4 md:mt-6 p-3 md:p-4 bg-gray-50 rounded-xl mt-auto px-0 py-0.5">
              <div className="w-5 h-5 md:w-6 md:h-6 rounded-full flex-shrink-0 flex items-center justify-center bg-[#F87250]">
                <span className="text-xs font-bold">✓</span>
              </div>
              <div className="text-xs md:text-sm text-gray-700">
                <div className="font-medium mb-1">
                  Помощь с трудоустройством и составлением резюме
                </div>
                <div>
                  Гарантия возврата средств в течение 14 дней. Подробности в
                  договоре.
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm h-full flex flex-col">
            <div
              className="inline-block text-white px-3 py-1 rounded-md text-sm font-medium mb-4 w-fit"
              style={{ backgroundColor: "#F87250" }}
            >
              -11% до 3 июля
            </div>

            <div className="text-gray-600 text-sm mb-2 flex items-center">
              Web3-разработчик расширенный
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 md:mb-6 min-h-[3rem] md:min-h-[3rem] flex items-start">
              Fullstack Web3: от DeFi протоколов до NFT маркетплейсов
            </h3>

            <div className="mb-4 md:mb-6">
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                34 900 ₽/мес
                <span className="text-base md:text-lg text-gray-400 line-through ml-2">
                  39 900 ₽/mес
                </span>
              </div>
              <div className="text-gray-600 text-xs md:text-sm min-h-[2.5rem] flex items-start">
                при оплате частями в течение 12 месяцев
                <br />
                или единоразово — 380 000 ₽ со скидкой
              </div>
            </div>

            <button
              className="w-full text-white py-3 md:py-4 px-4 md:px-6 rounded-xl font-medium hover:opacity-90 transition-opacity mb-4 md:mb-6 text-sm md:text-base"
              style={{ backgroundColor: "#111827" }}
            >
              Оставить заявку
            </button>

            <div className="space-y-3 md:space-y-4 text-xs md:text-sm text-gray-700 min-h-[6rem] flex flex-col justify-start">
              <div>
                Всё из базового курса + 2 дополнительных модуля: React +
                TypeScript, Tailwind CSS, Web3 Integration
              </div>
              <div className="font-medium">
                10 проектов в портфолио + стажировка в реальном проекте
              </div>
            </div>

            <div className="flex items-start gap-3 mt-4 md:mt-6 p-3 md:p-4 bg-blue-50 rounded-xl mt-auto py-0 px-0">
              <div className="w-5 h-5 md:w-6 md:h-6 rounded-full flex-shrink-0 flex items-center justify-center bg-[#F87250]">
                <span className="text-xs text-white">★</span>
              </div>
              <div className="text-xs md:text-sm text-gray-700">
                <div className="font-medium mb-1">
                  Индивидуальное менторство и код-ревью
                </div>
                <div>
                  Персональный наставник поможет с карьерным ростом. Доступ к
                  закрытому комьюнити разработчиков.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseFormatsSection;
