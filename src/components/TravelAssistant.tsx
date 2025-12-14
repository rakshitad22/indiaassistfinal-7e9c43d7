import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, MapPin, Clock, Sun, Moon, Sunrise, Sunset, X, ChevronRight } from "lucide-react";

interface Recommendation {
  place: string;
  city: string;
  bestTime: string;
  reason: string;
  timeIcon: React.ReactNode;
}

const TravelAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentRecommendation, setCurrentRecommendation] = useState<Recommendation | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [displayedText, setDisplayedText] = useState("");

  const getTimeOfDay = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return "morning";
    if (hour >= 12 && hour < 17) return "afternoon";
    if (hour >= 17 && hour < 20) return "evening";
    return "night";
  };

  const recommendations: Record<string, Recommendation[]> = {
    morning: [
      { place: "Taj Mahal", city: "Agra", bestTime: "6:00 AM - 9:00 AM", reason: "The sunrise casts a golden glow on the marble, with fewer crowds and cooler temperatures.", timeIcon: <Sunrise className="w-4 h-4" /> },
      { place: "Varanasi Ghats", city: "Varanasi", bestTime: "5:30 AM - 8:00 AM", reason: "Witness the magical morning Ganga Aarti and see the city wake up along the sacred river.", timeIcon: <Sunrise className="w-4 h-4" /> },
      { place: "Jaipur City Palace", city: "Jaipur", bestTime: "9:00 AM - 11:00 AM", reason: "Perfect morning light for photography and exploring before the afternoon heat.", timeIcon: <Sun className="w-4 h-4" /> },
    ],
    afternoon: [
      { place: "India Gate", city: "Delhi", bestTime: "2:00 PM - 5:00 PM", reason: "Great time to stroll around and enjoy street food from nearby vendors.", timeIcon: <Sun className="w-4 h-4" /> },
      { place: "Gateway of India", city: "Mumbai", bestTime: "3:00 PM - 6:00 PM", reason: "Sea breeze makes it pleasant, perfect for boat rides to Elephanta Caves.", timeIcon: <Sun className="w-4 h-4" /> },
      { place: "Mysore Palace", city: "Mysore", bestTime: "12:00 PM - 4:00 PM", reason: "Explore the grand interiors away from the morning rush.", timeIcon: <Sun className="w-4 h-4" /> },
    ],
    evening: [
      { place: "Hawa Mahal", city: "Jaipur", bestTime: "5:00 PM - 7:00 PM", reason: "The setting sun creates a stunning orange-pink facade, perfect for that iconic photo.", timeIcon: <Sunset className="w-4 h-4" /> },
      { place: "Marine Drive", city: "Mumbai", bestTime: "6:00 PM - 8:00 PM", reason: "Watch the famous Mumbai sunset and see the Queen's Necklace light up.", timeIcon: <Sunset className="w-4 h-4" /> },
      { place: "Dal Lake Shikara Ride", city: "Srinagar", bestTime: "5:00 PM - 7:00 PM", reason: "Golden hour on the lake is absolutely magical with mountains in backdrop.", timeIcon: <Sunset className="w-4 h-4" /> },
    ],
    night: [
      { place: "Amber Fort Light Show", city: "Jaipur", bestTime: "7:30 PM - 9:00 PM", reason: "The sound and light show brings Rajput history to life.", timeIcon: <Moon className="w-4 h-4" /> },
      { place: "Ganga Aarti at Dashashwamedh Ghat", city: "Varanasi", bestTime: "6:30 PM - 8:00 PM", reason: "A mesmerizing spiritual experience with fire, chants, and devotion.", timeIcon: <Moon className="w-4 h-4" /> },
      { place: "Chandni Chowk Night Market", city: "Delhi", bestTime: "8:00 PM - 11:00 PM", reason: "Experience the vibrant night food scene of Old Delhi.", timeIcon: <Moon className="w-4 h-4" /> },
    ],
  };

  const getRandomRecommendation = () => {
    const timeOfDay = getTimeOfDay();
    const options = recommendations[timeOfDay];
    return options[Math.floor(Math.random() * options.length)];
  };

  useEffect(() => {
    if (isOpen && !currentRecommendation) {
      setIsTyping(true);
      const rec = getRandomRecommendation();
      setCurrentRecommendation(rec);
      
      const fullText = `Hey! Right now it's ${getTimeOfDay()}. I recommend visiting ${rec.place} in ${rec.city}. Best time: ${rec.bestTime}. ${rec.reason}`;
      let index = 0;
      
      const typingInterval = setInterval(() => {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
        if (index >= fullText.length) {
          clearInterval(typingInterval);
          setIsTyping(false);
        }
      }, 30);

      return () => clearInterval(typingInterval);
    }
  }, [isOpen]);

  const getNewRecommendation = () => {
    setIsTyping(true);
    setDisplayedText("");
    const rec = getRandomRecommendation();
    setCurrentRecommendation(rec);
    
    const fullText = `Hey! Right now it's ${getTimeOfDay()}. I recommend visiting ${rec.place} in ${rec.city}. Best time: ${rec.bestTime}. ${rec.reason}`;
    let index = 0;
    
    const typingInterval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index >= fullText.length) {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 30);
  };

  return (
    <>
      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-gradient-to-r from-primary to-orange-500 hover:from-primary/90 hover:to-orange-500/90 shadow-lg animate-pulse"
        size="icon"
      >
        <Sparkles className="w-6 h-6 text-white" />
      </Button>

      {/* Assistant Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 md:w-96 animate-in slide-in-from-bottom-4 fade-in duration-300">
          <Card className="border-primary/20 shadow-2xl bg-background/95 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-primary to-orange-500 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Travel Assistant</CardTitle>
                    <p className="text-xs text-muted-foreground">Real-time recommendations</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Message Bubble */}
              <div className="bg-muted/50 rounded-lg p-4 min-h-[100px]">
                <p className="text-sm leading-relaxed">
                  {displayedText}
                  {isTyping && <span className="animate-pulse">|</span>}
                </p>
              </div>

              {/* Recommendation Card */}
              {currentRecommendation && !isTyping && (
                <Card className="bg-gradient-to-br from-primary/10 to-orange-500/10 border-primary/20">
                  <CardContent className="p-4 space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="font-semibold">{currentRecommendation.place}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {currentRecommendation.city}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{currentRecommendation.bestTime}</span>
                      {currentRecommendation.timeIcon}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Actions */}
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  onClick={getNewRecommendation}
                  disabled={isTyping}
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Another suggestion
                </Button>
                <Button 
                  size="sm" 
                  className="flex-1"
                  onClick={() => {
                    if (currentRecommendation) {
                      window.location.href = `/destinations`;
                    }
                  }}
                >
                  Explore
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default TravelAssistant;
