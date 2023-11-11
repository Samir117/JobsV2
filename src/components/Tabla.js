import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import FormModal from "./FormModal";
export const Tabla = ({ data, onEdit, onDelete }) => {
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredData = data.data.filter((company) =>
    company.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleAgregarOfertas = (formData) => {
    // Aquí puedes manejar los datos del formulario de ofertas
    // formData contiene los campos del formulario
    console.log(formData);

    // Cierra el modal de agregar ofertas
    setShowModal(false);
  };
  const handleEdit = (company) => {
    Swal.fire({
      title: '¿Editar empresa?',
      text: '¿Estás seguro de que deseas editar esta empresa?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, editar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        // Llama a la función proporcionada por el componente padre y pasa los datos
        if (onEdit) {
          onEdit(company);
        }
      }
    });
  };

  const handleDelete = (company) => {
    Swal.fire({
      title: '¿Borrar empresa?',
      text: '¿Estás seguro de que deseas borrar esta empresa?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, borrar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        // Llama a la función proporcionada por el componente padre para manejar la eliminación de la fila
        if (onDelete) {
          onDelete(company);


        }
      }
    });
  };

  return (
    <div className="table-responsive" style={{ maxHeight: "auto" }} >
      <div className="search-container">
        <h4 >
          Buscar:
        </h4>
        <input
          className="form-control mr-sm-1"
          style={{ width: '150px', margin: '10px' }}
          type="search"
          placeholder="Buscar ofertas"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="button">
          <button className="btn btn-primary" onClick={() => setShowModal(true)}>
            Agregar Ofertas
          </button>
        </div>
      </div>
      <FormModal show={showModal} onHide={() => setShowModal(false)} onAgregarOfertas={handleAgregarOfertas} />

      <table className="table table-bordered table-hover " >
        <thead className="thead-dark">
          <tr>
            <th style={{ backgroundColor: "#29277a", color: "white" }}>ID</th>
            <th style={{ backgroundColor: "#29277a", color: "white" }}>Nombre</th>
            <th style={{ backgroundColor: "#29277a", color: "white" }}>NIT</th>
            <th style={{ backgroundColor: "#29277a", color: "white" }}>Información</th>
            <th style={{ backgroundColor: "#29277a", color: "white" }}>Correo</th>
            <th style={{ backgroundColor: "#29277a", color: "white" }}>Teléfono</th>
            <th style={{ backgroundColor: "#29277a", color: "white" }}>Dirección</th>
            <th style={{ backgroundColor: "#29277a", color: "white" }}>Tipo de Empresa</th>
            <th style={{ backgroundColor: "#29277a", color: "white" }}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((company, index) => (
            <tr key={index}     >
              <td>{company.id}</td>
              <td>{company.nombre}</td>
              <td>{company.nit}</td>
              <td>{company.descripcion}</td>
              <td>{company.correo}</td>
              <td>{company.telefono}</td>
              <td>{company.direccion}</td>
              <td>{company.tipo_empresa}</td>
              <td style={{ textAlign: 'center' }}>
                <button className="btn btn-primary" style={{ margin: '10px' }} onClick={() => handleEdit(company)}>
                  Editar
                </button>
                <button className="btn btn-danger" onClick={() => handleDelete(company)} >
                  Borrar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

};

export default Tabla;