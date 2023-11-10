import React from 'react';

const Cards = ({ job }) => {
  return (
    <div className="job-card">
      <h2>{job.nombre}</h2>
      <p>{job.nit}</p>
      <p>{job.descripcion}</p>
      <p>{job.correo}</p>
      <p>{job.tipo_empresa}</p>
      
      {/* Puedes mostrar más detalles del trabajo aquí */}
    </div>
  );
};

export default Cards;
