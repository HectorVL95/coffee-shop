'use client'
import React from 'react'
import '../styles/Button.scss'

const Button = ({dataEl, onClick}) => {

  return (
    <button onClick={onClick} style={{backgroundColor: `${dataEl.backgroundColor}`}} className='site-button'>
      {dataEl.txt} 
    </button>
  );
}

export default Button;