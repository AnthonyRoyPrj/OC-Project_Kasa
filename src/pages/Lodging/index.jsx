import { useParams } from "react-router-dom"
import { Navigate } from "react-router-dom";
import logdings from "../../data/lodgingList.json";
import Carrousel from "../../components/Carrousel"
import Tag from "../../components/Tag"
import Rating from "../../components/Rating"
import Author from "../../components/Author"
import Dropdown from "../../components/Dropdown"
import "./index.css"

function Lodging() {
    const lodgingId = useParams();
    const currentLodging = logdings.find((lodging) => lodging.id === lodgingId.id);
     
    return (currentLodging === undefined) ? (
        <Navigate to ="/404" />
    ) : (
        <main className="main-container">
            <div className="carrousel-container">
                <Carrousel images={currentLodging.pictures} />
            </div>
            <div className="sub-container">
                <div>
                    <h1 className="lodging-title">
                        {currentLodging.title}
                    </h1>
                    <p className="lodging-location">
                        {currentLodging.location}
                    </p>
                    <ul className="tag-list">
                        {currentLodging.tags.map((tag, index) =>  
                            <Tag tag={tag} key={`${tag}-${index}`} />
                        )}
                    </ul>
                </div>
                <div className="lodging-author-container">
                    <Author authorName={currentLodging.host.name} authorPicture={currentLodging.host.picture} />
                    <Rating ratingNumber={currentLodging.rating} />
                </div>
            </div>
            <div className="sub-container">
                <Dropdown page="Lodging" type="Description" text={currentLodging.description} />
                <Dropdown page="Lodging" type="Équipements" text={currentLodging.equipments} />
            </div>
        </main>
    )
}

export default Lodging