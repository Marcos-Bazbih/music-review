import StyledCard from "../../styles/Card.style";
import { useContext } from "react";
import { MusicContext } from "../../../contexts/MusicContext";
import { ThemeContext } from "../../../contexts/ThemeContext";
import StyledModeBtn from "../../styles/ModeBtn.style";

const AlbumCard = ({ album }) => {
    const { music, setMusic } = useContext(MusicContext);
    const { mode } = useContext(ThemeContext);

    const DeleteAlbum = (id) => {
        setMusic(music.filter((item) => item.id !== id))
    }

    return (
        <StyledCard mode={mode}>
            <StyledModeBtn  mode={mode} onClick={() => { DeleteAlbum(album.id) }}>X</StyledModeBtn>
            <h1>Album: {album.name}</h1>
            <h1>Artist: {album.artist}</h1>
            <h1>Rating: {album.rating}</h1>
        </StyledCard>
    )
}

export default AlbumCard;