const BenefitsSection = () => {
  const benefits = [
    {
      icon: "🎯",
      title: "Практические проекты",
      description:
        "Создашь собственный NFT-проект и DeFi-приложение. Полное портфолио для работодателя.",
    },
    {
      icon: "🚀",
      title: "Актуальные технологии",
      description:
        "Solidity, Web3.js, MetaMask интеграция. Изучаешь то, что используют топовые компании.",
    },
    {
      icon: "💰",
      title: "Высокие зарплаты",
      description:
        "Web3-разработчики получают от 200к₽. Окупи курс за первый месяц работы.",
    },
  ];

  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Почему выбирают нас?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            Практический подход и реальные результаты наших студентов
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-xl hover:neon-glow transition-all duration-300 group cursor-pointer"
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-neon-purple transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
