import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    telegram: "",
  });
  const [isAgreed, setIsAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAgreed) return;

    console.log("Форма отправлена:", formData);
    // Здесь будет логика отправки формы
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#121212]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-start">
          {/* Левая колонка с заголовком */}
          <div className="lg:pt-0">
            <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 md:mb-4 leading-tight">
              Получить консультацию
              <br className="hidden md:block" />
              <span className="md:hidden"> </span>по обучению
            </h2>
            <p className="text-gray-400 text-base md:text-lg">
              Наш менеджер свяжется с вами в течение 30 минут.
            </p>
          </div>

          {/* Правая колонка с формой */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-white mb-0"></h3>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Введите имя"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 md:px-4 py-3 md:py-4 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors text-sm md:text-base bg-[#121212]"
                  required
                />
              </div>

              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  placeholder="+7 989 297-15-01"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 md:px-4 py-3 md:py-4 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors pl-10 md:pl-12 text-sm md:text-base bg-[#121212]"
                  required
                />
                <div className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 flex items-center">
                  <span className="text-base md:text-lg mr-1 md:mr-2">🇷🇺</span>
                </div>
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Введите email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 md:px-4 py-3 md:py-4 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors text-sm md:text-base bg-[#121212]"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  name="telegram"
                  placeholder="@юзернейм telegram"
                  value={formData.telegram}
                  onChange={handleInputChange}
                  className="w-full px-3 md:px-4 py-3 md:py-4 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors text-sm md:text-base bg-[#121212]"
                />
              </div>

              <div className="flex items-start space-x-3">
                <button
                  type="button"
                  onClick={() => setIsAgreed(!isAgreed)}
                  className={`flex-shrink-0 w-4 h-4 md:w-5 md:h-5 border-2 rounded flex items-center justify-center transition-colors mt-0.5 ${
                    isAgreed
                      ? "bg-orange-500 border-orange-500"
                      : "border-gray-600 bg-transparent"
                  }`}
                >
                  {isAgreed && (
                    <svg
                      className="w-2 h-2 md:w-3 md:h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  )}
                </button>
                <p className="text-xs md:text-sm text-gray-400 leading-5">
                  Я соглашаюсь на обработку{" "}
                  <span className="text-white underline cursor-pointer">
                    персональных данных
                  </span>
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 md:py-4 rounded-lg text-black font-semibold transition-all duration-200 disabled:opacity-50 hover:text-white text-sm md:text-base"
                style={{ backgroundColor: "#ECF86E" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#F87250")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#ECF86E")
                }
              >
                Оставить заявку
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
