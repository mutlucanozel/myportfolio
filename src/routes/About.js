// About.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import AboutContent from '../components/AboutContent';

const About = () => {
    const heroImageSrc = 'https://images.unsplash.com/photo-1516820827855-3ea1bd6f79ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2964&q=80';

    return (
        <div>
            <Navbar />
            <HeroImg2 heading="Hakkımda" text="Bu sayfada benimle ilgili temel bilgileri edinebilirsiniz." imageSrc={heroImageSrc} />
            <AboutContent />
            <Footer />
        </div>
    );
}

export default About;
