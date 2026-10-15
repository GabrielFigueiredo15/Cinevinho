import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Detalhes() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadMovieDetails() {
      try {
        setLoading(true)
        setError('')

        const apiKey = import.meta.env.VITE_TMDB_API_KEY

        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=pt-BR`,
        )

        if (!response.ok) {
          throw new Error('Não foi possível carregar os detalhes do filme.')
        }

        const data = await response.json()
        setMovie(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    loadMovieDetails()
  }, [id])

  if (loading) {
    return <p className="status-message">Carregando detalhes do filme...</p>
  }

  if (error) {
    return <p className="status-message status-message--error">{error}</p>
  }

  return (
    <section className="movie-details">
      <button type="button" className="back-link" onClick={() => navigate(-1)}>
        Voltar
      </button>

      <div className="movie-details__content">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={`Pôster do filme ${movie.title}`}
        />

        <div>
          <p className="eyebrow">{movie.release_date?.slice(0, 4)}</p>
          <h1>{movie.title}</h1>
          <p className="movie-details__rating">
            Nota: {movie.vote_average.toFixed(1)}
          </p>
          <p>{movie.overview || 'Sinopse não disponível.'}</p>
        </div>
      </div>
    </section>
  )
}

export default Detalhes