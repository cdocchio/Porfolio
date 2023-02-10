import React from 'react';
import './App.css';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Projectos from './Pages/Projects';
import Contacto from './Pages/Contact';
import Inicio from './Pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
function App() {
  const [language, setLanguage] = useState("en"); //Manejo del useState para traducciones multilenguaje seteamos el lenguaje base como español
  const { t } = useTranslation(); // defino la funcion constante de la libreria i18next, con esta funcion agarro un atributo de la config de la libreria que esta en el archivo i18n.js y me devuelve el valor seteado para el idioma base actual.  
  return (
    <Router>
    <div className="App">
      

<Navbar 
        language={language}
        setLanguage={setLanguage}
        t={t}
      />
      
<Routes>

      <Route  path='proyectos' element={<Projectos/>}/>
        <Route path='contacto'element={<Contacto/>}/>
        <Route path='/' exact element={<Inicio/>} />  {/* al poner exact estoy definiendo LA RAIZ y a su vez el inicio.*/}
        <Route path='inicio'  element={<Inicio/>} />
       </Routes>

    </div>
   
    <Footer 
    t={t}
    />
  </Router>
  );
}

export default App;
