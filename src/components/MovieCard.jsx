import { Link } from 'react-router-dom'

function MovieCard({ movie, isFavorite, onToggleFavorite }) {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

  return (
    <article className="movie-card">
      <Link to={`/filme/${movie.id}`} className="movie-card__link">
        <img src={imageUrl} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>Nota: {movie.vote_average.toFixed(1)}</p>
      </Link>

      <button
        type="button"
        className={isFavorite ? 'favorite-button favorite-button--active' : 'favorite-button'}
        onClick={() => onToggleFavorite(movie)}
      >
        {isFavorite ? '★ Favorito' : '☆ Favoritar'}
      </button>
    </article>
  )
}

export default MovieCard