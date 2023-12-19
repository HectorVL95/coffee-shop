import Image from 'next/image';
import '../styles/OurStory.scss'
import bakery from '../assets/pastriesMenu.jpg'
import Button from './Button';
import btnData from '../data/btnData'

const button = btnData.map(dataEl => { return <Button dataEl={dataEl} key={dataEl.id}/> })

const OurStory = () => {
  return (
    <main className="OurStory">
      <section className='story-section'>
        <h1 className='story-h1'>Our Story</h1>
        <p className='story-p'>We are constantly surprised that what started as a small idea to simply do something well has evolved into the organization it is today. Our comapny began more than a quarter century ago in .</p>
      </section>
      <section className='story-troubador-section'>
        <Image className='bakery' src={bakery}/>
        <div className='troubador-text'>
          <h1 className='story-h1'>Troubador Bakery</h1>
          <p className='story-p'>We prepare all of our baked goods from scratch, made fresh daily at our own Troubador Bakery. Our artisan breads, pastries, cookies, croissants, and more are made with patience and skill. We believe that knowing our neighbors is important, wether they are our customer or our vendors. To that end, we value quality ingredients and source locally whenever possible</p>
        </div>
        {button[8]}
      </section>
      <section className='join-team'>
        <h1 className='story-h1'>Interested in Joining our Team ?</h1>
        <p className='story-p'>We offer a wide range of opportunities for you to explore and thrive, form warehousing to cafes, adming to bakery, and much more</p>
        {button[8]}
      </section>
    </main>
  );
}

export default OurStory;