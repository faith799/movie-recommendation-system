"use client"

import { useState, useEffect, useMemo } from "react"
import { Search, Star, Heart, Play, Info, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"

interface Movie {
  id: string
  title: string
  genre: string[]
  rating: number
  year: number
  duration: string
  description: string
  director: string
  cast: string[]
  poster: string
}

const movies: Movie[] = [
  {
    id: "1",
    title: "The Dark Knight",
    genre: ["Action", "Crime", "Drama"],
    rating: 9.0,
    year: 2008,
    duration: "2h 32m",
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.",
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    poster: "/images/dark-knight.jpg",
  },
  {
    id: "2",
    title: "Inception",
    genre: ["Action", "Sci-Fi", "Thriller"],
    rating: 8.8,
    year: 2010,
    duration: "2h 28m",
    description:
      "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Marion Cotillard", "Tom Hardy"],
    poster: "/images/inception.jpg",
  },
  {
    id: "3",
    title: "The Shawshank Redemption",
    genre: ["Drama"],
    rating: 9.3,
    year: 1994,
    duration: "2h 22m",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    director: "Frank Darabont",
    cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    poster: "/images/shawshank.jpg",
  },
  {
    id: "4",
    title: "Pulp Fiction",
    genre: ["Crime", "Drama"],
    rating: 8.9,
    year: 1994,
    duration: "2h 34m",
    description:
      "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.",
    director: "Quentin Tarantino",
    cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
    poster: "/images/pulp-fiction.jpg",
  },
  {
    id: "5",
    title: "The Matrix",
    genre: ["Action", "Sci-Fi"],
    rating: 8.7,
    year: 1999,
    duration: "2h 16m",
    description:
      "A computer programmer is led to fight an underground war against powerful computers who have constructed his entire reality with a system called the Matrix.",
    director: "The Wachowskis",
    cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    poster: "/images/matrix.jpg",
  },
  {
    id: "6",
    title: "Forrest Gump",
    genre: ["Drama", "Romance"],
    rating: 8.8,
    year: 1994,
    duration: "2h 22m",
    description:
      "The presidencies of Kennedy and Johnson, the Vietnam War, and other historical events unfold from the perspective of an Alabama man.",
    director: "Robert Zemeckis",
    cast: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
    poster: "/images/forrest-gump.jpg",
  },
  {
    id: "7",
    title: "The Godfather",
    genre: ["Crime", "Drama"],
    rating: 9.2,
    year: 1972,
    duration: "2h 55m",
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    director: "Francis Ford Coppola",
    cast: ["Marlon Brando", "Al Pacino", "James Caan"],
    poster: "/images/godfather.jpg",
  },
  {
    id: "8",
    title: "Interstellar",
    genre: ["Adventure", "Drama", "Sci-Fi"],
    rating: 8.6,
    year: 2014,
    duration: "2h 49m",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    director: "Christopher Nolan",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    poster: "/images/interstellar.jpg",
  },
  {
    id: "9",
    title: "The Lion King",
    genre: ["Animation", "Adventure", "Drama"],
    rating: 8.5,
    year: 1994,
    duration: "1h 28m",
    description:
      "A Lion cub crown prince is tricked by a treacherous uncle into thinking he caused his father's death and flees into exile in despair.",
    director: "Roger Allers",
    cast: ["Matthew Broderick", "Jeremy Irons", "James Earl Jones"],
    poster: "/images/lion-king.jpg",
  },
  {
    id: "10",
    title: "Titanic",
    genre: ["Drama", "Romance"],
    rating: 7.8,
    year: 1997,
    duration: "3h 14m",
    description:
      "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
    director: "James Cameron",
    cast: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"],
    poster: "/images/titanic.jpg",
  },
  {
    id: "11",
    title: "Avatar",
    genre: ["Action", "Adventure", "Fantasy"],
    rating: 7.9,
    year: 2009,
    duration: "2h 42m",
    description:
      "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    director: "James Cameron",
    cast: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
    poster: "/images/avatar.jpg",
  },
  {
    id: "12",
    title: "The Avengers",
    genre: ["Action", "Adventure", "Sci-Fi"],
    rating: 8.0,
    year: 2012,
    duration: "2h 23m",
    description:
      "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    director: "Joss Whedon",
    cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
    poster: "/images/avengers.jpg",
  },
]

const genres = ["All", "Action", "Adventure", "Animation", "Crime", "Drama", "Fantasy", "Romance", "Sci-Fi", "Thriller"]

export default function NetflixRecommendationSystem() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedGenre, setSelectedGenre] = useState("All")
  const [minRating, setMinRating] = useState([0])
  const [yearRange, setYearRange] = useState([1970, 2024])
  const [likedMovies, setLikedMovies] = useState<string[]>([])
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null)

  // Load liked movies from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("likedMovies")
    if (saved) {
      setLikedMovies(JSON.parse(saved))
    }
  }, [])

  // Save liked movies to localStorage
  useEffect(() => {
    localStorage.setItem("likedMovies", JSON.stringify(likedMovies))
  }, [likedMovies])

  const toggleLike = (movieId: string) => {
    setLikedMovies((prev) => (prev.includes(movieId) ? prev.filter((id) => id !== movieId) : [...prev, movieId]))
  }

  // Filter movies based on search and filters
  const filteredMovies = useMemo(() => {
    return movies.filter((movie) => {
      const matchesSearch =
        movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movie.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movie.cast.some((actor) => actor.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesGenre = selectedGenre === "All" || movie.genre.includes(selectedGenre)
      const matchesRating = movie.rating >= minRating[0]
      const matchesYear = movie.year >= yearRange[0] && movie.year <= yearRange[1]

      return matchesSearch && matchesGenre && matchesRating && matchesYear
    })
  }, [searchTerm, selectedGenre, minRating, yearRange])

  // Generate recommendations based on liked movies
  const recommendations = useMemo(() => {
    if (likedMovies.length === 0) {
      return movies.slice(0, 6) // Show top-rated movies if no preferences
    }

    const likedGenres = new Map<string, number>()
    const likedDirectors = new Map<string, number>()

    // Analyze liked movies to find preferred genres and directors
    likedMovies.forEach((movieId) => {
      const movie = movies.find((m) => m.id === movieId)
      if (movie) {
        movie.genre.forEach((genre) => {
          likedGenres.set(genre, (likedGenres.get(genre) || 0) + 1)
        })
        likedDirectors.set(movie.director, (likedDirectors.get(movie.director) || 0) + 1)
      }
    })

    // Score movies based on preferences
    const scoredMovies = movies
      .filter((movie) => !likedMovies.includes(movie.id))
      .map((movie) => {
        let score = 0

        // Genre preference score
        movie.genre.forEach((genre) => {
          score += (likedGenres.get(genre) || 0) * 2
        })

        // Director preference score
        score += (likedDirectors.get(movie.director) || 0) * 3

        // Rating bonus
        score += movie.rating

        return { ...movie, score }
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, 6)

    return scoredMovies
  }, [likedMovies])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">MovieFlix</h1>
          <p className="text-red-100">Discover your next favorite movie</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Search and Filters */}
        <Card className="bg-gray-900 border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Filter className="h-5 w-5" />
              Search & Filters
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search movies, actors, or keywords..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-gray-800 border-gray-600 text-white"
                  />
                </div>
              </div>
              <Select value={selectedGenre} onValueChange={setSelectedGenre}>
                <SelectTrigger className="w-full md:w-48 bg-gray-800 border-gray-600 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-600">
                  {genres.map((genre) => (
                    <SelectItem key={genre} value={genre} className="text-white hover:bg-gray-700">
                      {genre}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-white">Minimum Rating: {minRating[0]}</Label>
                <Slider value={minRating} onValueChange={setMinRating} max={10} min={0} step={0.1} className="w-full" />
              </div>
              <div className="space-y-2">
                <Label className="text-white">
                  Year Range: {yearRange[0]} - {yearRange[1]}
                </Label>
                <Slider
                  value={yearRange}
                  onValueChange={setYearRange}
                  max={2024}
                  min={1970}
                  step={1}
                  className="w-full"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recommendations Section */}
        {recommendations.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">
              {likedMovies.length > 0 ? "Recommended for You" : "Popular Movies"}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {recommendations.map((movie) => (
                <Card
                  key={movie.id}
                  className="bg-gray-900 border-gray-700 hover:bg-gray-800 transition-all duration-300 hover:scale-105 cursor-pointer group"
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={movie.poster || "/placeholder.svg"}
                        alt={movie.title}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = "/placeholder.svg?height=400&width=300"
                        }}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300" />
                      <Button
                        variant="ghost"
                        size="sm"
                        className={`absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                          likedMovies.includes(movie.id) ? "text-red-500" : "text-white"
                        }`}
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleLike(movie.id)
                        }}
                      >
                        <Heart className={`h-4 w-4 ${likedMovies.includes(movie.id) ? "fill-current" : ""}`} />
                      </Button>
                      <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button size="sm" className="bg-red-600 hover:bg-red-700 text-xs">
                          <Play className="h-3 w-3 mr-1" />
                          Play
                        </Button>
                      </div>
                    </div>
                    <div className="p-3">
                      <h3 className="font-semibold text-white text-sm mb-1 truncate">{movie.title}</h3>
                      <div className="flex items-center gap-1 mb-2">
                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        <span className="text-xs text-gray-300">{movie.rating}</span>
                        <span className="text-xs text-gray-400">({movie.year})</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {movie.genre.slice(0, 2).map((genre) => (
                          <Badge key={genre} variant="secondary" className="text-xs bg-gray-700 text-gray-300">
                            {genre}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* All Movies Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">All Movies ({filteredMovies.length})</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMovies.map((movie) => (
              <Card
                key={movie.id}
                className="bg-gray-900 border-gray-700 hover:bg-gray-800 transition-all duration-300 hover:scale-105 group"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={movie.poster || "/placeholder.svg"}
                      alt={movie.title}
                      className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = "/placeholder.svg?height=400&width=300"
                      }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300" />
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                        likedMovies.includes(movie.id) ? "text-red-500 opacity-100" : "text-white"
                      }`}
                      onClick={() => toggleLike(movie.id)}
                    >
                      <Heart className={`h-4 w-4 ${likedMovies.includes(movie.id) ? "fill-current" : ""}`} />
                    </Button>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="lg" className="bg-red-600 hover:bg-red-700">
                        <Play className="h-5 w-5 mr-2" />
                        Play Now
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-white mb-2 text-lg">{movie.title}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-300 font-semibold">{movie.rating}</span>
                      </div>
                      <span className="text-sm text-gray-400">{movie.year}</span>
                      <span className="text-sm text-gray-400">{movie.duration}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {movie.genre.map((genre) => (
                        <Badge key={genre} variant="secondary" className="text-xs bg-gray-700 text-gray-300">
                          {genre}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-sm text-gray-400 mb-3 line-clamp-2">{movie.description}</p>
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1 bg-red-600 hover:bg-red-700">
                        <Play className="h-4 w-4 mr-1" />
                        Play
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                        onClick={() => setSelectedMovie(movie)}
                      >
                        <Info className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {filteredMovies.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No movies found matching your criteria.</p>
            <p className="text-gray-500">Try adjusting your filters or search terms.</p>
          </div>
        )}
      </div>

      {/* Movie Details Modal */}
      {selectedMovie && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <Card className="bg-gray-900 border-gray-700 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <CardContent className="p-0">
              <div className="relative">
                <img
                  src={selectedMovie.poster || "/placeholder.svg"}
                  alt={selectedMovie.title}
                  className="w-full h-64 md:h-80 object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = "/placeholder.svg?height=400&width=800"
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                <Button
                  variant="ghost"
                  onClick={() => setSelectedMovie(null)}
                  className="absolute top-4 right-4 text-white hover:bg-black hover:bg-opacity-50"
                >
                  ×
                </Button>
                <div className="absolute bottom-4 left-4 right-4">
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedMovie.title}</h2>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="text-white font-semibold">{selectedMovie.rating}</span>
                    </div>
                    <span className="text-gray-300">{selectedMovie.year}</span>
                    <span className="text-gray-300">{selectedMovie.duration}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button className="bg-red-600 hover:bg-red-700">
                      <Play className="h-4 w-4 mr-2" />
                      Play Now
                    </Button>
                    <Button
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                      onClick={() => toggleLike(selectedMovie.id)}
                    >
                      <Heart
                        className={`h-4 w-4 mr-2 ${likedMovies.includes(selectedMovie.id) ? "fill-current text-red-500" : ""}`}
                      />
                      {likedMovies.includes(selectedMovie.id) ? "Liked" : "Like"}
                    </Button>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex flex-wrap gap-1 mb-4">
                  {selectedMovie.genre.map((genre) => (
                    <Badge key={genre} variant="secondary" className="bg-gray-700 text-gray-300">
                      {genre}
                    </Badge>
                  ))}
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">{selectedMovie.description}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Director</h4>
                    <p className="text-gray-400">{selectedMovie.director}</p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Cast</h4>
                    <p className="text-gray-400">{selectedMovie.cast.join(", ")}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
