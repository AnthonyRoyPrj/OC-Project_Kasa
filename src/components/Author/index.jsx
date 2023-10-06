import "./index.css"

function Author({ authorName, authorPicture }) {
    const dissociatedAuthorName = authorName.split(" ");
    return (
        <div className="author-container">
            <div className="author-name-container">
                <p>{dissociatedAuthorName[0]}</p>
                <p>{dissociatedAuthorName[1]}</p>
            </div>
            <img src={authorPicture} alt={authorName} className="author-picture" />
        </div>
    )
}

export default Author