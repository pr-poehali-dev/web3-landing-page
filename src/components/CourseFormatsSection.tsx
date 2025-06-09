const CourseFormatsSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <h2
          className="text-4xl font-bold text-gray-900 mb-12 text-center"
          style={{ fontSize: "36px" }}
        >
          Выберите свой путь в веб-разработке
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="inline-block bg-blue-500 text-white px-3 py-1 rounded-md text-sm font-medium mb-4">
              Популярный выбор
            </div>

            <div className="text-gray-600 text-sm mb-2">
              Frontend-разработчик
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6 min-h-[3rem]">
              Создавайте современные веб-приложения с React и TypeScript
            </h3>

            <div className="mb-6">
              <div className="text-3xl font-bold text-gray-900 mb-1">
                24 900 ₽/мес
                <span className="text-lg text-gray-400 line-through ml-2">
                  29 900 ₽/мес
                </span>
              </div>
              <div className="text-gray-600 text-sm min-h-[2.5rem]">
                при оплате частями в течение 10 месяцев
                <br />
                или единоразово — 240 000 ₽ со скидкой
              </div>
            </div>

            <button className="w-full bg-gray-900 text-white py-4 px-6 rounded-xl font-medium hover:bg-gray-800 transition-colors mb-6">
              Начать бесплатно
            </button>

            <div className="space-y-4 text-sm text-gray-700 min-h-[6rem]">
              <div>
                React, TypeScript, HTML5, CSS3, JavaScript ES6+, Tailwind CSS,
                адаптивная верстка, работа с API
              </div>
              <div className="font-medium">
                6 практических проектов в портфолио
              </div>
            </div>

            <div className="flex items-start gap-3 mt-6 p-4 bg-gray-50 rounded-xl">
              <div className="w-6 h-6 bg-green-400 rounded-full flex-shrink-0 flex items-center justify-center">
                <span className="text-xs font-bold">✓</span>
              </div>
              <div className="text-sm text-gray-700">
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

          <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-blue-200 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                Рекомендуем
              </div>
            </div>

            <div className="text-gray-600 text-sm mb-2 flex items-center pt-2">
              Fullstack-разработчик
              <span className="ml-1 text-blue-500">★</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6 min-h-[3rem]">
              Полный стек разработки: от интерфейса до сервера и базы данных
            </h3>

            <div className="mb-6">
              <div className="text-3xl font-bold text-gray-900 mb-1">
                34 900 ₽/мес
                <span className="text-lg text-gray-400 line-through ml-2">
                  39 900 ₽/мес
                </span>
              </div>
              <div className="text-gray-600 text-sm min-h-[2.5rem]">
                при оплате частями в течение 12 месяцев
                <br />
                или единоразово — 380 000 ₽ со скидкой
              </div>
            </div>

            <button className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl font-medium hover:bg-blue-700 transition-colors mb-6">
              Начать бесплатно
            </button>

            <div className="space-y-4 text-sm text-gray-700 min-h-[6rem]">
              <div>
                Всё из базового курса +
                <span className="font-medium"> Backend разработка:</span>
                Node.js, Express, MongoDB, PostgreSQL, API разработка, DevOps
                основы
              </div>
              <div className="font-medium">
                10 проектов в портфолио + стажировка в реальном проекте
              </div>
            </div>

            <div className="flex items-start gap-3 mt-6 p-4 bg-blue-50 rounded-xl">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 flex items-center justify-center">
                <span className="text-xs text-white">★</span>
              </div>
              <div className="text-sm text-gray-700">
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
