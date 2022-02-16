import StyledFooter from "../../styles/Footer.style";
import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";

const Footer = () => {
    const { mode } = useContext(ThemeContext);

    return (
        <StyledFooter mode={mode}>
            <h1>Footer</h1>
        </StyledFooter>
    )
}
export default Footer;