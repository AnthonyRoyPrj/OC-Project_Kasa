import AboutBanner from "../../components/AboutBanner"
import Dropdown from "../../components/Dropdown"
import about from "../../data/aboutList.json"
import "./index.css"

function About() {
    return (
        <main>
            <AboutBanner />
            <div className="about-dropdown-container">
                {about.map((category, index) =>
                    <Dropdown key={index} page="About" type={category.title} text={category.description} />
                )}
            </div>
        </main>
    )
}

export default About