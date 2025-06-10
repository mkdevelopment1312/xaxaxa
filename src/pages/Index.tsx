
import { useState } from "react";
import StartScreen from "@/components/StartScreen";
import ClassGallery from "@/components/ClassGallery";
import HolidayCalendar from "@/components/HolidayCalendar";
import SuccessRecipe from "@/components/SuccessRecipe";
import NoViolence from "@/components/NoViolence";
import Credits from "@/components/Credits";

type Section = 'start' | 'gallery' | 'calendar' | 'recipe' | 'noviolence' | 'credits';

const Index = () => {
  const [currentSection, setCurrentSection] = useState<Section>('start');

  const handleStart = () => setCurrentSection('gallery');
  const handleContinueToCalendar = () => setCurrentSection('calendar');
  const handleContinueToRecipe = () => setCurrentSection('recipe');
  const handleContinueToNoViolence = () => setCurrentSection('noviolence');
  const handleContinueToCredits = () => setCurrentSection('credits');
  const handleRestart = () => setCurrentSection('start');

  const renderSection = () => {
    switch (currentSection) {
      case 'start':
        return <StartScreen onStart={handleStart} />;
      case 'gallery':
        return <ClassGallery onContinue={handleContinueToCalendar} />;
      case 'calendar':
        return <HolidayCalendar onContinue={handleContinueToRecipe} />;
      case 'recipe':
        return <SuccessRecipe onContinue={handleContinueToNoViolence} />;
      case 'noviolence':
        return <NoViolence onContinue={handleContinueToCredits} />;
      case 'credits':
        return <Credits onRestart={handleRestart} />;
      default:
        return <StartScreen onStart={handleStart} />;
    }
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {renderSection()}
    </div>
  );
};

export default Index;
