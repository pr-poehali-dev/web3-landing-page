import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      className="relative h-[60vh] flex items-center"
      style={{ backgroundColor: "#111827" }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-float delay-1000"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full px-[46px]">
          {/* Left Content */}
          <div className="space-y-8 px-3">
            {/* Main Title */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-600 text-sm text-gray-300 bg-[#00000000]">
              <h1 className="text-5xl md:text-7xl font-black leading-tight">
                <span className="bg-gradient-to-r from-slate-100 via-white to-slate-200 bg-clip-text text-7xl text-[#ECF86E]">
                  Web3 с нуля
                </span>
              </h1>

              <p className="md:text-xl text-gray-300 mt-6 leading-relaxed max-w-lg text-base">
                Освойте полный цикл блокчейн-разработки и криптовалют — с нуля
                за 6 недель. Получите реальный опыт.
              </p>
            </div>

            {/* CTA Button */}
            <Button
              size="lg"
              className="text-black transition-all duration-300 text-lg px-8 py-4 font-semibold rounded-lg hover:opacity-90"
              style={{ backgroundColor: "#ECF86E" }}
            >
              Записаться на курс
            </Button>

            {/* Additional Info */}
            <div className="text-sm text-gray-400">
              <p>Ближайший старт — 26 июня, 10 июля и 24 июля</p>
            </div>

            {/* Stats */}
            <div className="">
              <div className="flex items-center gap-2">
                <span></span>
                <span></span>
              </div>
              <div className="flex items-center gap-2">
                <span></span>
                <span></span>
              </div>
              <div className="flex items-center gap-2">
                <span></span>
                <span></span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative lg:block hidden">
            <div className="relative">
              {/* Main Image Placeholder */}
              <div className="w-full h-96 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop&crop=faces"
                  alt="Разработчик за работой"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-gray-800 border border-gray-600 rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-neon-purple to-neon-pink rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">⭐</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">4,5</div>
                    <div className="text-xs text-gray-400">на Отзовике</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-blue-600 rounded-xl p-4 shadow-xl">
                <div className="text-white">
                  <div className="text-2xl font-bold">10 000</div>
                  <div className="text-sm opacity-90">
                    выпускников нашли работу
                  </div>
                </div>
              </div>

              {/* Убираем Available Spots Indicator */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
