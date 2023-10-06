import logdings from "../../data/lodgingList.json";
import HomeBanner from "../../components/HomeBanner";
import Thumbnail from "../../components/Thumbnail";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardsWrapper = styled.section`
	background: #F6F6F6;
	border-radius: 25px;
	padding: 50px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 60px;
    margin: 40px 0;
	&::after {
		content: "";
		width: 340px;
	}
    @media (max-width: 768px) {
        margin: 20px 0;
		padding: 0;
		background: #FFFFFF;
		gap: 20px;
    }
`

function Home() {
    return (
        <main>
            <HomeBanner />
			<CardsWrapper>
				{logdings.map(({ id, title, cover }) =>
					<Link to={`/lodgings/${id}`} key={id}>
						<Thumbnail title={title} cover={cover} />
					</Link>
				)}
			</CardsWrapper>
    	</main>
    )
}

export default Home