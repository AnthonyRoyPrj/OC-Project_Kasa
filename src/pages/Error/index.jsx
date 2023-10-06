import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ErrorWrapper = styled.main`
    text-align: center;
`

const StyledErrorType = styled.h1`
    margin-top: 130px;
    margin-bottom: 40px;
    font-size: 288px;
    font-weight: 700;
    @media (max-width: 767px) {
        margin-bottom: 12px;
        font-size: 99px;
    }
`

const StyledErrorMessage = styled.p`
    font-size: 36px;
    font-weight: 500;
    @media (max-width: 767px) {
        font-size: 18px;
    }
`

const StyledLink = styled(Link)`
    display: block;
    margin-top: 180px;
    margin-bottom: 150px;
    font-size: 18px;
    font-weight: 500;
    text-decoration: underline;
    @media (max-width: 767px) {
        margin-top: 130px;
        margin-bottom: 200px;
        font-size: 14px;
    }
`

function Error() {
    return (
        <ErrorWrapper>
            <StyledErrorType>
                404
            </StyledErrorType>
            <StyledErrorMessage>
                Oups! La page que vous demandez n'existe pas
            </StyledErrorMessage>
            <StyledLink to="/">
                Retourner sur la page d'accueil
            </StyledLink>
        </ErrorWrapper>
    )
}

export default Error