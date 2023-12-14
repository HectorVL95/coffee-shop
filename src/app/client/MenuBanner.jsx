import '../styles/MenuBanner.scss'

const MenuBanner = ({dataEl}) => {

  return (
    <article
    className='MenuBanner'>
    <h1>{dataEl.title}</h1>
    <p>{dataEl.description}</p>
  </article>
  );
}

export default MenuBanner;