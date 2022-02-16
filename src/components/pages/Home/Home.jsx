import { useContext } from "react";
import { MusicContext } from "../../../contexts/MusicContext";
import AlbumCard from "../../patrials/AlbumCard/AlbumCard";
import StyledCardsContainer from "../../styles/CardContainer";

const Home = () => {
    const { music } = useContext(MusicContext);

    return (
        <>
            <h1>Home</h1>
            <StyledCardsContainer>
                {
                    music && music.length !== 0 ? (
                        music.map((album) => (
                            <AlbumCard key={album.id} album={album} />
                        ))
                    ) :
                        <h1>No music yet</h1>
                }
            </StyledCardsContainer>
        </>
    )
}

export default Home;