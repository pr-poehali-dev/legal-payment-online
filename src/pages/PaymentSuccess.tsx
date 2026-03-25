import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

export default function PaymentSuccess() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="w-20 h-20 bg-green-pale rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
          <Icon name="CheckCircle2" size={40} className="text-green-primary" />
        </div>

        <h1 className="font-cormorant text-3xl font-semibold text-green-deep mb-3">
          Оплата прошла успешно
        </h1>

        <p className="font-golos text-muted-foreground mb-2 leading-relaxed">
          Спасибо за обращение! Ваш платёж подтверждён.
        </p>
        <p className="font-golos text-muted-foreground mb-8 leading-relaxed">
          Юрист свяжется с вами в течение <span className="font-semibold text-green-dark">30 минут</span> по указанному номеру телефона.
        </p>

        <div className="bg-green-pale border border-green-light/40 rounded-xl p-5 mb-8 text-left">
          <div className="flex items-start gap-3">
            <Icon name="Info" size={18} className="text-green-primary mt-0.5 flex-shrink-0" />
            <div className="font-golos text-sm text-green-deep/80 space-y-1">
              <p>Если звонок не поступит в течение 30 минут — напишите нам:</p>
              <p className="font-medium text-green-dark">+7 (495) 123-45-67</p>
              <p>Укажите, что уже оплатили консультацию.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-green-primary hover:bg-green-dark text-white font-golos font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-green-primary/25 active:scale-[0.98] flex items-center justify-center gap-2"
          >
            <Icon name="Home" size={18} />
            На главную
          </button>
          <button
            onClick={() => navigate("/services")}
            className="px-6 py-3 border border-border text-foreground font-golos font-medium rounded-xl hover:bg-secondary transition-all flex items-center justify-center gap-2"
          >
            <Icon name="BookOpen" size={18} />
            Все услуги
          </button>
        </div>
      </div>
    </div>
  );
}
