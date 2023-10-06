import bannerImage from "../../assets/aboutImage.png";
import BannerContainer from "../BannerContainer";
import styled from "styled-components";

const BannerImage = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${bannerImage});
    background-size: cover;
    background-position: center center;
    @media (max-width: 768px) {
        border-radius: 10px;
    }
`

function HomeBanner() {
    return (
        <BannerContainer>
            <BannerImage>
            </BannerImage>
        </BannerContainer>
    )
}

export default HomeBanner