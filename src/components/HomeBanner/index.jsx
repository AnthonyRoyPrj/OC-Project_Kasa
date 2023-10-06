import bannerImage from "../../assets/homeImage.png";
import BannerContainer from "../BannerContainer";
import styled from "styled-components";

const BannerImage = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${bannerImage});
    background-size: cover;
    background-position: center center;
    margin-top: 40px;
    @media (max-width: 768px) {
        margin-top: 0;
        border-radius: 10px;
    }
`

const Title = styled.h1`
    color: #FFFFFF;
    font-size: 48px;
    font-weight: 500;
    border-radius: inherit;
    @media (max-width: 768px) {
        width: 220px;
        align-self: start;
        font-size: 24px;
        margin-left: 16px;
    }
`

function HomeBanner() {
    return (
        <BannerContainer>
            <BannerImage>
                <Title>
                    Chez vous, partout et ailleurs
                </Title>
            </BannerImage>
        </BannerContainer>
    )
}

export default HomeBanner