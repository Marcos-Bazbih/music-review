import styled from "styled-components";

const StyledHeader = styled.header`
    grid-area: header;
    background: ${({ mode }) => mode.background};
    color: ${({ mode }) => mode.color};
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid ${({ mode }) => mode.color};
    font-size: 2rem;
    font-weight: 900;
`;

export default StyledHeader;