import { useState } from "react";
import Icon from "@/components/ui/icon";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onPaymentOpen: () => void;
}

export default function Navbar({ currentPage, onNavigate, onPaymentOpen }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { id: "home", label: "Главная" },
    { id: "services", label: "Услуги" },
    { id: "about", label: "О нас" },
    { id: "contacts", label: "Контакты" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 bg-green-primary rounded-xl flex items-center justify-center shadow-md group-hover:bg-green-dark transition-colors">
              <Icon name="Scale" size={18} className="text-white" />
            </div>
            <div className="text-left">
              <span className="font-cormorant text-xl font-semibold text-green-deep leading-none block">
                ЮрКонсул
              </span>
              <span className="text-[10px] text-muted-foreground font-golos leading-none block tracking-wide">
                ЮРИДИЧЕСКИЕ УСЛУГИ
              </span>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`px-4 py-2 rounded-lg text-sm font-golos font-medium transition-all duration-200 ${
                  currentPage === link.id
                    ? "bg-green-pale text-green-dark"
                    : "text-foreground/70 hover:text-foreground hover:bg-secondary"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+78001234567"
              className="flex items-center gap-1.5 text-sm font-golos text-muted-foreground hover:text-green-dark transition-colors"
            >
              <Icon name="Phone" size={14} className="text-green-primary" />
              8 800 123-45-67
            </a>
            <button
              onClick={onPaymentOpen}
              className="px-5 py-2.5 bg-green-primary hover:bg-green-dark text-white text-sm font-golos font-semibold rounded-xl transition-all duration-200 hover:shadow-md hover:shadow-green-primary/25 active:scale-[0.97]"
            >
              Консультация
            </button>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl hover:bg-secondary transition-colors"
          >
            <Icon name={mobileOpen ? "X" : "Menu"} size={22} className="text-foreground" />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border py-4 space-y-1 animate-fade-in">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => { onNavigate(link.id); setMobileOpen(false); }}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-golos font-medium transition-all ${
                  currentPage === link.id
                    ? "bg-green-pale text-green-dark"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 pb-1 flex flex-col gap-2">
              <a
                href="tel:+78001234567"
                className="flex items-center gap-2 px-4 py-3 bg-secondary rounded-xl text-sm font-golos font-medium"
              >
                <Icon name="Phone" size={16} className="text-green-primary" />
                8 800 123-45-67
              </a>
              <button
                onClick={() => { onPaymentOpen(); setMobileOpen(false); }}
                className="w-full py-3 bg-green-primary text-white text-sm font-golos font-semibold rounded-xl hover:bg-green-dark transition-colors"
              >
                Получить консультацию
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
