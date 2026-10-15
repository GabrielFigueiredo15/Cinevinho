import { NavLink } from 'react-router-dom'

function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive ? 'nav-link nav-link--active' : 'nav-link'

  return (
    <header className="navbar">
      <NavLink to="/" className="brand" aria-label="Ir para a página inicial">CineVinho</NavLink>
      <nav aria-label="Navegação principal">
        <NavLink to="/" end className={linkClass}>Início</NavLink>
        <NavLink to="/busca" className={linkClass}>Buscar</NavLink>
        <NavLink to="/favoritos" className={linkClass}>Favoritos</NavLink>
      </nav>
    </header>
  )
}

export default Navbar
