import React, { useState } from 'react';

const Cards = ({ job }) => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const handleButtonClick = () => {
    console.log('Botón presionado');
  };

  return (
    <div className={`job ${isButtonHovered ? 'hovered' : ''}`}>
      <div className="job-title-container">
        <h2 className="job-title">{job.nombre}</h2>
      </div>
      <p>{job.nit}</p>
      <p>{job.descripcion}</p>
      <p>{job.correo}</p>
      <p>{job.tipo_empresa}</p>
      <p>{job.tipo_oferta}</p>
      <div className="button-container">
        <button
          className={`apply-button ${isButtonHovered ? 'hovered' : ''}`}
          onClick={handleButtonClick}
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
        >
          Aplicar
        </button>
      </div>
    </div>
  );
};

export default Cards;
