import kasaLogoLight from "../../assets/logo-light.svg"
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom"
import styled from "styled-components"

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 20px;
    @media (max-width: 768px) {
        margin-top: 20px;
    }
`

const StyledLogo = styled.img`
    height: 68px;
    @media (max-width: 768px) {
        height: 47px;
    }
`

const StyledNav = styled.nav`
    display: flex;
    gap: 60px;
    font-size: 24px;
    font-weight: 500;
    @media (max-width: 768px) {
        font-size: 12px;
        gap: 12px;
        text-transform: uppercase;
    }
`

const StyledLink = styled(Link)`
    ${({$activeLink}) => {
        if ($activeLink === "active") {
            return (
                `text-decoration: underline;`
        )} else {
            return (
                `text-decoration: none;`
        )}
    }
}
`

function Header() {
    const currentLocation = useLocation();
    return (
        <StyledHeader>
            <StyledLogo src={kasaLogoLight} alt="Logo Kasa"/>
            <StyledNav>
                <StyledLink to="/" $activeLink={currentLocation.pathname === "/" ? "active" : ""}>Accueil</StyledLink>
                <StyledLink to="/about" $activeLink={currentLocation.pathname === "/about" ? "active" : ""}>À Propos</StyledLink>
            </StyledNav>
        </StyledHeader>
    )
}

export default Header