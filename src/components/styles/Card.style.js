import styled from "styled-components";

const StyledCard = styled.article`
    width: 30%;
    height: 30%;
    color:${({ mode }) => mode.background};
    background:${({ mode }) => mode.color};
    display:flex;
    position: relative;
`
export default StyledCard;