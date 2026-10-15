import { useState } from 'react'
import MovieCard from '../components/MovieCard'

function Busca({ favorites, onToggleFavorite }) {
  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [searched, setSearched] = useState(false)

  
  async function handleSearch(event) {
    event.preventDefault()

    if (!query.trim()) {
      setError('Digite o nome de um filme para pesquisar.')
      setMovies([])
      setSearched(false)
      return
    }

    try {
      setLoading(true)
      setError('')
      setSearched(true)

      const apiKey = import.meta.env.VITE_TMDB_API_KEY
      const searchText = encodeURIComponent(query.trim())

      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=pt-BR&query=${searchText}`,
      )

      if (!response.ok) {
        throw new Error('Não foi possível realizar a busca.')
      }

      const data = await response.json()
      setMovies(data.results)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="search-page">
      <div className="search-page__heading">
        <p className="eyebrow">Explorar</p>
        <h1>Buscar filmes</h1>
        <p>Encontre títulos, histórias e novas sessões para assistir.</p>
      </div>

      <form className="search-form" onSubmit={handleSearch}>
        <label htmlFor="movie-search">Nome do filme</label>

        <div className="search-form__controls">
          <input
            id="movie-search"
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Ex.: Interestelar"
          />

          <button type="submit">Buscar</button>
        </div>
      </form>

      {error && <p className="status-message status-message--error">{error}</p>}

      {loading && <p className="status-message">Buscando filmes...</p>}

      {!loading && searched && movies.length === 0 && !error && (
        <p className="status-message">Nenhum filme foi encontrado.</p>
      )}

      {!loading && movies.length > 0 && (
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
      )}
    </section>
  )
}

export default Busca