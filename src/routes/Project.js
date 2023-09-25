import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import PricingCard from '../components/PricingCard'
import Work from '../components/Work'

const Project = () => {
  return (
    <div>
    <Navbar/>
    <HeroImg2 heading="Portföy" text="Tamamlanmış ve halihazırda üzerinde çalıştığım projeleri bu sayfada bulabilrisiniz."/>
    <Work />

    <Footer/>
    </div>
  )
}

export default Project