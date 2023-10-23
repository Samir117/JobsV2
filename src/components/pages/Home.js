
import { Footer } from "../Footer";
import { Banner } from "../Banner";
import { Section } from "../Section";
import { Container } from "reactstrap";
import Sidebar from "../Sidebar";
import Barra from "../Barra";

const Home = () => {
    return (
        <div className="home-container">
            <div className="sidebar">
                <Sidebar />
            </div>
            <Barra />
            <div className="main-content">
                <Banner />
                <Container>
                    <Section />
                </Container>
                <Footer />
            </div>
        </div>
    );
}

export default Home;