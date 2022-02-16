import styled from "styled-components";

const StyledModeBtn = styled.button`
    cursor: pointer;
    background: ${({ mode }) => mode.background};
    color: ${({ mode }) => mode.color};
    border: 2px solid ${({ mode }) => mode.color};
    display:flex;
    align-items:center;
    position:absolute;
    right: 5vw;
    /* border-radius:50%; */
    padding:5px 10px;
    transition:0.2s ease-in-out;
    &:hover{
        background: ${({ mode }) => mode.color};
        color: ${({ mode }) => mode.background};
    }
`;

export default StyledModeBtn;