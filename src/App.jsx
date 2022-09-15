import { useState } from 'react'
import spanish from "./json/spanish.json"
import english from "./json/english.json"
import './App.css'
import './styles/Portafolio.css'
import EdCard from './components/EdCard'
import Portafolio from './components/Portafolio/Portafolio.jsx'

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
          <button className='peque' onClick={cambiarIdiomaS}>Español</button>
          <button className='peque' onClick={cambiarIdiomaE}>English</button>
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
       <p className='cl5'>{language[1].content}</p>
      </div>
     
    </section>

    <section id='formacion'>
      
      <div className='titles'>
        <h2>{language[2].title}</h2>

        <div className='form-container'>
          <EdCard content={language[2].content.uba}/>
          <EdCard content={language[2].content.academlo}/>
        </div>

      </div>
  
    </section>

    <section id='habilidades'>
      
      <div className='titles'>
       <h2>{language[3].title}</h2>
       
       <div className='hab-container'>
          <div className='hab'>
            <h3 className='hab-titles'>{language[3].content.web.title}</h3>
            <div className='hab-container1'>
              <span className='hab-logo-cont'><img className='hab-logo' src='https://cdn-icons-png.flaticon.com/512/5968/5968496.png'/></span>
              <span className='hab-logo-cont'><img className='hab-logo' src='https://cdn-icons-png.flaticon.com/512/29/29600.png'/></span>
              <span className='hab-logo-cont'><img className='hab-logo' src='https://cdn-icons-png.flaticon.com/512/1/1492.png'/></span>
            </div>
          </div>


          <div className='hab'>
            <h3 className='hab-titles'>{language[3].content.lang.title}</h3>
            <div>
              <ul>
                <li>
                  <div className='lang-cont'>
                    <span className='cl7'><b>{language[3].content.lang.content.spanish[0]} :</b></span>
                    <span className='cl7'>{language[3].content.lang.content.spanish[1]}</span>
                    <span className='barraIdioma'>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </span>
                  </div>
                </li>
                <li>
                  <div className='lang-cont'>
                    <span className='cl7'><b>{language[3].content.lang.content.english[0]} :</b></span>
                    <span className='cl7'>{language[3].content.lang.content.english[1]}</span>
                    <span className='barraIdioma'>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
       </div>
      </div>
      
    </section>

    <Portafolio language={language} />

    <section id='contacto'>
      
      <div className='titles'>
       <h2>{language[5].title}</h2> 
      </div>
      
    </section>

    </>
  )
}

export default App
