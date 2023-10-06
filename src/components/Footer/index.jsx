import kasaLogoDark from "../../assets/logo-dark.svg"
import "./index.css"

function Footer() {
    return (
        <footer>
            <img src={kasaLogoDark} alt="Logo Kasa" />
            <p className="footer-text">
                © 2020 Kasa. All rights reserved
            </p>
        </footer>
    )
}

export default Footer