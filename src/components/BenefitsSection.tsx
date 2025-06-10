import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const BenefitsSection = () => {
  const benefits = [
    {
      quote:
        'Действующие блокчейн-разработчики (Web3, DeFi, NFT). Обучайтесь на реальных кейсах и актуальных проектах. Никакой "сухой" теории – только применимые на практике знания.',
      name: "Обучение от практиков",
      designation: "🎯 Экспертный подход",
      src: "https://cdn.poehali.dev/files/d304604d-8306-4577-b8e0-f1be3276b84f.jpg",
    },
    {
      quote:
        "От написания смарт-контрактов до создания фронтенда dApp. Интеграция кошельков (MetaMask), деплой в блокчейн, работа с ключевыми инструментами. Освойте весь стек технологий для создания децентрализованных приложений.",
      name: "Полный стек Web3",
      designation: "🚀 Комплексное обучение",
      src: "https://cdn.poehali.dev/files/5cc492f7-6add-440b-be1e-70c4806a07a2.png",
    },
    {
      quote:
        "Создайте работающие dApp: NFT-маркетплейс, DeFi-платформу и другие. Формируйте сильное портфолио и получайте помощь в трудоустройстве в индустрии Web3. Запускайте проекты, которые впечатлят работодателей, и стартуйте в карьере Web3-разработчика.",
      name: "Реальные проекты",
      designation: "💼 Практическое портфолио",
      src: "https://cdn.poehali.dev/files/a1e160fc-cef9-4bfe-ad39-842399f1bc6c.png",
    },
  ];

  return (
    <section className="bg-white relative py-[102px]">
      <div className="container mx-auto px-6 md:px-6 lg:px-8 max-w-7xl">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#121212] text-center">
            Почему выбирают нас
          </h2>
        </div>

        <AnimatedTestimonials
          testimonials={benefits}
          autoplay={true}
          className="max-w-6xl"
        />
      </div>
    </section>
  );
};

export default BenefitsSection;
