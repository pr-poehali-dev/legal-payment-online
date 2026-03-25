import { useState } from "react";
import Icon from "@/components/ui/icon";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName?: string;
}

export default function PaymentModal({ isOpen, onClose, serviceName }: PaymentModalProps) {
  const [step, setStep] = useState<"info" | "form">("info");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [question, setQuestion] = useState(serviceName || "");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("form");
  };

  const handlePayment = () => {
    alert("Переход к оплате в Т-банке. В реальной версии здесь будет редирект на платёжную страницу.");
    onClose();
    setStep("info");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in" />

      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md animate-scale-in overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-dark to-green-primary px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Icon name="CreditCard" size={20} className="text-white" />
              </div>
              <div>
                <p className="text-white/70 text-xs font-golos">Безопасная оплата</p>
                <p className="text-white font-golos font-semibold">Т-банк</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white/70 hover:text-white transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10"
            >
              <Icon name="X" size={18} />
            </button>
          </div>
        </div>

        <div className="px-6 py-6">
          {step === "info" ? (
            <>
              <h2 className="font-cormorant text-2xl font-semibold text-green-deep mb-1">
                Получить консультацию
              </h2>
              {serviceName && (
                <p className="text-sm text-muted-foreground mb-4 font-golos">
                  Услуга: <span className="font-medium text-green-dark">{serviceName}</span>
                </p>
              )}

              <div className="bg-green-pale border border-green-light/40 rounded-xl p-4 mb-5">
                <div className="flex gap-3">
                  <Icon name="Info" size={18} className="text-green-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-green-deep/80 font-golos leading-relaxed">
                    После заполнения формы вы будете перенаправлены на страницу оплаты Т-банка. 
                    По завершении оплаты вернётесь на наш сайт, и юрист свяжется с вами в течение 30 минут.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5 font-golos">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Иван Иванов"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-green-primary/30 focus:border-green-primary transition-all font-golos text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5 font-golos">
                    Телефон для связи
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+7 (999) 000-00-00"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-green-primary/30 focus:border-green-primary transition-all font-golos text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5 font-golos">
                    Ваш вопрос
                  </label>
                  <textarea
                    required
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Опишите вашу ситуацию..."
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-green-primary/30 focus:border-green-primary transition-all font-golos text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-green-primary hover:bg-green-dark text-white font-golos font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-green-primary/25 active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  <Icon name="ArrowRight" size={18} />
                  Перейти к оплате
                </button>
              </form>
            </>
          ) : (
            <>
              <h2 className="font-cormorant text-2xl font-semibold text-green-deep mb-2">
                Перенаправление к оплате
              </h2>
              <p className="text-sm text-muted-foreground font-golos mb-6">
                Вы будете перенаправлены на защищённую страницу оплаты Т-банка
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 p-3 bg-secondary rounded-xl">
                  <Icon name="User" size={16} className="text-green-primary" />
                  <span className="text-sm font-golos">{name}</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-secondary rounded-xl">
                  <Icon name="Phone" size={16} className="text-green-primary" />
                  <span className="text-sm font-golos">{phone}</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-secondary rounded-xl">
                  <Icon name="MessageSquare" size={16} className="text-green-primary" />
                  <span className="text-sm font-golos text-muted-foreground line-clamp-1">{question}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-5 text-xs text-muted-foreground font-golos">
                <Icon name="Shield" size={14} className="text-green-primary" />
                <span>Передача данных защищена по протоколу HTTPS</span>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep("info")}
                  className="flex-1 py-3 border border-border text-foreground font-golos font-medium rounded-xl hover:bg-secondary transition-all text-sm"
                >
                  Назад
                </button>
                <button
                  onClick={handlePayment}
                  className="flex-1 py-3 bg-green-primary hover:bg-green-dark text-white font-golos font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-green-primary/25 active:scale-[0.98] text-sm flex items-center justify-center gap-2"
                >
                  <Icon name="CreditCard" size={16} />
                  Оплатить
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
