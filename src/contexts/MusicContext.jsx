import { createContext, useState } from "react";
import ALBUMS from "../services/Albums";

export const MusicContext = createContext();

const MusicContextProvider = ({ children }) => {
    const [music, setMusic] = useState(ALBUMS);

    return (
        <MusicContext.Provider value={{ music, setMusic }}>
            {children}
        </MusicContext.Provider>
    )
}

export default MusicContextProvider;