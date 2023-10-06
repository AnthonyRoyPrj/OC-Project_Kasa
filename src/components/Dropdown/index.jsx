import upArrow from "../../assets/upArrow.svg";
import downArrow from "../../assets/downArrow.svg";
import { useState } from "react";
import styled from "styled-components";

const EquipmentList = styled.li`
    list-style-type: none;
`

const DropdownContainer = styled.div`
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;    
    cursor: pointer;
`

const TypeContainer = styled.div`
    color: #FFFFFF;
    background-color: #FF6060;
    display: flex;
    justify-content: space-between;
    align-items: center;   
    z-index: 1;
    font-weight: 500;
    line-height: 142.6%;
    ${({$page}) => {
        if ($page === "About") {
            return (
                `
                height: 47px;
                padding: 0 18px 0 32px;
                border-radius: 5px;
                font-size: 24px;
                `
            )} else {
                return (
                    `
                    height: 52px;
                    padding: 0 10px 0 20px;
                    border-radius: 10px;
                    font-size: 18px;
                    `  
            )}
        }
    }
    @media (max-width: 768px) {
        height: 30px;        
        padding: 0 6px 0 12px;
        font-size: 13px;
    }
`

const TextContainer = styled.p`
    flex: 1;
    background-color: #F6F6F6;
    z-index: -1;
    margin-top: -10px;
    font-weight: 400;
    line-height: 142.6%;
    ${({$page}) => {
        if ($page === "About") {
            return (
                `
                height: 47px;
                padding: 30px 30px 16px 20px;
                border-radius: 5px;
                font-size: 24px;
                `
            )} else {
                return (
                    `
                    height: 52px;
                    padding: 40px 12px 30px 20px;
                    border-radius: 10px;
                    font-size: 18px;
                    `  
            )}
        }
    }
    @media (max-width: 768px) {
        font-size: 12px;
        font-style: normal;
        font-weight: 400;    
        padding: 23px 7px 2px 12px;
        border-radius: 5px;
        margin-top: -5px;
    }
`

const DownArrow = styled.img`
    @media (max-width: 768px) {
        height: 18px;
    }
`

const UpArrow = styled.img`
    @media (max-width: 768px) {
        height: 18px;
    }
`

function Dropdown({ page, type, text }) {
    const [isOpen, setIsOpen] = useState(false);
    if (type === "Équipements") {
        text = text.map((equipement, index) =>
            <EquipmentList key={index}>{equipement}</EquipmentList>
        )
    }
    return isOpen ? (
        <DropdownContainer onClick={() => setIsOpen(false)}>
            <TypeContainer $page={page}>
                {type}
                <UpArrow src={upArrow} alt="" />
            </TypeContainer>
            <TextContainer $page={page}>
                {text}
            </TextContainer>
        </DropdownContainer>
    ) : (
        <DropdownContainer onClick={() => setIsOpen(true)}>
            <TypeContainer $page={page}>
                {type}
                <DownArrow src={downArrow} alt="" />
            </TypeContainer>
        </DropdownContainer>
    )
}

export default Dropdown