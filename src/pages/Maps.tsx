import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Info } from "lucide-react";

interface TouristPlace {
  name: string;
  description: string;
  category: string;
}

interface CityData {
  name: string;
  state: string;
  description: string;
  places: TouristPlace[];
  mapUrl: string;
}

const Maps = () => {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  const cities: { [key: string]: CityData } = {
    delhi: {
      name: "Delhi",
      state: "National Capital Territory",
      description: "India's vibrant capital blending ancient heritage with modern development",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889754725782!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1234567890",
      places: [
        { name: "Red Fort", description: "Historic 17th-century Mughal fort and UNESCO World Heritage Site", category: "Historical" },
        { name: "India Gate", description: "War memorial and iconic landmark of Delhi", category: "Monument" },
        { name: "Qutub Minar", description: "73m tall minaret, UNESCO World Heritage Site", category: "Historical" },
        { name: "Lotus Temple", description: "Stunning Baháʼí House of Worship shaped like a lotus", category: "Religious" },
        { name: "Humayun's Tomb", description: "Beautiful Mughal architecture and UNESCO site", category: "Historical" },
        { name: "Akshardham Temple", description: "Modern architectural marvel with stunning exhibitions", category: "Religious" },
        { name: "Chandni Chowk", description: "Historic market known for street food and shopping", category: "Shopping" },
        { name: "Lodhi Garden", description: "Peaceful park with 15th-century monuments", category: "Nature" },
      ]
    },
    agra: {
      name: "Agra",
      state: "Uttar Pradesh",
      description: "Home to the iconic Taj Mahal and Mughal architectural wonders",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114315.21396693922!2d77.93744449726562!3d27.176670451076193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39740d857c2f41d9%3A0x784aef38a9523b42!2sAgra%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890",
      places: [
        { name: "Taj Mahal", description: "One of the Seven Wonders of the World, symbol of love", category: "Historical" },
        { name: "Agra Fort", description: "UNESCO World Heritage Site, massive red sandstone fort", category: "Historical" },
        { name: "Fatehpur Sikri", description: "Abandoned Mughal city, UNESCO World Heritage Site", category: "Historical" },
        { name: "Mehtab Bagh", description: "Garden complex offering stunning Taj Mahal views", category: "Nature" },
        { name: "Tomb of Itimad-ud-Daulah", description: "Often called 'Baby Taj', beautiful marble mausoleum", category: "Historical" },
        { name: "Jama Masjid", description: "One of the largest mosques in India", category: "Religious" },
      ]
    },
    jaipur: {
      name: "Jaipur",
      state: "Rajasthan",
      description: "The Pink City known for magnificent palaces and vibrant culture",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.99971531832!2d75.62574254726562!3d26.92207084913089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1234567890",
      places: [
        { name: "Hawa Mahal", description: "Iconic Palace of Winds with 953 windows", category: "Historical" },
        { name: "Amber Fort", description: "Majestic hilltop fort with stunning architecture", category: "Historical" },
        { name: "City Palace", description: "Royal residence with museums and courtyards", category: "Historical" },
        { name: "Jantar Mantar", description: "UNESCO World Heritage astronomical observatory", category: "Historical" },
        { name: "Nahargarh Fort", description: "Fort offering panoramic city views", category: "Historical" },
        { name: "Jal Mahal", description: "Beautiful water palace in Man Sagar Lake", category: "Historical" },
        { name: "Johari Bazaar", description: "Famous market for jewelry and textiles", category: "Shopping" },
        { name: "Albert Hall Museum", description: "Oldest museum in Rajasthan", category: "Museum" },
      ]
    },
    goa: {
      name: "Goa",
      state: "Goa",
      description: "Beach paradise with Portuguese heritage and vibrant nightlife",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d492512.3931734854!2d73.71929299726562!3d15.299326489130891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfba106336b741%3A0xeaf887ff62f34092!2sGoa!5e0!3m2!1sen!2sin!4v1234567890",
      places: [
        { name: "Baga Beach", description: "Popular beach with water sports and nightlife", category: "Beach" },
        { name: "Basilica of Bom Jesus", description: "UNESCO World Heritage church from 1605", category: "Religious" },
        { name: "Fort Aguada", description: "17th-century Portuguese fort overlooking the sea", category: "Historical" },
        { name: "Dudhsagar Falls", description: "Four-tiered waterfall among India's tallest", category: "Nature" },
        { name: "Anjuna Beach", description: "Known for flea markets and trance parties", category: "Beach" },
        { name: "Palolem Beach", description: "Crescent-shaped beach perfect for relaxation", category: "Beach" },
        { name: "Old Goa Churches", description: "Historic churches with Portuguese architecture", category: "Religious" },
        { name: "Spice Plantations", description: "Tour aromatic spice farms and taste local cuisine", category: "Nature" },
      ]
    },
    kerala: {
      name: "Kerala",
      state: "Kerala",
      description: "God's Own Country with serene backwaters and lush greenery",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2016488.828125!2d75.71929299726562!3d10.850516489130891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0812ffd49cf55b%3A0x64bd90fbed387c99!2sKerala!5e0!3m2!1sen!2sin!4v1234567890",
      places: [
        { name: "Alleppey Backwaters", description: "Network of canals perfect for houseboat cruises", category: "Nature" },
        { name: "Munnar", description: "Hill station with tea plantations and cool climate", category: "Nature" },
        { name: "Periyar Wildlife Sanctuary", description: "Tiger reserve with elephant rides", category: "Wildlife" },
        { name: "Kovalam Beach", description: "Crescent-shaped beaches with lighthouse", category: "Beach" },
        { name: "Athirapally Falls", description: "Kerala's largest waterfall, 'Niagara of India'", category: "Nature" },
        { name: "Fort Kochi", description: "Historic port town with colonial architecture", category: "Historical" },
        { name: "Varkala Beach", description: "Cliff-top beach with natural springs", category: "Beach" },
        { name: "Thekkady", description: "Spice plantations and wildlife sanctuary", category: "Nature" },
      ]
    },
    varanasi: {
      name: "Varanasi",
      state: "Uttar Pradesh",
      description: "One of the world's oldest cities and India's spiritual capital",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115316.37282619917!2d82.89479999726562!3d25.317645489130891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db76febcf4d%3A0x41f2dd87beb1c616!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890",
      places: [
        { name: "Dashashwamedh Ghat", description: "Main ghat for spectacular Ganga Aarti ceremony", category: "Religious" },
        { name: "Kashi Vishwanath Temple", description: "Most sacred Shiva temple in India", category: "Religious" },
        { name: "Assi Ghat", description: "Southern ghat popular with pilgrims and tourists", category: "Religious" },
        { name: "Sarnath", description: "Where Buddha gave his first sermon, Buddhist pilgrimage site", category: "Religious" },
        { name: "Manikarnika Ghat", description: "Ancient cremation ghat on the Ganges", category: "Religious" },
        { name: "Ramnagar Fort", description: "18th-century fort and museum", category: "Historical" },
        { name: "Banaras Hindu University", description: "Asia's largest residential university with beautiful campus", category: "Educational" },
      ]
    },
    mumbai: {
      name: "Mumbai",
      state: "Maharashtra",
      description: "India's financial capital and the city of dreams",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241316.9933346581!2d72.74109999726562!3d19.076090489130891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890",
      places: [
        { name: "Gateway of India", description: "Iconic arch monument overlooking Arabian Sea", category: "Monument" },
        { name: "Marine Drive", description: "Scenic promenade along the coast", category: "Nature" },
        { name: "Elephanta Caves", description: "UNESCO World Heritage rock-cut cave temples", category: "Historical" },
        { name: "Chhatrapati Shivaji Terminus", description: "UNESCO World Heritage Victorian Gothic railway station", category: "Historical" },
        { name: "Haji Ali Dargah", description: "Mosque on an islet in Arabian Sea", category: "Religious" },
        { name: "Siddhivinayak Temple", description: "Famous Ganesh temple", category: "Religious" },
        { name: "Juhu Beach", description: "Popular beach with street food stalls", category: "Beach" },
        { name: "Colaba Causeway", description: "Bustling market area for shopping", category: "Shopping" },
      ]
    },
    udaipur: {
      name: "Udaipur",
      state: "Rajasthan",
      description: "The City of Lakes with romantic palaces and stunning scenery",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115316.37282619917!2d73.68329999726562!3d24.585445489130891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e56e5e0dbf8d%3A0x76d3d7bd5e8d7d5d!2sUdaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1234567890",
      places: [
        { name: "City Palace", description: "Majestic palace complex overlooking Lake Pichola", category: "Historical" },
        { name: "Lake Pichola", description: "Artificial lake with palace islands", category: "Nature" },
        { name: "Jag Mandir", description: "Island palace in Lake Pichola", category: "Historical" },
        { name: "Saheliyon Ki Bari", description: "Garden of maidens with fountains and pools", category: "Nature" },
        { name: "Fateh Sagar Lake", description: "Beautiful artificial lake for boating", category: "Nature" },
        { name: "Monsoon Palace", description: "Hilltop palace offering sunset views", category: "Historical" },
        { name: "Jagdish Temple", description: "Large Hindu temple in Indo-Aryan style", category: "Religious" },
      ]
    }
  };

  const selectedCityData = selectedCity ? cities[selectedCity] : null;

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4">Interactive India Map</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore destinations across India - Click on any city to discover tourist places
          </p>
        </div>

        {/* City Selection Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {Object.entries(cities).map(([key, city]) => (
            <Button
              key={key}
              variant={selectedCity === key ? "default" : "outline"}
              className="h-auto py-4 flex flex-col gap-1"
              onClick={() => setSelectedCity(key)}
            >
              <MapPin className="h-5 w-5" />
              <span className="font-bold">{city.name}</span>
              <span className="text-xs opacity-80">{city.state}</span>
            </Button>
          ))}
        </div>

        {/* Selected City Details */}
        {selectedCityData ? (
          <div className="space-y-6">
            <Card className="shadow-lg-custom">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <div className="text-2xl text-gradient">{selectedCityData.name}</div>
                    <div className="text-sm text-muted-foreground font-normal mt-1">
                      {selectedCityData.description}
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg overflow-hidden border-2 border-border mb-6">
                  <iframe
                    src={selectedCityData.mapUrl}
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full"
                  ></iframe>
                </div>

                <h3 className="text-xl font-bold mb-4">Top Tourist Places in {selectedCityData.name}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedCityData.places.map((place, index) => (
                    <Card key={index} className="hover:shadow-card transition-smooth">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h4 className="font-bold text-primary">{place.name}</h4>
                          <Badge variant="secondary" className="text-xs">
                            {place.category}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{place.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <Card className="shadow-lg-custom">
            <CardContent className="p-12 text-center">
              <MapPin className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Select a City to Explore</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Click on any city above to view its location on the map and discover amazing tourist places
              </p>
            </CardContent>
          </Card>
        )}

        {/* Usage Info */}
        <Card className="mt-8">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg mb-2">How to Use This Map</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Click on any city button to view its location and tourist attractions</li>
                  <li>• Explore the interactive Google Map for each city</li>
                  <li>• View categorized tourist places with detailed descriptions</li>
                  <li>• Use the map controls to zoom in/out and switch to street view</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Maps;