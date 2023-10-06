import BannerContainer from "../BannerContainer";
import "./index.css"

function HomeBanner() {
    return (
        <BannerContainer>
            <div className="home-banner-image">
                <h1 className="banner-title">
                    Chez vous, partout et ailleurs
                </h1>
            </div>
        </BannerContainer>
    )
}

export default HomeBanner