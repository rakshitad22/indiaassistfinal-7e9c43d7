import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Languages, ArrowRightLeft } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const languages = [
  { code: "en", name: "English" },
  { code: "hi", name: "Hindi (हिंदी)" },
  { code: "bn", name: "Bengali (বাংলা)" },
  { code: "te", name: "Telugu (తెలుగు)" },
  { code: "mr", name: "Marathi (मराठी)" },
  { code: "ta", name: "Tamil (தமிழ்)" },
  { code: "gu", name: "Gujarati (ગુજરાતી)" },
  { code: "kn", name: "Kannada (ಕನ್ನಡ)" },
  { code: "ml", name: "Malayalam (മലയാളം)" },
  { code: "pa", name: "Punjabi (ਪੰਜਾਬੀ)" },
  { code: "es", name: "Spanish (Español)" },
  { code: "fr", name: "French (Français)" },
  { code: "de", name: "German (Deutsch)" },
  { code: "ja", name: "Japanese (日本語)" },
  { code: "zh", name: "Chinese (中文)" },
  { code: "ar", name: "Arabic (العربية)" },
  { code: "ru", name: "Russian (Русский)" },
  { code: "pt", name: "Portuguese (Português)" },
  { code: "it", name: "Italian (Italiano)" },
  { code: "ko", name: "Korean (한국어)" },
];

const UniversalTranslator = () => {
  const [sourceText, setSourceText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [sourceLang, setSourceLang] = useState("en");
  const [targetLang, setTargetLang] = useState("hi");
  const [isTranslating, setIsTranslating] = useState(false);
  const { toast } = useToast();

  const handleTranslate = async () => {
    if (!sourceText.trim()) {
      toast({
        title: "Error",
        description: "Please enter text to translate",
        variant: "destructive",
      });
      return;
    }

    setIsTranslating(true);
    try {
      const { data, error } = await supabase.functions.invoke('translate', {
        body: { text: sourceText, targetLanguage: targetLang }
      });

      if (error) throw error;

      setTranslatedText(data.translation);
      toast({
        title: "Translation Complete! ✨",
        description: "Your text has been translated successfully",
      });
    } catch (error) {
      console.error('Translation error:', error);
      toast({
        title: "Translation Failed",
        description: "Unable to translate. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsTranslating(false);
    }
  };

  const handleSwapLanguages = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setSourceText(translatedText);
    setTranslatedText(sourceText);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Universal Language Translator 🌍</h1>
          <p className="text-xl text-muted-foreground">
            Translate between any Indian and foreign languages instantly with AI
          </p>
        </div>

        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Languages className="h-6 w-6" />
              AI-Powered Translation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">From</label>
                <Select value={sourceLang} onValueChange={setSourceLang}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((lang) => (
                      <SelectItem key={lang.code} value={lang.code}>
                        {lang.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-end">
                <Button
                  variant="outline"
                  size="icon"
                  className="w-full md:w-auto"
                  onClick={handleSwapLanguages}
                >
                  <ArrowRightLeft className="h-4 w-4" />
                </Button>
              </div>

              <div className="md:col-start-2">
                <label className="text-sm font-medium mb-2 block">To</label>
                <Select value={targetLang} onValueChange={setTargetLang}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((lang) => (
                      <SelectItem key={lang.code} value={lang.code}>
                        {lang.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Source Text</label>
                <Textarea
                  placeholder="Enter text to translate..."
                  value={sourceText}
                  onChange={(e) => setSourceText(e.target.value)}
                  className="min-h-[200px]"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Translation</label>
                <Textarea
                  placeholder="Translation will appear here..."
                  value={translatedText}
                  readOnly
                  className="min-h-[200px] bg-muted"
                />
              </div>
            </div>

            <Button 
              onClick={handleTranslate} 
              className="w-full"
              disabled={isTranslating}
            >
              {isTranslating ? "Translating... ⏳" : "Translate 🚀"}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UniversalTranslator;