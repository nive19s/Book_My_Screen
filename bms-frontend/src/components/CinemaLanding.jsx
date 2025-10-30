import React, { useState, useEffect } from 'react';
import { Film, Calendar, Clock, MapPin, Star, Play, ChevronLeft, ChevronRight, Ticket, TrendingUp } from 'lucide-react';

const CinemaLanding = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredMovies.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const featuredMovies = [
    {
      title: "Dune: Part Two",
      genre: "Sci-Fi Epic",
      rating: 8.9,
      image: "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?w=1200&h=600&fit=crop",
      description: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family."
    },
    {
      title: "The Dark Knight Returns",
      genre: "Action Thriller",
      rating: 9.1,
      image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=1200&h=600&fit=crop",
      description: "Gotham needs its protector once more as a new threat emerges from the shadows."
    },
    {
      title: "Interstellar Odyssey",
      genre: "Space Adventure",
      rating: 8.7,
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1200&h=600&fit=crop",
      description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
    }
  ];

  const nowShowing = [
    {
      id: 1,
      title: "Crimson Valley",
      genre: "Action",
      rating: 8.5,
      duration: "148 min",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop"
    },
    {
      id: 2,
      title: "Midnight Echo",
      genre: "Thriller",
      rating: 7.9,
      duration: "132 min",
      image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop"
    },
    {
      id: 3,
      title: "Love in Paris",
      genre: "Romance",
      rating: 8.2,
      duration: "125 min",
      image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=600&fit=crop"
    },
    {
      id: 4,
      title: "Space Guardians",
      genre: "Sci-Fi",
      rating: 8.8,
      duration: "155 min",
      image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=600&fit=crop"
    },
    {
      id: 5,
      title: "The Last Laugh",
      genre: "Comedy",
      rating: 7.6,
      duration: "110 min",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=600&fit=crop"
    },
    {
      id: 6,
      title: "Ocean's Mystery",
      genre: "Adventure",
      rating: 8.1,
      duration: "140 min",
      image: "https://images.unsplash.com/photo-1500099817043-86d46000d58f?w=400&h=600&fit=crop"
    }
  ];

  const genres = ['All', 'Action', 'Thriller', 'Romance', 'Sci-Fi', 'Comedy', 'Adventure'];

  const filteredMovies = selectedGenre === 'All' 
    ? nowShowing 
    : nowShowing.filter(movie => movie.genre === selectedGenre);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Film className="w-8 h-8 text-red-600" />
            <span className="text-2xl font-bold">CineMax</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="hover:text-red-600 transition-colors">Home</a>
            <a href="#" className="hover:text-red-600 transition-colors">Movies</a>
            <a href="#" className="hover:text-red-600 transition-colors">Cinemas</a>
            <a href="#" className="hover:text-red-600 transition-colors">Events</a>
          </div>
          <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-full transition-all transform hover:scale-105">
            Sign In
          </button>
        </div>
      </nav>

      {/* Hero Slider */}
      <div className="relative h-screen mt-16 overflow-hidden">
        {featuredMovies.map((movie, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/70 to-transparent z-10" />
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 z-20 flex items-center transition-all duration-1000 delay-300 ${
              index === currentSlide ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}>
              <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="w-5 h-5 text-red-600" />
                    <span className="text-red-600 font-semibold">NOW SHOWING</span>
                  </div>
                  <h1 className="text-6xl md:text-7xl font-bold mb-4 animate-fade-in">
                    {movie.title}
                  </h1>
                  <div className="flex items-center gap-6 mb-6">
                    <span className="text-gray-300">{movie.genre}</span>
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      <span className="text-xl font-semibold">{movie.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg mb-8">
                    {movie.description}
                  </p>
                  <div className="flex gap-4">
                    <button className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all transform hover:scale-105">
                      <Ticket className="w-5 h-5" />
                      Book Tickets
                    </button>
                    <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all">
                      <Play className="w-5 h-5" />
                      Watch Trailer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slider Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
          {featuredMovies.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1 rounded-full transition-all ${
                index === currentSlide ? 'w-12 bg-red-600' : 'w-8 bg-white/30'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + featuredMovies.length) % featuredMovies.length)}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % featuredMovies.length)}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Now Showing Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-2">Now Showing</h2>
            <p className="text-gray-400">Book your tickets for the latest releases</p>
          </div>
        </div>

        {/* Genre Filter */}
        <div className="flex gap-3 mb-12 overflow-x-auto pb-4">
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition-all transform hover:scale-105 ${
                selectedGenre === genre
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {genre}
            </button>
          ))}
        </div>

        {/* Movies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMovies.map((movie, index) => (
            <div
              key={movie.id}
              className={`group cursor-pointer transition-all duration-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[2/3]">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-full font-semibold flex items-center justify-center gap-2">
                    <Ticket className="w-5 h-5" />
                    Book Now
                  </button>
                </div>
                <div className="absolute top-4 right-4 bg-gray-950/80 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="font-semibold">{movie.rating}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors">
                {movie.title}
              </h3>
              <div className="flex items-center gap-4 text-gray-400 text-sm">
                <span className="flex items-center gap-1">
                  <Film className="w-4 h-4" />
                  {movie.genre}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {movie.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose CineMax?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Calendar className="w-12 h-12" />,
                title: "Easy Booking",
                description: "Book your tickets in just a few clicks with our streamlined process"
              },
              {
                icon: <MapPin className="w-12 h-12" />,
                title: "Multiple Locations",
                description: "Find the nearest cinema with the best seats available"
              },
              {
                icon: <Ticket className="w-12 h-12" />,
                title: "Best Prices",
                description: "Get exclusive deals and discounts on your favorite movies"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800 p-8 rounded-2xl text-center hover:bg-gray-750 transition-all transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="text-red-600 flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Film className="w-8 h-8 text-red-600" />
              <span className="text-2xl font-bold">CineMax</span>
            </div>
            <p className="text-gray-400">© 2025 CineMax. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CinemaLanding;