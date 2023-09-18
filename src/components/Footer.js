import { Container } from "reactstrap";


export const Footer = () => {
    return (
    
        <footer  className="footerStyle text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <h4>Contáctanos</h4>
              <p>Teléfono: (123) 456-7890</p>
              <p>Email: info@tuempresa.com</p>
            </div>
            <div className="col-md-6 col-lg-3">
              <h4>Síguenos en Redes Sociales</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-3">
              <h4>Enlaces Útiles</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Acerca de Nosotros</a>
                </li>
                <li>
                  <a href="#">Política de Privacidad</a>
                </li>
                <li>
                  <a href="#">Términos y Condiciones</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-3">
              <h4>Boletín de Noticias</h4>
              <p>Suscríbete para recibir actualizaciones</p>
              <form>
                <div className="form-group box">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Tu correo electrónico"
                  />
                </div>
                <button className="btn btn-primary">Suscribirse</button>
              </form>
            </div>
          </div>
        </div>
        <div className="text-center mt-3">
          &copy; {new Date().getFullYear()} Jobs. Todos los derechos reservados.
        </div>
      </footer>
    
    )
}