
import { Footer } from "../Footer";
import { Banner } from "../Banner";
import { Section } from "../Section";
import { Container } from "reactstrap";
import Sidebar from "../Sidebar";
import Barra from "../Barra";

const Home = ({userNombre}) => {
    console.log(userNombre)
    return (
        <div className="home-container">
            <div className="sidebar">
                <Sidebar />
            </div>
            <Barra userNombre= {userNombre} />
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