import React from 'react'
import '../styles/Footer.scss'
import Image from 'next/image'
import sessionsCoffee from '../assets/session-coffee.png'
import appStore from '../assets/appStore.png'
import googlePlay from '../assets/googlePlay.png'
import fbIcon from '../assets/fbIcon.svg'
import igIcon from '../assets/igIcon.svg'
import vimeoIcon from '../assets/vimeoIcon.svg'


const Footer = () => {
  return (
    <footer>
      <section className='ul-lists'>
        <ul>
          <li className='ul-title'>MENU</li>
          <li>Menu</li>
          <li>Our App</li>
          <li>Wholesale</li>
          <li>Fundraising</li>
        </ul>
        <ul>
          <li className='ul-title'>COMPANY</li>
          <li>About</li>
          <li>News</li>
          <li>Careers</li>
          <li>Contact</li>
          <li>The Back Room</li>
        </ul>
        <ul>
          <li className='ul-title'>SHOP</li>
          <li>Coffee</li>
          <li>Gift Cards</li>
          <li>Subscriptions</li>
          <li>Letterbox Teas</li>
          <li>Retail</li>
          <li>FAQ</li>
          <li>My Account</li>
        </ul>
        <ul>
          <li className='ul-title'>Rewards</li>
          <li>Learn More</li>
          <li>Register / Log in</li>
          <li>FAQ</li>
          <li>Gift Card Balance</li>
        </ul>
      </section>
      <section className='stayNtouch-section'>
        <p className='stayNtouch-title'>Stay in Touch</p>
        <p className='stayNtouch-text'>Join our coffee lovers community and be the first to know about our news, promotions and more!</p>
        <form className='subscribe' action="">
          <input type="Email" placeholder='Email'/>
          <button>Subscribe</button>
        </form>
      </section>
      <section className='social-section'>
        <div className='session-wrap'>
          <Image className='session-coffee' src={sessionsCoffee}/>
        </div>
        <div className='download-stores'>
          <Image className='download-place gplay' src={googlePlay}/>
          <Image
          className='download-place appstore' src={appStore}/>
        </div>
      </section>
      <section className='social-media-icons'>
          <Image src={fbIcon}/>
          <Image src={igIcon}/>
          <Image src={vimeoIcon}/>
      </section>
      <section className='footer-about'>
        <p className='copyright'>© COFFEE SHOP ROASTERS, INC. 2023</p>
        <p>We’re committed to making our website accessible to users of all abilities.</p>
      </section>
    </footer>
  );
}

export default Footer;