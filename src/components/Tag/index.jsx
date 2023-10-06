import styled from "styled-components";

const StyledTag = styled.li`
    display: flex;
    align-items: center;
    width: max-content;
    height: 25px;
    border-radius: 10px;
    padding: 0 22px;
    background: #FF6060;
    font-size: 14px;
    font-weight: 500;
    color: #FFFFFF;
    @media (max-width: 768px) {
        height: 18px;
        border-radius: 5px;        
        padding: 0 12px;
        font-size: 10px;
    }
`

function Tag({ tag, index }) {
    return (
        <StyledTag>{tag}</StyledTag>
    )
}

export default Tag