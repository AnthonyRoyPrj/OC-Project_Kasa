import kasaLogoDark from "../../assets/logo-dark.svg"
import styled from "styled-components"

const FooterWrapper = styled.footer`
    height: 144px;
    padding-top: 66px;
    background-color: #000000;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`

const StyledText = styled.p`
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 500;
    @media (max-width: 767px) {
        font-size: 12px;
    }
`

function Footer() {
    return (
        <FooterWrapper>
            <img src={kasaLogoDark} alt="Logo Kasa" />
            <StyledText>
                © 2020 Kasa. All rights reserved
            </StyledText>
        </FooterWrapper>
    )
}

export default Footer