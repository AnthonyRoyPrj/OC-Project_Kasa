import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 223px;
`

function BannerContainer(props) {
    return (
        <Container>
            { props.children }
        </Container>
    )
}

export default BannerContainer