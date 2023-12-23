import '../styles/Contact.scss'
import Image from 'next/image';
import csr from '../assets/csr-rep.png'

const Contact = () => {
  return (
    <section className='Contact'>
      <Image className='csr' src={csr}/>
      <h1>Have A question ?</h1>
      <div className='contact-txt-wrap'>
        <p>Message one of our awesome customer support members - email anytime</p>
        <p><u>coffeshop@shopcofee.com</u> or call <u>312-847-9909</u> between 8am - 4pm CT, Monday through Friday</p>
      </div>
    </section>
  );
}

export default Contact;