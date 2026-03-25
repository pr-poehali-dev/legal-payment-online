import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

export default function Footer() {
  return (
    <footer className="bg-[#0f5020] text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-[#28a745] flex items-center justify-center">
                <Icon name="Scale" size={18} className="text-white" />
              </div>
              <span className="font-cormorant text-xl font-bold text-white">ЮрКонсульт</span>
            </div>
            <p className="text-white/60 text-sm font-golos leading-relaxed">
              Профессиональные юридические услуги онлайн с удобной оплатой через Т-банк.
            </p>
          </div>

          <div>
            <h4 className="font-golos font-semibold text-white/90 mb-4 text-sm uppercase tracking-wider">Навигация</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Главная", path: "/" },
                { label: "Услуги", path: "/services" },
                { label: "О нас", path: "/about" },
                { label: "Контакты", path: "/contacts" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-white text-sm font-golos transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-golos font-semibold text-white/90 mb-4 text-sm uppercase tracking-wider">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Icon name="Phone" size={15} className="text-[#7bd389] mt-0.5 shrink-0" />
                <div>
                  <a href="tel:+78001234567" className="text-white/80 hover:text-white text-sm font-golos transition-colors block">
                    8 800 123-45-67
                  </a>
                  <span className="text-white/40 text-xs font-golos">Бесплатно по России</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="Mail" size={15} className="text-[#7bd389] mt-0.5 shrink-0" />
                <a href="mailto:info@yurkonsult.ru" className="text-white/80 hover:text-white text-sm font-golos transition-colors">
                  info@yurkonsult.ru
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="Clock" size={15} className="text-[#7bd389] mt-0.5 shrink-0" />
                <div>
                  <span className="text-white/80 text-sm font-golos block">Пн–Пт: 9:00–20:00</span>
                  <span className="text-white/40 text-xs font-golos">Сб–Вс: 10:00–17:00</span>
                </div>
              </li>
            </ul>
            <div className="flex items-center gap-2 mt-4 p-3 bg-white/10 rounded-xl">
              <Icon name="Shield" size={16} className="text-[#7bd389]" />
              <span className="text-xs text-white/70 font-golos">Данные защищены HTTPS</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <span className="font-golos">© {new Date().getFullYear()} ЮрКонсульт. Все права защищены.</span>
          <div className="flex gap-4 font-golos">
            <span className="cursor-pointer hover:text-white/70 transition-colors">Политика конфиденциальности</span>
            <span className="cursor-pointer hover:text-white/70 transition-colors">Пользовательское соглашение</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
