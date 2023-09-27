
import { Footer } from "../Footer";
import { Banner } from "../Banner";
import { Section } from "../Section";
import { Container } from "reactstrap";

const Home = () => {


    return (
        <div>
            <Banner />
            <Container>
                <Section />
            </Container>
            <Footer />
        </div>

    );
}

export default Home;