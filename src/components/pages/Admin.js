
import { Footer } from "../Footer";

import { Container } from "reactstrap";
import Sidebar from "../Sidebar";
import Barra from "../Barra";

const Admin = ()=>{

    return (
        <div className="home-container">
            <div className="sidebar">
                <Sidebar />
            </div>
            <Barra />
            <div className="main-content">
                <Container>
                    <p>Lorem ADMINISTRADOR</p>
                </Container>
                <Footer />
            </div>
        </div>
    );
}




export default Admin;