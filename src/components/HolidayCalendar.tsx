
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface Holiday {
  date: string;
  title: string;
  description: string;
  emoji: string;
}

interface HolidayCalendarProps {
  onContinue: () => void;
}

const HolidayCalendar = ({ onContinue }: HolidayCalendarProps) => {
  const [selectedHoliday, setSelectedHoliday] = useState<Holiday | null>(null);

  const holidays: Holiday[] = [
    {
      date: "2025-06-11",
      title: "Dzień Kukurydzy",
      description: "Świętujemy jeden z najważniejszych zbóż na świecie! Kukurydza to nie tylko popcorn, ale podstawa wielu potraw.",
      emoji: "🌽"
    },
    {
      date: "2025-06-12", 
      title: "Dzień Czerwonych Róż",
      description: "Dzień poświęcony pięknu czerwonych róż i wyrażaniu miłości poprzez kwiaty.",
      emoji: "🌹"
    },
    {
      date: "2025-06-13",
      title: "Dzień Życzliwości",
      description: "Międzynarodowy dzień promujący życzliwość i pozytywne relacje między ludźmi.",
      emoji: "😊"
    },
    {
      date: "2025-06-14",
      title: "Światowy Dzień Krwiodawstwa",
      description: "Dzień promujący świadomość dotyczącą potrzeby bezpiecznej krwi i produktów krwi.",
      emoji: "🩸"
    },
    {
      date: "2025-06-15",
      title: "Dzień Wiatru",
      description: "Celebration of wind energy and the natural power of air currents around our planet.",
      emoji: "💨"
    },
    {
      date: "2025-06-16",
      title: "Dzień Żółwia",
      description: "Dzień poświęcony ochronie żółwi i ich siedlisk na całym świecie.",
      emoji: "🐢"
    },
    {
      date: "2025-06-17",
      title: "Dzień Jedzenia Warzyw",
      description: "Promowanie zdrowego odżywiania i konsumpcji świeżych warzyw.",
      emoji: "🥬"
    },
    {
      date: "2025-06-18",
      title: "Dzień Sushi",
      description: "Międzynarodowy dzień celebrujący japońską sztukę kulinarną i sushi.",
      emoji: "🍣"
    },
    {
      date: "2025-06-19",
      title: "Dzień Garfielda",
      description: "Dzień poświęcony słynnemu rudemu kotu z komiksów, który uwielbia lasagne.",
      emoji: "🐱"
    },
    {
      date: "2025-06-20",
      title: "Dzień Lodów",
      description: "Słodkie święto poświęcone wszystkim rodzajom lodów i deserów mrożonych.",
      emoji: "🍦"
    },
    {
      date: "2025-06-21",
      title: "Dzień Słońca",
      description: "Celebration of our star and renewable solar energy on the summer solstice.",
      emoji: "☀️"
    },
    {
      date: "2025-06-22",
      title: "Dzień Czekolady",
      description: "Słodki dzień celebrujący jedno z najukochańszych łakoci na świecie.",
      emoji: "🍫"
    },
    {
      date: "2025-06-23",
      title: "Dzień Pisania Listów",
      description: "Promowanie tradycyjnej formy komunikacji i sztuki pisania odręcznego.",
      emoji: "✉️"
    },
    {
      date: "2025-06-24",
      title: "Dzień UFO",
      description: "Dzień poświęcony tajemniczym zjawiskom i poszukiwaniu życia pozaziemskiego.",
      emoji: "🛸"
    },
    {
      date: "2025-06-25",
      title: "Dzień CWELA",
      description: "Dzień poświęcony cwelom i frajerom.",
      emoji: "🤡"
    }
  ];

  const getFormattedDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      day: date.getDate(),
      month: date.toLocaleDateString('pl-PL', { month: 'short' }),
      weekday: date.toLocaleDateString('pl-PL', { weekday: 'short' })
    };
  };

  return (
    <div className="section-container">
      <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold bg-gradient-to-r from-neon-blue to-neon-pink bg-clip-text text-transparent">
            KALENDARZ ŚWIĄT
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Odkryj nietypowe święta i znajdź powód do celebracji każdego dnia!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {holidays.map((holiday, index) => {
            const formattedDate = getFormattedDate(holiday.date);
            return (
              <Card 
                key={holiday.date}
                className="glass-card cursor-pointer hover:scale-105 hover:neon-glow transition-all duration-300 group"
                onClick={() => setSelectedHoliday(holiday)}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-4 text-center space-y-3">
                  <div className="text-4xl group-hover:animate-bounce">{holiday.emoji}</div>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-neon-green">{formattedDate.day}</div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wide">
                      {formattedDate.month} • {formattedDate.weekday}
                    </div>
                  </div>
                  <h3 className="font-semibold text-sm leading-tight group-hover:text-neon-blue transition-colors">
                    {holiday.title}
                  </h3>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            onClick={onContinue}
            size="lg"
            className="glass-card hover:neon-glow text-lg px-8 py-4 bg-gradient-to-r from-neon-blue to-accent text-primary-foreground"
          >
            KONTYNUUJ →
          </Button>
        </div>
      </div>

      <Dialog open={selectedHoliday !== null} onOpenChange={() => setSelectedHoliday(null)}>
        <DialogContent className="glass-card max-w-lg">
          {selectedHoliday && (
            <>
              <DialogHeader>
                <DialogTitle className="text-center space-y-4">
                  <div className="text-6xl">{selectedHoliday.emoji}</div>
                  <div className="text-2xl font-orbitron bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">
                    {selectedHoliday.title}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {getFormattedDate(selectedHoliday.date).day} {getFormattedDate(selectedHoliday.date).month}
                  </div>
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <p className="text-muted-foreground text-center leading-relaxed">
                  {selectedHoliday.description}
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HolidayCalendar;
