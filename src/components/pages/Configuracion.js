import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'reactstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import imagenDatos1 from '../../assets/Datos1.jpg';
import {Footer} from '../../components/Footer';

const Configuration = () => {
    return (
        <div>
            <Container className='Gridcontainer'>
                <Row>
                    <Col xs={6}>
                        <Form className='forms'>
                            <Row className="mb-3">
                                <Form.Group as={Col} xs={5} controlId="nombre">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control type="tex" placeholder="Nombre" />
                                </Form.Group>

                                <Form.Group as={Col} xs={5} controlId="apellido">
                                    <Form.Label>Apellido</Form.Label>
                                    <Form.Control type="text" placeholder="Apellido" />
                                </Form.Group>
                            </Row>

                            <Row className='mb-3'>
                                <Form.Group as={Col} xs={5} controlId="txtsemestre">
                                    <Form.Label>Semestre</Form.Label>
                                    <Form.Control type="number" placeholder="0" />
                                </Form.Group>

                                <Form.Group as={Col} xs={5} controlId="Segundo Apellido">
                                    <Form.Label>Segundo Apellido</Form.Label>
                                    <Form.Control type="text" placeholder="Segundo Apellido" />
                                </Form.Group>

                            </Row>

                            <Row className='mb-3'>
                                <Form.Group as={Col} xs={5} controlId="txtProfesion">
                                    <Form.Label>Programa</Form.Label>
                                    <Form.Select defaultValue="Choose...">
                                        <option>Elegir...</option>
                                        <option>Ingenieria de Sistemas y Computacion</option>
                                        <option>Ingenieria Industrial</option>
                                        <option>Administracion integral de riesgos de seguridad y salud en el trabajo</option>
                                        <option>Administracion Financiera</option>
                                        <option>Contaduria Pública</option>
                                        <option>Licenciatura en pedagogia infantil</option>
                                        <option>Licenciatura en Educacion Fisica, Recreación y Deporte</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group as={Col} xs={5} controlId="Id">
                                    <Form.Label>Numero de Identificacion</Form.Label>
                                    <Form.Control placeholder="1256789" />
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} xs={5} controlId="Dirrecion">
                                    <Form.Label>Dirección</Form.Label>
                                    <Form.Control placeholder="Calle 80 # 5-21" />
                                </Form.Group>
                                <Form.Group as={Col} type ="email" xs={5} controlId="Correo">
                                    <Form.Label>Correo Institucional</Form.Label>
                                    <Form.Control placeholder="@ul.edu.co" />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" id="formGridCheckbox">
                                <Form.Check type="checkbox" label="Acepto Terminos y Condiciones" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Actualizar
                            </Button>
                        </Form>

                    </Col>
                    <Col xs={6}>
                        <Image className='image1 img-fluid' src={imagenDatos1} alt="Datos 1" />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>

    );
}

export default Configuration;