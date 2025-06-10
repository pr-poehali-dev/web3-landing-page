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
    <section id="program" className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-3 md:px-6 lg:px-8 max-w-7xl">
        <div className="mb-8 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-gray-900">
            Программа курса
          </h2>
          <p className="text-gray-600 max-w-2xl text-base md:text-lg">
            6 модулей от теории до практики. 51 час контента + менторство.
          </p>
        </div>

        <div className="space-y-3 md:space-y-4">
          {modules.map((module, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row md:items-center justify-between p-4 md:p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300 group cursor-pointer border border-gray-100 ${
                module.isSpecial ? "border-lime-200" : ""
              }`}
              style={module.isSpecial ? { backgroundColor: "#F3F9B4" } : {}}
            >
              <div className="flex items-start md:items-center flex-1">
                <div className="w-12 md:w-16 mr-4 md:mr-8 flex-shrink-0">
                  <span className="font-bold text-gray-300 group-hover:text-gray-400 transition-colors text-4xl md:text-7xl">
                    {module.isSpecial ? "🎓" : module.number}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#F87250] transition-colors md:mx-[276px]">
                    {module.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed md:mx-[276px]">
                    {module.description}
                  </p>
                </div>
              </div>

              {!module.isSpecial && (
                <div className="text-left md:text-right mt-3 md:mt-0 md:ml-8 space-y-1 pl-16 md:pl-0">
                  <div className="text-sm font-medium text-gray-900">
                    {module.duration}
                  </div>
                  <div className="text-sm text-gray-500">{module.projects}</div>
                </div>
              )}

              {module.isSpecial && (
                <div className="text-left md:text-right mt-3 md:mt-0 md:ml-8 pl-16 md:pl-0">
                  <div className="text-sm font-medium text-[#111827]">
                    {module.duration}
                  </div>
                  <div className="text-sm text-[#111827]">
                    {module.projects}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
