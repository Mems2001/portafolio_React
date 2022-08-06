import React from 'react'

const EdCard = ({content}) => {

  return (
    <div className='card1'>
      <img src={content[3]}/>
      <div className='card1-body'>
        <p className='card1-body-text'><b>{content[0]}</b></p>
        <p className='card1-body-text'>{content[1]}</p>
        <p className='card1-body-text'>{content[2]}</p>
      </div>
    </div>
  )
}

export default EdCard