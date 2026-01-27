import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MapPin, Utensils, Hotel, Clock, Info, Camera, Sun, Thermometer, DollarSign } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface Destination {
  name: string;
  location: string;
  description: string;
  image: string;
  attractions: string[];
  mapEmbed: string;
  nearby: string[];
  bestTime?: string;
  howToReach?: string;
  localCuisine?: string[];
  thingsToDo?: string[];
  estimatedBudget?: string;
  climate?: string;
  timezoneInfo?: string;
}

interface DestinationDetailsProps {
  destination: Destination | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const destinationDetails: Record<string, Partial<Destination>> = {
  "Mumbai": {
    bestTime: "October to February (Winter months with pleasant weather)",
    howToReach: "By Air: Chhatrapati Shivaji International Airport. By Train: Mumbai Central, CST. By Road: Well-connected via NH48, NH3",
    localCuisine: ["Vada Pav", "Pav Bhaji", "Bhel Puri", "Misal Pav", "Bombay Duck", "Keema Pav"],
    thingsToDo: ["Take a ferry to Elephanta Caves", "Watch sunset at Marine Drive", "Shop at Colaba Causeway", "Visit Dharavi for a slum tour", "Explore Chor Bazaar", "Watch a Bollywood movie at Maratha Mandir"],
    estimatedBudget: "₹3,000 - ₹8,000 per day",
    climate: "Tropical, humid summers (March-May), heavy monsoons (June-September)",
    timezoneInfo: "IST (UTC+5:30)"
  },
  "Delhi": {
    bestTime: "October to March (Cool, pleasant weather)",
    howToReach: "By Air: Indira Gandhi International Airport. By Train: New Delhi, Old Delhi Railway Stations. By Road: Connected via NH44, NH48",
    localCuisine: ["Chole Bhature", "Butter Chicken", "Parantha", "Chaat", "Kebabs", "Daulat Ki Chaat"],
    thingsToDo: ["Heritage walk in Old Delhi", "Light and Sound show at Red Fort", "Street food tour in Chandni Chowk", "Visit Akshardham Temple", "Shop at Dilli Haat", "Explore Hauz Khas Village"],
    estimatedBudget: "₹2,500 - ₹7,000 per day",
    climate: "Extreme summers (April-June), cold winters (December-February)",
    timezoneInfo: "IST (UTC+5:30)"
  },
  "Bangalore": {
    bestTime: "September to February (Pleasant weather year-round)",
    howToReach: "By Air: Kempegowda International Airport. By Train: Bangalore City, Yesvantpur. By Road: NH44, NH48",
    localCuisine: ["Masala Dosa", "Bisi Bele Bath", "Ragi Mudde", "Filter Coffee", "Mangalore Buns", "Kesari Bath"],
    thingsToDo: ["Visit ISKCON Temple", "Explore Cubbon Park", "Shop at Commercial Street", "Try microbreweries", "Visit Nandi Hills for sunrise", "Explore Bannerghatta National Park"],
    estimatedBudget: "₹2,000 - ₹6,000 per day",
    climate: "Moderate throughout the year, occasional rain",
    timezoneInfo: "IST (UTC+5:30)"
  },
  "Goa": {
    bestTime: "November to February (Peak beach season)",
    howToReach: "By Air: Dabolim International Airport. By Train: Madgaon, Thivim. By Road: NH66",
    localCuisine: ["Fish Curry Rice", "Bebinca", "Vindaloo", "Xacuti", "Feni", "Prawn Balchão"],
    thingsToDo: ["Beach hopping", "Water sports at Calangute", "Visit Old Goa churches", "Spice plantation tour", "Dudhsagar waterfall trek", "Night markets at Arpora"],
    estimatedBudget: "₹2,500 - ₹10,000 per day",
    climate: "Tropical, hot summers, heavy monsoons",
    timezoneInfo: "IST (UTC+5:30)"
  },
  "Jaipur": {
    bestTime: "October to March (Pleasant, ideal for sightseeing)",
    howToReach: "By Air: Jaipur International Airport. By Train: Jaipur Junction. By Road: NH48, NH52",
    localCuisine: ["Dal Baati Churma", "Ghewar", "Pyaaz Kachori", "Laal Maas", "Gatte Ki Sabzi", "Mawa Kachori"],
    thingsToDo: ["Hot air balloon ride", "Elephant ride at Amber Fort", "Light show at Amber Fort", "Shop for handicrafts at Johari Bazaar", "Traditional Rajasthani thali dinner", "Visit Jal Mahal at sunset"],
    estimatedBudget: "₹2,000 - ₹6,000 per day",
    climate: "Hot summers, mild winters, desert climate",
    timezoneInfo: "IST (UTC+5:30)"
  },
  "Agra": {
    bestTime: "October to March (Best to visit Taj Mahal)",
    howToReach: "By Air: Kheria Airport (limited flights). By Train: Agra Cantt, Agra Fort. By Road: Yamuna Expressway from Delhi",
    localCuisine: ["Petha", "Bedai", "Mughlai dishes", "Dalmoth", "Paratha", "Jalebi"],
    thingsToDo: ["Sunrise at Taj Mahal", "Visit Mehtab Bagh for sunset view", "Explore Agra Fort", "Day trip to Fatehpur Sikri", "Shop for marble inlay work", "Walking tour of heritage areas"],
    estimatedBudget: "₹2,000 - ₹5,000 per day",
    climate: "Hot summers, foggy winters",
    timezoneInfo: "IST (UTC+5:30)"
  },
  "Kerala Backwaters": {
    bestTime: "September to March (Post-monsoon, pleasant weather)",
    howToReach: "By Air: Cochin International Airport. By Train: Ernakulam, Alleppey. By Road: NH66",
    localCuisine: ["Appam with Stew", "Karimeen Pollichathu", "Puttu and Kadala", "Malabar Biryani", "Payasam", "Banana Chips"],
    thingsToDo: ["Houseboat stay", "Kayaking through canals", "Village walks", "Ayurvedic spa", "Kathakali performance", "Cooking class"],
    estimatedBudget: "₹3,000 - ₹12,000 per day",
    climate: "Tropical, moderate humidity, monsoons June-August",
    timezoneInfo: "IST (UTC+5:30)"
  },
  "Varanasi": {
    bestTime: "October to March (Pleasant for ghats visit)",
    howToReach: "By Air: Lal Bahadur Shastri Airport. By Train: Varanasi Junction. By Road: NH2",
    localCuisine: ["Banarasi Paan", "Kachori Sabzi", "Lassi", "Thandai", "Malaiyo", "Chaat"],
    thingsToDo: ["Morning boat ride on Ganges", "Evening Ganga Aarti", "Walk through narrow lanes", "Visit Sarnath", "Silk shopping", "Attend cremation ceremony (respectfully)"],
    estimatedBudget: "₹1,500 - ₹4,000 per day",
    climate: "Hot summers, cool winters",
    timezoneInfo: "IST (UTC+5:30)"
  },
  "Udaipur": {
    bestTime: "September to March (Cooler months)",
    howToReach: "By Air: Maharana Pratap Airport. By Train: Udaipur City. By Road: NH48",
    localCuisine: ["Dal Baati Churma", "Gatte ki Sabzi", "Ker Sangri", "Mawa Kachori", "Makhan Bada"],
    thingsToDo: ["Sunset boat ride on Lake Pichola", "City Palace tour", "Rooftop dinner with lake view", "Visit Monsoon Palace", "Shopping at Hathi Pol", "Puppet show"],
    estimatedBudget: "₹2,500 - ₹8,000 per day",
    climate: "Semi-arid, hot summers, mild winters",
    timezoneInfo: "IST (UTC+5:30)"
  },
  "Rishikesh": {
    bestTime: "September to November, February to May",
    howToReach: "By Air: Jolly Grant Airport (Dehradun). By Train: Haridwar Junction. By Road: NH58",
    localCuisine: ["Aloo Puri", "Chole Bhature", "Fresh Fruit Juices", "Health food cafes"],
    thingsToDo: ["White water rafting", "Bungee jumping", "Yoga and meditation", "Beatles Ashram visit", "Evening aarti at Triveni Ghat", "Camping by the Ganges"],
    estimatedBudget: "₹1,500 - ₹5,000 per day",
    climate: "Cool winters, warm summers, monsoons July-August",
    timezoneInfo: "IST (UTC+5:30)"
  },
  "Hampi": {
    bestTime: "October to February (Pleasant, ideal for exploration)",
    howToReach: "By Air: Hubli/Belgaum Airport. By Train: Hospet Junction. By Road: NH50",
    localCuisine: ["Local thalis", "Banana dishes", "Fresh coconut water"],
    thingsToDo: ["Sunrise at Matanga Hill", "Coracle ride on Tungabhadra", "Explore temple complexes", "Boulder climbing", "Bicycle tour of ruins", "Night camping"],
    estimatedBudget: "₹1,000 - ₹3,000 per day",
    climate: "Hot and dry, extremely hot summers",
    timezoneInfo: "IST (UTC+5:30)"
  },
  "Ladakh": {
    bestTime: "June to September (Roads open, pleasant weather)",
    howToReach: "By Air: Kushok Bakula Rimpochee Airport (Leh). By Road: Manali-Leh, Srinagar-Leh highways",
    localCuisine: ["Thukpa", "Momos", "Skyu", "Butter Tea", "Chhang"],
    thingsToDo: ["Pangong Lake camping", "Nubra Valley camel safari", "Khardung La pass", "Monastery hopping", "River rafting on Zanskar", "Stargazing"],
    estimatedBudget: "₹3,000 - ₹8,000 per day",
    climate: "High altitude desert, cold most of the year",
    timezoneInfo: "IST (UTC+5:30)"
  },
  "Amritsar": {
    bestTime: "October to March (Pleasant weather)",
    howToReach: "By Air: Sri Guru Ram Dass Jee International Airport. By Train: Amritsar Junction. By Road: NH1",
    localCuisine: ["Amritsari Kulcha", "Lassi", "Makki di Roti with Sarson da Saag", "Amritsari Fish", "Pinni"],
    thingsToDo: ["Golden Temple visit and langar", "Wagah Border ceremony", "Heritage walk", "Jallianwala Bagh", "Food tour", "Partition Museum"],
    estimatedBudget: "₹1,500 - ₹4,000 per day",
    climate: "Hot summers, cold winters",
    timezoneInfo: "IST (UTC+5:30)"
  },
  "Mysore": {
    bestTime: "October to February (Pleasant, Dussehra in October)",
    howToReach: "By Air: Mysore Airport. By Train: Mysore Junction. By Road: NH275 from Bangalore",
    localCuisine: ["Mysore Pak", "Mysore Masala Dosa", "Bisi Bele Bath", "Churumuri"],
    thingsToDo: ["Palace illumination on Sundays", "Chamundi Hills sunrise", "Brindavan Gardens musical fountain", "Silk saree shopping", "Yoga at Mysore Yoga", "St. Philomena's Church"],
    estimatedBudget: "₹1,500 - ₹4,000 per day",
    climate: "Pleasant year-round, moderate humidity",
    timezoneInfo: "IST (UTC+5:30)"
  },
  "Shimla": {
    bestTime: "March to June, September to December",
    howToReach: "By Air: Jubbarhatti Airport. By Train: Kalka-Shimla Toy Train. By Road: NH5",
    localCuisine: ["Madra", "Siddu", "Chana Madra", "Tudkiya Bhath"],
    thingsToDo: ["Walk on Mall Road", "Toy train ride", "Kufri adventures", "Jakhu Temple trek", "Ice skating (winter)", "Visit Christ Church"],
    estimatedBudget: "₹2,000 - ₹6,000 per day",
    climate: "Cool summers, snowy winters",
    timezoneInfo: "IST (UTC+5:30)"
  },
  "Darjeeling": {
    bestTime: "April to June, September to November",
    howToReach: "By Air: Bagdogra Airport. By Train: New Jalpaiguri. By Road: NH55",
    localCuisine: ["Momos", "Thukpa", "Darjeeling Tea", "Sel Roti", "Churpi"],
    thingsToDo: ["Sunrise at Tiger Hill", "Toy train ride", "Tea estate tour", "Peace Pagoda", "Rock Garden visit", "Trekking"],
    estimatedBudget: "₹1,500 - ₹5,000 per day",
    climate: "Cool and pleasant, foggy monsoons",
    timezoneInfo: "IST (UTC+5:30)"
  },
  "Khajuraho": {
    bestTime: "October to February (Pleasant weather)",
    howToReach: "By Air: Khajuraho Airport. By Train: Khajuraho Railway Station. By Road: State highways",
    localCuisine: ["Local thalis", "Bundelkhandi cuisine"],
    thingsToDo: ["Temple complex tour", "Light and sound show", "Cycling around temples", "Raneh Falls visit", "Panna National Park safari"],
    estimatedBudget: "₹1,500 - ₹3,500 per day",
    climate: "Hot summers, pleasant winters",
    timezoneInfo: "IST (UTC+5:30)"
  },
  "Ooty": {
    bestTime: "April to June, September to November",
    howToReach: "By Air: Coimbatore Airport. By Train: Nilgiri Mountain Railway. By Road: NH181",
    localCuisine: ["Varkey", "Chocolate", "Homemade Cheese", "Tea"],
    thingsToDo: ["Toy train ride", "Ooty Lake boating", "Botanical Gardens", "Doddabetta Peak", "Tea factory visit", "Rose Garden"],
    estimatedBudget: "₹2,000 - ₹5,000 per day",
    climate: "Cool throughout the year, monsoons June-August",
    timezoneInfo: "IST (UTC+5:30)"
  }
};

const DestinationDetails = ({ destination, open, onOpenChange }: DestinationDetailsProps) => {
  if (!destination) return null;

  const details = destinationDetails[destination.name] || {};

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-2">
            <MapPin className="h-6 w-6 text-primary" />
            {destination.name}, {destination.location}
          </DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="max-h-[70vh] pr-4">
          <div className="space-y-6">
            {/* Hero Image */}
            <div className="relative h-64 rounded-lg overflow-hidden">
              <img 
                src={destination.image} 
                alt={destination.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <Badge className="bg-primary mb-2">{destination.location}</Badge>
                <p className="text-lg font-medium">{destination.description}</p>
              </div>
            </div>

            {/* Quick Info Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-muted p-3 rounded-lg text-center">
                <Sun className="h-5 w-5 mx-auto mb-1 text-primary" />
                <p className="text-xs text-muted-foreground">Best Time</p>
                <p className="text-sm font-medium truncate">{details.bestTime?.split('(')[0] || 'Year-round'}</p>
              </div>
              <div className="bg-muted p-3 rounded-lg text-center">
                <Thermometer className="h-5 w-5 mx-auto mb-1 text-primary" />
                <p className="text-xs text-muted-foreground">Climate</p>
                <p className="text-sm font-medium truncate">{details.climate?.split(',')[0] || 'Varies'}</p>
              </div>
              <div className="bg-muted p-3 rounded-lg text-center">
                <DollarSign className="h-5 w-5 mx-auto mb-1 text-primary" />
                <p className="text-xs text-muted-foreground">Budget/Day</p>
                <p className="text-sm font-medium truncate">{details.estimatedBudget || '₹2,000+'}</p>
              </div>
              <div className="bg-muted p-3 rounded-lg text-center">
                <Clock className="h-5 w-5 mx-auto mb-1 text-primary" />
                <p className="text-xs text-muted-foreground">Timezone</p>
                <p className="text-sm font-medium">IST</p>
              </div>
            </div>

            <Separator />

            {/* How to Reach */}
            {details.howToReach && (
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Info className="h-4 w-4 text-primary" />
                  How to Reach
                </h3>
                <p className="text-sm text-muted-foreground">{details.howToReach}</p>
              </div>
            )}

            {/* Best Time to Visit */}
            {details.bestTime && (
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Sun className="h-4 w-4 text-primary" />
                  Best Time to Visit
                </h3>
                <p className="text-sm text-muted-foreground">{details.bestTime}</p>
              </div>
            )}

            {/* Top Attractions */}
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Camera className="h-4 w-4 text-primary" />
                Top Attractions
              </h3>
              <div className="flex flex-wrap gap-2">
                {destination.attractions.map((attraction, i) => (
                  <Badge key={i} variant="secondary">{attraction}</Badge>
                ))}
              </div>
            </div>

            {/* Things to Do */}
            {details.thingsToDo && (
              <div>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  Things to Do
                </h3>
                <ul className="grid md:grid-cols-2 gap-2">
                  {details.thingsToDo.map((activity, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary">•</span> {activity}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Local Cuisine */}
            {details.localCuisine && (
              <div>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Utensils className="h-4 w-4 text-primary" />
                  Must-Try Local Cuisine
                </h3>
                <div className="flex flex-wrap gap-2">
                  {details.localCuisine.map((dish, i) => (
                    <Badge key={i} variant="outline">{dish}</Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Nearby Places */}
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Hotel className="h-4 w-4 text-primary" />
                Recommended Hotels & Restaurants
              </h3>
              <ul className="space-y-1">
                {destination.nearby.map((place, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                    <Hotel className="h-3 w-3" /> {place}
                  </li>
                ))}
              </ul>
            </div>

            {/* Map */}
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                Location
              </h3>
              <div className="rounded-lg overflow-hidden border">
                <iframe
                  src={destination.mapEmbed}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default DestinationDetails;
