import leftArrow from "../../assets/leftArrow.svg"
import rightArrow from "../../assets/rightArrow.svg"
import { useState } from "react";
import styled from "styled-components";

const CarrouselImages = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

const CarrouselImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 25px;
    object-fit: cover;
    object-position: 50% 50%;
    @media (max-width: 768px) {
        border-radius: 10px;
    }
`

const LeftArrow = styled.img`
    height: 80px;
    position: absolute;
    top: 167px;
    left: 24px;
    z-index: 1;
    cursor: pointer;
    ${({$images}) => {
        if ($images.length === 1) {
            return (`display: none;`)
            }
        }
    }
    @media (max-width: 768px) {
        height: 24px;
        top: 112px;
    }
`

const RightArrow = styled.img`
    height: 80px;
    position: absolute;
    top: 167px;
    right: 24px;
    z-index: 1;
    ${({$images}) => {
        if ($images.length === 1) {
            return (`display: none;`)
            }
        }
    }
    cursor: pointer;
    @media (max-width: 768px) {
        height: 24px;
        top: 112px;
    }
`

const PageNumber = styled.p`
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    color: #FFFFFF;
    position: absolute;
    left: 50%;
    bottom: 25px;
    ${({$images}) => {
        if ($images.length === 1) {
            return (`display: none;`)
            }
        }
    }
    @media (max-width: 768px) {
        display: none;
    }
`

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
        <CarrouselImages>
            <LeftArrow $images={images} src={leftArrow} alt="Previous" onClick={previousImage} />
            <RightArrow $images={images} src={rightArrow} alt="Next" onClick={nextImage} />
            <PageNumber $images={images}>{imageIndex + 1}/{images.length}</PageNumber>
            <CarrouselImage src={images[imageIndex]} alt="Lodging" />
        </CarrouselImages>
    )
}

export default Carrousel