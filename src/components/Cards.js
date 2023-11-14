import React, { useState } from 'react';

const Cards = ({ job }) => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isPostulado, setPostularte] = useState(false);
  const [colorBoton, setColorBoton] = useState('blue');
  const [textoBoton, setTextoBoton] = useState('Postularte');

  const handleButtonClick = () => {
    setColorBoton('red');
    setTextoBoton('Postulado');
  };

  return (
    <div className={`job-card ${isButtonHovered ? 'hovered' : ''}`}>
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
          style={{ backgroundColor: colorBoton }}
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
        >
           {textoBoton}
        </button>
      </div>
    </div>
  );
};

export default Cards;
