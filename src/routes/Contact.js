import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Form from '../components/Form'
import {FaHome, FaPhone,FaFacebook,FaInstagram, FaMailBulk, FaTwitter, FaLinkedin} from "react-icons/fa"
import githublogo from "../assets/GitHub-Logo.png"


const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="İletişim" text="Aşağıdaki formu doldurarak veya sosyal medya hesaplarımdan bana ulaşabilirsiniz."/>
      <Form/>
      <Footer />
    </div>
  )
}

export default Contact