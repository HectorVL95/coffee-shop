'use client'
import React, {useEffect, useState} from 'react'
import Image from 'next/image';
import logo from '../assets/colectivo-logo.png'
import menuBtn from '../assets/menuBtn.svg'
import '../styles/Header.scss'
import Link from 'next/link';
import signIn from '../assets/account-white.svg'
import cart from '../assets/cart-white.svg'

const Header = () => {
  const[showNav, setShowNav]= useState(false)

  function showNavbar(){
    setShowNav(!showNav)
  }

  useEffect(()=>{
    function handleResize(){
      setShowNav(window.innerWidth >= 990)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return()=>{
      window.removeEventListener('resize', handleResize)
    }
    
  }, [])

  return (
    <header>
      <div className='header-icons'>
        <Link href='/'>
        <Image className='logo-shop' src={logo} width={140} height='auto' alt='logo'/>
        </Link>
        <div className='icons-wrapper'>
            <Link href='/signIn'>
              <Image className='signIn' src={signIn}  width={25} height='auto' alt='sign in'/>
            </Link>  
            <div className='cart-wrapper'>
            <Image className='icon cart' src={cart} width={25} height='auto' alt='cart'/>
            <span className='cartItem'>0</span>
          </div>
          <Image className='burgerMenu' src={menuBtn} width={25} height='auto' onClick={showNavbar} alt='burguer menu'/>
        </div>
      </div>
      {showNav &&
      <nav className={`header-nav`}>
        <ul>
          <li><Link href='/menu'>Menu</Link> </li>
          <li>Rewards</li>
          <li><Link href='/wholesale'>WholeSale</Link></li>
          <li><Link href='/ourStory'>Our Story</Link></li>
          <li>Shop</li>
        </ul>
      </nav>}
    </header>
  );
}

export default Header;