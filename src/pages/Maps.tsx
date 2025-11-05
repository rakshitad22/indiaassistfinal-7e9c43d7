import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";

const Maps = () => {
  // Google Maps embed with multiple markers for Indian destinations
  const mapSrc = "https://www.google.com/maps/d/embed?mid=1_wSSKHzo_P3VnNRfQE7KXxUWHuQhKDE&ehbc=2E312F";

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4">Interactive India Map</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore destinations across India with our interactive map
          </p>
        </div>

        <Alert className="mb-6 max-w-4xl mx-auto">
          <Info className="h-4 w-4" />
          <AlertDescription>
            Click on markers to view destination information. Use the search box to find specific places across India.
          </AlertDescription>
        </Alert>

        <Card className="shadow-lg-custom">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="text-gradient">Discover India's Top Destinations</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg overflow-hidden border-2 border-border">
              <iframe
                src={mapSrc}
                width="100%"
                height="600"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>
            
            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary mb-1">📍</div>
                <div className="text-sm font-medium">Taj Mahal</div>
                <div className="text-xs text-muted-foreground">Agra</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-saffron mb-1">📍</div>
                <div className="text-sm font-medium">Jaipur</div>
                <div className="text-xs text-muted-foreground">Rajasthan</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary mb-1">📍</div>
                <div className="text-sm font-medium">Kerala</div>
                <div className="text-xs text-muted-foreground">Backwaters</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-saffron mb-1">📍</div>
                <div className="text-sm font-medium">Goa</div>
                <div className="text-xs text-muted-foreground">Beaches</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary mb-1">📍</div>
                <div className="text-sm font-medium">Delhi</div>
                <div className="text-xs text-muted-foreground">Capital</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-saffron mb-1">📍</div>
                <div className="text-sm font-medium">Varanasi</div>
                <div className="text-xs text-muted-foreground">Spiritual</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-3">How to Use the Map</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Click on any marker to see destination details</li>
                <li>• Use the search box to find specific locations</li>
                <li>• Zoom in/out to explore different regions of India</li>
                <li>• Switch between map and satellite view using the controls</li>
                <li>• Get directions to any destination from your current location</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Maps;
