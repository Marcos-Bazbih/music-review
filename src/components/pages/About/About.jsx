import { useContext } from "react";
import { MusicContext } from "../../../contexts/MusicContext";

const About = () => {
    const { music, setMusic } = useContext(MusicContext);
    return (
        <>
            <h1>About</h1>
            {/* {
                albums.map((item) => (
                    <h1 key={item.id}>{item.album}</h1>
                ))
            } */}
        </>
    )
}

export default About;