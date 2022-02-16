import StyledHeader from "../../styles/Header.style";
import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import StyledModeBtn from "../../styles/ModeBtn.style";

const Header = () => {
    const { mode, ToggleTheme } = useContext(ThemeContext);

    return (
        <StyledHeader mode={mode}>
            <h1>Header</h1>
            <StyledModeBtn mode={mode} onClick={ToggleTheme}>Click
            </StyledModeBtn>
        </StyledHeader>
    )
}
export default Header;