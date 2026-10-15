import { Link } from 'react-router-dom'

function NaoEncontrada() {
  return <section className="not-found"><p className="eyebrow">Erro 404</p><h1>Esta sessão não foi encontrada.</h1><p>A página que você tentou acessar não existe.</p><Link to="/" className="back-link">Voltar ao início</Link></section>
}

export default NaoEncontrada
