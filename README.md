# India Assist - Your Smart Travel Companion

A comprehensive, responsive web application designed to help foreign tourists explore and navigate India with ease. Built with React, TypeScript, and modern web technologies.

## 🌟 Features

### Pages & Functionality

1. **Home Page**
   - Attractive hero banner with gradient overlay
   - Quick access to key features
   - Information about Indian tourism and culture
   - Safety guidelines and cultural tips

2. **Destinations**
   - 6 Major destinations: Taj Mahal, Jaipur, Kerala, Goa, Delhi, Varanasi
   - Each with detailed information, attractions, and nearby amenities
   - Embedded Google Maps for each location
   - Beautiful imagery and responsive cards

3. **Interactive Maps**
   - Full-screen Google Map centered on India
   - Markers for all featured destinations
   - Search functionality for finding places
   - Info windows with destination details

4. **Currency Converter**
   - Live exchange rates using Frankfurter API
   - Support for 8 major currencies including INR
   - Real-time conversion with date stamps
   - Swap functionality and example rates

5. **AI Travel Buddy (Chatbot)**
   - Interactive chat interface
   - Keyword-driven responses for common queries
   - Topics covered: destinations, food, emergency, transport, culture, safety
   - Conversation history display
   - Typing indicators

6. **Bookings (Demo)**
   - Hotel and cab booking forms
   - Input validation
   - Booking summary modal
   - Confirmation flow (demo mode)
   - LocalStorage persistence

7. **Emergency Contacts**
   - Verified emergency hotlines (Police, Ambulance, Fire, etc.)
   - Embassy contacts for major countries (US, UK, Japan, Australia, Canada)
   - One-click call and copy functionality
   - Safety tips and guidelines

8. **Contact Form**
   - Full contact form with validation
   - Business hours and contact information
   - Message submission to localStorage
   - Success confirmation

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <YOUR_GIT_URL>
cd india-assist
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:8080
```

## 🔑 API Keys Setup

### Google Maps API (Required for full map functionality)

1. Get your Google Maps API key from [Google Cloud Console](https://console.cloud.google.com/)
2. Enable the following APIs:
   - Maps JavaScript API
   - Places API
3. The app uses embedded Google Maps which work without configuration, but for advanced features:
   - Replace placeholder API keys in the Maps component if needed
   - Add your key to environment variables (optional)

### Currency API

- Uses the free **Frankfurter.app** API
- No API key required
- Supports real-time currency conversion
- URL: `https://api.frankfurter.app/latest`

### AI Chatbot

- Currently uses a **keyword-driven fallback** implementation
- No API key required for basic functionality
- Optional: To enable AI-powered responses:
  - Obtain API key from OpenAI or HuggingFace
  - Add to environment variables
  - Update the chat logic to use the API

## 🎨 Design System

### Color Palette
- **Primary Blue**: Deep Indian blue for trust and professionalism
- **Saffron Orange**: Vibrant accent representing Indian culture
- **White**: Clean background for clarity
- **Gradients**: Modern gradient overlays for visual appeal

### Typography
- Clean, readable fonts
- Bold headings for impact
- Proper hierarchy and spacing

### Responsive Design
- Mobile-first approach
- Breakpoints at 768px and 1024px
- Touch-friendly interfaces
- Optimized images and assets

## 📱 Demo Script (5-Step Showcase)

1. **Home Page**: Start at the hero section, highlight quick action buttons
2. **Destinations**: Navigate to Destinations, click on Taj Mahal card, show embedded map
3. **Interactive Map**: Visit Maps page, click on markers to see info windows
4. **Chat**: Open Travel Buddy, ask "Best places to visit in Delhi?"
5. **Currency Converter**: Convert 100 USD to INR, show live rates
6. **Emergency**: Show emergency contacts with one-click call buttons

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Navigation.tsx       # Main navigation bar
│   └── ui/                  # Reusable UI components
├── pages/
│   ├── Home.tsx            # Landing page
│   ├── Destinations.tsx    # Destinations showcase
│   ├── Maps.tsx            # Interactive maps
│   ├── Currency.tsx        # Currency converter
│   ├── Chat.tsx            # AI chatbot
│   ├── Bookings.tsx        # Booking forms
│   ├── Emergency.tsx       # Emergency contacts
│   ├── Contact.tsx         # Contact form
│   └── NotFound.tsx        # 404 page
├── index.css               # Global styles & design system
└── App.tsx                 # Main app component
```

## 🛠️ Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **React Router** - Navigation
- **Lucide React** - Icons
- **Frankfurter API** - Currency conversion

## 🎯 Future Enhancements

- [ ] User authentication and profiles
- [ ] Real booking integration with payment gateway
- [ ] Advanced AI chatbot with API integration
- [ ] Weather API integration
- [ ] User reviews and ratings
- [ ] Multi-language support
- [ ] Progressive Web App (PWA) features
- [ ] Dark/Light theme toggle
- [ ] Offline mode capabilities

## 📝 Limitations

- **Bookings**: Demo mode only, no real transactions
- **Chatbot**: Keyword-based responses, not AI-powered by default
- **Maps**: Uses embedded Google Maps, limited customization
- **Currency**: Dependent on Frankfurter API availability

## 🔒 Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly

## 📄 License

This project is for educational and demonstration purposes.

## 🤝 Support

For questions or support:
- Email: support@indiaassist.com
- Phone: +91 1800-123-4567

---

**Built with ❤️ for travelers exploring Incredible India**
