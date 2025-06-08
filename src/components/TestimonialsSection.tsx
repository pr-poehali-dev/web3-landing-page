const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Алексей Петров",
      role: "Web3 Developer в Binance",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      text: "Курс дал мне все необходимые знания для работы в Web3. Через месяц после окончания получил оффер в Binance!",
      rating: 5,
    },
    {
      name: "Мария Козлова",
      role: "Blockchain Consultant",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      text: "Отличная структура материала и практические задания. Создала свой NFT-проект, который приносит доход.",
      rating: 5,
    },
    {
      name: "Денис Волков",
      role: "Senior Solidity Developer",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      text: "Лучший курс по Web3 на русском языке. Менторы всегда помогали, материал актуальный и понятный.",
      rating: 5,
    },
    {
      name: "Елена Сидорова",
      role: "DeFi Product Manager",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      text: "После курса запустила собственный DeFi-протокол. Знания применяю каждый день в работе.",
      rating: 5,
    },
    {
      name: "Игорь Морозов",
      role: "Blockchain Architect в Tinkoff",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      text: "Курс помог структурировать знания и получить повышение. Теперь возглавляю команду разработки блокчейн-решений.",
      rating: 5,
    },
    {
      name: "Анна Федорова",
      role: "Smart Contract Auditor",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      text: "Глубокие знания по безопасности смарт-контрактов. Сейчас работаю в топовой аудиторской компании.",
      rating: 5,
    },
    {
      name: "Виктор Новиков",
      role: "Web3 Startup Founder",
      avatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
      text: "Курс дал понимание всей экосистемы Web3. Основал стартап, который привлек $2M инвестиций.",
      rating: 5,
    },
    {
      name: "Ольга Романова",
      role: "Crypto Analyst в Huobi",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
      text: "Отличное сочетание теории и практики. Полученные навыки помогли стать экспертом в криптоаналитике.",
      rating: 5,
    },
  ];

  // Дублируем отзывы для бесшовной анимации
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  const TestimonialCard = ({
    testimonial,
  }: {
    testimonial: (typeof testimonials)[0];
  }) => (
    <div className="glass-card p-6 rounded-xl hover:neon-glow transition-all duration-300 group flex-shrink-0 w-80 mx-4">
      <div className="flex items-center mb-4">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h4 className="font-semibold text-white">{testimonial.name}</h4>
          <p className="text-sm text-gray-400">{testimonial.role}</p>
        </div>
      </div>

      <div className="flex mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <span key={i} className="text-neon-purple text-lg">
            ⭐
          </span>
        ))}
      </div>

      <p className="text-gray-300 leading-relaxed">"{testimonial.text}"</p>
    </div>
  );

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Отзывы студентов
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Реальные истории успеха наших выпускников
          </p>
        </div>

        <div className="relative">
          <div className="flex animate-scroll">
            {duplicatedTestimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
