import Image from "next/image";
import appStore from '../assets/appStore.png'
import googlePlay from '../assets/googlePlay.png'
import skipping from '../assets/skipping.png'
import '../styles/SkipLines.scss'

const SkipLines = () => {
  return (
    <section className="SkipLines">
      <div className="skipping-wrapper">
        <Image src={skipping} className="skipping-img"/>
      </div>
      <div className="skip-text">
        <h2>SKIP THE LINES, OPRDER AHEAD</h2>
        <p>Place an order through our app, pick it up at the cafe. Download the app to get started!</p>
        <div className='appStores-wrapper'>
          <Image className='download-place googlePlay' src={googlePlay}/>
          <Image
          className='download-place appStore' src={appStore}/>
        </div>
      </div>
    </section>
  );
}

export default SkipLines;