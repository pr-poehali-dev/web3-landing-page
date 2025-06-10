import { FeatureSteps } from "@/components/ui/feature-section";

const BenefitsSection = () => {
  const features = [
    {
      step: "🎯",
      title: "Обучение от практиков",
      content:
        "Действующие блокчейн-разработчики (Web3, DeFi, NFT). Обучайтесь на реальных кейсах и актуальных проектах.",
      image:
        "https://cdn.poehali.dev/files/d304604d-8306-4577-b8e0-f1be3276b84f.jpg",
    },
    {
      step: "🚀",
      title: "Полный стек Web3",
      content:
        "От написания смарт-контрактов до создания фронтенда dApp. Интеграция кошельков (MetaMask), деплой в блокчейн, работа с ключевыми инструментами.",
      image:
        "https://cdn.poehali.dev/files/5cc492f7-6add-440b-be1e-70c4806a07a2.png",
    },
    {
      step: "💼",
      title: "Реальные проекты",
      content:
        "Создайте работающие dApp: NFT-маркетплейс, DeFi-платформу и другие. Формируйте сильное портфолио и получайте помощь в трудоустройстве.",
      image:
        "https://cdn.poehali.dev/files/a1e160fc-cef9-4bfe-ad39-842399f1bc6c.png",
    },
  ];

  return (
    <section className="bg-white relative py-[102px]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-[#121212]">
            Почему выбирают нас
          </h2>
        </div>
        <FeatureSteps features={features} autoPlayInterval={4000} />
      </div>
    </section>
  );
};

export default BenefitsSection;
