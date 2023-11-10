import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import { compainer } from '../js/operaciones';

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
    <div>
      <div>
        {jsonData && jsonData.map((job, index) => (
          <Cards key={index} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Section;
