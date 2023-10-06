import kasaLogoLight from "../../assets/logo-light.svg"
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom"
import "./index.css"

function Header() {
    const currentLocation = useLocation();
    return (
        <header className="header-container">
            <img src={kasaLogoLight} alt="Logo Kasa" className="header-logo" />
            <nav>
                <Link to="/" className={currentLocation.pathname === "/" ? "link-active" : ""}>Accueil</Link>
                <Link to="/about" className={currentLocation.pathname === "/about" ? "link-active" : ""}>À Propos</Link>
            </nav>
        </header>
    )
}

export default Header