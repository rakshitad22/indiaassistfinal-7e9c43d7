import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Bot, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm your India Assist Travel Buddy 👋 How can I help you plan your trip to India today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const getResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();

    // Delhi queries
    if (lowerQuery.includes("delhi") || lowerQuery.includes("new delhi")) {
      return "Delhi is India's vibrant capital! Must-visit places include:\n\n• Red Fort - Historic Mughal monument\n• India Gate - War memorial\n• Qutub Minar - UNESCO World Heritage Site\n• Humayun's Tomb - Beautiful Mughal architecture\n• Lotus Temple - Stunning modern architecture\n• Chandni Chowk - Famous street food market\n\nFor South Indian food in Delhi, try Saravana Bhavan or Sagar Ratna!";
    }

    // South Indian food
    if (lowerQuery.includes("south indian") || lowerQuery.includes("dosa") || lowerQuery.includes("idli")) {
      return "For authentic South Indian food in major cities:\n\n• Saravana Bhavan - Chain available in most cities\n• MTR (Mavalli Tiffin Room) - Bangalore original\n• Murugan Idli Shop - Chennai specialty\n• Café Madras - Delhi\n• Dakshin - Fine dining option in many cities\n\nMust-try dishes: Masala Dosa, Idli-Sambar, Vada, Filter Coffee, Uttapam!";
    }

    // Emergency
    if (lowerQuery.includes("emergency") || lowerQuery.includes("police") || lowerQuery.includes("ambulance")) {
      return "Important Emergency Numbers in India:\n\n🚨 Police: 100\n🚑 Ambulance: 102\n🚒 Fire: 101\n👮 Women's Helpline: 1091\n🆘 National Emergency: 112\n\nFor embassy contacts, please visit the Emergency page in the menu!";
    }

    // Best places
    if (lowerQuery.includes("best place") || lowerQuery.includes("where to visit") || lowerQuery.includes("recommend")) {
      return "Top destinations in India:\n\n1. Taj Mahal (Agra) - Wonder of the World\n2. Jaipur - The Pink City with stunning palaces\n3. Kerala - Serene backwaters and nature\n4. Goa - Beautiful beaches and nightlife\n5. Varanasi - Spiritual and cultural hub\n6. Delhi - Historical monuments and culture\n\nEach offers unique experiences! What interests you most - history, nature, beaches, or spirituality?";
    }

    // Weather/climate
    if (lowerQuery.includes("weather") || lowerQuery.includes("climate") || lowerQuery.includes("when to visit")) {
      return "Best time to visit India:\n\n🌸 October-March: Pleasant weather, ideal for most regions\n☀️ April-June: Hot summer, good for hill stations\n🌧️ July-September: Monsoon season, lush greenery\n\nWinter (Oct-Feb) is generally the best time for tourists. Remember to pack accordingly!";
    }

    // Food
    if (lowerQuery.includes("food") || lowerQuery.includes("cuisine") || lowerQuery.includes("eat")) {
      return "Indian cuisine is incredibly diverse:\n\n🍛 North: Butter Chicken, Naan, Biryani\n🥘 South: Dosa, Idli, Sambar\n🌶️ East: Fish Curry, Rosogolla\n🥙 West: Dhokla, Vada Pav\n\nPro tips:\n• Try street food at popular spots\n• Drink bottled water\n• Start with mild spices if you're new to Indian food\n• Don't miss the chai (Indian tea)!";
    }

    // Transportation
    if (lowerQuery.includes("transport") || lowerQuery.includes("travel") || lowerQuery.includes("how to get")) {
      return "Getting around India:\n\n🚕 Uber/Ola - Safe and convenient in cities\n🚂 Trains - Extensive network, book on IRCTC\n✈️ Flights - Connect major cities quickly\n🚌 Buses - Budget-friendly option\n🛺 Auto-rickshaws - For short distances\n\nAlways use registered taxis and keep emergency numbers handy!";
    }

    // Culture/customs
    if (lowerQuery.includes("culture") || lowerQuery.includes("custom") || lowerQuery.includes("etiquette")) {
      return "Important cultural tips:\n\n👟 Remove shoes before entering temples and homes\n👗 Dress modestly at religious sites\n🙏 Use 'Namaste' as a greeting\n📸 Ask permission before photographing people\n🤝 Use right hand for eating and giving/receiving\n🕉️ Respect religious practices and sites\n\nIndians are generally very welcoming to tourists!";
    }

    // Safety
    if (lowerQuery.includes("safe") || lowerQuery.includes("security")) {
      return "Safety tips for India:\n\n✅ Keep copies of important documents\n✅ Stay aware of surroundings\n✅ Use registered transportation\n✅ Avoid isolated areas at night\n✅ Keep emergency contacts saved\n✅ Drink bottled water\n✅ Keep valuables secure\n\nIndia is generally safe for tourists who take basic precautions!";
    }

    // Shopping
    if (lowerQuery.includes("shop") || lowerQuery.includes("buy") || lowerQuery.includes("souvenir")) {
      return "Great shopping experiences:\n\n🛍️ Delhi: Chandni Chowk, Sarojini Nagar\n🎨 Jaipur: Johari Bazaar (jewelry), Bapu Bazaar\n🧵 Kerala: Spices, tea, handicrafts\n🏖️ Goa: Flea markets at Anjuna, Arambol\n\nDon't forget to bargain at local markets! Usually 30-40% off asking price is normal.";
    }

    // Default response
    return "I'd be happy to help! I can assist you with:\n\n• Best places to visit\n• Where to find authentic food\n• Emergency contacts\n• Travel tips and safety\n• Cultural customs\n• Transportation options\n• Shopping recommendations\n\nWhat would you like to know more about?";
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const response = getResponse(input);
      const assistantMessage: Message = { role: "assistant", content: response };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4">AI Travel Buddy</h1>
          <p className="text-xl text-muted-foreground">
            Your 24/7 travel companion for India
          </p>
        </div>

        <Card className="shadow-lg-custom h-[600px] flex flex-col">
          <CardHeader className="border-b">
            <CardTitle className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-primary" />
              Chat with Travel Buddy
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col p-0">
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex gap-3 ${
                      message.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {message.role === "assistant" && (
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <Bot className="h-5 w-5 text-primary-foreground" />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] rounded-lg p-4 ${
                        message.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      }`}
                    >
                      <p className="whitespace-pre-line">{message.content}</p>
                    </div>
                    {message.role === "user" && (
                      <div className="w-8 h-8 rounded-full bg-saffron flex items-center justify-center flex-shrink-0">
                        <User className="h-5 w-5 text-white" />
                      </div>
                    )}
                  </div>
                ))}
                {isTyping && (
                  <div className="flex gap-3 justify-start">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <Bot className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div className="bg-muted rounded-lg p-4">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-100"></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-200"></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={scrollRef} />
              </div>
            </ScrollArea>

            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  placeholder="Ask me anything about traveling in India..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={isTyping}
                />
                <Button
                  onClick={sendMessage}
                  disabled={isTyping || !input.trim()}
                  className="gap-2"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                Try asking: "Best places to visit in Delhi?" or "Where can I find South Indian food?"
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Chat;
