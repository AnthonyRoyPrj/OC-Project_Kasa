import { useParams } from "react-router-dom"
import { Navigate } from "react-router-dom";
import logdings from "../../data/lodgingList.json";
import Carrousel from "../../components/Carrousel"
import Tag from "../../components/Tag"
import Rating from "../../components/Rating"
import Author from "../../components/Author"
import Dropdown from "../../components/Dropdown"
import styled from "styled-components";

const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-bottom: 16px; 
    @media (max-width: 768px) {
        gap: 16px;
        margin-bottom: 60px;
    }
`

const CarrouselContainer = styled.div`
    width: 100%;
    height: 415px;
    @media (max-width: 768px) {
        height: 255px;
    }
`

const SubContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 76px;
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 20px;
    }
`

const LodgingTitle = styled.h1`
    font-size: 36px;
    font-weight: 500;
    @media (max-width: 768px) {
        font-size: 18px;
    }
`
const LodgingLocation = styled.p`
    font-size: 18px;
    font-weight: 500;
    @media (max-width: 768px) {
        font-size: 14px;
    }
`

const TagList = styled.ul`
    display: flex;
    gap: 10px;
    margin-top: 20px;
`

const AuthorContainer = styled.div`
    @media (max-width: 768px) {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
    }
`

function Lodging() {
    const lodgingId = useParams();
    const currentLodging = logdings.find((lodging) => lodging.id === lodgingId.id);
     
    return (currentLodging === undefined) ? (
        <Navigate to ="/404" />
    ) : (
        <MainContainer>
            <CarrouselContainer>
                <Carrousel images={currentLodging.pictures} />
            </CarrouselContainer>
            <SubContainer>
                <div>
                    <LodgingTitle>
                        {currentLodging.title}
                    </LodgingTitle>
                    <LodgingLocation>
                        {currentLodging.location}
                    </LodgingLocation>
                    <TagList>
                        {currentLodging.tags.map((tag, index) =>  
                            <Tag tag={tag} key={`${tag}-${index}`} />
                        )}
                    </TagList>
                </div>
                <AuthorContainer>
                    <Author authorName={currentLodging.host.name} authorPicture={currentLodging.host.picture} />
                    <Rating ratingNumber={currentLodging.rating} />
                </AuthorContainer>
            </SubContainer>
            <SubContainer>
                <Dropdown page="Lodging" type="Description" text={currentLodging.description} />
                <Dropdown page="Lodging" type="Équipements" text={currentLodging.equipments} />
            </SubContainer>
        </MainContainer>
    )
}

export default Lodging