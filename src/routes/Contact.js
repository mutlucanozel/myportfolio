import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Form from '../components/Form'

const Contact = () => {
  const heroImageSrc = '  https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2804&q=80';

  return (
    <div>
      <Navbar />
      <HeroImg2 heading="İletişim" text="Aşağıdaki formu doldurarak veya sosyal medya hesaplarımdan bana ulaşabilirsiniz." imageSrc={heroImageSrc}/>
      <Form/>
      <Footer />
    </div>
  )
}

export default Contact