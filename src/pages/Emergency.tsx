import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Copy, Mail, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Emergency = () => {
  const { toast } = useToast();

  const emergencyNumbers = [
    { service: "Police", number: "100", icon: "🚨" },
    { service: "Ambulance", number: "102", icon: "🚑" },
    { service: "Fire", number: "101", icon: "🚒" },
    { service: "Women's Helpline", number: "1091", icon: "👮‍♀️" },
    { service: "National Emergency", number: "112", icon: "🆘" },
    { service: "Tourist Helpline", number: "1363", icon: "ℹ️" },
  ];

  const embassies = [
    {
      country: "United States",
      flag: "🇺🇸",
      phone: "+91-11-2419-8000",
      email: "acsnd@state.gov",
      address: "Shantipath, Chanakyapuri, New Delhi",
    },
    {
      country: "United Kingdom",
      flag: "🇬🇧",
      phone: "+91-11-2419-2100",
      email: "ukinhighcom@fco.gov.uk",
      address: "Shantipath, Chanakyapuri, New Delhi",
    },
    {
      country: "Japan",
      flag: "🇯🇵",
      phone: "+91-11-2687-6564",
      email: "consular@nd.mofa.go.jp",
      address: "50-G, Shantipath, Chanakyapuri, New Delhi",
    },
    {
      country: "Australia",
      flag: "🇦🇺",
      phone: "+91-11-4139-9900",
      email: "ahc.newdelhi@dfat.gov.au",
      address: "1/50G, Shantipath, Chanakyapuri, New Delhi",
    },
    {
      country: "Canada",
      flag: "🇨🇦",
      phone: "+91-11-4178-2000",
      email: "delhi@international.gc.ca",
      address: "7/8, Shantipath, Chanakyapuri, New Delhi",
    },
  ];

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard`,
    });
  };

  const callNumber = (number: string) => {
    window.location.href = `tel:${number}`;
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <AlertTriangle className="h-12 w-12 text-destructive" />
            <h1 className="text-5xl font-bold">Emergency Contacts</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Quick access to emergency services and embassy information
          </p>
        </div>

        {/* Emergency Numbers */}
        <Card className="mb-8 shadow-lg-custom">
          <CardHeader>
            <CardTitle className="text-2xl">Emergency Hotlines</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {emergencyNumbers.map((item, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-smooth">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{item.icon}</span>
                        <span className="font-semibold">{item.service}</span>
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-primary mb-3">{item.number}</div>
                    <div className="flex gap-2">
                      <Button
                        onClick={() => callNumber(item.number)}
                        className="flex-1 gap-2"
                        variant="default"
                      >
                        <Phone className="h-4 w-4" />
                        Call
                      </Button>
                      <Button
                        onClick={() => copyToClipboard(item.number, item.service)}
                        variant="outline"
                        size="icon"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Embassy Contacts */}
        <Card className="shadow-lg-custom">
          <CardHeader>
            <CardTitle className="text-2xl">Embassy & Consulate Contacts</CardTitle>
            <p className="text-muted-foreground">
              Contact your country's embassy in case of emergencies like lost passport or legal issues
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {embassies.map((embassy, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-4xl">{embassy.flag}</span>
                        <div>
                          <h3 className="text-xl font-bold">{embassy.country}</h3>
                          <p className="text-sm text-muted-foreground">{embassy.address}</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Phone className="h-4 w-4 text-primary" />
                          <span className="font-medium">Phone:</span>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            onClick={() => callNumber(embassy.phone)}
                            variant="outline"
                            className="flex-1 justify-start"
                          >
                            {embassy.phone}
                          </Button>
                          <Button
                            onClick={() => copyToClipboard(embassy.phone, "Phone number")}
                            variant="outline"
                            size="icon"
                          >
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Mail className="h-4 w-4 text-primary" />
                          <span className="font-medium">Email:</span>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            onClick={() => copyToClipboard(embassy.email, "Email")}
                            variant="outline"
                            className="flex-1 justify-start"
                          >
                            {embassy.email}
                          </Button>
                          <Button
                            onClick={() => copyToClipboard(embassy.email, "Email")}
                            variant="outline"
                            size="icon"
                          >
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Safety Tips */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Important Safety Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Save these emergency numbers in your phone before traveling</li>
              <li>• Keep your embassy's contact information readily accessible</li>
              <li>• Always carry a copy of your passport and visa</li>
              <li>• Share your travel itinerary with family or friends</li>
              <li>• Register with your embassy upon arrival in India</li>
              <li>• Keep your hotel address written in local language</li>
              <li>• Know the nearest police station and hospital to your accommodation</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Emergency;
