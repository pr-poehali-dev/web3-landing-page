import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    telegram: "",
  });
  const [isAgreed, setIsAgreed] = useState(false);

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
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Левая колонка с заголовком */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Получить консультацию по обучению
            </h2>
            <p className="text-gray-400 text-lg">
              Наш менеджер свяжется с вами в течение 30 минут.
            </p>
          </div>

          {/* Правая колонка с формой */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-8"></h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="ВВЕДИТЕ ИМЯ"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
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
                  className="w-full px-4 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors pl-12"
                  required
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center">
                  <div className="w-4 h-3 bg-white flex items-center justify-center rounded-sm mr-2">
                    <div className="w-full h-1 bg-blue-600"></div>
                    <div className="w-full h-1 bg-red-600"></div>
                  </div>
                </div>
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="ВВЕДИТЕ EMAIL"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  name="telegram"
                  placeholder="@ЮЗЕРНЕЙМ TELEGRAM"
                  value={formData.telegram}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>

              <div className="flex items-start space-x-3">
                <button
                  type="button"
                  onClick={() => setIsAgreed(!isAgreed)}
                  className={`mt-1 flex-shrink-0 w-5 h-5 border-2 rounded flex items-center justify-center transition-colors ${
                    isAgreed
                      ? "bg-orange-500 border-orange-500"
                      : "border-gray-600 bg-transparent"
                  }`}
                >
                  {isAgreed && (
                    <svg
                      className="w-3 h-3 text-white"
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
                <p className="text-sm text-gray-400">
                  Я соглашаюсь на обработку{" "}
                  <span className="text-white underline cursor-pointer">
                    персональных данных
                  </span>
                </p>
              </div>

              <button
                type="submit"
                disabled={!isAgreed}
                className={`w-full py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
                  isAgreed
                    ? "bg-orange-500 hover:bg-orange-600 text-white"
                    : "bg-gray-700 text-gray-500 cursor-not-allowed"
                }`}
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
