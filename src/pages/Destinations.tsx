import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Utensils, Hotel } from "lucide-react";

const Destinations = () => {
  const destinations = [
    {
      name: "Taj Mahal",
      location: "Agra, Uttar Pradesh",
      description: "One of the Seven Wonders of the World, this ivory-white marble mausoleum is a symbol of eternal love and architectural brilliance.",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800",
      attractions: ["Taj Mahal Complex", "Agra Fort", "Mehtab Bagh", "Tomb of Itimad-ud-Daulah"],
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.4830611394967!2d78.03980731504216!3d27.175014982874694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39747121d702ff6d%3A0xdd2ae4803f767dde!2sTaj%20Mahal!5e0!3m2!1sen!2sin!4v1234567890",
      nearby: ["The Oberoi Amarvilas", "Pinch of Spice Restaurant", "Dasaprakash Restaurant"],
    },
    {
      name: "Jaipur",
      location: "Rajasthan",
      description: "The Pink City is famous for its stunning palaces, vibrant bazaars, and rich Rajasthani culture and heritage.",
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800",
      attractions: ["Hawa Mahal", "Amber Fort", "City Palace", "Jantar Mantar"],
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.99973182375!2d75.65046970298878!3d26.88512409857505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1234567890",
      nearby: ["Rambagh Palace", "LMB Restaurant", "Rawat Mishthan Bhandar"],
    },
    {
      name: "Kerala Backwaters",
      location: "Kerala",
      description: "Experience the serene beauty of palm-fringed waterways, traditional houseboats, and lush green landscapes in God's Own Country.",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800",
      attractions: ["Alleppey Backwaters", "Kumarakom Bird Sanctuary", "Vembanad Lake", "Traditional Houseboats"],
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251507.36589474813!2d76.22897494033142!3d9.498066532991733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6bf%3A0xbd582caa5844192!2sKerala!5e0!3m2!1sen!2sin!4v1234567890",
      nearby: ["Vivanta by Taj", "Kerala Cafe", "Thaff Restaurant"],
    },
    {
      name: "Goa",
      location: "Goa",
      description: "India's beach paradise offers pristine beaches, Portuguese architecture, vibrant nightlife, and delicious seafood.",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800",
      attractions: ["Baga Beach", "Fort Aguada", "Basilica of Bom Jesus", "Dudhsagar Falls"],
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d492531.64406990346!2d73.6965363!3d15.3004543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfba106336b741%3A0xeaf887ff62f34092!2sGoa!5e0!3m2!1sen!2sin!4v1234567890",
      nearby: ["Taj Exotica", "Fisherman's Wharf", "Britto's"],
    },
    {
      name: "Delhi",
      location: "National Capital Territory",
      description: "India's capital is a perfect blend of ancient history and modern urban life, with magnificent monuments and bustling markets.",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800",
      attractions: ["Red Fort", "India Gate", "Qutub Minar", "Humayun's Tomb", "Lotus Temple"],
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.95089227824!2d76.82493254633897!3d28.643917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1234567890",
      nearby: ["The Imperial", "Karim's Restaurant", "Indian Accent"],
    },
    {
      name: "Varanasi",
      location: "Uttar Pradesh",
      description: "The spiritual heart of India, Varanasi offers ancient temples, mesmerizing Ganga Aarti ceremonies, and profound cultural experiences.",
      image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800",
      attractions: ["Kashi Vishwanath Temple", "Dashashwamedh Ghat", "Sarnath", "Assi Ghat"],
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57667.95579732916!2d82.9550395!3d25.3356491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db76febcf4d%3A0x68131710853ff0b5!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890",
      nearby: ["Taj Ganges", "Keshari Ruchikar Bhojnalaya", "Brown Bread Bakery"],
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Explore India's Top Destinations</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the most iconic and breathtaking places across Incredible India
          </p>
        </div>

        <div className="space-y-12">
          {destinations.map((destination, index) => (
            <Card key={index} className="overflow-hidden shadow-card hover:shadow-lg-custom transition-smooth">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Image */}
                <div className="h-64 md:h-auto relative overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover hover:scale-105 transition-smooth"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-saffron text-white">
                      <MapPin className="h-3 w-3 mr-1" />
                      {destination.location}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <CardContent className="p-6">
                  <h2 className="text-3xl font-bold mb-3">{destination.name}</h2>
                  <p className="text-muted-foreground mb-6">{destination.description}</p>

                  {/* Attractions */}
                  <div className="mb-6">
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      Top Attractions
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {destination.attractions.map((attraction, i) => (
                        <Badge key={i} variant="secondary">
                          {attraction}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Nearby */}
                  <div className="mb-6">
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <Utensils className="h-4 w-4 text-primary" />
                      Nearby Restaurants & Hotels
                    </h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {destination.nearby.map((place, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Hotel className="h-3 w-3" />
                          {place}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Map */}
                  <div className="rounded-lg overflow-hidden border">
                    <iframe
                      src={destination.mapEmbed}
                      width="100%"
                      height="250"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
