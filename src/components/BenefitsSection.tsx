import { FeatureSteps } from "@/components/ui/feature-section";

const BenefitsSection = () => {
  const features = [
    {
      step: "🎯",
      title: "Обучение от практиков",
      content:
        'Действующие блокчейн-разработчики (Web3, DeFi, NFT). Обучайтесь на реальных кейсах и актуальных проектах. Никакой "сухой" теории – только применимые на практике знания.',
      image:
        "https://cdn.poehali.dev/files/d304604d-8306-4577-b8e0-f1be3276b84f.jpg",
    },
    {
      step: "🚀",
      title: "Полный стек Web3",
      content:
        "От написания смарт-контрактов до создания фронтенда dApp. Интеграция кошельков (MetaMask), деплой в блокчейн, работа с ключевыми инструментами. Освойте весь стек технологий для создания децентрализованных приложений.",
      image:
        "https://cdn.poehali.dev/files/5cc492f7-6add-440b-be1e-70c4806a07a2.png",
    },
    {
      step: "💼",
      title: "Реальные проекты",
      content:
        "Создайте работающие dApp: NFT-маркетплейс, DeFi-платформу и другие. Формируйте сильное портфолио и получайте помощь в трудоустройстве в индустрии Web3. Запускайте проекты, которые впечатлят работодателей, и стартуйте в карьере Web3-разработчика.",
      image:
        "https://cdn.poehali.dev/files/a1e160fc-cef9-4bfe-ad39-842399f1bc6c.png",
    },
  ];

  return (
    <section className="bg-white relative py-[102px]">
      <div className="container mx-auto px-6 md:px-6 lg:px-8 max-w-7xl">
        <FeatureSteps
          features={features}
          title="Почему выбирают нас"
          autoPlayInterval={4000}
        />
      </div>
    </section>
  );
};

export default BenefitsSection;
