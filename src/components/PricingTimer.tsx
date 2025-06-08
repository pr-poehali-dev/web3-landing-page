import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const PricingTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7); // 7 days from now

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-r from-neon-purple/10 to-neon-pink/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-neon-purple to-neon-pink text-white px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <span>🔥</span>
            <span>РАННЯЯ ЦЕНА</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black mb-6 text-white">
            Только <span className="text-neon-purple neon-text">199₽</span>
          </h2>

          <p className="text-xl text-gray-300 mb-8">
            Вместо 499₽ • Акция заканчивается через:
          </p>

          <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mb-12">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div
                key={unit}
                className="glass-card p-4 rounded-xl text-center neon-glow"
              >
                <div className="text-3xl font-black text-neon-purple mb-1">
                  {value.toString().padStart(2, "0")}
                </div>
                <div className="text-xs text-gray-400 uppercase">
                  {unit === "days"
                    ? "дни"
                    : unit === "hours"
                      ? "часы"
                      : unit === "minutes"
                        ? "мин"
                        : "сек"}
                </div>
              </div>
            ))}
          </div>

          <Button
            size="lg"
            className="bg-[#7B68EE] hover:bg-[#6A5ACD] text-white text-xl px-12 py-6 font-bold"
          >
            💳 Оплатить 199₽
          </Button>

          <div className="mt-8 text-sm text-gray-500">
            <p>✅ Возврат денег в течение 14 дней</p>
            <p>✅ Рассрочка 0% на 3 месяца</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTimer;
