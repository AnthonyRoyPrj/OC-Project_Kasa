import star from "../../assets/ratingStar.svg"
import "./index.css"

function Rating({ ratingNumber }) {
    const range = [1, 2, 3, 4, 5];

    return (
        <div className="rating-container">
            {range.map((rangeElem) =>
                <img src={star} alt="Colored Rating Star" key={`rating-star-${rangeElem}`} className={ratingNumber >= rangeElem ? "star-full" : "star-empty"} />
            )}
        </div>
    )
}

export default Rating