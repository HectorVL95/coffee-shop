import React from 'react'
import '../styles/Main.scss'
import Image from 'next/image';
import ImageSlider from './ImageSlider';
import slidesData from '../data/slidesData';
import productTable from '../assets/product-on-table.jpg'
import Button from './Button';
import btnData from '../data/btnData'
import boxes from '../assets/boxes.png'
import merch from '../assets/merch.webp'
import webShopping from '../assets/web-shopping.png'
import getApp from '../assets/getApp.png'
import getTheAppText from '../assets/getTheAppText.png'
import appStore from '../assets/appStore.png'
import googlePlay from '../assets/googlePlay.png'
import Link from 'next/link';

const Main = () => {

 const button = btnData.map((dataEl) =>{
  return <Button dataEl={dataEl} key={dataEl.id}/>
 })

  return (
    <main className='main-page'>
      <section className='exclusive'>
        <p className='web-exclusive-text'>WEBSTORE EXCLUSIVE:</p><p className='new-item-text'> New Misewell Dunes Mug</p>
      </section>
      <ImageSlider dataEl={slidesData}/>
      <section className='see-menu'>
      <div className='pic-wrapper'>
          <Image className='picOnMain' src={productTable} alt='Product Table'/>
          <div className='btn-wrapper'>
            <p className='bold-text'>Our menu for you to view!</p>
            {button[0]}
            <p className='descriptions'>A variety of products for the different tastest, we keep the highest quality.</p>
          </div>
        </div>
        <div className='pic-wrapper'>
          <Image className='picOnMain' src={boxes} alt='Boxes'/>
          <div className='btn-wrapper'>
            <p className='bold-text'>Box Gifts!</p>
            {button[1]}
            <p className='descriptions'>Delightful gift boxes featuring chocolates, tea, and of course-more coffee!</p>
          </div>
        </div>
        <div className='pic-wrapper'>
          <Image className='picOnMain' src={merch} alt='merch'/>
          
          <div className='btn-wrapper'>
            <p className='bold-text'>New merch!</p>
            {button[1]}
            <p className='descriptions'>Unwrap a world of our coffee shop with our latest merch. keep checking in for new arrivals!</p>
          </div>
        </div>
      </section>
      <section className='shop-web-section'>
        <Image className='picOnMain webShopping' src={webShopping} alt='Web Shopping'/>
        <p className='bold-text bold-text-black'>
        Shop the webstore
        </p>
        <div className='description-wrapper'>
          <p className='descriptions-smaller'>
          Not near a cafe? No problem! We'll ship it! Shop our specialty coffees, Letterbox teas, gift cards, mugs, merch and more. FREE shipping over $45.
          </p>
        </div>
        {button[3]}
      </section>
      <section className='getApp-section'>
        <div className='getApp-wrapper'>
          <Image className='picOnMain getApp' src={getApp} alt='Get App'/>
        </div>
        <div className='getAppText-wrapper'>
          <Image className='getAppText' src={getTheAppText} alt='Get App'/>
          <div className='app-text-wrap'>
          <p className='bold-text bold-text-black bold-text-white'>Download our Coffee Shop App to enjoy mobile ordering, earn and redeem points on your cafe favorites, simple payment, earn a free bag of coffee on your birthday, and more. Sign-up is easy, download the app to get started</p>
          </div>
          <div className='appStores-wrapper'>
            <Image className='download-place googlePlay' src={googlePlay} alt='Google Play'/>
            <Image
            className='download-place appStore' src={appStore} alt='App Store'/>
          </div>
        </div>
      </section>
    </main>
    
  );
}

export default Main;