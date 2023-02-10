import React from 'react';
import { useState } from 'react';
import '../components/css/navbar.css'
import { changeLanguage } from 'i18next';



function Navbar({language, setLanguage, t,}) {
  const handleLanguageSwitch = () => { // esta funcion es la que esta con el onclick del boton de idioma.
    setLanguage(language === "es" ? "en" : "es"); // define el valor del estado del boton de idioma, si el lenguaje es igual a español lo cambia a ingles sino lo cambia a español.
    changeLanguage(language); // finalmente cambio el lenguaje actual por el valor que le asigne.
    

  };
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
  <nav>
    <div className='navbar-left '>     
    <a className='name' href='/'>Constanza D'Occhio</a>
    <button className='icon'onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
        </svg>
    </button>
    <div className={isNavExpanded ? "" : "navbar-left"  }>  {/*Fijarse bien que pasa aca ver bien las clases. y la función*/}
     <ul>
        <li><a href='/inicio'>{t('INICIO')}</a></li>
         <li><a href='/proyectos'>{t('PROYECTOS')}</a></li>
       
      </ul>
   
     </div>
  </div>

        <div className='navbar-right'> 
        <ul>
        <button onClick={handleLanguageSwitch} className='btn-lenguage'> {/* con el onclick llamo a la funcion de lenguaje que defini al principio */}
        {t("IDIOMA")}</button> {/* es un if que me va aparecer en el boton con la variable lenguage despues tengo que hacer lo mismo con los otros componentes cada uno que tenga texto*/}
        <button className='btn-contact'>
        <a href='/contacto'>{t('CONTACTO')}</a></button>
        
        </ul>
       
 </div>
 
    </nav>
  )
}

export default Navbar