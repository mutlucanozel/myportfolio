import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import PricingCard from '../components/PricingCard'
import Work from '../components/Work'

const Project = () => {
  const heroImageSrc = 'https://images.unsplash.com/photo-1593000904207-7e529d2bb019?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80';

  return (
    <div>
    <Navbar/>
    <HeroImg2 heading="Portföy" text="Tamamlanmış ve halihazırda üzerinde çalıştığım projeleri bu sayfada bulabilirisiniz." imageSrc={heroImageSrc}  style={{ fontSize: '2rem' }} />
    <Work />
    <Footer/>
    </div>
  )
}

export default Project