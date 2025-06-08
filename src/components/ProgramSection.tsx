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
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="mb-8 text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
            Программа курса
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            6 модулей от теории до практики. 51 час контента + менторство
          </p>
        </div>

        <div className="space-y-8">
          {modules.map((module, index) => (
            <div
              key={index}
              className="grid grid-cols-[80px_1fr_200px] items-start gap-8 p-8 hover:bg-white/50 rounded-2xl transition-all duration-300 group cursor-pointer"
            >
              <div className="text-6xl font-black text-gray-500 group-hover:scale-110 transition-transform duration-300">
                {module.number}
              </div>
              <div className="pt-2 px-[185px]">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-900 transition-colors">
                  {module.title}
                </h3>
                <p className="text-lg text-gray-600 mb-4">
                  {module.description}
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-gray-500 font-bold text-lg bg-gray-100 px-4 py-2 rounded-xl text-center">
                  {module.duration}
                </div>
                <div className="text-gray-500 font-bold text-lg bg-gray-100 px-4 py-2 rounded-xl text-center">
                  {module.projects}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-xl text-gray-900 font-semibold">
            <span>🏆</span>
            <span>Сертификат о завершении курса</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
