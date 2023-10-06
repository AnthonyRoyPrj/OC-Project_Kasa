import styled from "styled-components";

const AuthorContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
`
const AuthorNameContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    font-size: 18px;
    font-weight: 500;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`

const AuthorPicture = styled.img`
    width: 64px;
    height: 64px;
    border-radius: 32px;
    @media (max-width: 768px) {
        width: 32px;
        height: 32px;
        border-radius: 16px;
    }
`

function Author({ authorName, authorPicture }) {
    const dissociatedAuthorName = authorName.split(" ");
    return (
        <AuthorContainer>
            <AuthorNameContainer>
                <p>{dissociatedAuthorName[0]}</p>
                <p>{dissociatedAuthorName[1]}</p>
            </AuthorNameContainer>
            <AuthorPicture src={authorPicture} alt={authorName} />
        </AuthorContainer>
    )
}

export default Author