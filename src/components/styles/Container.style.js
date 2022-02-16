import styled from "styled-components";

const StyledContainer = styled.section`
    grid-area: main;
    background: ${({ mode }) => mode.background};
    color: ${({ mode }) => mode.color};
    border-left: 2px solid ${({ mode }) => mode.color};
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default StyledContainer;