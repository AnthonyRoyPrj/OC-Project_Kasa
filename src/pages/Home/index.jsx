import logdings from "../../data/lodgingList.json";
import HomeBanner from "../../components/HomeBanner";
import Thumbnail from "../../components/Thumbnail";
import { Link } from "react-router-dom";
import "./index.css"

function Home() {
    return (
        <main>
            <HomeBanner />
			<section className="thumbnails-container">
				{logdings.map(({ id, title, cover }) =>
					<Link to={`/lodgings/${id}`} key={id}>
						<Thumbnail title={title} cover={cover} />
					</Link>
				)}
			</section>
    	</main>
    )
}

export default Home