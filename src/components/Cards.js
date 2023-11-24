import React, { useState } from 'react';
import Swal from 'sweetalert2';
const Cards = ({ job }) => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPostulado, setPostularte] = useState(false);
  const [colorBoton, setColorBoton] = useState('blue');
  const [textoBoton, setTextoBoton] = useState('Postularte');

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleButtonClick = () => {
    setColorBoton('red');
    setTextoBoton('Postulado');
    Swal.fire({
      icon: 'success',
      title: 'Postulacion exitosa',
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false
    });
  };

  return (
    <div className={`job ${isButtonHovered ? 'hovered' : ''}`}>
      <div className="job-title-container">
        <h2 className="job-title">{job.nombre}</h2>
      </div>
      <p>{job.nit}</p>
      {isExpanded ? (
        <p>{job.descripcion}</p>
      ) : (
        <p>
          {job.descripcion.length > 100 ? `${job.descripcion.slice(0, 100)}...` : job.descripcion}
          {job.descripcion.length > 100 && (
            <button onClick={toggleExpand} className="read-more-button" style={{ color: 'blue' }}>
              Leer más
            </button>
          )}
        </p>
      )}
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
          Postularte
        </button>
      </div>
    </div>
  );
};

export default Cards;
