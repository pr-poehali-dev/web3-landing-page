const ProgramSection = () => {
  const modules = [
    {
      number: "01",
      title: "Основы блокчейна",
      description: "История, принципы работы, консенсус-алгоритмы",
      duration: "5 часов",
    },
    {
      number: "02",
      title: "Ethereum и смарт-контракты",
      description: "Solidity, развертывание контрактов, газ",
      duration: "8 часов",
    },
    {
      number: "03",
      title: "DeFi протоколы",
      description: "Uniswap, Compound, yield farming",
      duration: "6 часов",
    },
    {
      number: "04",
      title: "NFT и метаверс",
      description: "Создание коллекций, OpenSea, игровые активы",
      duration: "7 часов",
    },
    {
      number: "05",
      title: "Web3 разработка",
      description: "Web3.js, React, кошельки, dApps",
      duration: "10 часов",
    },
    {
      number: "06",
      title: "Итоговый проект",
      description: "Собственное DeFi-приложение с нуля",
      duration: "15 часов",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Программа курса
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            6 модулей от теории до практики. 51 час контента + менторство
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {modules.map((module, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-xl mb-4 hover:neon-glow transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="text-4xl font-black text-neon-purple group-hover:text-neon-pink transition-colors">
                    {module.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-purple transition-colors">
                      {module.title}
                    </h3>
                    <p className="text-gray-400">{module.description}</p>
                  </div>
                </div>
                <div className="text-sm text-neon-purple font-semibold bg-neon-purple/10 px-3 py-1 rounded-full">
                  {module.duration}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-neon-purple to-neon-pink p-4 rounded-xl text-white font-semibold">
            <span>🏆</span>
            <span>Сертификат о завершении курса</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
