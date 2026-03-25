import { useState, useEffect, useCallback } from "react";
import Icon from "@/components/ui/icon";

const banners = [
  {
    id: 1,
    title: "Консультация по гражданским делам",
    description: "Профессиональная помощь в решении имущественных споров, взыскании долгов и защите прав потребителей.",
    icon: "Scale",
    bg: "from-[#0f5020] to-[#1a7a30]",
  },
  {
    id: 2,
    title: "Юридическое сопровождение сделок",
    description: "Проверка документов и полное сопровождение сделок с недвижимостью и бизнесом.",
    icon: "FileCheck",
    bg: "from-[#1a7a30] to-[#28a745]",
  },
  {
    id: 3,
    title: "Раздел имущества при разводе",
    description: "Защита ваших интересов при разделе совместно нажитого имущества супругов.",
    icon: "Home",
    bg: "from-[#28a745] to-[#3db85a]",
  },
  {
    id: 4,
    title: "Кадровые и трудовые вопросы",
    description: "Помощь при незаконном увольнении, невыплате зарплаты и трудовых спорах.",
    icon: "Briefcase",
    bg: "from-[#0f5020] to-[#28a745]",
  },
  {
    id: 5,
    title: "Юридическая экспертиза документов",
    description: "Профессиональная проверка договоров, актов и правовых документов на соответствие закону.",
    icon: "Search",
    bg: "from-[#1a7a30] to-[#0f5020]",
  },
  {
    id: 6,
    title: "Защита прав потребителей",
    description: "Возврат товара, некачественные услуги, обман продавца — решим вашу ситуацию.",
    icon: "ShieldCheck",
    bg: "from-[#28a745] to-[#1a7a30]",
  },
  {
    id: 7,
    title: "Наследственные споры",
    description: "Оформление наследства, оспаривание завещания, защита прав наследников.",
    icon: "ScrollText",
    bg: "from-[#0f5020] to-[#3db85a]",
  },
  {
    id: 8,
    title: "Регистрация бизнеса",
    description: "Открытие ИП и ООО, разработка уставных документов и корпоративное право.",
    icon: "Building2",
    bg: "from-[#1a7a30] to-[#28a745]",
  },
  {
    id: 9,
    title: "Уголовная защита",
    description: "Квалифицированная юридическая помощь на стадии следствия и судебного разбирательства.",
    icon: "Gavel",
    bg: "from-[#28a745] to-[#0f5020]",
  },
  {
    id: 10,
    title: "Алименты и семейное право",
    description: "Взыскание алиментов, определение места жительства детей, брачный договор.",
    icon: "Heart",
    bg: "from-[#0f5020] to-[#1a7a30]",
  },
  {
    id: 11,
    title: "Арбитражные споры",
    description: "Представительство в арбитражном суде по коммерческим и предпринимательским спорам.",
    icon: "BarChart3",
    bg: "from-[#1a7a30] to-[#0f5020]",
  },
  {
    id: 12,
    title: "Жилищные вопросы",
    description: "Приватизация, выселение, споры с управляющими компаниями и коммунальные проблемы.",
    icon: "HousePlus",
    bg: "from-[#28a745] to-[#1a7a30]",
  },
];

interface BannerCarouselProps {
  onConsultation: (serviceName: string) => void;
}

export default function BannerCarousel({ onConsultation }: BannerCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback((index: number) => {
    if (animating) return;
    setAnimating(true);
    setCurrent(index);
    setTimeout(() => setAnimating(false), 400);
  }, [animating]);

  const next = useCallback(() => {
    goTo((current + 1) % banners.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + banners.length) % banners.length);
  }, [current, goTo]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused, next]);

  const banner = banners[current];

  return (
    <section
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={`bg-gradient-to-br ${banner.bg} min-h-[420px] md:min-h-[480px] flex items-center transition-all duration-500`}>
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-2xl animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Icon name={banner.icon as Parameters<typeof Icon>[0]["name"]} size={18} className="text-[#7bd389]" />
              <span className="text-white/90 text-sm font-medium">Юридическая услуга</span>
            </div>

            <h2 className="font-cormorant text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
              {banner.title}
            </h2>
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 font-golos">
              {banner.description}
            </p>

            <button
              onClick={() => onConsultation(banner.title)}
              className="inline-flex items-center gap-2 bg-[#7bd389] hover:bg-white text-[#0f5020] font-golos font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 hover:shadow-xl active:scale-[0.97] min-h-[48px]"
            >
              <Icon name="MessageCircle" size={20} />
              Получить консультацию
            </button>
          </div>
        </div>

        <div className="hidden md:flex absolute right-12 top-1/2 -translate-y-1/2 w-48 h-48 items-center justify-center">
          <div className="w-40 h-40 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Icon name={banner.icon as Parameters<typeof Icon>[0]["name"]} size={72} className="text-white/40" />
          </div>
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all"
      >
        <Icon name="ChevronLeft" size={22} />
      </button>
      <button
        onClick={next}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all"
      >
        <Icon name="ChevronRight" size={22} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current ? "w-6 h-2 bg-white" : "w-2 h-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
        <span className="text-white text-xs font-golos">{current + 1} / {banners.length}</span>
      </div>
    </section>
  );
}
