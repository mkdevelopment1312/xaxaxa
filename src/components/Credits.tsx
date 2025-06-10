
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface CreditsProps {
  onRestart: () => void;
}

const Credits = ({ onRestart }: CreditsProps) => {
  return (
    <div className="section-container">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="space-y-6">
          <div className="text-6xl animate-float">🎉</div>
          
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold bg-gradient-to-r from-neon-green via-neon-blue to-neon-pink bg-clip-text text-transparent">
            DZIĘKUJEMY!
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dzięki za obejrzenie naszej prezentacji i poznanie klasy 3TIB
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="glass-card">
            <CardContent className="p-6 space-y-4">
              <div className="text-3xl">👥</div>
              <h3 className="text-xl font-semibold text-neon-blue">Klasa 3TIB</h3>
              <p className="text-muted-foreground">
                Za kreatywność, zaangażowanie i wspaniałą współpracę przy tworzeniu tej prezentacji
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardContent className="p-6 space-y-4">
              <div className="text-3xl">💻</div>
              <h3 className="text-xl font-semibold text-neon-green">mkdevelopment1312</h3>
              <p className="text-muted-foreground">
                Za techniczne wsparcie i realizację wizji interaktywnej prezentacji
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="glass-card">
          <CardContent className="p-8 space-y-6">
            <div className="text-4xl">🚀</div>
            <h3 className="text-2xl font-orbitron font-bold text-foreground">
              3TIB - Razem ku przyszłości!
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Jesteśmy klasą, która nie tylko uczy się technologii, ale tworzy ją z pasją. 
              Nasze projekty, wartości i marzenia łączą się w jedną wspólną wizję - 
              budowania lepszego, bardziej innowacyjnego świata.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="glass-card px-3 py-1 rounded-full">#Innowacja</span>
              <span className="glass-card px-3 py-1 rounded-full">#Zespołowość</span>
              <span className="glass-card px-3 py-1 rounded-full">#Kreatywność</span>
              <span className="glass-card px-3 py-1 rounded-full">#Szacunek</span>
              <span className="glass-card px-3 py-1 rounded-full">#Przyszłość</span>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Button 
            onClick={onRestart}
            size="lg"
            className="relative overflow-hidden group text-lg px-8 py-6 bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue text-primary-foreground rounded-full font-semibold tracking-wide transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.7)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-spin-slow">
                <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/>
                <path d="M21 3v5h-5"/>
              </svg>
              ZOBACZ PONOWNIE
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
          </Button>
          
          <p className="text-xs text-muted-foreground mt-4">
            BY MKDEVELOPMENT1312 (xaxa.win)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Credits;
