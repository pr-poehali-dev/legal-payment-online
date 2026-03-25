import { useState } from "react";
import PaymentModal from "@/components/PaymentModal";
import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "Scale",
    title: "Консультация по гражданским делам",
    desc: "Имущественные споры, взыскание долгов, защита прав потребителей.",
    price: "от 1 500 ₽",
    time: "30 мин",
  },
  {
    icon: "FileCheck",
    title: "Юридическое сопровождение сделок",
    desc: "Полная проверка документов, сопровождение сделок с недвижимостью и бизнесом.",
    price: "от 5 000 ₽",
    time: "1–3 дня",
  },
  {
    icon: "Home",
    title: "Раздел имущества при разводе",
    desc: "Защита интересов при разделе совместно нажитого имущества.",
    price: "от 3 000 ₽",
    time: "1 час",
  },
  {
    icon: "Briefcase",
    title: "Трудовые и кадровые вопросы",
    desc: "Незаконное увольнение, невыплата зарплаты, трудовые споры.",
    price: "от 2 000 ₽",
    time: "45 мин",
  },
  {
    icon: "Search",
    title: "Экспертиза документов",
    desc: "Профессиональная проверка договоров и правовых документов.",
    price: "от 2 500 ₽",
    time: "1–2 дня",
  },
  {
    icon: "ShieldCheck",
    title: "Защита прав потребителей",
    desc: "Возврат товара, некачественные услуги, споры с продавцами.",
    price: "от 1 500 ₽",
    time: "30 мин",
  },
  {
    icon: "ScrollText",
    title: "Наследственные споры",
    desc: "Оформление наследства, оспаривание завещания.",
    price: "от 3 000 ₽",
    time: "1 час",
  },
  {
    icon: "Building2",
    title: "Регистрация бизнеса",
    desc: "Открытие ИП и ООО, устав, корпоративное право.",
    price: "от 4 000 ₽",
    time: "3–5 дней",
  },
  {
    icon: "Gavel",
    title: "Уголовная защита",
    desc: "Помощь на стадии следствия и судебного разбирательства.",
    price: "от 10 000 ₽",
    time: "По договорённости",
  },
  {
    icon: "Heart",
    title: "Алименты и семейное право",
    desc: "Взыскание алиментов, определение места жительства детей.",
    price: "от 2 000 ₽",
    time: "45 мин",
  },
  {
    icon: "BarChart3",
    title: "Арбитражные споры",
    desc: "Представительство в арбитражном суде по коммерческим спорам.",
    price: "от 15 000 ₽",
    time: "По договорённости",
  },
  {
    icon: "HousePlus",
    title: "Жилищные вопросы",
    desc: "Приватизация, выселение, споры с управляющими компаниями.",
    price: "от 2 000 ₽",
    time: "1 час",
  },
];

export default function Services() {
  const [modal, setModal] = useState<{ open: boolean; service: string }>({ open: false, service: "" });

  return (
    <main>
      <section className="bg-gradient-to-br from-[#0f5020] to-[#28a745] py-14">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-cormorant text-4xl md:text-5xl font-bold text-white mb-4">
            Юридические услуги
          </h1>
          <p className="text-white/80 font-golos text-lg max-w-xl mx-auto">
            Выберите нужную услугу и получите консультацию с оплатой через Т-банк
          </p>
        </div>
      </section>

      <section className="py-14 bg-[#eaf6e4]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-[#28a745]/10 flex flex-col"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#eaf6e4] rounded-xl flex items-center justify-center shrink-0">
                    <Icon name={s.icon as Parameters<typeof Icon>[0]["name"]} size={22} className="text-[#28a745]" />
                  </div>
                  <div>
                    <h3 className="font-cormorant text-xl font-bold text-[#0f5020] leading-snug">{s.title}</h3>
                  </div>
                </div>
                <p className="text-sm text-gray-500 font-golos leading-relaxed flex-1 mb-4">{s.desc}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#28a745] font-golos font-bold text-base">{s.price}</span>
                  <div className="flex items-center gap-1 text-gray-400 text-xs font-golos">
                    <Icon name="Clock" size={13} />
                    {s.time}
                  </div>
                </div>
                <button
                  onClick={() => setModal({ open: true, service: s.title })}
                  className="w-full py-3 bg-[#28a745] hover:bg-[#1a7a30] text-white font-golos font-semibold rounded-xl transition-all text-sm min-h-[48px] flex items-center justify-center gap-2"
                >
                  <Icon name="MessageCircle" size={16} />
                  Получить консультацию
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PaymentModal
        isOpen={modal.open}
        onClose={() => setModal({ open: false, service: "" })}
        serviceName={modal.service}
      />
    </main>
  );
}
