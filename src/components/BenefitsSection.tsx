import { useState, useEffect } from "react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "🎯",
      title: "Обучение от практиков",
      description:
        'Действующие блокчейн-разработчики (Web3, DeFi, NFT). Обучайтесь на реальных кейсах и актуальных проектах. Никакой "сухой" теории – только применимые на практике знания.',
      image:
        "https://cdn.poehali.dev/files/cea1e332-0d28-46d8-8e3a-8443b975fad4.jpg",
      thumbnail:
        "https://cdn.poehali.dev/files/cea1e332-0d28-46d8-8e3a-8443b975fad4.jpg",
    },
    {
      icon: "🚀",
      title: "Полный стек Web3",
      description:
        "От написания смарт-контрактов до создания фронтенда dApp. Интеграция кошельков (MetaMask), деплой в блокчейн, работа с ключевыми инструментами. Освойте весь стек технологий для создания децентрализованных приложений.",
      image:
        "https://cdn.poehali.dev/files/5cc492f7-6add-440b-be1e-70c4806a07a2.png",
      thumbnail:
        "https://cdn.poehali.dev/files/5cc492f7-6add-440b-be1e-70c4806a07a2.png",
    },
    {
      icon: "💼",
      title: "Реальные проекты",
      description:
        "Создайте работающие dApp: NFT-маркетплейс, DeFi-платформу и другие. Формируйте сильное портфолио и получайте помощь в трудоустройстве в индустрии Web3. Запускайте проекты, которые впечатлят работодателей, и стартуйте в карьере Web3-разработчика.",
      image:
        "https://cdn.poehali.dev/files/a1e160fc-cef9-4bfe-ad39-842399f1bc6c.png",
      thumbnail:
        "https://cdn.poehali.dev/files/a1e160fc-cef9-4bfe-ad39-842399f1bc6c.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeBenefit = benefits[activeIndex];

  // Автоматическое перелистывание
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % benefits.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, benefits.length]);

  return (
    <section className="bg-white relative py-[102px]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 text-left">
            Почему выбирают нас
          </h2>
        </div>

        <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
          {/* Правая часть - текст (первая на мобильных) */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="p-8 px-0">
              <h3
                className="font-bold mb-6 text-gray-900 transition-all duration-700 ease-in-out transform text-sm"
                key={`title-${activeIndex}`}
              >
                {activeBenefit.title}
              </h3>
              <p
                className="text-gray-700 leading-relaxed mb-8 transition-all duration-700 ease-in-out transform text-lg"
                key={`desc-${activeIndex}`}
              >
                {activeBenefit.description}
              </p>

              <div className="text-sm text-gray-600"></div>
            </div>
          </div>

          {/* Левая часть - изображения (вторая на мобильных) */}
          <div
            className="space-y-6 order-2 lg:order-1"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Основное изображение */}
            <div className="relative">
              {/* Terminal frame */}
              <div className="bg-gray-900 rounded-t-xl p-3 border border-gray-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div className="relative overflow-hidden border-x border-b border-gray-700 rounded-b-xl">
                <img
                  src={activeBenefit.image}
                  alt={activeBenefit.title}
                  className="w-full h-96 object-cover transition-all duration-1000 ease-in-out transform"
                  key={activeIndex}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>

            {/* Миниатюры */}
            <div className="flex gap-4 justify-center">
              {benefits.map((benefit, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`relative transition-all duration-500 ease-in-out ${
                    activeIndex === index
                      ? "scale-105"
                      : "opacity-70 hover:opacity-100"
                  }`}
                >
                  {/* Mini terminal frame */}
                  <div className="bg-gray-900 rounded-t-md p-1.5 border border-gray-700">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="relative overflow-hidden border-x border-b border-gray-700 rounded-b-md">
                    <img
                      src={benefit.thumbnail}
                      alt={benefit.title}
                      className={`w-20 h-14 object-cover rounded-md cursor-pointer transition-all duration-300 ${
                        index === activeIndex
                          ? "ring-2 ring-[#ECF86E] ring-offset-2"
                          : "opacity-70 hover:opacity-100"
                      }`}
                    />
                  </div>
                  {activeIndex === index && (
                    <div className="absolute inset-0 bg-gray-900/20 animate-fade-in rounded-md"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Правая часть - текст */}
          <div className="space-y-8">
            <div className="p-8">
              <h3
                className="text-3xl font-bold mb-6 text-gray-900 transition-all duration-700 ease-in-out transform"
                key={`title-${activeIndex}`}
              >
                {activeBenefit.title}
              </h3>
              <p
                className="text-gray-700 leading-relaxed mb-8 transition-all duration-700 ease-in-out transform text-lg"
                key={`desc-${activeIndex}`}
              >
                {activeBenefit.description}
              </p>

              <div className="text-sm text-gray-600"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
