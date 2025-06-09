import { useState } from "react";
import Icon from "@/components/ui/icon";

const TabbedSection = () => {
  const [activeTab, setActiveTab] = useState("Наставники");

  const tabs = [
    "Наставники",
    "Ревьюеры",
    "Кураторы",
    "Техподдержка",
    "Сообщество",
  ];

  const mentors = [
    {
      name: "Елена Шостак",
      role: "Ведущий инженер программного обеспечения в Shell Recharge Solutions",
      experience: "Опыт — 7 лет",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Константин Селезнёв",
      role: "Ведущий разработчик в Авито",
      experience: "Опыт — 11 лет",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Вениамин Шитиков",
      role: "Тимлид фронтенд-разработчик в Unlimit",
      experience: "Опыт — 4 года",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white relative my-0 py-16 md:py-20 lg:py-[102px]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-gray-900">
            Фундамент вашего Web3-мастерства
          </h2>
          <p className="text-gray-600 max-w-2xl text-base md:text-lg">
            Наша команда экспертов.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between gap-2 mb-8 md:mb-12 lg:mb-16 w-full">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 min-w-0 px-2 md:px-4 py-2 md:py-3 rounded-lg font-medium transition-all duration-300 cursor-pointer text-center text-xs md:text-sm ${
                activeTab === tab
                  ? "bg-[#ECF86E] text-gray-900 shadow-lg"
                  : "bg-gray-100 border border-gray-200 text-gray-600 hover:text-white hover:bg-[#F87250]"
              }`}
              type="button"
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-start">
          <div className="w-full">
            {activeTab === "Наставники" && (
              <>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                  Опытные разработчики
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Ведут воркшопы, отвечают на сложные вопросы в чате, помогают
                  преодолевать трудности и делятся реальным опытом из индустрии
                  Web3.
                </p>
              </>
            )}
            {activeTab === "Ревьюеры" && (
              <>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                  Проверяют код и дают обратную связь
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Старшие разработчики, которые внимательно изучают ваш код,
                  указывают на ошибки и объясняют, как их исправить. Они
                  помогают писать качественный и чистый код.
                </p>
              </>
            )}
            {activeTab === "Кураторы" && (
              <>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                  Следят за прогрессом и мотивируют двигаться дальше
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Специалисты, которые отслеживают ваши успехи, помогают
                  планировать обучение и поддерживают в трудные моменты. Они
                  знают, как довести дело до конца.
                </p>
              </>
            )}
            {activeTab === "Техподдержка" && (
              <>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                  Решает любые вопросы быстро и качественно
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Команда экспертов, которая поможет с техническими проблемами,
                  настройкой среды разработки и любыми вопросами по платформе.
                  Отвечают оперативно и по делу.
                </p>
              </>
            )}
            {activeTab === "Сообщество" && (
              <>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                  Студенты и выпускники всегда готовы помочь
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Активные участники курса и те, кто уже успешно его закончил.
                  Они делятся опытом, обсуждают проекты и поддерживают друг
                  друга на пути к новой профессии.
                </p>
              </>
            )}
          </div>

          <div className="space-y-4 md:space-y-6 w-full">
            {activeTab === "Наставники" &&
              mentors.map((mentor, index) => (
                <div
                  key={index}
                  className="bg-white p-4 md:p-6 rounded-xl hover:shadow-md transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center gap-3 md:gap-4">
                    <img
                      src={mentor.avatar}
                      alt={mentor.name}
                      className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-gray-300 flex-shrink-0"
                    />
                    <div className="min-w-0">
                      <h4 className="font-semibold text-gray-900 text-base md:text-lg group-hover:text-gray-900 transition-colors">
                        {mentor.name}
                      </h4>
                      <p className="text-gray-600 text-xs md:text-sm mb-1">
                        {mentor.role}
                      </p>
                      <p className="text-gray-500 text-xs md:text-sm">
                        {mentor.experience}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

            {activeTab === "Ревьюеры" &&
              [
                {
                  name: "Анна Петрова",
                  role: "Senior Frontend Developer в Тинькофф",
                  experience: "Опыт — 8 лет",
                  avatar:
                    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
                },
                {
                  name: "Дмитрий Волков",
                  role: "Tech Lead в Яндекс.Маркет",
                  experience: "Опыт — 12 лет",
                  avatar:
                    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
                },
                {
                  name: "Мария Сидорова",
                  role: "Principal Engineer в OZON",
                  experience: "Опыт — 9 лет",
                  avatar:
                    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
                },
              ].map((reviewer, index) => (
                <div
                  key={index}
                  className="bg-white p-4 md:p-6 rounded-xl hover:shadow-md transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center gap-3 md:gap-4">
                    <img
                      src={reviewer.avatar}
                      alt={reviewer.name}
                      className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-gray-300 flex-shrink-0"
                    />
                    <div className="min-w-0">
                      <h4 className="font-semibold text-gray-900 text-base md:text-lg group-hover:text-gray-900 transition-colors">
                        {reviewer.name}
                      </h4>
                      <p className="text-gray-600 text-xs md:text-sm mb-1">
                        {reviewer.role}
                      </p>
                      <p className="text-gray-500 text-xs md:text-sm">
                        {reviewer.experience}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

            {activeTab === "Кураторы" &&
              [
                {
                  name: "Светлана Морозова",
                  role: "Product Manager в Сбер",
                  experience: "Опыт — 7 лет",
                  avatar:
                    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
                },
                {
                  name: "Игорь Семёнов",
                  role: "Team Lead в ВТБ",
                  experience: "Опыт — 10 лет",
                  avatar:
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
                },
                {
                  name: "Екатерина Белова",
                  role: "Agile Coach в МТС",
                  experience: "Опыт — 5 лет",
                  avatar:
                    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
                },
              ].map((curator, index) => (
                <div
                  key={index}
                  className="bg-white p-4 md:p-6 rounded-xl hover:shadow-md transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center gap-3 md:gap-4">
                    <img
                      src={curator.avatar}
                      alt={curator.name}
                      className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-gray-300 flex-shrink-0"
                    />
                    <div className="min-w-0">
                      <h4 className="font-semibold text-gray-900 text-base md:text-lg group-hover:text-gray-900 transition-colors">
                        {curator.name}
                      </h4>
                      <p className="text-gray-600 text-xs md:text-sm mb-1">
                        {curator.role}
                      </p>
                      <p className="text-gray-500 text-xs md:text-sm">
                        {curator.experience}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

            {activeTab === "Техподдержка" && (
              <div
                className="bg-[#ECF86E] rounded-xl flex items-center justify-center h-full min-h-[150px] md:min-h-[200px] px-6 md:px-[30px] py-8 md:py-[55px]"
                style={{ minHeight: "calc(100% - 0px)" }}
              >
                <Icon
                  name="HeartHandshake"
                  size={60}
                  className="text-gray-700 md:w-20 md:h-20"
                />
              </div>
            )}

            {activeTab === "Сообщество" && (
              <div
                className="bg-[#ECF86E] rounded-xl flex items-center justify-center h-full min-h-[150px] md:min-h-[200px] px-6 md:px-9 py-8 md:py-[55px]"
                style={{ minHeight: "calc(100% - 0px)" }}
              >
                <Icon
                  name="HeartHandshake"
                  size={60}
                  className="text-gray-700 md:w-20 md:h-20"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabbedSection;
