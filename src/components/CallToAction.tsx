import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20 relative" style={{ backgroundColor: "#111827" }}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-white leading-tight">
            Начни карьеру в <span className="text-purple-400">Web3</span> уже
            сегодня
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
            <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
              <div className="text-3xl font-black text-purple-400 mb-2">6</div>
              <div className="text-sm text-gray-400">недель обучения</div>
            </div>
            <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
              <div className="text-3xl font-black text-purple-400 mb-2">
                24/7
              </div>
              <div className="text-sm text-gray-400">поддержка менторов</div>
            </div>
            <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
              <div className="text-3xl font-black text-purple-400 mb-2">
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
