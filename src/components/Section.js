import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import {  ofertas } from '../js/operaciones';

export const Section = () => {
  const [jsonData, setJsonData] = useState(null);

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
    <div>
      <div>
        {jsonData && jsonData.data.map((job, index) => (
          <Cards key={index} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Section;
