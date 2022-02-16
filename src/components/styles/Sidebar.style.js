import styled from "styled-components";

const StyledSidebar = styled.nav`
    grid-area: sidebar;
    background: ${({ mode }) => mode.background};
    color: ${({ mode }) => mode.color};
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    grid-area: sidebar;
`;

export default StyledSidebar;