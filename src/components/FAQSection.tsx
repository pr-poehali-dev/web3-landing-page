import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Подходит ли курс для новичков без опыта?",
    answer:
      "Абсолютно! Курс создан специально для людей с любым уровнем подготовки. Мы начинаем с основ и постепенно переходим к продвинутым техникам. Даже если вы никогда не изучали психологию общения, вы легко освоите материал.",
  },
  {
    question: "Сколько времени нужно уделять обучению?",
    answer:
      "Рекомендуем заниматься 4-5 часов в неделю для оптимального результата. Это можно разделить на короткие сессии по 30-40 минут в день. Все материалы доступны в любое время, поэтому вы учитесь в удобном темпе.",
  },
  {
    question: "Будет ли практика с реальными людьми?",
    answer:
      "Конечно! 70% курса — это практические упражнения. Вы будете отрабатывать навыки в парах с другими студентами, участвовать в ролевых играх и получать обратную связь от опытных тренеров.",
  },
  {
    question: "Что если курс мне не подойдет?",
    answer:
      "Мы предоставляем 14-дневную гарантию возврата средств без лишних вопросов. Если в течение двух недель вы поймете, что курс не оправдал ожиданий, мы вернем 100% стоимости.",
  },
  {
    question: "Смогу ли я применить знания в работе?",
    answer:
      "Определенно! Навыки общения универсальны и применимы везде: в переговорах, презентациях, работе в команде, управлении конфликтами. Многие выпускники отмечают улучшение карьерных перспектив уже через месяц.",
  },
  {
    question: "Какую поддержку я получу во время обучения?",
    answer:
      "Вы получите полную поддержку: личного куратора, доступ к закрытому чату с экспертами, еженедельные групповые созвоны с разбором вопросов и индивидуальные консультации по запросу.",
  },
  {
    question: "Выдается ли сертификат по окончании?",
    answer:
      "Да, после успешного завершения курса и сдачи финального проекта вы получите сертификат установленного образца, который можно добавить в резюме и портфолио на LinkedIn.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Левая колонка - заголовок */}
          <div className="lg:sticky lg:top-20">
            <h2 className="text-2xl md:text-3xl lg:text-[36px] font-bold text-gray-900 mb-3 md:mb-4">
              Частые вопросы
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed"></p>
          </div>

          {/* Правая колонка - FAQ */}
          <div>
            <Accordion
              type="single"
              collapsible
              className="w-full space-y-3 md:space-y-4"
            >
              {faqData.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="rounded-lg px-4 md:px-6 border-0 py-0"
                >
                  <AccordionTrigger className="text-left text-base md:text-lg font-medium text-gray-900 hover:no-underline hover:text-gray-700 py-4 md:py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-sm md:text-base leading-relaxed pb-4 md:pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
