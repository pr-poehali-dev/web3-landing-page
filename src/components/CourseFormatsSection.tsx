const CourseFormatsSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <h2
          className="text-4xl font-bold text-gray-900 mb-12"
          style={{ fontSize: "36px" }}
        >
          Выберите любой формат курса
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Первая карточка - Базовый Web3 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm px-[23px]">
            <div className="inline-block bg-orange-500 text-white px-3 py-1 rounded-md text-sm font-medium mb-4">
              -15% до 9 июня
            </div>

            <div className="text-gray-600 text-sm mb-2">Web3-разработчик</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Всё необходимое, чтобы начать работать junior разработчиком
              блокчейн и набираться опыта
            </h3>

            <div className="mb-6">
              <div className="text-3xl font-bold text-gray-900 mb-1">
                25 600 ₽/мес
                <span className="text-lg text-gray-400 line-through ml-2">
                  30 000 ₽/мес
                </span>
              </div>
              <div className="text-gray-600 text-sm">
                если платить частями в течение 12 месяцев
                <br />
                или сразу, но дешевле — 295 000 ₽ с учётом промокода
              </div>
            </div>

            <button className="w-full bg-gray-900 text-white py-4 px-6 rounded-xl font-medium hover:bg-gray-800 transition-colors mb-6">
              Начать учиться бесплатно
            </button>

            <div className="space-y-4 text-sm text-gray-700">
              <div>
                Solidity, Smart Contracts, DeFi, NFT, DAO, Ethereum, Polygon,
                роутинг и авторизация в Web3, DApps, MetaMask интеграция
              </div>
              <div className="font-medium">8 учебных проектов</div>
            </div>

            <div className="flex items-start gap-3 mt-6 p-4 bg-gray-50 rounded-xl">
              <div className="w-6 h-6 bg-yellow-400 rounded-full flex-shrink-0 flex items-center justify-center">
                <span className="text-xs font-bold">₽</span>
              </div>
              <div className="text-sm text-gray-700">
                <div className="font-medium mb-1">
                  Ещё можно оплатить в кредит от 2 150 ₽/мес.
                </div>
                <div>
                  А если передумаете, вернём деньги за остаток курса.
                  Подробности — в 7 пункте оферты.
                </div>
              </div>
            </div>
          </div>

          {/* Вторая карточка - Расширенный Web3 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm px-[23px]">
            <div className="inline-block bg-orange-500 text-white px-3 py-1 rounded-md text-sm font-medium mb-4">
              -7% до 9 июня
            </div>

            <div className="text-gray-600 text-sm mb-2 flex items-center">
              Web3-разработчик расширенный
              <span className="ml-1 text-gray-400">›</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              То же самое + больше навыков, которые помогут найти работу и
              быстрее вырасти до middle
            </h3>

            <div className="mb-6">
              <div className="text-3xl font-bold text-gray-900 mb-1">
                31 275 ₽/мес
                <span className="text-lg text-gray-400 line-through ml-2">
                  33 500 ₽/мес
                </span>
              </div>
              <div className="text-gray-600 text-sm">
                если платить частями в течение 16 месяцев
                <br />
                или сразу, но дешевле — 465 000 ₽ с учётом промокода
              </div>
            </div>

            <button className="w-full bg-gray-900 text-white py-4 px-6 rounded-xl font-medium hover:bg-gray-800 transition-colors mb-6">
              Начать учиться бесплатно
            </button>

            <div className="space-y-4 text-sm text-gray-700">
              <div>
                Всё то же самое +{" "}
                <span className="font-medium">2 дополнительных модуля:</span>{" "}
                работа с фреймворком Hardhat, тестирование смарт-контрактов
              </div>
              <div className="font-medium">
                8 учебных проектов + 2 проекта по дополнительным модулям, чтобы
                усилить портфолио, а после обучения — практика на 2 проектах от
                настоящих заказчиков
              </div>
            </div>

            <div className="flex items-start gap-3 mt-6 p-4 bg-gray-50 rounded-xl">
              <div className="w-6 h-6 bg-gray-300 rounded-full flex-shrink-0 flex items-center justify-center">
                <span className="text-xs">⚡</span>
              </div>
              <div className="text-sm text-gray-700">
                <div className="font-medium mb-1">
                  Курс может оплатить ваш работодатель
                </div>
                <div>
                  или вы сами через свою компанию. Узнайте, чем отличаются
                  условия для юрлиц.
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
