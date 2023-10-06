import { Link } from "react-router-dom"
import "./index.css"

function Error() {
    return (
        <main className="error-container">
            <h1 className="error-type">
                404
            </h1>
            <p className="error-message">
                Oups! La page que vous demandez n'existe pas
            </p>
            <Link to="/" className="error-redirect">
                Retourner sur la page d'accueil
            </Link>
        </main>
    )
}

export default Error