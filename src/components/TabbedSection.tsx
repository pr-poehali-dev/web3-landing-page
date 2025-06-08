import { useState } from "react";

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
                  ? "bg-gray-100 text-gray-900 shadow-lg"
                  : "bg-gray-100 border border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Опытные наставники ведут воркшопы и отвечают на вопросы в чате
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Это практикующие фулстек-разработчики, которым можно задавать
              вопросы во время учёбы. Их задача — помогать вам со сложностями и
              делиться опытом.
            </p>
          </div>

          <div className="space-y-6">
            {mentors.map((mentor, index) => (
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
                    <p className="text-gray-600 text-sm mb-1">{mentor.role}</p>
                    <p className="text-gray-500 text-sm">{mentor.experience}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabbedSection;
