import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "10 Must-Visit Hidden Gems in Rajasthan",
    excerpt: "Discover the lesser-known palaces, forts, and villages that make Rajasthan truly magical beyond the usual tourist spots.",
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
    author: "Priya Sharma",
    date: "March 8, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1604608167384-1f1cebe47a0f",
    category: "Culture",
  },
  {
    id: 5,
    title: "Yoga and Meditation Retreats in Rishikesh",
    excerpt: "Find your inner peace in the Yoga Capital of the World with our guide to the best retreats and ashrams in Rishikesh.",
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
    author: "Sophie Turner",
    date: "February 15, 2024",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64",
    category: "Shopping",
  },
];

const Blog = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Travel Blog</h1>
          <p className="text-xl text-muted-foreground">Stories, guides, and tips for exploring incredible India</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group"
              onClick={() => navigate(`/blog/${post.id}`)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <Badge className="absolute top-4 right-4 bg-saffron text-white">{post.category}</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
