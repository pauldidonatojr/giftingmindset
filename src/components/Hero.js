import React from 'react'
import gift from '../assets/images/giftlogo.svg'
import { useGlobalContext } from '../utils/context'
const Hero = () => {
 const { closeSubmenu } = useGlobalContext()
 return (
  <section className="hero">
   <div className="hero-center">
    <article className="hero-info">
     <h1> The Gifting Mindset</h1>
     <img src={gift} className="p-image" alt="phone" />
     <p>
      If you are ready to change your life you have certainly come to the right
      place at the right time. The right mindset is crucial in achieving
      success.
     </p>
     <button className="btn">Start now</button>
    </article>
    <article className="hero-images">
     <img src={gift} className="phone-img" alt="phone" />
    </article>
   </div>
  </section>
 )
}

export default Hero
