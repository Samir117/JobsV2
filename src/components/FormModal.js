import React, { useState } from 'react';
import { Modal, Button, Form, Col, InputGroup } from 'react-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2';

function FormModal({ show, onHide, onAgregarOfertas }) {
  const [formData, setFormData] = useState({
    nombre: '',
    nit: '',
    descripcion: '',
    tipo_empresa: '',
    tipo_oferta: '',
    correo: '',
    telefono: '',
    direccion: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envía los datos del formulario al servidor utilizando Axios
    if (onAgregarOfertas) {
      axios.post('http://159.223.134.9:3000/companies', formData) // Reemplaza 'URL_DEL_API' con la URL de tu API
        .then((response) => {
          // Manejar la respuesta del servidor si es necesario
          Swal.fire({
            icon: 'success',
            title: 'Datos Registrados correctamente',
            timer: 2000,
            timerProgressBar: true,
            showConfirmButton: false
          });
          window.location.reload();
          // Cerrar la modal u realizar otras acciones según tus necesidades
          onHide();
        })
        .catch((error) => {
          // Manejar errores de la solicitud
          Swal.fire({
            icon: 'error',
            title: 'Error Al enviar Datos, contacte al administrador',
            timer: 2000,
            timerProgressBar: true,
            showConfirmButton: false
          });
          window.location.reload();
        });
    }
  };

  return (
    <Modal show={show} onHide={onHide} className='modal'>
      <Modal.Header closeButton>
        <Modal.Title>Agregar Ofertas</Modal.Title>
      </Modal.Header>
      <Modal.Body >
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>NIT</Form.Label>
            <Form.Control
              type="text"
              name="nit"
              placeholder="NIT"
              value={formData.nit}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationCustom04">
            <Form.Label>Información</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="descripcion"
              placeholder="Información"
              value={formData.descripcion}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationCustom04">
            <Form.Label>Tipo de Empresa</Form.Label>
            <Form.Control
              type="text"
              name="tipo_empresa"
              placeholder="Tipo de Empresa"
              value={formData.tipo_empresa}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>


          <Form.Group as={Col} md="4" controlId="validationCustom07">
            <Form.Label>Seleccionar Opción</Form.Label>
            <Form.Select
              name="tipo_oferta"
              value={formData.opcion}
              onChange={handleChange}
              required
            >
              <option value="">Tipo de Oferta </option>
              <option value="11">Administracion Financiera</option>
              <option value="10">Administracion integral de riesgos de seguridad y salud en el trabajo</option>
              <option value="12">Contaduria Pública'</option>
              <option value="8">Ingenieria de Sistemas y Computacion'</option>
              <option value="9">Ingenieria Industrial</option>
              <option value="14">Licenciatura en Educacion Fisica, Recreación y Deporte'</option>
              <option value="12">Licenciatura en pedagogia infantil</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Correo</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                name="correo"
                placeholder="Correo"
                value={formData.correo}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Por favor ingrese un correo válido.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Telefono</Form.Label>
            <Form.Control
              type="text"
              name="telefono"
              placeholder="Telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Por favor ingrese un número válido.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="3" controlId="validationCustom06">
            <Form.Label>Dirección</Form.Label>
            <Form.Control
              type="text"
              name="direccion"
              placeholder="Dirección"
              value={formData.direccion}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Por favor ingrese una dirección válida.
            </Form.Control.Feedback>
          </Form.Group>

          <Button style={{ margin: '5px' }} type="submit">Agregar Ofertas</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default FormModal;
