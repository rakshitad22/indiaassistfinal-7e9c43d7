import { useState, useEffect, createContext, useContext } from "react";
import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const languages = [
  { code: "en", name: "English", native: "English" },
  { code: "hi", name: "Hindi", native: "हिंदी" },
  { code: "bn", name: "Bengali", native: "বাংলা" },
  { code: "te", name: "Telugu", native: "తెలుగు" },
  { code: "mr", name: "Marathi", native: "मराठी" },
  { code: "ta", name: "Tamil", native: "தமிழ்" },
  { code: "gu", name: "Gujarati", native: "ગુજરાતી" },
  { code: "kn", name: "Kannada", native: "ಕನ್ನಡ" },
  { code: "ml", name: "Malayalam", native: "മലയാളം" },
  { code: "pa", name: "Punjabi", native: "ਪੰਜਾਬੀ" },
];

interface LanguageContextType {
  selectedLanguage: string;
  translate: (text: string) => Promise<string>;
}

const LanguageContext = createContext<LanguageContextType>({
  selectedLanguage: 'en',
  translate: async (text) => text,
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    return localStorage.getItem('selectedLanguage') || 'en';
  });
  const [translationCache, setTranslationCache] = useState<Record<string, string>>({});

  useEffect(() => {
    localStorage.setItem('selectedLanguage', selectedLanguage);
  }, [selectedLanguage]);

  const translate = async (text: string): Promise<string> => {
    if (selectedLanguage === 'en' || !text) return text;

    const cacheKey = `${selectedLanguage}:${text}`;
    if (translationCache[cacheKey]) {
      return translationCache[cacheKey];
    }

    try {
      const { data, error } = await supabase.functions.invoke('translate', {
        body: { text, targetLanguage: selectedLanguage }
      });

      if (error) throw error;

      const translation = data.translation || text;
      setTranslationCache(prev => ({ ...prev, [cacheKey]: translation }));
      return translation;
    } catch (error) {
      console.error('Translation error:', error);
      return text;
    }
  };

  return (
    <LanguageContext.Provider value={{ selectedLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

const LanguageTranslator = () => {
  const { selectedLanguage } = useLanguage();
  const [language, setLanguage] = useState(selectedLanguage);
  const { toast } = useToast();

  const handleLanguageChange = (newLang: string) => {
    setLanguage(newLang);
    localStorage.setItem('selectedLanguage', newLang);
    
    toast({
      title: "Language Changed",
      description: `Switched to ${languages.find(l => l.code === newLang)?.name}. Page will refresh to apply translations.`,
    });
    
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Languages className="h-4 w-4" />
          <span className="hidden sm:inline">
            {languages.find(l => l.code === language)?.native}
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <div className="space-y-4">
          <h4 className="font-semibold text-sm">Select Language</h4>
          <Select value={language} onValueChange={handleLanguageChange}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {languages.map((lang) => (
                <SelectItem key={lang.code} value={lang.code}>
                  <div className="flex items-center gap-2">
                    <span>{lang.native}</span>
                    <span className="text-xs text-muted-foreground">
                      ({lang.name})
                    </span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className="text-xs text-muted-foreground">
            AI-powered translation for all Indian languages
          </p>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default LanguageTranslator;
