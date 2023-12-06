import React, {useState, useEffect} from 'react'
import Image from 'next/image';
import '../styles/ImageSlider.scss'
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs"

const ImageSlider = ({dataEl}) => {
  const[slide, setSlide] = useState(0)

  function nextSlide(){
    setSlide(slide === dataEl.length - 1 ? 0 : slide + 1)
  } 

  function prevSlide(){
    setSlide(slide === 0 ? dataEl.length - 1 : slide - 1)
  }
  return (
    <section 
    className='carousel'>
      <BsArrowLeftCircleFill  onClick={prevSlide} className='arrow arrow-left'/>
      {dataEl.map((item, idx)=>{return <Image src={item.src} alt={item.src} key={item.idx} className={slide === idx ? 'slide' : 'slide-hidden'} width='auto' height='auto'/>})}
      <BsArrowRightCircleFill onClick={nextSlide} className='arrow arrow-right'/>
      <span className='indicators'>
        {dataEl.map((item,_, idx)=>{
          return <button key={idx} onClick={null} className={slide === idx ?'indicator' : 'indicator-inactive'}>{item.id}</button>
          })}
      </span>
    </section>
  );
}

export default ImageSlider;