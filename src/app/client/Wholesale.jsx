import '../styles/Wholesale.scss'
import Button from './Button';
import btnData from '../data/btnData'
import offerData from '../data/offerData'
import Image from 'next/image';
import bus from '../assets/bus.png'
import wrench from '../assets/wrench.png'
import training from '../assets/training.png'

const Wholesale = () => {

  const button = btnData.map(dataEl => {return <Button dataEl={dataEl} key={dataEl.id}/>} )

  return (
    <main className="wholesale">
      <section className="service proudly">
        <Image src={bus} alt='Bus'/>
        <div className='service-text'>
        <h2>PROUDLY SERVING</h2>
        <p>Our crew is ready to work with you to fulfill your business’ coffee, tea, equipment, training, and service needs.</p>
        {button[6]}
        </div>
      </section>
      <section className='offer'>
        <div className='offer-text'>
        <h2>WHAT WE OFFER</h2>
        <p>We're committed to serving the highest-quality food, drinks, and equipment and are excited to share these remarkable products with our partners.</p>
        </div>
        {offerData.map(dataEl => 
        {
        return <div className='offers'>
          <Image src={dataEl.img} alt={dataEl.alt}/>
          <h2>{dataEl.title}</h2>
          <p>{dataEl.description}</p>
        </div>})}
      </section>
      <section className="service equipment">
        <Image src={wrench} alt='Wrench'/>
        <div className='service-text'>
        <h2>Equipment & Service</h2>
        <p>We offer a full line of top quality equipment to outfit your business, including grinders, brewers and espresso machines. We also carry most accessories you may need, from airpots, insulated carafes, and scoops to steaming pitchers, tampers and Toddy iced coffee brewers. Our service team can install and maintain all types of cafe brewing equipment, as well. Our crew is extremely knowledgeable and on call 24-7 to make sure your equipment is in tip-top shape and your coffee tastes great.</p>
        </div>
      </section>
      <section className="service training">
        <Image src={training} alt='Training'/>
        <div className='service-text'>
        <h2>Full-Service Training</h2>
        <p>Our crew is ready to work with you to fulfill your business’ coffee, tea, equipment, training, and service needs.</p>
        </div>
      </section>
      <section className='form-section' >
      <form action="Submit">
        <div className='form-text-wrap'>
        <h1>READY TO GET STARTED ?</h1>
        <p>Fill out the form below and a member of our support team will be in touch </p>
        </div>
        <input type="text" placeholder='Full Name' required/>
        <input type="email" placeholder='Email Address' required/>
        <input type="telephone" placeholder='Phone Number' required/>
        <input type="text" placeholder='Company' required/>
        <input type="text" placeholder='Location' required/>
        <input type="text" placeholder='Message' required/>
        {button[7]}
      </form>
      </section>   
    </main>
  );
}

export default Wholesale;