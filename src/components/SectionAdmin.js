import React from 'react';
import { useEffect, useState } from 'react';
import { Formulario } from '../components/Formulario';
import Tabla from '../components/Tabla'; // Importa tu componente de tabla
import { ofertas } from '../js/operaciones';

export const SectionAdmin = () => {
  const [jsonData, setJsonData] = useState(null);
  const [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await ofertas();
        setJsonData(data);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="table-container">
        <div className="table-content">
        <div style={{textAlign: 'center', margin:'10px'}}>
          <h1 className='display-1'>
            Tabla de Ofertas
          </h1>
        </div>
          {jsonData ? (
            <Tabla data={jsonData}  /> 
          ) : (
            <p>Cargando datos...</p>
          )}
        </div>
      </div>

      <div className='formulario'>
        <div style={{textAlign: 'center', margin:'10px'}}>
          <h1 className='display-1'>
            Agregar Ofertas
          </h1>
        </div>
        <Formulario selectedData={selectedData} setSelectedData={setSelectedData}  />
      </div>
    </>
  );
}

export default SectionAdmin;
