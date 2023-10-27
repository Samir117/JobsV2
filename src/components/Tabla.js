import React from "react";
import { useState } from "react";

export const Tabla = ({ data, handleDelete,setSelectedData,handleEdit }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [ setEditedCompany] = useState(null); // Estado para los datos de la empresa editada

    const filteredData = data.data.filter((company) =>
        company.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const editCompany = (company) => {
        setSelectedData(company);
    };


    return (
        <div className="table-responsive">
            <input
                className="form-control mr-sm-1"
                style={{ width: '150px', margin: '10px' }}
                type="search"
                placeholder="Buscar ofertas"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <table className="table table-bordered table-hover " style={{ maxHeight: "500px", overflowY: "auto" }}>
                <thead className="thead-dark">
                    <tr>
                        <th style={{ backgroundColor: "#29277a", color: "white" }}>Nombre</th>
                        <th style={{ backgroundColor: "#29277a", color: "white" }}>NIT</th>
                        <th style={{ backgroundColor: "#29277a", color: "white" }}>Información</th>
                        <th style={{ backgroundColor: "#29277a", color: "white" }}>Correo</th>
                        <th style={{ backgroundColor: "#29277a", color: "white" }}>Teléfono</th>
                        <th style={{ backgroundColor: "#29277a", color: "white" }}>Dirección</th>
                        <th style={{ backgroundColor: "#29277a", color: "white" }}>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((company, index) => (
                        <tr key={index}     style={{ backgroundColor: index % 2 === 0 ? "#29277a" : "white" }}>
                            <td>{company.nombre}</td>
                            <td>{company.nit}</td>
                            <td>{company.informacion}</td>
                            <td>{company.correo}</td>
                            <td>{company.telefono}</td>
                            <td>{company.direccion}</td>
                            <td style={{ textAlign: 'center' }}>
                                <button className="btn btn-primary" style={{ margin: '10px' }} onClick={() => editCompany(company)} >
                                    Editar
                                </button>
                                <button className="btn btn-danger" onClick={() => handleDelete(company)}>
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