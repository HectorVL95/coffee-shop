import React from 'react'
import '../styles/Button.scss'

const Button = ({dataEl}) => {

  return (
    <button onClick={dataEl.onButtonClick} style={{backgroundColor: `${dataEl.backgroundColor}`}} className='site-button'>
      {dataEl.txt} 
    </button>
  );
}

export default Button;