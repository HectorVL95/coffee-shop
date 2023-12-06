import React, {useEffect, useState} from 'react'
import Image from 'next/image';
import logo from '../assets/colectivo-logo.png'
import menuBtn from '../assets/menuBtn.svg'
import '../styles/Header.scss'

const Header = () => {
  const[showNav, setShowNav]= useState(false)
  const[screenWidth, setScreenWidth] = useState(window.innerWidth)

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
        <Image className='logo-shop' src={logo} width={140} height='auto' alt='logo'/>
        <Image className='burgerMenu' src={menuBtn} width={25} height='auto' onClick={showNavbar} alt='burguer menu'/>
      </div>
      {showNav &&
      <nav className={`header-nav`}>
        <ul>
          <li>Menu</li>
          <li>Rewards</li>
          <li>WholeSale</li>
          <li>Our Story</li>
        </ul>
      </nav>}
    </header>
  );
}

export default Header;