import React from "react";


const Button = ({ styles }) => {
  function abrirNuevoTab() {
    // Abrir nuevo tab
    var win = window.open('https://wa.link/cq428q', '_blank');
    // Cambiar el foco al nuevo tab (punto opcional)
    win.focus();
  }
 
  return(
  <button onClick={abrirNuevoTab} type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    <span>Contacto</span>
  </button>
  )
};

export default Button;
