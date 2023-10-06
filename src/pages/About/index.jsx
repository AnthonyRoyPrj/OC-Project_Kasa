import AboutBanner from "../../components/AboutBanner"
import Dropdown from "../../components/Dropdown"
import about from "../../data/aboutList.json"
import styled from "styled-components"

const DropdownContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 30px auto 80px auto;
    width: 82%;
    gap: 30px;
    @media (max-width: 768px) {
        margin-top: 20px;
        width: 100%;
        gap: 20px;
    }
`

function About() {
    return (
        <main>
            <AboutBanner />
            <DropdownContainer>
                {about.map((category, index) =>
                    <Dropdown key={index} page="About" type={category.title} text={category.description} />
                )}
            </DropdownContainer>
        </main>
    )
}

export default About