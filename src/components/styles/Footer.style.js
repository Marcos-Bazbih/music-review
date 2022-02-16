import styled from "styled-components";

const StyledFooter = styled.footer`
    grid-area: footer;
    background: ${({ mode }) => mode.background};
    color: ${({ mode }) => mode.color};
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 2px solid ${({ mode }) => mode.color};
    font-size: 2rem;
    font-weight: 900;
`;

export default StyledFooter;