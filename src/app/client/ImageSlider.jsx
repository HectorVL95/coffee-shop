import React, {useState, useEffect, startTransition} from 'react'
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

  function autoSlide(){
    nextSlide()
  };

  useEffect(()=> {
    const intervalId = setInterval(autoSlide, 3000)

    return () => clearInterval(intervalId);
  }, [slide])

  return (
    <section 
    className='carousel'>
      <BsArrowLeftCircleFill  onClick={prevSlide} className='arrow arrow-left'/>
      <div className='slider-container'>
        {dataEl.map((item, idx)=>{return <Image src={item.src} alt={item.src} key={idx} className= {`slide${slide === idx ? '-active' : '-hidden'}`} width='auto' height='auto'/>})}
        <BsArrowRightCircleFill onClick={nextSlide} className='arrow arrow-right'/>
      </div>
      <span className='indicators'>
        {dataEl.map((item, idx)=>{
          return <button key={idx} onClick={() => setSlide(idx)} className={slide === idx ? 'indicator' : 'indicator-inactive'}>{item.id}</button>
          })}
      </span>
    </section>
  );
}

export default ImageSlider;