import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Ingredient {
  id: number;
  name: string;
  amount: string;
  description: string;
  icon: string;
  added: boolean;
}

interface SuccessRecipeProps {
  onContinue: () => void;
}

const SuccessRecipe = ({ onContinue }: SuccessRecipeProps) => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([
    {
      id: 1,
      name: "Szczypta Szacunku",
      amount: "5g",
      description: "Podstawa każdej udanej współpracy. Szacunek do siebie i innych tworzy fundament dla wszystkich osiągnięć.",
      icon: "🤝",
      added: false
    },
    {
      id: 2,
      name: "Garść Wsparcia",
      amount: "50g",
      description: "Wzajemna pomoc i motywacja. Razem możemy więcej - każde wyzwanie staje się łatwiejsze z dobrym zespołem.",
      icon: "🤲",
      added: false
    },
    {
      id: 3,
      name: "Łyżka Ambicji",
      amount: "15ml",
      description: "Chęć rozwoju i dążenie do celów. Ambicja napędza nas do przekraczania własnych granic.",
      icon: "🎯",
      added: false
    },
    {
      id: 4,
      name: "Kilogram Kreatywności", 
      amount: "1kg",
      description: "Niestandardowe myślenie i innowacyjne podejście. To nasze supermoce w rozwiązywaniu problemów.",
      icon: "💡",
      added: false
    },
    {
      id: 5,
      name: "Filiżanka Determinacji",
      amount: "200ml",
      description: "Wytrwałość w dążeniu do celu. Nawet gdy droga jest trudna, nie poddajemy się.",
      icon: "💪",
      added: false
    },
    {
      id: 6,
      name: "Odrobina Humoru",
      amount: "10ml",
      description: "Uśmiech i pozytywne nastawienie. Humor pomaga przetrwać trudne chwile i wzmacnia zespół.",
      icon: "😄",
      added: false
    }
  ]);

  const [selectedIngredient, setSelectedIngredient] = useState<Ingredient | null>(null);

  const handleIngredientClick = (ingredient: Ingredient) => {
    setSelectedIngredient(ingredient);
    setIngredients(prev => 
      prev.map(ing => 
        ing.id === ingredient.id ? { ...ing, added: true } : ing
      )
    );
  };

  const addedIngredients = ingredients.filter(ing => ing.added);
  const allAdded = addedIngredients.length === ingredients.length;

  return (
    <div className="section-container">
      <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold bg-gradient-to-r from-neon-pink to-neon-green bg-clip-text text-transparent">
            PRZEPIS NA SUKCES
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Odkryj sekretne składniki, które czynią 3TIB wyjątkową klasą
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Składniki */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-center mb-6">Składniki</h3>
            <div className="space-y-3">
              {ingredients.map((ingredient, index) => (
                <Card 
                  key={ingredient.id}
                  className={`glass-card cursor-pointer transition-all duration-300 ${
                    ingredient.added 
                      ? 'opacity-60 scale-95' 
                      : 'hover:scale-105 hover:neon-glow'
                  }`}
                  onClick={() => !ingredient.added && handleIngredientClick(ingredient)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-4 flex items-center space-x-4">
                    <div className="text-3xl">{ingredient.icon}</div>
                    <div className="flex-1">
                      <div className="font-semibold">{ingredient.name}</div>
                      <div className="text-sm text-neon-blue">{ingredient.amount}</div>
                    </div>
                    {ingredient.added && (
                      <div className="text-neon-green text-xl">✓</div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Garnek i opis */}
          <div className="space-y-6">
            <div className="text-center">
              <div className="text-8xl mb-4 animate-float">🍲</div>
              <h3 className="text-2xl font-semibold mb-2">Garnek Sukcesu 3TIB</h3>
              <p className="text-sm text-muted-foreground">
                Dodano składników: {addedIngredients.length}/{ingredients.length}
              </p>
            </div>

            {selectedIngredient && (
              <Card className="glass-card animate-slide-up">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="text-4xl">{selectedIngredient.icon}</div>
                  <h4 className="text-xl font-semibold text-neon-green">
                    {selectedIngredient.name}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedIngredient.description}
                  </p>
                </CardContent>
              </Card>
            )}

            {allAdded && (
              <Card className="glass-card animate-pulse-glow">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="text-4xl">🏆</div>
                  <h4 className="text-xl font-semibold text-neon-green">
                    Przepis Kompletny!
                  </h4>
                  <p className="text-muted-foreground">
                    Wszystkie składniki zostały dodane. To właśnie tworzy sukces klasy 3TIB - 
                    połączenie wszystkich tych wartości w jeden silny zespół!
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        <div className="text-center">
          <Button 
            onClick={onContinue}
            size="lg"
            className="glass-card hover:neon-glow text-lg px-8 py-4 bg-gradient-to-r from-neon-green to-neon-pink text-primary-foreground"
          >
            KONTYNUUJ →
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SuccessRecipe;
