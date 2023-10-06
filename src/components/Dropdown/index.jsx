import upArrow from "../../assets/upArrow.svg";
import downArrow from "../../assets/downArrow.svg";
import { useState } from "react";
import "./index.css"

function Dropdown({ page, type, text }) {
    const [isOpen, setIsOpen] = useState(false);
    if (type === "Équipements") {
        text = text.map((equipement, index) =>
            <li key={index}>{equipement}</li>
        )
    }

    return isOpen ? (
        <div className="dropdown-container" onClick={() => setIsOpen(false)}>
            <div className={`type-container ${page === "About" ? "type-container-about" : ""}`}>
                {type}
                <img src={upArrow} alt="" className="up-arrow" />
            </div>
            <div className={`text-container ${page === "About" ? "text-container-about" : ""}`}>
                {text}
            </div>
        </div>
    ) : (
        <div className="dropdown-container" onClick={() => setIsOpen(true)}>
            <div className={`type-container ${page === "About" ? "type-container-about" : ""}`}>
                {type}
                <img src={downArrow} alt="" className="down-arrow" />
            </div>
        </div>
    )
}

export default Dropdown