"use client"
import Image from 'next/image';
import React from 'react';
import '../styles/MenuSelection.scss'
import Button from './Button';
import btnData from '../data/btnData'

const MenuSelection = ({dataEl}) => {

  const button = btnData.map((dataEl) =>{
    return <Button dataEl={dataEl} key={dataEl.id}/>
   })

  return (
    <section className='MenuSelection'>
      <Image className='menuImg' src={dataEl.imgSrc} alt={dataEl.alt}/>
      <div className='item-text-wrap'>
      <p className='itemName'>{dataEl.itemName}</p>
      <p className='itemDescription'>{dataEl.itemDescription}</p>
      <p className='itemPrice'>{dataEl.price}</p>
      </div>
      {button[5]}
    </section>
  );
}

export default MenuSelection;