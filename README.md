# 🎬 MovieFlix - Netflix-Style Movie Recommendation System

A modern, responsive movie recommendation system built with Next.js, React, and TypeScript. Features intelligent recommendations, advanced filtering, and a Netflix-inspired dark theme interface.

![MovieFlix Screenshot](https://via.placeholder.com/800x400/000000/FFFFFF?text=MovieFlix+Screenshot)

## ✨ Features

### 🎯 **Smart Recommendations**
- **Personalized Suggestions**: AI-powered recommendations based on your liked movies
- **Genre Analysis**: Recommends movies from your preferred genres
- **Director Preferences**: Suggests films from directors you enjoy
- **Rating-Based Scoring**: Higher-rated movies get priority in recommendations

### 🔍 **Advanced Search & Filtering**
- **Multi-field Search**: Search by title, description, cast, or director
- **Genre Filtering**: Filter by specific genres or view all categories
- **Rating Filter**: Set minimum rating thresholds with interactive sliders
- **Year Range**: Filter movies by release year with dual-range slider
- **Real-time Results**: Instant filtering as you type or adjust controls

### 🎨 **Netflix-Inspired Design**
- **Dark Theme**: Authentic black and red color scheme
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Hover Effects**: Smooth animations and interactive movie cards
- **Professional UI**: Clean, modern interface using shadcn/ui components

### 💾 **Data Persistence**
- **Local Storage**: Your preferences and liked movies are saved locally
- **Session Recovery**: Resume where you left off after closing the browser
- **Cross-session Recommendations**: Recommendations improve over time

### 🎭 **Rich Movie Database**
- **12 Popular Movies**: Curated selection of acclaimed films
- **Detailed Information**: Cast, director, rating, year, duration, and synopsis
- **High-Quality Posters**: Authentic movie artwork from TMDB
- **Multiple Genres**: Action, Drama, Sci-Fi, Crime, Romance, Animation, and more

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/movieflix.git
   cd movieflix
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Built With

### **Core Technologies**
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[React 18](https://reactjs.org/)** - UI library with hooks and modern features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework

### **UI Components**
- **[shadcn/ui](https://ui.shadcn.com/)** - Modern React component library
- **[Lucide React](https://lucide.dev/)** - Beautiful SVG icons
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible components

### **Key Features**
- **Local Storage API** - Client-side data persistence
- **CSS Grid & Flexbox** - Responsive layout system
- **React Hooks** - useState, useEffect, useMemo for state management

## 📁 Project Structure

\`\`\`
movieflix/
├── app/
│   ├── page.tsx              # Main application component
│   ├── layout.tsx            # Root layout with providers
│   ├── globals.css           # Global styles and Tailwind imports
│   └── loading.tsx           # Loading component
├── components/
│   └── ui/                   # shadcn/ui components
├── public/
│   └── images/               # Movie poster images
├── lib/
│   └── utils.ts              # Utility functions
├── README.md                 # Project documentation
├── LICENSE                   # MIT License
├── package.json              # Dependencies and scripts
├── tailwind.config.ts        # Tailwind configuration
└── tsconfig.json             # TypeScript configuration
\`\`\`

## 🎯 How It Works

### **Recommendation Algorithm**
1. **User Interaction**: Users like movies by clicking the heart icon
2. **Preference Analysis**: System analyzes liked movies for genre and director patterns
3. **Scoring System**: Remaining movies are scored based on:
   - Genre match (2x weight)
   - Director match (3x weight) 
   - Movie rating (1x weight)
4. **Ranked Results**: Top 6 scored movies are displayed as recommendations

### **Search & Filter Logic**
- **Text Search**: Searches across title, description, and cast arrays
- **Genre Filter**: Matches movies containing selected genre
- **Rating Filter**: Shows movies above minimum rating threshold
- **Year Filter**: Displays movies within selected year range
- **Combined Filtering**: All filters work together with AND logic

## 🎨 Customization

### **Adding New Movies**
\`\`\`typescript
const newMovie: Movie = {
  id: "13",
  title: "Your Movie Title",
  genre: ["Action", "Adventure"],
  rating: 8.5,
  year: 2023,
  duration: "2h 15m",
  description: "Movie description here...",
  director: "Director Name",
  cast: ["Actor 1", "Actor 2", "Actor 3"],
  poster: "/images/your-movie-poster.jpg",
}
\`\`\`

### **Customizing Themes**
Modify the color scheme in `tailwind.config.ts`:
\`\`\`typescript
theme: {
  extend: {
    colors: {
      // Add your custom colors here
      primary: "#your-color",
      secondary: "#your-color",
    }
  }
}
\`\`\`

### **Adding New Genres**
Update the genres array in `page.tsx`:
\`\`\`typescript
const genres = [
  "All", "Action", "Adventure", "Animation", 
  "Crime", "Drama", "Fantasy", "Romance", 
  "Sci-Fi", "Thriller", "Your-New-Genre"
]
\`\`\`

## 🔧 Available Scripts

\`\`\`bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Type Checking
npm run type-check   # Run TypeScript compiler
\`\`\`

## 📱 Responsive Design

- **Mobile (320px+)**: Single column layout with touch-friendly controls
- **Tablet (768px+)**: Two-column movie grid with expanded filters
- **Desktop (1024px+)**: Multi-column layout with full feature set
- **Large Screens (1280px+)**: Optimized spacing and larger movie cards

## 🚀 Deployment

### **Vercel (Recommended)**
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### **Netlify**
1. Build the project: `npm run build`
2. Deploy the `out` folder to [Netlify](https://netlify.com)

### **Docker**
\`\`\`dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
\`\`\`

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### **Development Guidelines**
- Follow TypeScript best practices
- Use meaningful commit messages
- Add comments for complex logic
- Test on multiple screen sizes
- Maintain consistent code formatting

## 🐛 Known Issues

- Movie posters may take time to load on slower connections
- Local storage has browser limits (typically 5-10MB)
- Recommendation quality improves with more user interactions

## 🔮 Future Enhancements

- [ ] **User Authentication**: Multiple user profiles with cloud sync
- [ ] **Movie Trailers**: YouTube trailer integration
- [ ] **Advanced Analytics**: Viewing history and statistics
- [ ] **Social Features**: Share recommendations with friends
- [ ] **External API**: Integration with TMDB or OMDB APIs
- [ ] **Watchlist**: Save movies to watch later
- [ ] **Rating System**: 5-star rating instead of just likes
- [ ] **Search History**: Remember recent searches
- [ ] **Export Features**: Export movie lists to CSV/JSON

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **[The Movie Database (TMDB)](https://www.themoviedb.org/)** for movie posters and inspiration
- **[Netflix](https://netflix.com)** for UI/UX design inspiration
- **[shadcn](https://twitter.com/shadcn)** for the amazing component library
- **[Vercel](https://vercel.com)** for the excellent Next.js framework

## 📞 Support

If you have any questions or need help:

- 📧 **Email**: georgemathew2716@gmail.com
- 🐛 **Issues**: [GitHub Issues](https://github.com/faith799/movie-recommendation-system/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/faith799/movie-recommendation-system/discussions)

---

**Made with ❤️ by [George Mathew](https://github.com/faith799)**

⭐ **Star this repository if you found it helpful!**
