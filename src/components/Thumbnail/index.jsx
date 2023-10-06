import styled from "styled-components"

const StyledThumbnail = styled.li`
    position: relative;
    width: 340px;
    height: 340px;
    list-style-type: none;
    border-radius: 10px;
    @media (max-width: 768px) {
        width: 100%;
    }
`

const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
`

const StyledTitle = styled.h2`
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(0, 0, 0, 0.50) 100%);
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: flex-end;
    color: #FFFFFF;
    border-radius: inherit;
    padding: 20px;
    box-sizing: border-box;
    font-size: 18px;
    font-weight: 500;
`

function Thumbnail({ id, title, cover }) {
    return (
        <StyledThumbnail>
            <StyledImage src={cover}/>
            <StyledTitle>{title}</StyledTitle>
        </StyledThumbnail>
    )
}

export default Thumbnail