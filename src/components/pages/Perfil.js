import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "reactstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import imagenDatos1 from "../../assets/Datos1.jpg";
import { Footer } from "../Footer";
import Sidebar from "../Sidebar";
import Barra from "../Barra";
import Swal from "sweetalert2";


const Configuration = () => {
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [telefono, setTelefono] = useState("");

  const handlePerfil = async (e) => {
    e.preventDefault();

    let nombresEnviar = nombres !== "" ? nombres : usuario.nombres;
    let apellidosEnviar = apellidos !== "" ? apellidos : usuario.apellidos;
    let telefonoEnviar = telefono !== "" ? telefono : usuario.telefono;

    
    try {
      let url = "http://159.223.134.9:3000/usuarios/" + usuario.id
      const response = await fetch(
        url,
       {
         method: "PUT",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify({
           nombresEnviar,
           apellidosEnviar,
           telefonoEnviar,
         }),
       }
     );
 
     if (response.status === 200) {
       Swal.fire({
         icon: "success",
         title: "Información actualizada!",
         timer: 2000,
         timerProgressBar: true,
         showConfirmButton: false,
       });
     }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  
  };

  return (
    <div className="home-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <Barra />
      <div className="main-content">
        <Container className="Gridcontainer">
          <Row>
            <Col xs={12} md={6}>
              <Form className="forms" onSubmit={handlePerfil}>
                <Row className="mb-3">
                  <Form.Group as={Col} xs={5} controlId="nombre">
                    <Form.Label>Nombres : </Form.Label>
                    {usuario.nombres && (
                      <Form.Control
                        type="text"
                        placeholder={usuario.nombres}
                        onChange={(e) => setNombres(e.target.value)}
                      />
                    )}
                  </Form.Group>

                  <Form.Group as={Col} xs={5} controlId="apellido">
                    <Form.Label>Apellidos : </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={usuario.apellidos}
                      onChange={(e) => setApellidos(e.target.value)}
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} xs={5} controlId="numeroDcoumento">
                    <Form.Label>Numero de Identificación : </Form.Label>
                    <Form.Control
                      type="number"
                      disabled={true}
                      placeholder={usuario.documento}
                    />
                  </Form.Group>

                  <Form.Group as={Col} xs={5} controlId="email">
                    <Form.Label>Correo Institucional : </Form.Label>
                    <Form.Control
                      disabled={true}
                      type="text"
                      placeholder={usuario.email}
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} xs={5} controlId="txtProfesion">
                    <Form.Label>Programa</Form.Label>
                    <Form.Select disabled={true} defaultValue="Choose...">
                      <option>Ingenieria de Sistemas y Computacion</option>
                      <option>Ingenieria de Sistemas y Computacion</option>
                      <option>Ingenieria Industrial</option>
                      <option>
                        Administracion integral de riesgos de seguridad y salud
                        en el trabajo
                      </option>
                      <option>Administracion Financiera</option>
                      <option>Contaduria Pública</option>
                      <option>Licenciatura en pedagogia infantil</option>
                      <option>
                        Licenciatura en Educacion Fisica, Recreación y Deporte
                      </option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} xs={5} controlId="Id">
                    <Form.Label>Telefono : </Form.Label>
                    <Form.Control
                      placeholder={usuario.telefono}
                      onChange={(e) => setTelefono(e.target.value)}
                    />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Acepto Terminos y Condiciones"
                  />
                </Form.Group>

                <Button className="button" variant="primary" type="submit">
                  Actualizar
                </Button>
              </Form>
            </Col>
            <Col xs={12} md={6}>
              <Image
                className="image1 img-fluid d-sm-block"
                src={imagenDatos1}
                alt="Datos 1"
              />
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </div>
  );
};

export default Configuration;
