import React from 'react'

const Habilidades = ({ language }) => {
  return (
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
              <span className='hab-logo-cont'><img className='hab-logo' src='./src/img/reactLogo.png' /></span>
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
                      <div className='barraEspañol'></div>
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
  )
}

export default Habilidades