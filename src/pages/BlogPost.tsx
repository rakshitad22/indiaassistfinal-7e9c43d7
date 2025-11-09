import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Clock, ArrowLeft } from "lucide-react";

const blogPostsData = [
  {
    id: 1,
    title: "10 Must-Visit Hidden Gems in Rajasthan",
    excerpt: "Discover the lesser-known palaces, forts, and villages that make Rajasthan truly magical beyond the usual tourist spots.",
    content: `
      <h2>Introduction</h2>
      <p>While Rajasthan's popular destinations like Jaipur, Udaipur, and Jodhpur attract millions of tourists, the state hides numerous lesser-known treasures waiting to be discovered. These hidden gems offer authentic experiences away from the tourist crowds.</p>
      
      <h2>1. Bundi - The Blue City's Quiet Cousin</h2>
      <p>Often overshadowed by Jodhpur, Bundi is a charming town with stunning step wells, the magnificent Taragarh Fort, and beautiful blue-painted houses. The town's laid-back atmosphere makes it perfect for travelers seeking authentic Rajasthani culture.</p>
      
      <h2>2. Kumbhalgarh Fort</h2>
      <p>This UNESCO World Heritage Site boasts the second-longest continuous wall in the world after the Great Wall of China. The fort offers breathtaking views and fascinating history dating back to the 15th century.</p>
      
      <h2>3. Shekhawati Region</h2>
      <p>Known as Rajasthan's open-air art gallery, Shekhawati features elaborately painted havelis with stunning frescoes. Towns like Mandawa and Nawalgarh are treasure troves of architectural beauty.</p>
      
      <h2>4. Osian</h2>
      <p>This ancient desert town houses beautifully preserved Jain and Hindu temples from the 8th-12th centuries. It's also the gateway to experiencing authentic camel safaris in the Thar Desert.</p>
      
      <h2>5. Ranakpur Jain Temple</h2>
      <p>Nestled in a valley between the Aravalli hills, this stunning marble temple complex features 1,444 uniquely carved pillars. The intricate craftsmanship is simply breathtaking.</p>
      
      <h2>Conclusion</h2>
      <p>Rajasthan's hidden gems offer unforgettable experiences for those willing to venture off the beaten path. Each destination provides unique insights into the region's rich history, culture, and architectural brilliance.</p>
    `,
    author: "Sarah Johnson",
    date: "March 15, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
    category: "Destinations",
  },
  {
    id: 2,
    title: "A Food Lover's Guide to Mumbai Street Food",
    excerpt: "From vada pav to pav bhaji, explore the incredible street food culture of Mumbai with our comprehensive guide.",
    content: `
      <h2>Welcome to Mumbai's Street Food Paradise</h2>
      <p>Mumbai's street food scene is legendary, offering an incredible variety of flavors, textures, and culinary experiences. From early morning chai to late-night kebabs, the city never sleeps when it comes to food.</p>
      
      <h2>Vada Pav - Mumbai's Burger</h2>
      <p>The iconic vada pav is Mumbai's answer to fast food. A spiced potato fritter sandwiched in a soft bun with chutneys, this humble snack has become a cultural icon. Best spots: Ashok Vada Pav near Kirti College and Aaram Vada Pav in Bandra.</p>
      
      <h2>Pav Bhaji - Comfort in a Bowl</h2>
      <p>This buttery, spicy vegetable curry served with soft bread rolls is the ultimate comfort food. Visit Sardar Pav Bhaji in Tardeo for an authentic experience.</p>
      
      <h2>Bhel Puri and Chaat</h2>
      <p>The tangy, crunchy bhel puri is a Mumbai staple. Head to Chowpatty Beach for the classic beachside bhel puri experience, or try Elco Market in Bandra for variety.</p>
      
      <h2>Kebabs and Rolls</h2>
      <p>Mumbai's Muslim quarters offer incredible kebabs and rolls. Bademiya near Colaba Causeway has been serving delicious seekh kebabs since 1946.</p>
      
      <h2>Safety Tips</h2>
      <p>Choose busy stalls with high turnover, drink bottled water, and start with small portions if you have a sensitive stomach. Most importantly, follow the locals - they know the best spots!</p>
    `,
    author: "Raj Patel",
    date: "March 12, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24",
    category: "Food",
  },
  {
    id: 3,
    title: "Backpacking Through Kerala: A 14-Day Itinerary",
    excerpt: "Experience the lush green landscapes, serene backwaters, and vibrant culture of God's Own Country with this detailed itinerary.",
    content: `
      <h2>Your Complete Kerala Adventure</h2>
      <p>Kerala offers diverse experiences from pristine beaches to misty mountains, ancient temples to modern cities. This 14-day itinerary covers the best of God's Own Country.</p>
      
      <h2>Days 1-3: Kochi - Gateway to Kerala</h2>
      <p>Start in historic Fort Kochi, exploring Chinese fishing nets, colonial architecture, and the vibrant spice markets. Don't miss a Kathakali performance and sunset at Fort Kochi beach.</p>
      
      <h2>Days 4-6: Munnar - Hill Station Paradise</h2>
      <p>Journey to the tea plantations of Munnar. Visit tea estates, trek to Echo Point, and spot wildlife at Eravikulam National Park. The cool climate is perfect for relaxation.</p>
      
      <h2>Days 7-9: Thekkady - Wildlife Encounters</h2>
      <p>Explore Periyar Wildlife Sanctuary for elephant sightings, take a spice plantation tour, and enjoy a bamboo rafting adventure on Periyar Lake.</p>
      
      <h2>Days 10-12: Alleppey - Backwater Bliss</h2>
      <p>Experience a traditional houseboat stay through the famous Kerala backwaters. Cruise through palm-lined canals, visit local villages, and enjoy authentic Kerala cuisine.</p>
      
      <h2>Days 13-14: Kovalam - Beach Relaxation</h2>
      <p>End your journey at Kovalam's beautiful beaches. Enjoy Ayurvedic massages, fresh seafood, and stunning sunsets at Lighthouse Beach.</p>
      
      <h2>Budget Tips</h2>
      <p>Travel by local buses and trains, eat at local restaurants, and book homestays for authentic experiences at reasonable prices.</p>
    `,
    author: "Emma Wilson",
    date: "March 10, 2024",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96",
    category: "Travel Tips",
  },
  {
    id: 4,
    title: "Understanding Indian Festivals: Diwali, Holi, and More",
    excerpt: "Learn about India's colorful festivals, their significance, and how tourists can respectfully participate in these celebrations.",
    content: `
      <h2>A Journey Through India's Festive Calendar</h2>
      <p>India's festivals are vibrant celebrations of culture, religion, and community. Understanding their significance enhances your travel experience and shows respect for local traditions.</p>
      
      <h2>Diwali - Festival of Lights</h2>
      <p>Celebrated in October/November, Diwali marks the victory of light over darkness. Cities illuminate with oil lamps, fireworks light up the sky, and families exchange sweets. Best experienced in: Jaipur, Varanasi, or Amritsar.</p>
      
      <h2>Holi - Festival of Colors</h2>
      <p>This March celebration welcomes spring with colored powders and water. Join the revelry in Mathura-Vrindavan for the most authentic experience, or Jaipur for organized tourist-friendly events.</p>
      
      <h2>Navratri and Durga Puja</h2>
      <p>Nine nights of dance, music, and devotion in September/October. Witness spectacular Garba dances in Gujarat or elaborate Durga Puja pandals in Kolkata.</p>
      
      <h2>Eid ul-Fitr</h2>
      <p>Marking the end of Ramadan, this Islamic festival features special prayers, feasts, and charity. Experience the celebrations in Old Delhi or Hyderabad for incredible food and atmosphere.</p>
      
      <h2>Respectful Participation</h2>
      <p>Dress modestly, ask permission before taking photos, accept food offerings graciously, and learn basic greetings. Your respectful interest will be warmly welcomed.</p>
      
      <h2>Planning Your Visit</h2>
      <p>Book accommodations well in advance during festival seasons, expect crowds, and embrace the chaos - it's all part of the incredible experience!</p>
    `,
    author: "Priya Sharma",
    date: "March 8, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1604608167384-1f1cebe47a0e",
    category: "Culture",
  },
  {
    id: 5,
    title: "Yoga and Meditation Retreats in Rishikesh",
    excerpt: "Find your inner peace in the Yoga Capital of the World with our guide to the best retreats and ashrams in Rishikesh.",
    content: `
      <h2>Discovering Spiritual Wellness in Rishikesh</h2>
      <p>Nestled in the Himalayan foothills along the sacred Ganges, Rishikesh has been a spiritual center for centuries. Today, it attracts seekers from around the world looking for authentic yoga and meditation experiences.</p>
      
      <h2>Top Yoga Ashrams</h2>
      <p>Parmarth Niketan offers traditional ashram living with daily yoga classes, Ganga Aarti ceremonies, and beautiful riverside meditation spaces. The Beatles Ashram provides a unique blend of history and spirituality.</p>
      
      <h2>Yoga Schools and Courses</h2>
      <p>Many schools offer certified courses from beginner to teacher training levels. Popular options include Sivananda Ashram for traditional practices and Rishikesh Yog Peeth for comprehensive teacher training.</p>
      
      <h2>Meditation and Spirituality</h2>
      <p>Join morning meditation sessions by the Ganges, attend evening Aarti ceremonies, and explore numerous temples and sacred sites throughout the town.</p>
      
      <h2>Adventure Activities</h2>
      <p>Balance your spiritual practice with river rafting, trekking, and cliff jumping. Rishikesh offers the perfect combination of adventure and tranquility.</p>
      
      <h2>Practical Information</h2>
      <p>Most ashrams are alcohol and meat-free. Bring modest clothing, comfortable yoga wear, and an open mind. Best time to visit: September to November and February to April.</p>
    `,
    author: "Michael Chen",
    date: "March 5, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1588286840104-8957b019727f",
    category: "Wellness",
  },
  {
    id: 6,
    title: "Train Travel in India: The Complete Guide",
    excerpt: "Master the Indian railway system with our comprehensive guide covering everything from booking tickets to choosing the right class.",
    content: `
      <h2>Navigating India's Incredible Railway Network</h2>
      <p>India's railway system is one of the world's largest, carrying millions of passengers daily. Train travel offers an authentic way to see the country and connect with locals.</p>
      
      <h2>Understanding Train Classes</h2>
      <p>AC First Class offers private cabins with bedding. AC 2-Tier and 3-Tier provide comfortable sleeper berths. Sleeper Class is budget-friendly but basic. Choose based on journey length and comfort needs.</p>
      
      <h2>Booking Tickets</h2>
      <p>Use the IRCTC website or app for official bookings. Book well in advance for popular routes (30-120 days ahead). Consider Tatkal tickets for last-minute travel, available 24 hours before departure.</p>
      
      <h2>Famous Train Journeys</h2>
      <p>The Palace on Wheels offers luxury Rajasthan tours. Darjeeling Himalayan Railway provides stunning mountain views. Konkan Railway runs along the beautiful west coast.</p>
      
      <h2>Food and Facilities</h2>
      <p>Pantry cars serve meals, or vendors board at stations selling chai, snacks, and regional specialties. Bring your own food for dietary restrictions. Toilets are available in all classes.</p>
      
      <h2>Safety Tips</h2>
      <p>Keep valuables secure, lock your luggage to berth chains, travel light, and stay aware of your surroundings. Solo travelers should book lower berths for easier access.</p>
      
      <h2>Cultural Etiquette</h2>
      <p>Share food with fellow passengers, respect prayer times and sleeping hours, and embrace the social aspect - train journeys often lead to lasting friendships!</p>
    `,
    author: "David Kumar",
    date: "March 1, 2024",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1562503542-2a1e6f03b16b",
    category: "Travel Tips",
  },
];

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const post = blogPostsData.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Post not found</h2>
          <Button onClick={() => navigate("/blog")}>Back to Blog</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <Button 
          variant="ghost" 
          className="mb-6"
          onClick={() => navigate("/blog")}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Button>

        <article>
          <div className="mb-6">
            <Badge className="mb-4 bg-saffron text-white">{post.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
            
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          <img
            src={post.image}
            alt={post.title}
            className="w-full h-96 object-cover rounded-lg mb-8"
          />

          <div 
            className="prose prose-lg max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </div>
  );
};

export default BlogPost;