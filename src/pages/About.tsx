import Icon from "@/components/ui/icon";

const team = [
  {
    name: "Александр Петров",
    role: "Старший партнёр",
    spec: "Гражданское и коммерческое право",
    exp: "15 лет опыта",
  },
  {
    name: "Елена Соколова",
    role: "Семейный юрист",
    spec: "Семейное право, наследство",
    exp: "10 лет опыта",
  },
  {
    name: "Дмитрий Новиков",
    role: "Арбитражный специалист",
    spec: "Арбитраж, корпоративные споры",
    exp: "12 лет опыта",
  },
  {
    name: "Ирина Власова",
    role: "Трудовой юрист",
    spec: "Трудовые отношения, кадровые вопросы",
    exp: "8 лет опыта",
  },
];

const stats = [
  { value: "2 500+", label: "Выигранных дел" },
  { value: "10 лет", label: "На рынке" },
  { value: "98%", label: "Довольных клиентов" },
  { value: "30 мин", label: "Время первого ответа" },
];

export default function About() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[#0f5020] to-[#28a745] py-14">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-cormorant text-4xl md:text-5xl font-bold text-white mb-4">О нас</h1>
          <p className="text-white/80 font-golos text-lg max-w-2xl mx-auto">
            Команда профессиональных юристов с многолетним опытом защиты прав граждан и бизнеса
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
            {stats.map((s) => (
              <div key={s.label} className="text-center p-6 bg-[#eaf6e4] rounded-2xl border border-[#28a745]/10">
                <p className="font-cormorant text-3xl md:text-4xl font-bold text-[#28a745] mb-2">{s.value}</p>
                <p className="text-sm text-gray-500 font-golos">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center mb-14">
            <div>
              <h2 className="font-cormorant text-3xl md:text-4xl font-bold text-[#0f5020] mb-5">
                Наша миссия — доступная юридическая помощь
              </h2>
              <p className="text-gray-600 font-golos leading-relaxed mb-4">
                Мы верим, что каждый человек заслуживает квалифицированной юридической защиты независимо от местонахождения. 
                Именно поэтому мы работаем онлайн — без очередей и поездок в офис.
              </p>
              <p className="text-gray-600 font-golos leading-relaxed mb-6">
                Оплата через Т-банк обеспечивает безопасность ваших денежных средств: оплата списывается только после 
                подтверждения записи к специалисту.
              </p>
              <ul className="space-y-3">
                {[
                  "Лицензированные специалисты с высшим юридическим образованием",
                  "Работаем по всей России дистанционно",
                  "Конфиденциальность и защита персональных данных",
                  "Прозрачное ценообразование без скрытых платежей",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-golos text-sm text-gray-700">
                    <Icon name="CheckCircle" size={18} className="text-[#28a745] mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#eaf6e4] rounded-3xl p-8 flex items-center justify-center min-h-[280px]">
              <div className="text-center">
                <div className="w-24 h-24 bg-[#28a745]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Scale" size={48} className="text-[#28a745]" />
                </div>
                <p className="font-cormorant text-2xl font-bold text-[#0f5020]">ЮрКонсульт</p>
                <p className="text-sm text-gray-400 font-golos mt-1">Юридические услуги онлайн</p>
              </div>
            </div>
          </div>

          <h2 className="font-cormorant text-3xl font-bold text-[#0f5020] text-center mb-8">Наша команда</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-[#eaf6e4] rounded-2xl p-6 text-center border border-[#28a745]/10 hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-[#28a745]/15 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="User" size={30} className="text-[#28a745]" />
                </div>
                <h3 className="font-cormorant text-lg font-bold text-[#0f5020] mb-1">{member.name}</h3>
                <p className="text-[#28a745] text-xs font-golos font-semibold mb-1 uppercase tracking-wide">{member.role}</p>
                <p className="text-gray-500 text-xs font-golos mb-2">{member.spec}</p>
                <span className="inline-block bg-white text-[#28a745] text-xs font-golos font-medium px-3 py-1 rounded-full border border-[#28a745]/20">
                  {member.exp}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
