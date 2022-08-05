import { useState } from 'react'
import spanish from "./json/spanish.json"
import english from "./json/english.json"
import './App.css'

function App() {

  const [language, setlanguage] = useState(spanish) 

  const cambiarIdiomaS = () => {
    setlanguage (spanish)
  }  
  const cambiarIdiomaE = () => {
    setlanguage (english)
  }  

  return (
    <>

    <header id="navegador1">

        <span className='idiomas'>
          <button onClick={cambiarIdiomaS}>Español</button>
          <button onClick={cambiarIdiomaE}>English</button>
        </span>  

        <nav className='navegador1'>
          <span className="nav-btn-cont"> <a className='nav-btn peque' href='#navegador1'>Home</a></span>
          <span className="nav-btn-cont"> <a className='nav-btn peque' href='#navegador1'>{language[1].title}</a></span>
          <span className="nav-btn-cont"> <a className='nav-btn peque' href='#formacion'>{language[2].title}</a></span>
          <span className="nav-btn-cont"> <a className='nav-btn peque' href='#habilidades'>{language[3].title}</a></span>
          <span className="nav-btn-cont"> <a className='nav-btn peque' href='#portafolio'>{language[4].title}</a></span>
          <span className="nav-btn-cont"> <a className='nav-btn peque' href='#contacto'>{language[5].title}</a></span>
        </nav>
    </header> 

    <section id="presentacion">
      
      <div className='pres-box'>
        <div>
          <h1 className='grande cl8'>{language[0].content[0]}</h1>
          <hr></hr>
          <h1 className='muygrande cl8'>Mario Muso</h1>
        </div>
        <div className='foto'></div>
        <div>
          <p className='grande cl4'>{language[0].content[1]}</p>
        </div>
      </div>

    </section>

    <section id='acercaDeMi'>
      
      <div className='titles'>
       <h2>{language[1].title}</h2> 
      </div>
     
    </section>

    <section id='formacion'>
      
      <div className='titles'>
       <h2>{language[2].title}</h2> 
      </div>
  
    </section>

    <section id='habilidades'>
      
      <div className='titles'>
       <h2>{language[3].title}</h2> 
      </div>
      
    </section>

    <section id='portafolio'>
      
      <div className='titles'>
       <h2>{language[4].title}</h2> 
      </div>
      
    </section>

    <section id='contacto'>
      
      <div className='titles'>
       <h2>{language[5].title}</h2> 
      </div>
      
    </section>

    </>
  )
}

export default App
