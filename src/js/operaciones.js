//API SE OBTIENEN LA LISTA DE EMPRESAS REGISTRADAS
export async function ofertas() {
    try {
        const response = await fetch('http://159.223.134.9:3000/companies');
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error('Error en la solicitud');
        }
    } catch (error) {
        console.error('Ocurrió un error:', error);
        throw error; 
    }
}

