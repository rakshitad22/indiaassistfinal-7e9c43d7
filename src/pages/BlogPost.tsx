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
  {
    id: 7,
    title: "Exploring the Temples of South India",
    excerpt: "Journey through the magnificent Dravidian temples of Tamil Nadu, Karnataka, and Kerala - architectural marvels that have stood for centuries.",
    content: `
      <h2>The Sacred Architecture of South India</h2>
      <p>South India is home to some of the world's most magnificent temple complexes, showcasing the pinnacle of Dravidian architecture. These living temples continue to be centers of worship and cultural heritage.</p>
      
      <h2>Meenakshi Amman Temple, Madurai</h2>
      <p>This stunning temple complex dedicated to Goddess Meenakshi features 14 gateway towers (gopurams) covered with thousands of colorful sculptures. The evening ceremony is a must-see spiritual experience.</p>
      
      <h2>Brihadeeswarar Temple, Thanjavur</h2>
      <p>A UNESCO World Heritage Site, this 1000-year-old temple showcases the architectural genius of the Chola dynasty. The massive granite dome is an engineering marvel of ancient India.</p>
      
      <h2>Hampi Temple Complex, Karnataka</h2>
      <p>The ruins of Vijayanagara Empire include the famous Vittala Temple with its stone chariot and musical pillars. Each pillar produces a different musical note when struck.</p>
      
      <h2>Padmanabhaswamy Temple, Thiruvananthapuram</h2>
      <p>One of the wealthiest temples in the world, featuring exquisite Kerala architecture. The reclining Vishnu idol is a masterpiece of ancient craftsmanship.</p>
      
      <h2>Temple Etiquette</h2>
      <p>Remove footwear before entering, dress modestly covering shoulders and knees, maintain silence in sanctum areas, and respect photography restrictions. Many temples require men to be shirtless.</p>
      
      <h2>Best Time to Visit</h2>
      <p>October to March offers pleasant weather. Visit during major festivals like Pongal or temple-specific celebrations for the most vibrant experience.</p>
    `,
    author: "Ananya Krishnan",
    date: "February 28, 2024",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220",
    category: "Culture",
  },
  {
    id: 8,
    title: "Wildlife Safari Guide: Best National Parks in India",
    excerpt: "From tigers in Ranthambore to elephants in Kaziranga, discover India's incredible wildlife in its most pristine habitats.",
    content: `
      <h2>India's Wildlife Heritage</h2>
      <p>India is one of the world's most biodiverse countries, home to iconic species like the Bengal tiger, Asian elephant, and Indian rhinoceros. National parks offer incredible opportunities to witness these magnificent creatures.</p>
      
      <h2>Ranthambore National Park, Rajasthan</h2>
      <p>Famous for its tiger population and the stunning backdrop of ancient ruins. The best time to visit is October to June, with summer months offering the highest tiger sighting probability.</p>
      
      <h2>Kaziranga National Park, Assam</h2>
      <p>Home to two-thirds of the world's one-horned rhinoceros population. The park also hosts tigers, elephants, and wild water buffalo. Elephant safaris here are a unique experience.</p>
      
      <h2>Jim Corbett National Park, Uttarakhand</h2>
      <p>India's oldest national park, named after the legendary hunter-turned-conservationist. Excellent for tiger sightings and bird watching in a beautiful Himalayan setting.</p>
      
      <h2>Periyar Wildlife Sanctuary, Kerala</h2>
      <p>Known for its elephant herds and beautiful lake setting. Boat safaris offer a unique perspective for wildlife viewing. Also home to tigers, though sightings are rare.</p>
      
      <h2>Safari Tips</h2>
      <p>Book safaris well in advance, especially during peak season. Early morning and late afternoon safaris offer the best wildlife activity. Wear neutral colors, maintain silence, and follow guide instructions.</p>
      
      <h2>Conservation Efforts</h2>
      <p>India's Project Tiger has successfully increased tiger populations. Your safari fees contribute to conservation. Choose responsible operators who prioritize animal welfare.</p>
    `,
    author: "Vikram Singh",
    date: "February 25, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1456926631375-92c8ce872def",
    category: "Adventure",
  },
  {
    id: 9,
    title: "Budget Travel in India: Spending Under ₹2000 Per Day",
    excerpt: "Travel smart and experience India without breaking the bank. Tips, tricks, and hacks for budget-conscious travelers.",
    content: `
      <h2>Traveling India on a Budget</h2>
      <p>India remains one of the world's most budget-friendly destinations. With smart planning, you can experience incredible sights, delicious food, and unique culture without overspending.</p>
      
      <h2>Accommodation Options</h2>
      <p>Hostels offer beds from ₹300-500 per night. Guesthouses and budget hotels range from ₹500-1000. Consider homestays through platforms like Airbnb for authentic local experiences at reasonable prices.</p>
      
      <h2>Transportation Savings</h2>
      <p>Sleeper class trains cost a fraction of flights. Use local buses for short distances. Shared auto-rickshaws and metros in cities are incredibly cheap. Book trains in advance for the best rates.</p>
      
      <h2>Eating Affordably</h2>
      <p>Street food costs ₹30-100 per meal. Local thali restaurants offer unlimited food for ₹100-150. Skip tourist restaurants and eat where locals eat for the best value and authentic flavors.</p>
      
      <h2>Free and Cheap Activities</h2>
      <p>Many temples and religious sites are free. Government museums have minimal entry fees. Walking tours, markets, and people-watching cost nothing but offer rich experiences.</p>
      
      <h2>Sample Daily Budget</h2>
      <p>Accommodation: ₹500, Food: ₹400 (3 meals), Transport: ₹300, Activities: ₹300, Miscellaneous: ₹200. Total: ₹1700 with room to spare.</p>
      
      <h2>Money-Saving Tips</h2>
      <p>Bargain at markets (start at 50% of asking price), carry a water bottle with purifier, travel during off-season for cheaper rates, and use prepaid SIM for affordable data.</p>
    `,
    author: "Rachel Adams",
    date: "February 22, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    category: "Budget",
  },
  {
    id: 10,
    title: "The Golden Triangle: Delhi, Agra, and Jaipur",
    excerpt: "Plan the perfect week exploring India's most iconic tourist circuit - from the Taj Mahal to the Pink City's palaces.",
    content: `
      <h2>India's Most Popular Tourist Circuit</h2>
      <p>The Golden Triangle connects India's three most iconic destinations, offering a perfect introduction to the country's history, culture, and architecture. This classic route can be covered in 5-7 days.</p>
      
      <h2>Days 1-2: Delhi - The Capital City</h2>
      <p>Explore Old Delhi's Chandni Chowk, Red Fort, and Jama Masjid. Visit New Delhi's India Gate, Humayun's Tomb, and Qutub Minar. Don't miss the street food and the chaos of India's capital.</p>
      
      <h2>Day 3: Delhi to Agra</h2>
      <p>Take an early morning train (Gatimaan Express takes 100 minutes). Visit the Taj Mahal at sunrise for fewer crowds and magical light. Spend the afternoon exploring Agra Fort and Mehtab Bagh.</p>
      
      <h2>Days 4-5: Agra to Jaipur via Fatehpur Sikri</h2>
      <p>Stop at the abandoned Mughal city of Fatehpur Sikri. Continue to Jaipur, the Pink City. Explore Hawa Mahal, City Palace, and the astronomical marvels of Jantar Mantar.</p>
      
      <h2>Day 6: Amber Fort and Shopping</h2>
      <p>Visit magnificent Amber Fort (elephant rides available). Spend the afternoon shopping for textiles, jewelry, and handicrafts in Jaipur's vibrant markets.</p>
      
      <h2>Day 7: Return to Delhi</h2>
      <p>Take a morning train back to Delhi for departure or continue your India adventure.</p>
      
      <h2>Practical Tips</h2>
      <p>Book monuments tickets online to skip queues. Hire guides for historical context. Best time: October to March. Budget 2-3 hours for each major monument.</p>
    `,
    author: "James Miller",
    date: "February 20, 2024",
    readTime: "13 min read",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523",
    category: "Destinations",
  },
  {
    id: 11,
    title: "Monsoon Magic: Best Places to Visit During Rains",
    excerpt: "While most tourists avoid the monsoons, discover why this season offers unique experiences across India's landscapes.",
    content: `
      <h2>Embracing India's Monsoon Season</h2>
      <p>The monsoon (June-September) transforms India into a lush green paradise. While heavy rains can disrupt travel, the season offers unique experiences, fewer tourists, and lower prices.</p>
      
      <h2>Kerala's Ayurvedic Retreats</h2>
      <p>Monsoon is considered the ideal time for Ayurvedic treatments. The cool, moist climate opens body pores, enhancing the effectiveness of traditional therapies. Wellness resorts offer special monsoon packages.</p>
      
      <h2>Valley of Flowers, Uttarakhand</h2>
      <p>This UNESCO World Heritage Site blooms exclusively during monsoons with hundreds of alpine flower species. The valley is accessible only from July to September.</p>
      
      <h2>Coorg, Karnataka</h2>
      <p>The coffee country becomes incredibly beautiful during rains. Misty mountains, cascading waterfalls, and verdant plantations create a magical atmosphere. Perfect for nature lovers.</p>
      
      <h2>Meghalaya's Living Root Bridges</h2>
      <p>The world's wettest place is actually best visited during monsoons when waterfalls are at full glory and the living root bridges are most photogenic.</p>
      
      <h2>Practical Considerations</h2>
      <p>Pack waterproof bags and quick-dry clothing. Leeches are common in forests - carry salt. Some mountain roads may be blocked. Flash floods can occur - stay updated on weather.</p>
      
      <h2>Photography Tips</h2>
      <p>Overcast skies provide soft, even lighting. Capture reflections in puddles. Protect your camera with rain covers. The post-rain golden hour is magical.</p>
    `,
    author: "Meera Nair",
    date: "February 18, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0",
    category: "Seasonal",
  },
  {
    id: 12,
    title: "Traditional Crafts: A Shopping Guide to India",
    excerpt: "From Kashmiri shawls to Rajasthani textiles, discover where to find authentic Indian handicrafts and support local artisans.",
    content: `
      <h2>India's Living Craft Traditions</h2>
      <p>India's handicraft heritage spans thousands of years, with each region developing unique specialties. Shopping for authentic crafts supports traditional artisans and brings home meaningful souvenirs.</p>
      
      <h2>Textiles and Fabrics</h2>
      <p><strong>Rajasthan:</strong> Block-printed fabrics, bandhani (tie-dye), and mirror work. Visit Jaipur's textile markets.</p>
      <p><strong>Varanasi:</strong> Banarasi silk sarees with gold zari work, sought after for weddings.</p>
      <p><strong>Kashmir:</strong> Pashmina shawls and carpets. Ensure authenticity with burn tests and certification.</p>
      
      <h2>Metalwork and Jewelry</h2>
      <p><strong>Jaipur:</strong> Kundan and Meenakari jewelry, precious gemstones.</p>
      <p><strong>Kerala:</strong> Temple jewelry in gold.</p>
      <p><strong>Rajasthan:</strong> Silver jewelry and lac bangles.</p>
      
      <h2>Wood and Stone Carving</h2>
      <p><strong>Kashmir:</strong> Walnut wood carvings.</p>
      <p><strong>Agra:</strong> Marble inlay work (pietra dura) similar to Taj Mahal decorations.</p>
      <p><strong>Karnataka:</strong> Sandalwood carvings from Mysore.</p>
      
      <h2>Pottery and Ceramics</h2>
      <p><strong>Jaipur:</strong> Blue pottery with Persian influences.</p>
      <p><strong>Khurja:</strong> Colorful glazed ceramics.</p>
      <p><strong>Manipur:</strong> Black pottery using unique firing techniques.</p>
      
      <h2>Shopping Tips</h2>
      <p>Visit government emporiums for fixed prices and authenticity. Bargain in markets (expect 30-50% off initial prices). Ask for certificates of authenticity for expensive items. Buy directly from artisans when possible.</p>
    `,
    author: "Sophie Turner",
    date: "February 15, 2024",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64",
    category: "Shopping",
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
