import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Можно ли перейти на этот тариф с другого?",
    answer:
      "Да, можно! Мы предусмотрели гибкую систему перехода между тарифами. При переходе на более дорогой тариф доплачиваете разницу, при переходе на более дешевый — остаток засчитывается в счет будущих платежей.",
  },
  {
    question: "Что делать, если у меня мало времени на обучение?",
    answer:
      "Наша программа адаптируется под ваш график. Минимальная нагрузка — 3-4 часа в неделю. Все материалы остаются доступными навсегда, вы можете учиться в своем темпе.",
  },
  {
    question: "Как долго у меня будет доступ к материалам?",
    answer:
      "Доступ к материалам курса предоставляется навсегда! Вы сможете пересматривать лекции, скачивать материалы и пользоваться обновлениями даже после завершения обучения.",
  },
  {
    question: "Смогу ли я заработать после прохождения курса?",
    answer:
      "Безусловно! Наши выпускники в среднем увеличивают доход на 150-300% в первые 6 месяцев. Мы обучаем не только теории, но и практическим навыкам работы с реальными проектами.",
  },
  {
    question: "Как быстро можно ожидать результат?",
    answer:
      "Первые результаты появляются уже через 2-3 недели обучения. Полноценные навыки для работы формируются за 2-3 месяца при регулярных занятиях.",
  },
  {
    question: "Есть ли рассрочка?",
    answer:
      "Да, доступна беспроцентная рассрочка до 12 месяцев. Также принимаем оплату частями — можете вносить комфортные суммы по мере обучения.",
  },
  {
    question: "Как быстро я получу доступ после оплаты?",
    answer:
      "Доступ к платформе и материалам открывается автоматически в течение 5 минут после успешной оплаты. Вы сразу сможете начать обучение.",
  },
];

const FAQSection = () => {
  return (
    <section className="bg-white py-[102px]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Левая колонка - заголовок */}
          <div className="lg:sticky lg:top-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Частые вопросы
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed"></p>
          </div>

          {/* Правая колонка - FAQ */}
          <div>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="rounded-lg px-6 py-2 border-0"
                >
                  <AccordionTrigger className="text-left text-lg font-medium text-gray-900 hover:no-underline hover:text-gray-700 py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-base leading-relaxed pb-6">
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
