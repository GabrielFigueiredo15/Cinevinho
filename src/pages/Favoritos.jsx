import MovieCard from '../components/MovieCard'

function Favoritos({ favorites, onToggleFavorite }) {
  if (favorites.length === 0) {
    return (
      <section className="content-page">
        <p className="eyebrow">Sua lista</p>
        <h1>Favoritos</h1>
        <p>Você ainda não adicionou nenhum filme aos favoritos.</p>
      </section>
    )
  }

    

  return (
    <section className="favorites-page">
      <div className="search-page__heading">
        <p className="eyebrow">Sua lista</p>
        <h1>Favoritos</h1>
        <p>Filmes que você salvou para assistir depois.</p>
      </div>

      <div className="movie-grid">
        {favorites.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            isFavorite={true}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>
    </section>
  )
}

export default Favoritos