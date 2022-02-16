import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import Sidebar from "./components/layout/Sidebar/Sidebar";
import Container from "./components/layout/Container/Container";

const AppRouter = () => {
    return (
        <>
            <Header />
            <BrowserRouter>
                <Sidebar />
                <Container>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/about" element={<About />} />
                    </Routes>
                </Container>
            </BrowserRouter>
            <Footer />
        </>
    )
}

export default AppRouter;