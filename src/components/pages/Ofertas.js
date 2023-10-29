
import Sidebar from "../Sidebar";
import { Footer } from "../Footer";
import Barra from "../Barra";
import { Container } from "reactstrap";
import { useAuth } from '../../token/Auth';
import {SectionAdmin} from '../SectionAdmin';

 const Ofertas = () => {
    const { setAdmin } = useAuth();
  

    return (
        <div className="home-container">
            <div className="sidebar">
            <Sidebar  isAdmin={setAdmin}  />
            </div>
            <Barra />
            <div className="main-content">
                <Container className='Gridcontainer' >
                    <div >
                     <SectionAdmin />
                    </div>
                </Container>
                <Footer />
            </div>
        </div>

    )

}


export default Ofertas;