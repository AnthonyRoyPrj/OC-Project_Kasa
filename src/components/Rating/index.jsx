import star from "../../assets/ratingStar.svg"
import styled from "styled-components";

const RatingWrapper = styled.div`
    display: flex;
    gap: 10px;
    width: 175px;
    height: 24px;
    margin-top: 24px;
    @media (max-width: 768px) {
        gap: 6px;
        height: 16px;
        margin-top: 0;
    }
`

const StyledStar = styled.img`
    ${(props) =>
        props.$fullStar &&
        `filter: invert(69%) sepia(67%) saturate(4986%) hue-rotate(322deg) brightness(100%) contrast(110%);`
    }    
    ${(props) =>
        props.$emptyStar &&
        `filter: invert(100%) sepia(71%) saturate(5704%) hue-rotate(181deg) brightness(131%) contrast(78%);`
    }
`

function Rating({ ratingNumber }) {
    const range = [1, 2, 3, 4, 5];

    return (
        <RatingWrapper>
            {range.map((rangeElem) =>
                ratingNumber >= rangeElem ? <StyledStar src={star} alt="Colored Rating Star" key={`rating-star-${rangeElem}`} $fullStar/> : <StyledStar src={star} alt="Uncolored Rating Star" key={`rating-star-${rangeElem}`} $emptyStar/>
            )}
        </RatingWrapper>
    )
}

export default Rating