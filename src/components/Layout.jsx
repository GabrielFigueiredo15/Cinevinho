import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function Layout() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="page-content"><Outlet /></main>
      <footer className="footer">CineVinho · Seu catálogo de filmes</footer>
    </div>
    
  )
  
}


export default Layout
