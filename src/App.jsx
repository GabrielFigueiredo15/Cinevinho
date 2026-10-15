import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Busca from './pages/Busca'
import Favoritos from './pages/Favoritos'
import Home from './pages/Home'
import NaoEncontrada from './pages/NaoEncontrada'
import Detalhes from './pages/Detalhes'
import { useEffect, useState } from 'react'


function App() {
  const [favorites, setFavorites] = useState(() => {
  const savedFavorites = localStorage.getItem('favorites')

  return savedFavorites ? JSON.parse(savedFavorites) : []
})

useEffect(() => {
  localStorage.setItem('favorites', JSON.stringify(favorites))
}, [favorites])

function toggleFavorite(movie) {
  const isFavorite = favorites.some((favorite) => favorite.id === movie.id)

  if (isFavorite) {
    setFavorites(favorites.filter((favorite) => favorite.id !== movie.id))
  } else {
    setFavorites([...favorites, movie])
  }
}
  return (
  <Routes>
    <Route element={<Layout />}>

      <Route
        path="/"
        element={
          <Home
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
        }
      />

      <Route
        path="/busca"
        element={
          <Busca
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
        }
      />

      <Route
        path="/favoritos"
        element={
          <Favoritos
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
        }
      />

      <Route path="/filme/:id" element={<Detalhes />} />
      <Route path="*" element={<NaoEncontrada />} />

    </Route>
  </Routes>
)
}

export default App
