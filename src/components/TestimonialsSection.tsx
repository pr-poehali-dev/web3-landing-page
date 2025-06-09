const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Владимир Блокчейнов",
      text: "После курса получил оффер в Binance на позицию Smart Contract Developer. Зарплата выросла в 5 раз!",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Анна Криптова",
      text: "Создала свой NFT-маркетплейс на Ethereum. За первый месяц заработала больше, чем за год на прошлой работе.",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Дмитрий Солана",
      text: "Запустил собственный DeFi-протокол на Solana. Курс дал все необходимые знания для работы с блокчейном.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Екатерина Эфириум",
      text: "Была бухгалтером, теперь разрабатываю смарт-контракты в Uniswap Labs. Web3 изменил мою жизнь!",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Максим Деценко",
      text: "Создал токен, который попал в топ-100 CoinGecko. Курс научил меня токеномике и маркетингу в Web3.",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Алиса Полигон",
      text: "Получила работу в Chainlink сразу после выпуска. Менторы помогли подготовиться к техническому собеседованию.",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Роман Авакс",
      text: "Построил GameFi-платформу на Avalanche с оборотом $2M. Лучшие инвестиции в образование!",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "София Космос",
      text: "Запустила кроссчейн-мост между Ethereum и Cosmos. Теперь консультирую крупные DeFi-протоколы.",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    },
  ];

  // Дублируем отзывы для бесшовной анимации
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  const TestimonialCard = ({
    testimonial,
  }: {
    testimonial: (typeof testimonials)[0];
  }) => (
    <div className="flex items-start gap-4 mb-8 opacity-90 hover:opacity-100 transition-opacity duration-300">
      <img
        src={testimonial.avatar}
        alt={testimonial.name}
        className="w-12 h-12 rounded-full flex-shrink-0"
      />
      <div className="flex-1">
        <p className="text-gray-700 leading-relaxed mb-2 text-sm">
          {testimonial.text}
        </p>
        <p className="text-gray-500 text-xs font-medium">{testimonial.name}</p>
      </div>
    </div>
  );

  return (
    <section className="bg-white py-[102px]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Левая колонка - заголовок */}
          <div className="lg:sticky lg:top-20">
            <h2 className="text-[36px] font-bold text-gray-900 mb-4">
              Отзывы наших студентов
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Реальные истории успеха выпускников.
            </p>
          </div>

          {/* Правая колонка - отзывы с автопрокруткой */}
          <div className="relative">
            <div className="h-96 overflow-hidden relative">
              <div className="animate-scroll-up">
                {duplicatedTestimonials.map((testimonial, index) => (
                  <TestimonialCard key={index} testimonial={testimonial} />
                ))}
              </div>

              {/* Градиентное затухание внизу */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-up {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        .animate-scroll-up {
          animation: scroll-up 60s linear infinite;
        }

        .animate-scroll-up:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
