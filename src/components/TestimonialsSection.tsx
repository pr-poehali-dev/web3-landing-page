const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Акбар Аблаев",
      text: "Вместо поступления в университет решил пройти курсы по UX/UI дизайну в Uprock и сейчас получаю от 1000 руб/час.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Артем Якушев",
      text: "Продал PS4 и купил курс в UPROCK. Теперь работаю в AVA Digital.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Светлана Лян",
      text: "Я не откликалась на вакансии самостоятельно: все предложения получила исключительно от школы. Сейчас работаю в ONLY.",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Ирина Никитина",
      text: "Год назад была администратором в школе английского языка. Сейчас работаю в digital-агентстве Mish.",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Алексей Петров",
      text: "Курс дал мне все необходимые знания для работы в Web3. Через месяц после окончания получил оффер в Binance!",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Мария Козлова",
      text: "Отличная структура материала и практические задания. Создала свой NFT-проект, который приносит доход.",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Денис Волков",
      text: "Лучший курс по Web3 на русском языке. Менторы всегда помогали, материал актуальный и понятный.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Елена Сидорова",
      text: "После курса запустила собственный DeFi-протокол. Знания применяю каждый день в работе.",
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
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Отзывы наших студентов
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Реальные истории успеха выпускников
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
