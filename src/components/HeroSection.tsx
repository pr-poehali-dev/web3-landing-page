import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-[60vh] sm:h-[60vh] flex items-center pt-16 sm:pt-20"
      style={{ backgroundColor: "#111827" }}
    >
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 container mx-auto px-4 pt-20 pb-16 flex flex-col justify-center min-h-screen">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Освойте{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Python
            </span>{" "}
            с нуля
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Пошаговый курс для начинающих программистов. От основ до создания
            реальных проектов всего за 12 недель
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 text-lg font-semibold"
            >
              Начать обучение
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-900 px-8 py-3 text-lg font-semibold"
            >
              Узнать больше
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;
