export async function compainer() {
    try {
      const response = await fetch('http://159.223.134.9/companies');
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
      const data = await response.json();
  
      const cardContainer = document.querySelector('.section-container'); // Supongamos que tienes un elemento con la clase "section-container"
  
      if (cardContainer) {
        cardContainer.innerHTML = ''; // Limpia el contenido actual
  
        data.forEach(company => {
          // Crea un elemento div para representar una tarjeta
          const card = document.createElement('div');
          card.classList.add('card'); // Agrega una clase "card" al elemento
  
          // Crea elementos para mostrar los datos
          const nameElement = document.createElement('h2');
          nameElement.textContent = company.name;
  
          const nitElement = document.createElement('p');
          nitElement.textContent = `NIT: ${company.nit}`;
  
          const descriptionElement = document.createElement('p');
          descriptionElement.textContent = company.description;
  
          const emailElement = document.createElement('p');
          emailElement.textContent = `Email: ${company.email}`;
  
          const phoneElement = document.createElement('p');
          phoneElement.textContent = `Teléfono: ${company.phone}`;
  
          const addressElement = document.createElement('p');
          addressElement.textContent = `Dirección: ${company.address}`;
  
          // Agrega los elementos al elemento de la tarjeta
          card.appendChild(nameElement);
          card.appendChild(nitElement);
          card.appendChild(descriptionElement);
          card.appendChild(emailElement);
          card.appendChild(phoneElement);
          card.appendChild(addressElement);
  
          // Agrega la tarjeta al contenedor de tarjetas
          cardContainer.appendChild(card);
        });
  
        // Aplica estilos CSS a las tarjetas y al contenedor
        cardContainer.style.display = 'flex';
        cardContainer.style.flexWrap = 'wrap';
        cardContainer.style.gap = '10px';
  
        const cards = cardContainer.querySelectorAll('.card');
        cards.forEach(card => {
          card.style.border = '1px solid #ccc';
          card.style.padding = '10px';
          card.style.width = '300px'; // Ajusta el ancho según tus necesidades
        });
      } else {
        console.error('Elemento no encontrado');
      }
    } catch (error) {
      console.error('Ocurrió un error:', error);
    }
  }
  
  