import "./index.css"

function Thumbnail({ id, title, cover }) {
    return (
        <li className="thumbnail-container">
            <img src={cover} alt="Lodging" className="thumbnail-image" />
            <h2 className="thumbnail-title">{title}</h2>
        </li>
    )
}

export default Thumbnail