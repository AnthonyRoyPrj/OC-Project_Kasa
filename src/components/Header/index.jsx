import kasaLogoLight from "../../assets/logo-light.svg"
import { Link } from 'react-router-dom'
import styled from "styled-components"

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 20px;
`

const StyledLogo = styled.img`
    height: 68px;
    @media (max-width: 767px) {
        height: 47px;
    }
`

const StyledNav = styled.nav`
    display: flex;
    gap: 60px;
    font-size: 24px;
    font-weight: 500;
    @media (max-width: 767px) {
        font-size: 12px;
        gap: 12px;
    }
`

function Header() {
    return (
        <StyledHeader>
            <StyledLogo src={kasaLogoLight} alt="Logo Kasa"/>
            <StyledNav>
                <Link to="/">Accueil</Link>
                <Link to="/about">À Propos</Link>
            </StyledNav>
        </StyledHeader>
    )
}

export default Header