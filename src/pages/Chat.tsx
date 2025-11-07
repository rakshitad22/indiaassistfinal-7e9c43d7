import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Bot, User } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm your India Assist Travel Buddy 👋 I can help you with everything about traveling in India - destinations, food, hotels, restaurants, culture, safety, transportation, and more. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const getResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();

    // Food & Restaurants
    if (lowerQuery.includes("food") || lowerQuery.includes("restaurant") || lowerQuery.includes("eat")) {
      if (lowerQuery.includes("delhi")) {
        return "🍽️ **Best Restaurants in Delhi:**\n\n**Fine Dining:** Indian Accent, Bukhara, Dum Pukht\n**Mid-Range:** Karim's, Saravana Bhavan, Moti Mahal\n**Street Food:** Chandni Chowk, Connaught Place\n**Must-Try:** Butter Chicken, Chole Bhature, Paranthe";
      }
      return "🍽️ Ask me about specific cities like Delhi, Mumbai, Goa for restaurant recommendations!";
    }

    // Hotels
    if (lowerQuery.includes("hotel") || lowerQuery.includes("stay")) {
      return "🏨 **Hotel Guide:** Tell me which city you need hotels for - Delhi, Mumbai, Goa, Jaipur, etc. and I'll give you specific recommendations with prices!";
    }

    // Cities
    if (lowerQuery.includes("delhi")) return "🏛️ **Delhi:** Red Fort, Qutub Minar, India Gate, Lotus Temple. Best time: Oct-March. Top restaurants: Karim's, Indian Accent.";
    if (lowerQuery.includes("mumbai")) return "🌊 **Mumbai:** Gateway of India, Marine Drive, Elephanta Caves. Must-try: Vada Pav, Pav Bhaji.";
    if (lowerQuery.includes("goa")) return "🏖️ **Goa:** North Goa for parties (Baga, Calangute), South Goa for peace (Palolem). Best: Nov-Feb.";
    if (lowerQuery.includes("jaipur")) return "👑 **Jaipur:** Hawa Mahal, Amber Fort, City Palace. Shopping: Johari Bazaar. Try: Dal Baati Churma.";

    // Emergency
    if (lowerQuery.includes("emergency")) return "🚨 **Emergency:** Police: 100, Ambulance: 102, Fire: 101, Tourist Helpline: 1800-111-363";

    // Default
    return "I can help with: 🍽️ Food & Restaurants • 🏨 Hotels • 📍 City Guides • ✈️ Transportation • 🛡️ Safety • 🎭 Culture • 💰 Money Tips\n\nAsk me anything specific!";
  };

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const response = getResponse(input);
      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4">AI Travel Buddy</h1>
          <p className="text-xl text-muted-foreground">Ask me anything about India!</p>
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
                  <div key={index} className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    {message.role === "assistant" && (
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <Bot className="h-5 w-5 text-primary-foreground" />
                      </div>
                    )}
                    <div className={`max-w-[80%] rounded-lg p-4 ${message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
                      <p className="whitespace-pre-line text-sm">{message.content}</p>
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
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
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
                <Input placeholder="Ask anything..." value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === "Enter" && sendMessage()} disabled={isTyping} />
                <Button onClick={sendMessage} disabled={isTyping || !input.trim()}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Chat;