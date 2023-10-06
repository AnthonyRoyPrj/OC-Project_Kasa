import "./index.css"

function BannerContainer(props) {
    return (
        <div className="banner-container">
            { props.children }
        </div>
    )
}

export default BannerContainer