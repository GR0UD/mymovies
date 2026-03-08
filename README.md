# MovieZ - Modern Movie & Series Discovery App

A responsive, feature-rich movie and series discovery application built with modern web technologies. Browse popular movies, search across millions of titles, and maintain your personal watchlist.

## ✨ Features

### Core Features

- 🎬 **Browse & Discover**: Explore popular movies and currently showing films
- 🔍 **Advanced Search**: Search for movies and TV series with real-time results
- 📺 **Detailed Views**: Comprehensive movie/series information including:
  - Cast information with professional images
  - Ratings, genres, and runtime
  - Synopsis and descriptions
  - Available videos/trailers
- 🎯 **Watchlist**: Save your favorite movies with bookmark functionality
  - Persistent storage using localStorage
  - Quick add/remove with visual feedback
  - Dedicated watchlist page

### Design & UX

- 🌙 **Dark/Light Theme**: Seamless theme switching with system preference support
- 📱 **Fully Responsive**:
  - Mobile-optimized with bottom dock navigation
  - Tablet-friendly layouts with improved grids
  - Desktop with sticky top navigation
- ⚡ **Modern UI**: Smooth animations, hover effects, and intuitive interactions
- 🎨 **Consistent Design**: Unified typography and spacing across all pages
- 🎥 **Enhanced Video Display**: Responsive video embeds with border-radius variations

## 🛠️ Tech Stack

### Frontend Framework

- **React 18.3.1**: Modern UI library with hooks and context API
- **React Router DOM 7.1.1**: Client-side routing
- **React Icons 5.4.0**: Beautiful icon library

### Build & Development

- **Vite 6.0.5**: Lightning-fast build tool and dev server
- **SASS/SCSS 1.83.4**: Powerful CSS preprocessing with nesting
- **Vite Plugin Pages**: File-based routing

### API & Data

- **TMDB API (The Movie Database)**: Comprehensive movie/series data
- **Axios 1.7.9**: HTTP client for API requests
- **localStorage**: Client-side persistence

### Code Quality

- **ESLint**: Linting and code quality
- **React Hooks Best Practices**: Hooks and plugin enforcement

## 📋 Project Structure

```
src/
├── components/
│   ├── header.jsx                    # Main header with theme toggle
│   ├── NavigationBar.jsx             # Navigation dock/bar
│   ├── ThemeContext.jsx              # Dark/light theme provider
│   ├── index/
│   │   ├── MoviePopularContent.jsx   # Popular movies grid (6 per row)
│   │   └── MovieShowingContent.jsx   # Now showing grid (6 per row)
│   ├── search/
│   │   └── SearchBar.jsx             # Search input component
│   ├── details/
│   │   ├── film/
│   │   │   ├── MovieDetailsVideo.jsx
│   │   │   └── MovieDetailsContent.jsx (with enhanced cast display)
│   │   └── series/
│   │       └── SeriesDetailsContent.jsx
│   └── index.jsx                     # Component export file
├── contexts/
│   └── WatchlistContext.jsx          # Watchlist state management & persistence
├── pages/
│   ├── index.jsx                     # Homepage
│   ├── search.jsx                    # Search results page
│   ├── watchlist.jsx                 # Watchlist page
│   └── details/
│       ├── film/[id].jsx             # Movie details page
│       ├── series/[id].jsx           # Series details page
│       └── cast/[id].jsx             # Cast details page
├── styles/
│   ├── main.scss                     # Global styles & theme definitions
│   ├── category.scss                 # Movie grid styles (6 items responsive)
│   ├── details.scss                  # Detail page styles (video above)
│   ├── watchlist.scss                # Watchlist styles with themes
│   ├── header.scss                   # Header styles & responsiveness
│   ├── nav.scss                      # Navigation (sticky on PC, dock on mobile)
│   ├── series-details.scss           # Series detail styles
│   ├── CastDetailsContent.scss       # Cast detail styles
│   └── SearchScss/
│       ├── searchBar.scss            # Modern search bar
│       └── searchCard.scss           # Improved search cards
├── App.jsx                           # Root router component
└── main.jsx                          # Entry point with context providers
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn
- Modern web browser with ES6+ support

### Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd projekt-moviez-GR0UD-1
```

2. **Install dependencies**

```bash
npm install
```

3. **Start development server**

```bash
npm run dev
```

The app will be available at `http://localhost:5174`

### Build for Production

```bash
npm run build
npm run preview
```

## 📱 Responsive Design

### Mobile (< 768px)

- 📱 Single/dual column layouts
- 🎯 Bottom dock navigation (60px height)
- 👆 Optimized touch targets (48px minimum)
- 📺 Full-width video (250px height, 4px radius)
- 🎨 Compact card designs

### Tablet (768px - 1024px)

- 4 movie items per row
- 3-column grids on search
- 📍 Sticky top navigation (80px)
- Enhanced spacing and typography
- Improved tap areas

### Desktop (1024px+)

- **6 movie items per row** on homepage
- Sticky top navigation (100px height)
- 📺 Large video embeds (400-500px height, 12-16px radius)
- Optimized sidebar layouts
- Full hover animations
- Enhanced cast display

## 🎨 Theme System

### Light Theme

- Background: Clean White (#FFFFFF)
- Primary Color: Deep Purple (#110E47)
- Secondary Color: Light Blue (#88A4E8)
- Star Rating: Gold (#F5C518)
- Text: Black (primary), Gray (secondary)

### Dark Theme

- Background: Dark Gray (#121212)
- Cards: Dark Gray (#2A2A2A)
- Primary Color: Bright Purple (#736DDF)
- Text: White (primary), Light Gray (secondary)
- Enhanced contrast for WCAG compliance

**Implementation:**

```javascript
// System preference detection
prefers-color-scheme: dark

// Manual toggle in header
Theme switcher with localStorage persistence
```

## 🔑 Key Features Explained

### Watchlist System with Bookmarks

```javascript
import { useWatchlist } from "./contexts/WatchlistContext";

// In component
const { watchlist, addToWatchlist, removeFromWatchlist, isInWatchlist } =
  useWatchlist();

// Add movie with visual feedback
addToWatchlist(movieData); // Filled bookmark appears

// Persistent across sessions via localStorage
```

### 6-Column Grid Layout

- **Mobile**: Horizontal scroll
- **Tablet**: 4 items per row
- **Desktop**: **6 items per row** with gap: 30px
- Responsive calc-based flex distribution

### Video Display Enhancements

```scss
// Mobile: Simple and compact
iframe {
  height: 250px;
  border-radius: 4px;
}

// Desktop: Large with rounded corners
@media (min-width: 768px) {
  border-radius: 12px;
  height: 400px;
}

@media (min-width: 1024px) {
  border-radius: 16px;
  height: 500px;
}
```

### Enhanced Cast Display

- Large cast images (120-150px on desktop)
- Professional rounded corners (12px)
- Hover effects with elevation
- Name truncation with ellipsis
- Responsive grid layout

## 📊 Grid System Details

### Homepage Movie Grids

```
Mobile:    1 visible item (scroll horizontal)
Tablet:    4 items per row (calc: 25% - 23px)
Desktop:   6 items per row (calc: 16.666% - 25px)
Large:     6 items per row (full grid)
```

### Search Results

```
Mobile:    2 columns (50% each)
Tablet:    3-4 columns adaptive
Desktop:   5-6 columns
```

## 🎬 Modern Styling Features

### Animations

- Smooth transitions (0.2-0.3s ease)
- Card hover lift effect (-2px to -8px)
- Scale transforms on button hover
- Bookmark fill animation

### Typography Hierarchy

```
Headers:      "Merriweather", serif (headings)
Body Text:    "Mulish", sans-serif (body)
Consistent:   All components use same fonts
Sizes:        Responsive scaling 62.5% base
```

### Interactive Elements

- Buttons with gradient backgrounds
- Hover states with shadow elevation
- Active states with transform feedback
- Star ratings in gold (#F5C518)
- Color-coded badges

## 🧪 Testing Checklist

### Functionality

- [ ] Add/remove movies from watchlist
- [ ] Watchlist persists after refresh
- [ ] Search returns correct results
- [ ] Theme toggle works on all pages
- [ ] Video embeds load properly
- [ ] Cast images load with fallbacks

### Responsive Design

- [ ] 375px (iPhone) layout correct
- [ ] 768px (Tablet) transitions smooth
- [ ] 1024px (Desktop) nav sticky
- [ ] 1440px (Large) shows 6 movies
- [ ] Navigation dock → sticky properly

### Theme Switching

- [ ] All colors update in light mode
- [ ] All colors update in dark mode
- [ ] System preference respected
- [ ] Manual toggle persists

### Performance

- [ ] Page loads in < 3 seconds
- [ ] Images lazy-load properly
- [ ] No console errors
- [ ] Smooth 60fps animations

## 🚨 Known Limitations

- TMDB API: Rate limit 40 requests/10 seconds
- Video availability: Not all titles have trailers
- Cast images: Some older films lack complete cast photos
- Search: Multi-search includes TV when searching movies
- International content: Titles vary by region

## 📦 Dependencies

### Production

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^7.1.1",
  "react-icons": "^5.4.0",
  "axios": "^1.7.9"
}
```

### Development

```json
{
  "vite": "^6.0.5",
  "@vitejs/plugin-react": "^4.3.4",
  "vite-plugin-pages": "^0.32.4",
  "sass": "^1.83.4",
  "eslint": "^9.17.0"
}
```

## 🔧 Configuration

### Environment Variables

```bash
# .env file (create if missing)
VITE_TMDB_API_KEY=your_api_key_here
```

### TMDB API Key

Get your free key at [TMDB](https://www.themoviedb.org/settings/api)

## 🎯 Future Enhancements

- [ ] User authentication & cloud sync
- [ ] Advanced filtering & sorting
- [ ] Watchlist sharing
- [ ] Recommendations engine
- [ ] Movie ratings & reviews
- [ ] Offline mode support
- [ ] PWA installation
- [ ] Performance optimizations

## 🤝 Contributing

Steps to contribute:

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Test on multiple screen sizes
5. Push branch (`git push origin feature/AmazingFeature`)
6. Open Pull Request

## 📝 License

This project is created for educational purposes.

## 🔗 Resources & Links

- [TMDB API Docs](https://developer.themoviedb.org/docs)
- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [SASS Documentation](https://sass-lang.com/documentation)
- [React Router](https://reactrouter.com)

## 💬 Troubleshooting

### Port Already in Use

```bash
# Kill process on port 5173/5174
# Windows: netstat -ano | findstr :5173
# macOS: lsof -i :5173
```

### CORS Errors

TMDB API handles CORS properly. If issues persist:

- Check API key is valid
- Verify network connection
- Check browser console for details

### Theme Not Persisting

- Check localStorage is enabled
- Verify browser privacy settings
- Clear browser cache and retry

---

**Built with ❤️ using React, Vite, and modern web standards**

_Last Updated: March 2026_
