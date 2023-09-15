import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'reactstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import imagenDatos1 from '../../assets/Datos1.jpg';

const Configuration = () => {
    return (


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
                            <Form.Group as={Col} xs={5} controlId="Segundo Nombre">
                                <Form.Label>Segundo Nombre</Form.Label>
                                <Form.Control type="text" placeholder="Segundo Nombre" />
                            </Form.Group>

                            <Form.Group as={Col} xs={5} controlId="Segundo Apellido">
                                <Form.Label>Segundo Apellido</Form.Label>
                                <Form.Control type="text" placeholder="Segundo Apellido" />
                            </Form.Group>

                        </Row>

                        <Row className='mb-3'>
                            <Form.Group as={Col} xs={5} controlId="formGridState">
                                <Form.Label>Tipo Documento</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>Elegir...</option>
                                    <option>Cedula ciudadania</option>
                                    <option>Cedula Extranjera</option>
                                    <option>Pasaporte</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} xs={5} controlId="Id">
                                <Form.Label>Numero de Identificacion</Form.Label>
                                <Form.Control placeholder="1256789" />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} xs={5} controlId="Ciudad">
                                <Form.Label>Ciudad</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>Elegir...</option>
                                    <option>Barranquilla</option>
                                    <option>Medellin</option>
                                    <option>Bogota</option>
                                    <option>Cartagena</option>
                                    <option>Santa Marta</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} xs={5} controlId="Dirrecion">
                                <Form.Label>Dirrecion</Form.Label>
                                <Form.Control placeholder="Calle 80 # 5-21" />
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
                    <Image className='image1 img-fluid' src={imagenDatos1} alt="Datos 1"  />
                </Col>
            </Row>
        </Container>


    );
}

export default Configuration;