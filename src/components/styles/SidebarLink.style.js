import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledSidebarLink = styled(Link)`
    font-size: 2rem;
    font-weight: 900;
    padding: 10px 0;
    text-decoration: none;
    color: ${({ mode }) => mode.color};
    width: 50%;
    transition: transform 0.2s ease-in-out;
    &:hover{
        transform: scale(1.4);
    }
`;

export default StyledSidebarLink;