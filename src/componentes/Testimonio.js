import React from "react";
import '../hojas-css/Testimonio.css'

function Testimonio(props) {
  return (
     <div className='contenedor-testimonio'>
        <img 
          className='imagen-testimonio'
          src={require('../imagenes/testi-cara1.jpg')}
          alt='Foto de Cara1'/>
          <div className='contenedor-texto-testi'>
            <p className='nombre-testi'>{props.nombre} en {props.pais}</p> 
            <p className='cargo-testi'>{props.cargo} en {props.empresa}</p>
            <p className='texto-testi'>"{props.testimonio}"</p>
          </div>

     </div>
  );
}
export default Testimonio;