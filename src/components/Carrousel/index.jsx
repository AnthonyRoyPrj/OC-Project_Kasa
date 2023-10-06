import leftArrow from "../../assets/leftArrow.svg"
import rightArrow from "../../assets/rightArrow.svg"
import { useState } from "react";
import "./index.css"

function Carrousel({ images }) {
    const [imageIndex, setImageIndex] = useState(0);
    
    function previousImage() {
        const isFirstSlide = imageIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : imageIndex - 1;
        setImageIndex(newIndex);
    }

    function nextImage() {
        const isLastSlide = imageIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : imageIndex + 1;
        setImageIndex(newIndex);
    }

    return (
        <div className="carrousel-images">
            <img src={leftArrow} alt="Previous" onClick={previousImage} className={`left-arrow ${images.length === 1 ? "no-display" : ""}`} />
            <img src={rightArrow} alt="Next" onClick={nextImage} className={`right-arrow ${images.length === 1 ? "no-display" : ""}`} />
            <p className={`page-number ${images.length === 1 ? "no-display" : ""}`}>{imageIndex + 1}/{images.length}</p>
            <img src={images[imageIndex]} alt="Lodging" className="carrousel-image" />
        </div>
    )
}

export default Carrousel