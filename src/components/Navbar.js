import React from 'react';
import '../components/css/navbar.css'
import  Menu  from '../components/icons/menu.png'
import { changeLanguage } from 'i18next';

function Navbar({language, setLanguage, t}) {
  const handleLanguageSwitch = () => { // esta funcion es la que esta con el onclick del boton de idioma.
    setLanguage(language === "es" ? "en" : "es"); // define el valor del estado del boton de idioma, si el lenguaje es igual a español lo cambia a ingles sino lo cambia a español.
    changeLanguage(language); // finalmente cambio el lenguaje actual por el valor que le asigne.
  };
  return (
    <nav>
 <div className='navbar-left'>       
    <img src={Menu} alt="menu" className='menu'></img>
    <a className='name' href='/'>Constanza D'Occhio</a>
      <ul>
        <li><a href='/'>{t('Inicio')}</a></li>
         <li><a href='/'>{t('Proyectos')}</a></li>

      </ul>

  </div>

        <div className='navbar-right'> 
        <ul>

        <button onClick={handleLanguageSwitch} className='btn-lenguage'> {/* con el onclick llamo a la funcion de lenguaje que defini al principio */}
        {t("Idioma")}</button> {/* es un if que me va aparecer en el boton con la variable lenguage despues tengo que hacer lo mismo con los otros componentes cada uno que tenga texto*/}
        <button className='btn-contact'>
        <a href='/'>{t('Contacto')}</a></button>
        
        </ul>
       
 </div>
 <div id='mobile'>
  <i className=''></i>
 </div>
    </nav>
  )
}

export default Navbar