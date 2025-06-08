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
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="mb-8 text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Программа курса
          </h2>
          <p className="text-gray-600 max-w-2xl text-base">
            6 модулей от теории до практики. 51 час контента + менторство
          </p>
        </div>

        <div className="space-y-6">
          {modules.map((module, index) => (
            <div
              key={index}
              className={`grid grid-cols-[80px_1fr_200px] items-center gap-8 pl-0 py-8 hover:bg-white/50 rounded-2xl transition-all duration-300 group cursor-pointer`}
              style={
                module.isSpecial
                  ? {
                      backgroundImage:
                        "url(https://cdn.poehali.dev/files/cc2fe8c1-7721-4026-a0dc-34c00ef9f456.png)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }
                  : {}
              }
            >
              <div className="text-6xl font-bold text-gray-500 opacity-50 group-hover:scale-110 transition-transform duration-300">
                {module.isSpecial ? "" : module.number}
              </div>
              <div className="py-0">
                <h3 className="font-bold text-gray-900 mb-3 group-hover:text-gray-900 transition-colors text-2xl">
                  {module.title}
                </h3>
                <p className="text-gray-600 mb-4 text-base">
                  {module.description}
                </p>
              </div>
              <div
                className={`space-y-2 py-0 my-0 mx-[5px] px-0 ${module.isSpecial ? "hidden" : ""}`}
              >
                <div className="text-gray-500 font-medium text-lg bg-gray-100 rounded-xl text-center pr-0">
                  {module.duration}
                </div>
                <div className="text-gray-500 font-medium text-lg bg-gray-100 rounded-xl text-center pr-0">
                  {module.projects}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
