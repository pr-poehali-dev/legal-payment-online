import { useState } from "react";
import BannerCarousel from "@/components/BannerCarousel";
import SearchBlock from "@/components/SearchBlock";
import PaymentModal from "@/components/PaymentModal";
import Icon from "@/components/ui/icon";

const advantages = [
  { icon: "Zap", title: "Быстро", desc: "Ответ юриста в течение 30 минут после оплаты" },
  { icon: "Shield", title: "Безопасно", desc: "Оплата через Т-банк, данные защищены HTTPS" },
  { icon: "Award", title: "Профессионально", desc: "Опытные юристы с профильным образованием" },
  { icon: "Smartphone", title: "Онлайн", desc: "Консультация без визита в офис, из любой точки" },
];

export default function Home() {
  const [modal, setModal] = useState<{ open: boolean; service: string }>({ open: false, service: "" });

  const openModal = (service = "") => setModal({ open: true, service });
  const closeModal = () => setModal({ open: false, service: "" });

  return (
    <main>
      <h1 className="sr-only">Платные юридические услуги онлайн с удобной оплатой</h1>

      <BannerCarousel onConsultation={openModal} />

      <SearchBlock onSearch={openModal} />

      <section className="py-14 bg-[#eaf6e4]">
        <div className="container mx-auto px-4">
          <h2 className="font-cormorant text-3xl md:text-4xl font-bold text-[#0f5020] text-center mb-10">
            Почему выбирают нас
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {advantages.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow border border-[#28a745]/10"
              >
                <div className="w-14 h-14 bg-[#eaf6e4] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={item.icon as Parameters<typeof Icon>[0]["name"]} size={26} className="text-[#28a745]" />
                </div>
                <h3 className="font-cormorant text-xl font-bold text-[#0f5020] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 font-golos leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#0f5020] to-[#28a745] rounded-3xl p-8 md:p-12 text-center">
            <h2 className="font-cormorant text-3xl md:text-4xl font-bold text-white mb-4">
              Готовы решить ваш юридический вопрос?
            </h2>
            <p className="text-white/80 font-golos mb-8 leading-relaxed">
              Оставьте заявку прямо сейчас и получите консультацию опытного юриста. Оплата быстро и безопасно через Т-банк.
            </p>
            <button
              onClick={() => openModal()}
              className="inline-flex items-center gap-2 bg-[#7bd389] hover:bg-white text-[#0f5020] font-golos font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 hover:shadow-xl active:scale-[0.97] min-h-[48px]"
            >
              <Icon name="MessageCircle" size={20} />
              Получить консультацию
            </button>
          </div>
        </div>
      </section>

      <PaymentModal isOpen={modal.open} onClose={closeModal} serviceName={modal.service} />
    </main>
  );
}
