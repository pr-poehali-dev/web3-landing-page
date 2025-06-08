import { useState } from "react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "🎯",
      title: "Практические проекты",
      description:
        "Создашь собственный NFT-проект и DeFi-приложение. Полное портфолио для работодателя.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
      thumbnail:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=150&h=100&fit=crop&crop=center",
    },
    {
      icon: "🚀",
      title: "Актуальные технологии",
      description:
        "Solidity, Web3.js, MetaMask интеграция. Изучаешь то, что используют топовые компании.",
      image:
        "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=600&fit=crop&crop=center",
      thumbnail:
        "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=150&h=100&fit=crop&crop=center",
    },
    {
      icon: "💰",
      title: "Высокие зарплаты",
      description:
        "Web3-разработчики получают от 200к₽. Окупи курс за первый месяц работы.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
      thumbnail:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=150&h=100&fit=crop&crop=center",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeBenefit = benefits[activeIndex];

  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white text-left">
            Почему выбирают нас
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Левая часть - изображения */}
          <div className="space-y-6">
            {/* Основное изображение */}
            <div className="relative rounded-xl overflow-hidden glass-card">
              <img
                src={activeBenefit.image}
                alt={activeBenefit.title}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            {/* Миниатюры */}
            <div className="flex gap-4 justify-center">
              {benefits.map((benefit, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
                    activeIndex === index
                      ? "ring-2 ring-neon-purple scale-105"
                      : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={benefit.thumbnail}
                    alt={benefit.title}
                    className="w-24 h-16 object-cover"
                  />
                  {activeIndex === index && (
                    <div className="absolute inset-0 bg-neon-purple/20"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Правая часть - текст */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-xl">
              <div className="text-4xl mb-4">{activeBenefit.icon}</div>
              <h3 className="text-3xl font-bold mb-6 text-white">
                {activeBenefit.title}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {activeBenefit.description}
              </p>

              <div className="text-sm text-gray-400">
                Кроме тренажёра, вас ждут проекты, которые максимально
                приближены к реальным задачам фулстек-разработчиков. Эксперты из
                крупных IT-компаний проверят ваш код и дадут подробную обратную
                связь.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
