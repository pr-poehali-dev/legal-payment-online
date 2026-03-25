import { useState } from "react";
import Icon from "@/components/ui/icon";

const contacts = [
  { icon: "Phone", label: "Телефон", value: "8 800 123-45-67", sub: "Бесплатно по России", href: "tel:+78001234567" },
  { icon: "Mail", label: "E-mail", value: "info@yurkonsult.ru", sub: "Ответим в течение часа", href: "mailto:info@yurkonsult.ru" },
  { icon: "MapPin", label: "Адрес", value: "г. Москва, ул. Примерная, д. 1, оф. 101", sub: "Приём по предварительной записи", href: null },
  { icon: "Clock", label: "Режим работы", value: "Пн–Пт: 9:00–20:00", sub: "Сб–Вс: 10:00–17:00", href: null },
];

export default function Contacts() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main>
      <section className="bg-gradient-to-br from-[#0f5020] to-[#28a745] py-14">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-cormorant text-4xl md:text-5xl font-bold text-white mb-4">Контакты</h1>
          <p className="text-white/80 font-golos text-lg max-w-xl mx-auto">
            Свяжитесь с нами любым удобным способом или оставьте заявку онлайн
          </p>
        </div>
      </section>

      <section className="py-14 bg-[#eaf6e4]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="font-cormorant text-3xl font-bold text-[#0f5020] mb-6">Наши контакты</h2>
              <div className="space-y-4 mb-8">
                {contacts.map((c) => (
                  <div key={c.label} className="bg-white rounded-2xl p-5 flex items-start gap-4 border border-[#28a745]/10 shadow-sm">
                    <div className="w-11 h-11 bg-[#eaf6e4] rounded-xl flex items-center justify-center shrink-0">
                      <Icon name={c.icon as Parameters<typeof Icon>[0]["name"]} size={20} className="text-[#28a745]" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-golos uppercase tracking-wide mb-0.5">{c.label}</p>
                      {c.href ? (
                        <a href={c.href} className="font-golos font-semibold text-[#0f5020] hover:text-[#28a745] transition-colors block">
                          {c.value}
                        </a>
                      ) : (
                        <p className="font-golos font-semibold text-[#0f5020]">{c.value}</p>
                      )}
                      <p className="text-xs text-gray-400 font-golos mt-0.5">{c.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[#0f5020] rounded-2xl p-6 flex items-start gap-4">
                <Icon name="Shield" size={22} className="text-[#7bd389] shrink-0 mt-0.5" />
                <p className="text-white/80 text-sm font-golos leading-relaxed">
                  Все данные передаются по защищённому протоколу HTTPS. Мы не передаём вашу информацию третьим лицам.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#28a745]/10">
              <h2 className="font-cormorant text-2xl font-bold text-[#0f5020] mb-6">Оставить заявку</h2>

              {sent ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-[#eaf6e4] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="CheckCircle" size={32} className="text-[#28a745]" />
                  </div>
                  <h3 className="font-cormorant text-2xl font-bold text-[#0f5020] mb-2">Заявка принята!</h3>
                  <p className="text-gray-500 font-golos text-sm">Мы свяжемся с вами в ближайшее время.</p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: "", phone: "", message: "" }); }}
                    className="mt-6 text-[#28a745] font-golos text-sm underline hover:no-underline"
                  >
                    Отправить ещё одну заявку
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 font-golos mb-1.5">Ваше имя</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Иван Иванов"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#28a745] focus:ring-2 focus:ring-[#28a745]/20 font-golos text-sm transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 font-golos mb-1.5">Телефон</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+7 (999) 000-00-00"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#28a745] focus:ring-2 focus:ring-[#28a745]/20 font-golos text-sm transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 font-golos mb-1.5">Сообщение</label>
                    <textarea
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Опишите вашу ситуацию..."
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#28a745] focus:ring-2 focus:ring-[#28a745]/20 font-golos text-sm transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#28a745] hover:bg-[#1a7a30] text-white font-golos font-semibold rounded-xl transition-all duration-200 min-h-[48px] flex items-center justify-center gap-2"
                  >
                    <Icon name="Send" size={18} />
                    Отправить заявку
                  </button>
                  <p className="text-xs text-gray-400 font-golos text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
