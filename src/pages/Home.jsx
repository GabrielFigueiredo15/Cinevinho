import { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'

function Home({ favorites, onToggleFavorite }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  
  useEffect(() => {
    async function loadMovies() {
      try {
        const apiKey = import.meta.env.VITE_TMDB_API_KEY

        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR`,
        )
        if (!response.ok) {
  throw new Error('Não foi possível carregar os filmes.')
}

        const data = await response.json()
        setMovies(data.results)
      } catch {
        setError('Não foi possível carregar os filmes.')
      } finally {
        setLoading(false)
      }
    }

    loadMovies()
  }, [])

  if (loading) return <p>Carregando filmes...</p>
  if (error) return <p>{error}</p>

  return (
    <section>
      <h1>Filmes populares</h1>

      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard
  key={movie.id}
  movie={movie}
  isFavorite={favorites.some((favorite) => favorite.id === movie.id)}
  onToggleFavorite={onToggleFavorite}
/>
        ))}
      </div>
    </section>
  )
}

export default Home