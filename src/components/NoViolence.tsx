
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Message {
  id: number;
  title: string;
  content: string;
  icon: string;
  gradient: string;
}

interface NoViolenceProps {
  onContinue: () => void;
}

const NoViolence = ({ onContinue }: NoViolenceProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const messages: Message[] = [
    {
      id: 1,
      title: "Mamy Wybór",
      content: "Każdego dnia stajemy przed wyborami. Możemy wybierać między gniewem a spokojem, między konfliktem a zrozumieniem. W 3TIB wybieramy dobro.",
      icon: "🤔",
      gradient: "from-neon-blue to-primary"
    },
    {
      id: 2,
      title: "Siła w Jedności",
      content: "Prawdziwa siła nie leży w przemocy, ale we wzajemnym wsparciu. Razem jesteśmy silniejsi niż suma naszych części.",
      icon: "🤝",
      gradient: "from-neon-green to-neon-blue"
    },
    {
      id: 3,
      title: "Słowa Mają Moc",
      content: "Nasze słowa mogą budować lub niszczyć, inspirować lub ranić. Wybieramy słowa, które budują mosty, nie mury.",
      icon: "💬",
      gradient: "from-neon-pink to-neon-green"
    },
    {
      id: 4,
      title: "Różnorodność to Bogactwo",
      content: "Każdy z nas jest inny i to jest nasze bogactwo. Różnorodność perspektyw czyni nas mądrzejszymi i bardziej kreatywnymi.",
      icon: "🌈",
      gradient: "from-primary to-neon-pink"
    },
    {
      id: 5,
      title: "Empatia w Działaniu",
      content: "Stawiamy się w sytuacji innych, słuchamy ich historii i staramy się zrozumieć ich perspektywę. To podstawa naszej społeczności.",
      icon: "❤️",
      gradient: "from-neon-green to-primary"
    },
    {
      id: 6,
      title: "Przyszłość Bez Przemocy",
      content: "Jako przyszli liderzy branży IT, budujemy technologie i społeczności oparte na szacunku, współpracy i wzajemnym zrozumieniu.",
      icon: "🚀",
      gradient: "from-neon-blue to-neon-pink"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % messages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + messages.length) % messages.length);
  };

  const currentMessage = messages[currentSlide];

  return (
    <div className="section-container">
      <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold bg-gradient-to-r from-neon-green via-neon-blue to-neon-pink bg-clip-text text-transparent">
            KLASA BEZ PRZEMOCY
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nasze wartości i zobowiązanie do tworzenia bezpiecznej, wspierającej społeczności
          </p>
        </div>

        {/* Main Slide */}
        <Card className={`glass-card min-h-[400px] bg-gradient-to-br ${currentMessage.gradient} bg-opacity-10`}>
          <CardContent className="p-8 text-center space-y-8 flex flex-col justify-center h-full">
            <div className="text-8xl animate-float">{currentMessage.icon}</div>
            
            <div className="space-y-4">
              <h3 className="text-3xl font-orbitron font-bold text-white">
                {currentMessage.title}
              </h3>
              <p className="text-lg text-white leading-relaxed max-w-2xl mx-auto">
                {currentMessage.content}
              </p>
            </div>

            <div className="flex justify-center items-center space-x-6">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevSlide}
                className="hover:bg-white/20 text-2xl"
              >
                ←
              </Button>
              
              <div className="flex space-x-2">
                {messages.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-neon-green scale-125' 
                        : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={nextSlide}
                className="hover:bg-white/20 text-2xl"
              >
                →
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="glass-card">
          <CardContent className="p-6 text-center space-y-4">
            <h4 className="text-xl font-semibold text-neon-green">
              Dołącz do naszej misji
            </h4>
            <p className="text-muted-foreground">
              Każdy gest dobroci, każde słowo wsparcia, każda chwila zrozumienia 
              tworzy lepszą rzeczywistość dla nas wszystkich.
            </p>
            <div className="text-2xl">✊</div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button 
            onClick={onContinue}
            size="lg"
            className="glass-card hover:neon-glow text-lg px-8 py-4 bg-gradient-to-r from-neon-pink to-neon-blue text-primary-foreground"
          >
            ZAKOŃCZ PREZENTACJĘ →
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NoViolence;
