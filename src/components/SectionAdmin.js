import React from 'react';
import { useEffect, useState } from 'react';
import { Formulario } from '../components/Formulario';
import Tabla from '../components/Tabla'; // Importa tu componente de tabla
import { ofertas } from '../js/operaciones';
import Swal from 'sweetalert2';

export const SectionAdmin = () => {
 const [jsonData, setJsonData] = useState(null);
  const [editedData, setEditedData] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null); // Estado para la fila seleccionada

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


  const handleEdit = (company) => {
    setEditedData(company);
    setSelectedRow(company); // Actualiza la fila seleccionada
  };





  const handleSave = async (editedCompany) => {
    console.log(editedCompany);
    const id = editedCompany.id; 

    try {
      const response = await fetch(`http://159.223.134.9:3000/companies/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedCompany),
      
      });
  
      if (response.ok) {        // Los datos se guardaron correctamente en la base de datos
        Swal.fire({
          icon: 'success',
          title: 'Datos Actualizados correctamente',
            timer: 2000,
      timerProgressBar: true,
      showConfirmButton:false
        });
        window.location.reload();

      } else {
        // Error al guardar los datos
      }
    } catch (error) {
      console.error('Error al enviar datos al servidor:', error);
    }
  };

  const handleDelete = (company) => {
    // Realiza una solicitud DELETE al servidor para eliminar la fila en la base de datos
    fetch(`http://159.223.134.9:3000/companies/${company.id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          Swal.fire({
            icon: 'success',
            title: 'Borrado exitoso',
              timer: 2000,
        timerProgressBar: true,
        showConfirmButton:false
          }); 
          window.location.reload();
          const updatedData = jsonData.data.data.map((item) => item.id !== company.id);
          setJsonData(updatedData);
        
        } else {
          // Maneja errores si la eliminación en el servidor falla
          console.error('Error al eliminar la empresa.');
        }
      })
      .catch((error) => {
        console.error('Error al eliminar la empresa:', error);
      });

  };
  

  return (
    <>
      <div className="table-container" style={{ width: 'auto', margin: '0 auto', marginLeft: 'auto' }}>
        <div className="table-content" style={{ textAlign: 'center', margin: '10px' }}>
          <h1 className='display-1'>
            Tabla de Ofertas
          </h1>
        </div>
        {jsonData !== null ? (
          <Tabla data={jsonData} onEdit={handleEdit} setEditedData={setEditedData} onDelete={handleDelete} />
        ) : (
          <p>Cargando datos...</p>
        )}
      </div>


      <div className='formulario'>
        <div style={{ textAlign: 'center', margin: '10px' }}>
          <h1 className='display-1'>
            Editar Ofertas
          </h1>
        </div>
        {editedData && (
          <Formulario editedData={editedData} selectedRow={selectedRow} handleSave={handleSave} />
        )}

      </div>
    </>
  );
}

export default SectionAdmin;
