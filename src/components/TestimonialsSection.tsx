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
        "https://images.unsplash.com/photo-1494790108755-2616b2234ad0?w=100&h=100&fit=crop&crop=face",
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
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Отзывы студентов
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Реальные истории успеха наших выпускников
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-xl hover:neon-glow transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-white">
                    {testimonial.name}
                  </h4>
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

              <p className="text-gray-300 leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
