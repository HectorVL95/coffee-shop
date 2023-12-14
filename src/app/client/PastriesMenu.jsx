import MenuSelection from './MenuSelection.jsx'
import menuData from '../data/menuData'
import MenuBanner from './MenuBanner.jsx'
import bannerData from '../data/bannerData.js'
import '../styles/MenuSection.scss'
import SkipLines from './SkipLines.jsx'

const PastriesMenu = () => {
  const menu = menuData.map(dataEl => {return <MenuSelection 
    dataEl={dataEl} 
    key = {dataEl.id}/>})

    const banner = bannerData.map(dataEl => {return <MenuBanner dataEl={dataEl} key={dataEl.id}/>})
  

  return (
    <main className='Menu'>
    {banner[2]}
   <section className='menu-selection'>
      {menu[6]}
      {menu[7]}
      {menu[8]}
    </section>
    <SkipLines/>
  </main>
  );
}

export default PastriesMenu;

