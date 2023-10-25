
import Sidebar from "../Sidebar";
import { Footer } from "../Footer";
import Barra from "../Barra";
import { Container } from "reactstrap";


 const Ofertas = () => {

    return (
        <div className="home-container">
            <div className="sidebar">
            <Sidebar  />
            </div>
            <Barra />
            <div className="main-content">
                <Container className='Gridcontainer' >
                    <div>
                  
                            <li>
                                Formliario de CRUD de Ofertas
                            </li>

                            <li>
                                Buscador de ofertas que cargue la oferta en el form y la permita editas y actualizar
                            </li>

                            <li>
                                Buscador de Ofertas
                            </li>
                     <li>
                        Tabla de Ofertas
                     </li>
                    </div>
                </Container>
                <Footer />
            </div>
        </div>

    )

}


export default Ofertas;