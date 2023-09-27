import imagenDatos2 from '../assets/img1.png';

export const Banner=()=> {
 

  return (
        <div className="banner">
          <img src={imagenDatos2} alt="Imagen del banner" />
          <h1>Mi Banner</h1>
          <p>Este es el contenido de mi banner.</p>
        </div>
      );
    }
    

export default Banner;
