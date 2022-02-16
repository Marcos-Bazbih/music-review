import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import StyledSidebar from "../../styles/Sidebar.style";
import StyledSidebarLink from "../../styles/SidebarLink.style";

const Sidebar = () => {
    const { mode } = useContext(ThemeContext);
    return (
        <StyledSidebar mode={mode}>
            <StyledSidebarLink mode={mode} to={"/"}>
                Home
            </StyledSidebarLink>
            <StyledSidebarLink mode={mode} to={"/about"}>
                About
            </StyledSidebarLink>
        </StyledSidebar>
    )
}
export default Sidebar;