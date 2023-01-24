
import './App.css';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [language, setLanguage] = useState("en"); //Manejo del useState para traducciones multilenguaje seteamos el lenguaje base como español
  const { t } = useTranslation(); // defino la funcion constante de la libreria i18next, con esta funcion agarro un atributo de la config de la libreria que esta en el archivo i18n.js y me devuelve el valor seteado para el idioma base actual.  
  return (
    <div className="App">
      <Navbar 
        language={language}
        setLanguage={setLanguage}
        t={t}
      />
      <Footer 
        t={t}
      />
    </div>
  );
}

export default App;
