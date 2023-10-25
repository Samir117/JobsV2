import Swal from 'sweetalert2';

export async function compainer() {
    try {
        const response = await fetch('http://159.223.134.9:3000/companies');
        if (!response) {
            throw new Error('Error en la solicitud');
        }
        const data = await response.json();
        const cardContainer = document.querySelector('.section-container'); // Supongamos que tienes un elemento con la clase "section-container"

        if (cardContainer) {
            cardContainer.innerHTML = ''; // Limpia el contenido actual

            data.data.forEach(company => {
                // Crea un elemento div para representar una tarjeta
                const card = document.createElement('div');
                card.classList.add('card'); // Agrega una clase "card" al elemento
                card.style.alignItems=  'center';


                // Crea elementos para mostrar los datos
                const nameElement = document.createElement('h2');
                nameElement.textContent = company.nombre

                const nitElement = document.createElement('p');
                nitElement.textContent = `NIT: ${company.nit}`;

                const descriptionElement = document.createElement('p');
                descriptionElement.textContent = company.informacion;

                const emailElement = document.createElement('p');
                emailElement.textContent = `Email: ${company.correo}`;

                const phoneElement = document.createElement('p');
                phoneElement.textContent = `Teléfono: ${company.telefono}`;

                const addressElement = document.createElement('p');
                addressElement.textContent = `Dirección: ${company.direccion}`;

                const button = document.createElement('button')
                button.classList.add('button-primary');
                button.textContent = 'Aplicar';

                // Establece estilos en línea (atributo style)
                button.style.backgroundColor = 'rgb(0,86,179)';
                button.style.color = 'white';
                button.style.padding = '10px 20px';
                button.style.borderRadius='10px';
                button.style.maxWidth='50%';

                // Agrega los elementos al elemento de la tarjeta
                card.appendChild(nameElement);
                card.appendChild(nitElement);
                card.appendChild(descriptionElement);
                card.appendChild(emailElement);
                card.appendChild(phoneElement);
                card.appendChild(addressElement);
                card.appendChild(button)

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
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: ' NO EXISTE',
                footer: '<a href="">Necesitas ayuda?</a>',
                container: 'myModal',
                target: document.getElementById('myModal')
            })        }
    } catch (error) {
        console.error('Ocurrió un error:', error);
    }
}






