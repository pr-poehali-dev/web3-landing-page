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

  const content = {
    Наставники: {
      title: "Опытные наставники ведут воркшопы и отвечают на вопросы в чате",
      description:
        "Это практикующие фулстек-разработчики, которым можно задавать вопросы во время учёбы. Их задача — помогать вам со сложностями и делиться опытом.",
      people: [
        {
          name: "Наталья Дружинина",
          role: "Фронтенд-разработчик в Aviasales",
          experience: "Опыт — 5 лет",
          avatar:
            "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
        },
        {
          name: "Елена Шостак",
          role: "Ведущий инженер в Shell Recharge Solutions",
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
      ],
    },
    Ревьюеры: {
      title: "Ревьюеры проверяют ваши проекты и дают обратную связь",
      description:
        "Опытные разработчики детально разбирают ваш код, указывают на ошибки и предлагают улучшения. Это поможет писать качественный код с самого начала.",
      people: [
        {
          name: "Михаил Петров",
          role: "Senior Developer в Яндексе",
          experience: "Опыт — 8 лет",
          avatar:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
        },
        {
          name: "Анна Соколова",
          role: "Tech Lead в Ozon",
          experience: "Опыт — 6 лет",
          avatar:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
        },
        {
          name: "Алексей Иванов",
          role: "Principal Engineer в VK",
          experience: "Опыт — 12 лет",
          avatar:
            "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face",
        },
      ],
    },
    Кураторы: {
      title: "Кураторы следят за вашим прогрессом и мотивируют",
      description:
        "Они помогают планировать обучение, отслеживают выполнение заданий и поддерживают в трудные моменты. С ними вы точно дойдете до конца.",
      people: [
        {
          name: "Мария Кузнецова",
          role: "Куратор курса «Веб-разработчик»",
          experience: "Опыт кураторства — 3 года",
          avatar:
            "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=100&h=100&fit=crop&crop=face",
        },
        {
          name: "Дмитрий Волков",
          role: "Старший куратор",
          experience: "Опыт кураторства — 4 года",
          avatar:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
        },
      ],
    },
    Техподдержка: {
      title: "Техподдержка решает любые технические вопросы",
      description:
        "Проблемы с платформой, доступом к материалам или настройкой окружения? Команда техподдержки оперативно поможет со всеми техническими сложностями.",
      features: [
        {
          icon: "Clock",
          title: "Быстрый ответ",
          desc: "Отвечаем в течение 2 часов в рабочее время",
        },
        {
          icon: "MessageCircle",
          title: "Удобный чат",
          desc: "Пишите прямо в платформе обучения",
        },
        {
          icon: "Monitor",
          title: "Помощь с настройкой",
          desc: "Поможем настроить среду разработки",
        },
      ],
    },
    Сообщество: {
      title: "Активное сообщество студентов и выпускников",
      description:
        "Тысячи единомышленников, которые изучают программирование или уже работают в IT. Делитесь опытом, находите команду для проектов и друзей.",
      features: [
        {
          icon: "Users",
          title: "15 000+ участников",
          desc: "Студенты и выпускники со всего мира",
        },
        {
          icon: "Zap",
          title: "Активные чаты",
          desc: "Обсуждения проектов, вакансий и технологий",
        },
        {
          icon: "Trophy",
          title: "Networking",
          desc: "Знакомства и профессиональные связи",
        },
      ],
    },
  };

  const currentContent = content[activeTab as keyof typeof content];

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
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "bg-white text-gray-900 shadow-lg border-2 border-blue-100"
                  : "bg-white/60 border border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-white hover:shadow-md"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {currentContent.title}
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              {currentContent.description}
            </p>
          </div>

          {/* People Cards */}
          {currentContent.people && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentContent.people.map((person, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 p-6 rounded-xl hover:border-blue-200 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={person.avatar}
                      alt={person.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-gray-200 group-hover:border-blue-200 transition-colors"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">
                        {person.name}
                      </h4>
                      <p className="text-gray-600 text-sm mb-1">
                        {person.role}
                      </p>
                      <p className="text-blue-600 text-sm font-medium">
                        {person.experience}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Feature Cards */}
          {currentContent.features && (
            <div className="grid md:grid-cols-3 gap-8">
              {currentContent.features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 p-8 rounded-xl hover:border-blue-200 hover:shadow-lg transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name={feature.icon}
                      size={24}
                      className="text-blue-600"
                    />
                  </div>
                  <h4 className="font-bold text-gray-900 text-xl mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TabbedSection;
