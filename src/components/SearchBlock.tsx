import { useState } from "react";
import Icon from "@/components/ui/icon";

const suggestions = [
  "Как оформить договор купли-продажи",
  "Раздел имущества при разводе",
  "Сопровождение сделки с недвижимостью",
  "Что делать при незаконном увольнении",
  "Как взыскать алименты",
  "Возврат товара ненадлежащего качества",
  "Оформление наследства после смерти",
  "Как оспорить завещание",
  "Регистрация ООО или ИП",
  "Как защититься от коллекторов",
  "Выселение из квартиры — что делать",
  "Трудовой договор — проверка",
  "Арест имущества — что делать",
  "Признание сделки недействительной",
];

interface SearchBlockProps {
  onSearch: (query: string) => void;
}

export default function SearchBlock({ onSearch }: SearchBlockProps) {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  const filtered = query.length > 1
    ? suggestions.filter((s) => s.toLowerCase().includes(query.toLowerCase()))
    : suggestions.slice(0, 6);

  const handleSelect = (value: string) => {
    setQuery(value);
    setFocused(false);
    onSearch(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) onSearch(query.trim());
  };

  return (
    <section className="bg-white py-12 border-b border-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#1a7a30] font-medium text-lg mb-2 font-golos">
            Не нашли свой вопрос?
          </p>
          <h2 className="font-cormorant text-3xl md:text-4xl font-bold text-[#0f5020] mb-6">
            Введите его ниже — мы поможем
          </h2>

          <form onSubmit={handleSubmit} className="relative">
            <div className="relative">
              <Icon
                name="Search"
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#28a745]"
              />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setTimeout(() => setFocused(false), 150)}
                placeholder="Например: как оформить договор аренды..."
                className="w-full pl-12 pr-32 py-4 rounded-xl border-2 border-[#28a745]/30 focus:border-[#28a745] outline-none font-golos text-sm md:text-base transition-all shadow-sm"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#28a745] hover:bg-[#1a7a30] text-white font-golos font-semibold px-5 py-2.5 rounded-lg transition-all text-sm min-h-[40px]"
              >
                Получить ответ
              </button>
            </div>

            {focused && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#28a745]/20 rounded-xl shadow-lg z-20 overflow-hidden animate-fade-in">
                <p className="px-4 pt-3 pb-1 text-xs text-gray-400 font-golos">
                  {query.length > 1 ? "Подходящие вопросы:" : "Часто задаваемые вопросы:"}
                </p>
                {filtered.length > 0 ? (
                  <ul>
                    {filtered.map((s) => (
                      <li key={s}>
                        <button
                          type="button"
                          onClick={() => handleSelect(s)}
                          className="w-full text-left px-4 py-3 text-sm font-golos text-gray-700 hover:bg-[#eaf6e4] hover:text-[#1a7a30] transition-colors flex items-center gap-2"
                        >
                          <Icon name="ArrowRight" size={14} className="text-[#7bd389] shrink-0" />
                          {s}
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="px-4 py-3 text-sm text-gray-400 font-golos">Ничего не найдено. Нажмите «Получить ответ»</p>
                )}
              </div>
            )}
          </form>

          <p className="text-xs text-gray-400 font-golos mt-3">
            После отправки вы перейдёте к форме оплаты консультации через Т-банк
          </p>
        </div>
      </div>
    </section>
  );
}
