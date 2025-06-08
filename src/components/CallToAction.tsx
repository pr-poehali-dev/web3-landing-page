import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: "#111827" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-800/50 opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-white leading-tight">
            Начни карьеру в{" "}
            <span className="text-neon-purple neon-text">Web3</span> уже сегодня
          </h2>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Присоединяйся к революции децентрализованных технологий. Стань
            частью будущего интернета.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="text-black text-xl px-10 py-6 font-bold hover:opacity-90 transition-all duration-300"
              style={{ backgroundColor: "#ECF86E" }}
            >
              Записаться сейчас
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-[#7B68EE] text-[#7B68EE] hover:bg-[#7B68EE] hover:text-white transition-all duration-300 text-lg px-8 py-6"
            >
              📞 Получить консультацию
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="glass-card p-6 rounded-xl">
              <div className="text-3xl font-black text-neon-purple mb-2">6</div>
              <div className="text-sm text-gray-400">недель обучения</div>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <div className="text-3xl font-black text-neon-purple mb-2">
                24/7
              </div>
              <div className="text-sm text-gray-400">поддержка менторов</div>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <div className="text-3xl font-black text-neon-purple mb-2">
                100%
              </div>
              <div className="text-sm text-gray-400">практические проекты</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
