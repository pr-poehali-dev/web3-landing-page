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
      name: "Наталья Дружинина",
      role: "Фронтенд-разработчик в Aviasales",
      experience: "Опыт — 5 лет",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    },
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
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Будете заниматься сами, но не в одиночестве —
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            вас поддержит заботливая команда Практикума
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "bg-[#ECF86E] text-gray-900 shadow-lg"
                  : "bg-gray-100 border border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-[#ECF86E]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            {activeTab === "Наставники" && (
              <>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Опытные наставники ведут воркшопы и отвечают на вопросы в чате
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Это практикующие фулстек-разработчики, которым можно задавать
                  вопросы во время учёбы. Их задача — помогать вам со
                  сложностями и делиться опытом.
                </p>
              </>
            )}
            {activeTab === "Ревьюеры" && (
              <>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Ревьюеры проверяют код и дают обратную связь
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Это старшие разработчики, которые внимательно изучают ваш код,
                  указывают на ошибки и объясняют, как их исправить. Они
                  помогают писать качественный и чистый код.
                </p>
              </>
            )}
            {activeTab === "Кураторы" && (
              <>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Кураторы следят за прогрессом и мотивируют двигаться дальше
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Это специалисты, которые отслеживают ваши успехи, помогают
                  планировать обучение и поддерживают в трудные моменты. Они
                  знают, как довести дело до конца.
                </p>
              </>
            )}
            {activeTab === "Техподдержка" && (
              <>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Техподдержка решает любые вопросы быстро и качественно
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Это команда экспертов, которая поможет с техническими
                  проблемами, настройкой среды разработки и любыми вопросами по
                  платформе. Отвечают оперативно и по делу.
                </p>
              </>
            )}
            {activeTab === "Сообщество" && (
              <>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Сообщество студентов и выпускников всегда готово помочь
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Это активные участники курса и те, кто уже успешно его
                  закончил. Они делятся опытом, обсуждают проекты и поддерживают
                  друг друга на пути к новой профессии.
                </p>
              </>
            )}
          </div>

          <div className="space-y-6">
            {activeTab === "Наставники" &&
              mentors.map((mentor, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 p-6 rounded-xl hover:border-gray-300 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={mentor.avatar}
                      alt={mentor.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-gray-300"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg group-hover:text-gray-900 transition-colors">
                        {mentor.name}
                      </h4>
                      <p className="text-gray-600 text-sm mb-1">
                        {mentor.role}
                      </p>
                      <p className="text-gray-500 text-sm">
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
                {
                  name: "Александр Кузнецов",
                  role: "Lead Developer в Wildberries",
                  experience: "Опыт — 6 лет",
                  avatar:
                    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face",
                },
              ].map((reviewer, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 p-6 rounded-xl hover:border-gray-300 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={reviewer.avatar}
                      alt={reviewer.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-gray-300"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg group-hover:text-gray-900 transition-colors">
                        {reviewer.name}
                      </h4>
                      <p className="text-gray-600 text-sm mb-1">
                        {reviewer.role}
                      </p>
                      <p className="text-gray-500 text-sm">
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
                    "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
                },
                {
                  name: "Роман Никитин",
                  role: "Engineering Manager в Авито",
                  experience: "Опыт — 8 лет",
                  avatar:
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
                },
              ].map((curator, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 p-6 rounded-xl hover:border-gray-300 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={curator.avatar}
                      alt={curator.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-gray-300"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg group-hover:text-gray-900 transition-colors">
                        {curator.name}
                      </h4>
                      <p className="text-gray-600 text-sm mb-1">
                        {curator.role}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {curator.experience}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

            {activeTab === "Техподдержка" && (
              <div
                className="bg-[#ECF86E] rounded-xl flex items-center justify-center h-full min-h-[200px]"
                style={{ minHeight: "calc(100% - 0px)" }}
              >
                <Icon
                  name="HeartHandshake"
                  size={80}
                  className="text-gray-700"
                />
              </div>
            )}

            {activeTab === "Сообщество" && (
              <div
                className="bg-[#ECF86E] rounded-xl flex items-center justify-center h-full min-h-[200px] px-9 py-[55px]"
                style={{ minHeight: "calc(100% - 0px)" }}
              >
                <Icon
                  name="HeartHandshake"
                  size={80}
                  className="text-gray-700"
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
