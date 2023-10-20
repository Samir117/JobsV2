import React from 'react';
import { compainer } from '../js/operaciones';
import  { useEffect, useState } from 'react';



export const Section = () => {

  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await compainer();
        setJsonData(data);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    }

    fetchData();
  }, []);
  return (
    <div className="section-container">
    <div className="section-content">
      {jsonData && (
          <pre>
            {JSON.stringify(jsonData, null, 2)}
          </pre>
        )}
    </div>
    <div className="button-container">
      <button className="right-button">Aplicar</button>
    </div>
  </div>
  );
}

export default Section;
