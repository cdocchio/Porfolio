import React from 'react'
import '../components/css/home.css'
import Imagen from '../assets/foto-perfil.jpg'
import Html from '../img/html5-svgrepo-com.svg'
import Css from '../img/css3-svgrepo-com.svg'
import Js from '../img/javascript-svgrepo-com.svg'
function Home() {
  return (
      <main>
    <div className='title'>
           <h1>  Hola, soy Conni.</h1>
            <h1>Soy Jr Front-end</h1>
     </div>
       <section className="about">
        <div>
          <img src={Imagen} alt='pictureimg'></img>
             <div className="text">
                 <h1> Un poco sobre mí</h1>
                   <p>En febrero de 2022, me decidí a buscar alternativas profesionalmente, asi que retome un hobbie que tenia cuando era mas chica.
                      Me gustaba mucho personalizar blogs, usaba HTML aunque no sepa en ese momento lo que era y vea muchos videos de tutoriales, me encantaba el poder hacer cosas por la compu.
                      el hecho de aprender cosas nuevas constantemente me da mucha motivación.
                 </p>
      </div>
     <button className='cv'>
       <a href='/'>CV</a>
         </button>
            </div>
      
      </section>
     
      <section className='skills'>
      <div className='images'>
          <img src={Html} alt='HTML Logo'/>
          <img src={Css} alt='CSS logo'/>
          <img src={Js} alt='JavaScript logo'/>
      </div>
      </section>     
      
    </main>
    
    
    
     
      
        
     
      
     
    

  )
}

export default Home