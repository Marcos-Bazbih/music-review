import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import StyledContainer from "../../styles/Container.style";
import MusicContextProvider from "../../../contexts/MusicContext";

const Container = ({ children }) => {
    const { mode } = useContext(ThemeContext);

    return (
        <MusicContextProvider>
            <StyledContainer mode={mode}>
                {children}
            </StyledContainer>
        </MusicContextProvider>
    )
}

export default Container;