import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const navLinks = [
  { label: "Главная", path: "/" },
  { label: "Услуги", path: "/services" },
  { label: "О нас", path: "/about" },
  { label: "Контакты", path: "/contacts" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-green-100">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#28a745] flex items-center justify-center">
            <Icon name="Scale" size={18} className="text-white" />
          </div>
          <span className="font-cormorant text-xl font-bold text-[#1a7a30]">ЮрКонсульт</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-[#28a745] ${
                location.pathname === link.path
                  ? "text-[#28a745] border-b-2 border-[#28a745] pb-0.5"
                  : "text-gray-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+78001234567"
            className="ml-2 flex items-center gap-1.5 text-sm font-medium text-[#28a745] hover:text-[#1a7a30] transition-colors"
          >
            <Icon name="Phone" size={15} />
            8 800 123-45-67
          </a>
        </nav>

        <button
          className="md:hidden p-2 rounded-md text-gray-600 hover:text-[#28a745]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-green-100 px-4 py-4 flex flex-col gap-4 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`text-base font-medium py-1 transition-colors hover:text-[#28a745] ${
                location.pathname === link.path ? "text-[#28a745]" : "text-gray-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+78001234567"
            className="flex items-center gap-2 text-base font-medium text-[#28a745]"
          >
            <Icon name="Phone" size={16} />
            8 800 123-45-67
          </a>
        </div>
      )}
    </header>
  );
}
