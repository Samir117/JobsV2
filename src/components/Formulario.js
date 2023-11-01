import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useState, useEffect } from 'react';

export const Formulario = ({ editedData, handleSave }) => {
  const [id, setID] = useState(editedData ? editedData.id : "");
  const [nombre, setNombre] = useState(editedData ? editedData.nombre : "");
  const [nit, setNit] = useState(editedData ? editedData.nit : "");
  const [descripcion, setDescripcion] = useState(editedData ? editedData.descripcion : "");
  const [correo, setCorreo] = useState(editedData ? editedData.correo : "");
  const [telefono, setTelefono] = useState(editedData ? editedData.telefono : "");
  const [direccion, setDireccion] = useState(editedData ? editedData.direccion : "");



  useEffect(() => {
    if (editedData) {
      setNombre(editedData.nombre);
      setNit(editedData.nit);
      setDescripcion(editedData.descripcion);
      setCorreo(editedData.correo);
      setTelefono(editedData.telefono);
      setDireccion(editedData.direccion);
    }
  }, [editedData]);


  const handleSubmit = (e) => {
    e.preventDefault();

    const editedCompany = {
      "id": id,
      "nombre": nombre,
      "nit": nit,
      "descripcion": descripcion,
      "correo": correo,
      "telefono": telefono,
      "direccion": direccion,
    };
    handleSave(editedCompany);
  };




  return (
    <div >
      <h1 className='display-1'style={{ textAlign: 'center', margin: '10px' }}>
        Editar Ofertas
      </h1>

      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="1" controlId="validationCustom01">
            <Form.Label>ID</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="id"
              value={id}
              onChange={(e) => setID(e.target.value)}
              readOnly
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom02">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom02">
            <Form.Label>NIT</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="NIT"
              value={nit}
              onChange={(e) => setNit(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="2" controlId="validationCustom02">
            <Form.Label>Información</Form.Label>
            <Form.Control
              required
              as="textarea"
              rows={4}
              name="descripcion"
              placeholder="descripcion"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Correo</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} md="3" controlId="validationCustom03">
            <Form.Label>Telefono</Form.Label>
            <Form.Control
              type="texto"
              placeholder="Telefono"
              required
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Porfavor ingrese un numero valido
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>Dirrecion</Form.Label>
            <Form.Control
              type="text"
              placeholder="Dirrecion"
              required
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Porfavor ingrese una dirrecion valida.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button type="submit">Submit form</Button>
      </Form>
    </div>
  );
}

export default Formulario;