
import { Button } from "@/components/ui/button";

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen = ({ onStart }: StartScreenProps) => {
  return (
    <div className="section-container">
      <div className="text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-orbitron font-black bg-gradient-to-r from-neon-green via-neon-blue to-neon-pink bg-clip-text text-transparent animate-float">
            3TIB
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Witaj w interaktywnej prezentacji naszej klasy!
          </p>
          <p className="text-lg text-muted-foreground/80">
            Poznaj nas, nasze projekty i wartości w nowoczesnej formie
          </p>
        </div>
        
        <div className="space-y-6">
          <Button 
            onClick={onStart}
            size="lg"
            className="glass-card hover:neon-glow text-lg px-8 py-6 font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground transition-all duration-300 hover:scale-105"
          >
            START PREZENTACJI
          </Button>
          
          <div className="flex flex-col items-center space-y-2 text-sm text-muted-foreground">
            <div className="flex space-x-4">
              <span>🎯 Reklama klasy</span>
              <span>📅 Kalendarz świąt</span>
              <span>👨‍🍳 Przepis na sukces</span>
              <span>✋ Klasa bez przemocy</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground">
          BY MKDEVELOPMENT1312 (xaxa.win)
        </div>
      </div>
    </div>
  );
};

export default StartScreen;
