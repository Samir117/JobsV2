 import Sidebar from "../Sidebar";
 import Barra from "../Barra";
 import { Footer } from "../Footer";
 import { Container } from "reactstrap";
 const Dashboard =() => {

    return(
        <div className="home-container">
        <div className="sidebar">
            <Sidebar />
        </div>
        <Barra />
        <div className="main-content">
            <Container className='Gridcontainer'>

            </Container>
            <Footer />
        </div>
    </div>
    )
}

export default Dashboard;