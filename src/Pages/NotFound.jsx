import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="page-section">
      <h1>Page not found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link className="text-link" to="/">Back to home</Link>
    </section>
  )
}

export default NotFound
