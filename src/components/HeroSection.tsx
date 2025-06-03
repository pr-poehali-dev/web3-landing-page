import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center cyber-gradient overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/5 to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon-pink/10 rounded-full blur-3xl animate-float delay-1000"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
            <span className="neon-text bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
              Web3
            </span>
            <br />
            <span className="text-white">с нуля</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light leading-relaxed">
            Освой блокчейн, криптовалюты и NFT за 6 недель.
            <br />
            Стань экспертом в самой перспективной сфере технологий.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-neon-purple to-neon-pink hover:from-neon-pink hover:to-neon-purple neon-glow transition-all duration-300 text-lg px-8 py-4 font-semibold"
            >
              🚀 Записаться на курс
            </Button>

            <div className="flex items-center gap-2 text-gray-400">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm">Осталось 12 мест</span>
            </div>
          </div>

          <div className="mt-12 flex justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span className="text-neon-purple">⭐</span>
              <span>4.9/5 рейтинг</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-neon-purple">👥</span>
              <span>500+ выпускников</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-neon-purple">💼</span>
              <span>85% трудоустройство</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
