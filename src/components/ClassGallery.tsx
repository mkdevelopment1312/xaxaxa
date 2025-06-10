
import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X, Play, Pause, Volume2, VolumeX, ArrowUp } from "lucide-react";

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  description: string;
  type: 'image' | 'video';
  duration?: string;
}

interface ClassGalleryProps {
  onContinue: () => void;
}

const ClassGallery = ({ onContinue }: ClassGalleryProps) => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  // Load gallery data from JSON
  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const response = await fetch('/gallery.json');
        const data = await response.json();
        setItems(data.items);
      } catch (error) {
        console.error('Error loading gallery data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryData();
  }, []);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToGallery = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };  

  const handleItemClick = (itemId: number) => {
    setSelectedItem(itemId);
    setIsPlaying(false);
  };

  const handlePrevious = () => {
    if (selectedItem !== null) {
      const currentIndex = items.findIndex(item => item.id === selectedItem);
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
      setSelectedItem(items[prevIndex].id);
      setIsPlaying(false);
    }
  };

  const handleNext = () => {
    if (selectedItem !== null) {
      const currentIndex = items.findIndex(item => item.id === selectedItem);
      const nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
      setSelectedItem(items[nextIndex].id);
      setIsPlaying(false);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const selectedItemData = items.find(item => item.id === selectedItem);

  return (
    <div className="section-container">
      <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">
            NASZA KLASA
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Poznaj 3TIB - zespół przyszłych specjalistów IT, którzy już dziś tworzą niesamowite projekty
          </p>
          {!loading && (
            <div className="flex justify-center space-x-4 text-sm text-muted-foreground">
              <span className="flex items-center">
                📸 {items.filter(item => item.type === 'image').length} zdjęć
              </span>
              <span className="flex items-center">
                🎥 {items.filter(item => item.type === 'video').length} nagrań
              </span>
            </div>
          )}
        </div>
        
        <div ref={galleryRef} className="pt-4"></div>

        {/* Loading state */}
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-neon-blue mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Ładowanie galerii...</p>
          </div>
        ) : (
          <div className="masonry-grid">
            {items.map((item, index) => (
            <div 
              key={item.id} 
              className="masonry-item"
              style={{ animationDelay: `${(index % 20) * 0.1}s` }}
            >
              <Card 
                className="glass-card cursor-pointer hover:scale-105 hover:neon-glow transition-all duration-300 group overflow-hidden"
                onClick={() => handleItemClick(item.id)}
              >
                <CardContent className="p-0">
                  <div className="relative">
                    {item.type === 'image' ? (
                      <img 
                        src={item.src} 
                        alt={item.title}
                        className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="relative">
                        <video 
                          src={item.src}
                          className="w-full h-auto object-cover"
                          muted
                          preload="metadata"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <div className="bg-black/50 rounded-full p-3">
                            <Play className="h-8 w-8 text-white" fill="white" />
                          </div>
                        </div>
                        {item.duration && (
                          <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                            {item.duration}
                          </div>
                        )}
                      </div>
                    )}
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-semibold text-sm md:text-base line-clamp-2">{item.title}</h3>
                      <p className="text-xs text-gray-300 mt-1 line-clamp-2">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            ))}
          </div>
        )}

        <div className="text-center">
          <Button 
            onClick={onContinue}
            size="lg"
            className="glass-card hover:neon-glow text-lg px-8 py-4 bg-gradient-to-r from-neon-pink to-primary text-primary-foreground"
          >
            KONTYNUUJ →
          </Button>
        </div>

        {/* Scroll to top button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full shadow-lg z-50 transition-all duration-300 hover:scale-110"
            aria-label="Przewiń do góry"
          >
            <ArrowUp className="h-6 w-6" />
          </button>
        )}
      </div>

      {/* Modal dla pełnego podglądu */}
      <Dialog open={selectedItem !== null} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="glass-card-strong max-w-5xl p-0 border-0">
          {selectedItemData && (
            <div className="relative">
              {selectedItemData.type === 'image' ? (
                <img 
                  src={selectedItemData.src} 
                  alt={selectedItemData.title}
                  className="w-full max-h-[70vh] object-contain rounded-t-lg"
                />
              ) : (
                <div className="relative">
                  <video 
                    ref={videoRef}
                    src={selectedItemData.src}
                    className="w-full max-h-[70vh] object-contain rounded-t-lg"
                    controls={false}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  />
                  
                  {/* Kontrolki wideo */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white hover:bg-black/20 bg-black/50"
                      onClick={togglePlay}
                    >
                      {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                    </Button>
                    
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white hover:bg-black/20 bg-black/50"
                      onClick={toggleMute}
                    >
                      {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Przyciski nawigacji */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white hover:bg-black/20 bg-black/50"
                onClick={() => setSelectedItem(null)}
              >
                <X className="h-6 w-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-black/20 bg-black/50"
                onClick={handlePrevious}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-black/20 bg-black/50"
                onClick={handleNext}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>

              {/* Informacje o elemencie */}
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-foreground">{selectedItemData.title}</h3>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    {selectedItemData.type === 'video' ? (
                      <>
                        <span>🎥</span>
                        {selectedItemData.duration && <span>{selectedItemData.duration}</span>}
                      </>
                    ) : (
                      <span>📸</span>
                    )}
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{selectedItemData.description}</p>
                
                {/* Licznik pozycji */}
                <div className="text-center text-sm text-muted-foreground">
                  {items.findIndex(item => item.id === selectedItem) + 1} z {items.length}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ClassGallery;
