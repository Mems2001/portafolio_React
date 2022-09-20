import { useState } from 'react'
import spanish from "./json/spanish.json"
import english from "./json/english.json"
import './App.css'
import './styles/Portafolio.css'
import './styles/Contacto.css'
import './styles/Habilidades.css'
import EdCard from './components/EdCard'
import Portafolio from './components/Portafolio/Portafolio.jsx'
import Contacto from './components/Contacto'
import Habilidades from './components/Habilidades'

function App() {

  const [language, setlanguage] = useState(spanish) 

  const cambiarIdiomaS = () => {
    setlanguage (spanish)
  }  
  const cambiarIdiomaE = () => {
    setlanguage (english)
  }

  console.log (spanish)

  return (
    <>

    <header id="navegador1">

        <nav className='navegador1'>
          <span className='idiomas'>
            <button className='peque' onClick={cambiarIdiomaS}>Español</button>
            <button className='peque' onClick={cambiarIdiomaE}>English</button>
          </span>  
          <span className="nav-btn-cont"> <a className='nav-btn peque' href='#navegador1'>{language[6].title}</a></span>
          <span className="nav-btn-cont"> <a className='nav-btn peque' href='#navegador1'>{language[1].title}</a></span>
          <span className="nav-btn-cont"> <a className='nav-btn peque' href='#formacion'>{language[2].title}</a></span>
          <span className="nav-btn-cont"> <a className='nav-btn peque' href='#habilidades'>{language[3].title}</a></span>
          <span className="nav-btn-cont"> <a className='nav-btn peque' href='#portafolio'>{language[4].title}</a></span>
          <span className="nav-btn-cont"> <a className='nav-btn peque' href='#contacto'>{language[5].title}</a></span>
        </nav>

    </header> 

    <header id='navegador2'>

      <nav className='navegador2'>
        <span className='idiomas'>
            <button className='peque' onClick={cambiarIdiomaS}>Español</button>
            <button className='peque' onClick={cambiarIdiomaE}>English</button>
        </span>
      </nav>

    </header>

    <div className='specialCont'>

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
       <p className='cl5'>{language[1].content}</p>
      </div>
     
    </section>

    </div>

    <section id='formacion'>
      
      <div className='titles'>
        <h2>{language[2].title}</h2>

        <div className='form-container'>
          <EdCard content={language[2].content.uba}/>
          <EdCard content={language[2].content.academlo}/>
        </div>

      </div>
  
    </section>

    <Habilidades language={language} />

    <Portafolio language={language} />

    <Contacto language={language} />

    </>
  )
}

export default App
