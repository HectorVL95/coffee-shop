import MenuSelection from './MenuSelection.jsx'
import menuData from '../data/menuData'
import MenuBanner from './MenuBanner.jsx'
import bannerData from '../data/bannerData.js'
import '../styles/MenuSection.scss'
import SkipLines from './SkipLines.jsx'

const DrinkMenu = () => {

  const menu = menuData.map(dataEl => {return <MenuSelection 
    dataEl={dataEl} 
    key = {dataEl.id}/>})

    const banner = bannerData.map(dataEl => {return <MenuBanner dataEl={dataEl} key={dataEl.id}/>})
  

  return (
    <main className='Menu'>
    {banner[1]}
    <section className='menu-selection'>
      {menu[3]}
      {menu[4]}
      {menu[5]}
    </section>
    <SkipLines/>
  </main>
  );
}

export default DrinkMenu;