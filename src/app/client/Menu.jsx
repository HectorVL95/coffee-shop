import React from 'react'
import '../styles/Menu.scss'
import Image from 'next/image'
import breakfast from '../assets/breakfast1.jpg'
import craftDrinks from '../assets/craft-drink.jpg'
import pastries from '../assets/pastries.jpg'
import Link from 'next/link'


const Menu = () => {
  return (
    <main className='Menu'>
      <section className='menu-presentation'>
        <h1>Explore Our Menu</h1>
        <p>Since 1993, we have been sourcing coffees from origin and roasting every batch by hand. We are proud to offer our Session Roasted™ coffees in addition to Letterbox Fine Tea. We also prepare all of our own baked goods and savory food from scratch, made fresh daily at our own Troubadour Bakery.</p>
      </section>
      <section className='menu-sections'>
        <div className='menu-wrapper'>
        <Link href={'/foodMenu'}>
        <Image src={breakfast} alt="Breakfast" />
        <p>VIEW FOOD <span>↣</span></p>
        </Link>
        </div>

        <div className='menu-wrapper'>
        <Link href={'/drinkMenu'}>
        <Image src={craftDrinks} alt="Craft Drinks" />
        <p>VIEW DRINKS <span>↣</span></p>
        </Link>
        </div>

        <div className='menu-wrapper'>
        <Link href={'/pastriesMenu'}>
        <Image src={pastries} alt="Pastries" />
        <p>VIEW PASTRIES <span>↣</span></p>
        </Link>
        </div>
      </section>
    </main>
  );
}

export default Menu;