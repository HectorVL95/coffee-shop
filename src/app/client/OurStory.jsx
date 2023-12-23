import Image from 'next/image';
import '../styles/OurStory.scss'
import baker from '../assets/baker.png'
import Button from './Button';
import btnData from '../data/btnData'
import vivaColectivo from '../assets/vivacolectivo.png'
import atOriginBus from '../assets/atOriginBus.png'
import foodPartners from '../assets/foodPartners.png'

const button = btnData.map(dataEl => { return <Button dataEl={dataEl} key={dataEl.id}/> })

const OurStory = () => {
  return (
    <main className="OurStory">
      <section className='story-section'>
        <div className='story-text-wrapper'>
          <h1 className='story-h1'>Our Story</h1>
          <p className='story-p'>We are constantly surprised that what started as a small idea to simply do something well has evolved into the organization it is today. Our comapny began more than a quarter century ago in .</p>
        </div>
        <Image className='vivaColectivo' src={vivaColectivo} />
      </section>
      <section className='atOrigin storyBackground'>

          <Image className='story-img' src={atOriginBus}/>
          <div className='story-text-wrapper'>
            <h1 className='story-h1'>Coffee Shop At Origin</h1>
            <p className='story-p'>Our goal is to deliver a great coffee experience. This means staying involved in every step of the process, developing close partnerships with farmers and cooperatives around the world, and traveling to meet them whenever we can.</p>
            </div>

      </section>
      <section className='story-troubador-section storyBackground'>
    
          <Image className='story-img' src={baker}/>
          <div className='story-text-wrapper'>
            <h1 className='story-h1'>Troubador Bakery</h1>
            <p className='story-p'>We prepare all of our baked goods from scratch, made fresh daily at our own Troubador Bakery. Our artisan breads, pastries, cookies, croissants, and more are made with patience and skill. We believe that knowing our neighbors is important, wether they are our customer or our vendors. To that end, we value quality ingredients and source locally whenever possible</p>
            {button[8]}
          </div>
         
 
      </section>
      <section className='foodPartners storyBackground'>

          <Image className='story-img' src={foodPartners}/>
          <div className='story-text-wrapper'>
            <h1 className='story-h1'>Local Food Partners</h1>
            <p className='story-p'>We are proud to work with local farmers and producers around the Midwest, who provide us with the highest quality local ingredients available.</p>
          </div>

      </section>
      <section className='join-team storyBackground'>

          <div className='story-text-wrapper'>
            <h1 className='story-h1'>Interested in Joining our Team ?</h1>
            <p className='story-p'>We offer a wide range of opportunities for you to explore and thrive, form warehousing to cafes, adming to bakery, and much more</p>
            {button[8]}
          </div>

      </section>
    </main>
  );
}

export default OurStory;