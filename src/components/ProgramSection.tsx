import Icon from "@/components/ui/icon";

const ProgramSection = () => {
  const modules = [
    {
      number: "01",
      title: "Основы блокчейна",
      description: "История, принципы работы, консенсус-алгоритмы",
      duration: "5 часов",
      projects: "2 проекта",
    },
    {
      number: "02",
      title: "Ethereum и смарт-контракты",
      description: "Solidity, развертывание контрактов, газ",
      duration: "8 часов",
      projects: "3 проекта",
    },
    {
      number: "03",
      title: "DeFi протоколы",
      description: "Uniswap, Compound, yield farming",
      duration: "6 часов",
      projects: "2 проекта",
    },
    {
      number: "04",
      title: "NFT и метаверс",
      description: "Создание коллекций, OpenSea, игровые активы",
      duration: "7 часов",
      projects: "4 проекта",
    },
    {
      number: "05",
      title: "Web3 разработка",
      description: "Web3.js, React, кошельки, dApps",
      duration: "10 часов",
      projects: "5 проектов",
    },
    {
      number: "06",
      title: "Итоговый проект",
      description: "Собственное DeFi-приложение с нуля",
      duration: "15 часов",
      projects: "1 проект",
    },
    {
      isSpecial: true,
      title: "Сертификат о завершении курса",
      description: "Подтверждение ваших знаний и навыков",
      duration: "Навсегда",
      projects: "1 сертификат",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Левая колонка - заголовок */}
          <div className="lg:sticky lg:top-20">
            <h2 className="lg:text-5xl font-bold text-gray-900 mb-4 text-3xl">
              Программа курса
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              6 модулей от теории до практики. 51 час контента + менторство
            </p>
          </div>

          {/* Правая колонка - модули курса */}
          <div className="space-y-4">
            {modules.map((module, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300 group cursor-pointer border border-gray-100 ${
                  module.isSpecial
                    ? "bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200"
                    : ""
                }`}
              >
                <div className="flex items-center flex-1">
                  <div className="w-16 mr-8">
                    <span className="text-4xl font-bold text-gray-300 group-hover:text-gray-400 transition-colors">
                      {module.isSpecial ? "🎓" : module.number}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {module.title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      {module.description}
                    </p>
                  </div>
                </div>

                {!module.isSpecial && (
                  <div className="text-right ml-8 space-y-1">
                    <div className="text-sm font-medium text-gray-900">
                      {module.duration}
                    </div>
                    <div className="text-sm text-gray-500">
                      {module.projects}
                    </div>
                  </div>
                )}

                {module.isSpecial && (
                  <div className="text-right ml-8">
                    <div className="text-sm font-medium text-blue-600">
                      {module.duration}
                    </div>
                    <div className="text-sm text-blue-500">
                      {module.projects}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
