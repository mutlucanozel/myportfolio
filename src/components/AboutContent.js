import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './AboutContentStyles.css';


const AboutContent = () => {
 
  return (
    
    <div className="about">
      <div className="left">
        <br></br>
        <br></br>
        <br></br>
        <h1>Ben Kimim?</h1>
        <p>Merhaba,

Ben Mutlu Can ÖZEL.Kocaeli Üniversitesi Elektronik ve haberleşme mühendisliği bölümünden Ocak ayında mezun olacağım. iOS geliştirme ve web geliştirme alanına olan ilgim, kariyerimde yeni bir sayfa açmam için beni yazılım alanına yönlendirdi.
 </p> <p>
Üniversite eğitimim boyunca, temel elektronik ve gömülü yazılım konularının işleyişini derinlemesine inceleme fırsatım oldu. Bu dönemde edindiğim analitik düşünme yeteneği ve problem çözme becerileri, şimdi iOS ve Web geliştirme alanında da beni destekliyor. İlgili bootcampler ve çeşitli kanallardaki içerikler sayesinde HTML, CSS, NodeJS, ReactJS ve Swift gibi teknolojileri öğreniyor ve bu bilgileri pratiğe dökme fırsatı buluyorum.
</p>
<p>
Mobil ve Web geliştirme konusunda tasarım estetiği ile kullanılabilirlik arasındaki dengeyi kurmaya özen gösteriyorum. Kullanıcıların ihtiyaçlarını anlamak ve bu ihtiyaçları en iyi şekilde karşılayacak arayüzler oluşturmak benim için önemlidir. Ayrıca, takım çalışmasına yatkın bir yapım olduğunu düşünüyorum ve farklı disiplinlerden gelen insanlarla işbirliği yapmayı keyifli buluyorum.</p>
   <p>Öğrenmeye ve kendimi geliştirmeye olan ilgim, yeni teknolojileri ve trendleri takip ederek devamlı güncel kalma çabamla da kendini gösteriyor.</p>
        <br></br><br></br><br></br> 
      </div>
      
    </div>
  );
};

export default AboutContent;
