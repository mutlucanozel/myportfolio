import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { saveAs } from 'file-saver'; 
import './AboutContentStyles.css';
import pdfFile from '../assets/mutlucanozelozgecmis.pdf';


const AboutContent = () => {
 
  const handleDownloadClick = () => {
    // Fetch the PDF file
    fetch(pdfFile)
      .then((response) => response.blob())
      .then((blob) => {
        // Use file-saver to save the Blob as a file
        saveAs(blob, 'Mutlu_Can_OZEL_OZGECMIS');
      })
      .catch((error) => console.error('Error fetching PDF:', error));
  };
  return (
    
    <div className="about">
      <div className="left">
        <br></br>
        <br></br>
        <br></br>
        <h1>Ben Kimim?</h1>
        <p>Merhaba,

Ben Mutlu Can ÖZEL. Kocaeli Üniversitesi Elektronik ve Haberleşme mühendisliği bölümünden mezun oldum ve 2024 haziran ayından beri BYB etiket bünyesinde yazılım sorumlusu olarak çalışmaktayım.
 </p> <p>
Üniversite eğitimim boyunca, temel elektronik ve gömülü yazılım konularının işleyişini derinlemesine inceleme fırsatım oldu. Bu dönemde edindiğim analitik düşünme yeteneği ve problem çözme becerileri, şimdi Web geliştirme alanında da beni desteklemekte. İlgili bootcampler ve çeşitli kanallardaki içerikler sayesinde HTML, CSS, ASP.CORE MVC gibi teknolojileri öğreniyor ve bu bilgileri pratiğe dökme fırsatı buluyorum.
</p>
<p>
Mobil ve Web geliştirme konusunda tasarım estetiği ile kullanılabilirlik arasındaki dengeyi kurmaya özen gösteriyor, kullanıcıların ihtiyaçlarını anlamak ve bu ihtiyaçları en iyi şekilde karşılayacak arayüzler oluşturmak için  responsive geliştirmeler yapıyorum. Ayrıca, takım çalışmasına yatkın bir yapım olduğunu düşünüyor ve farklı disiplinlerden gelen insanlarla işbirliği yapmayı keyifli buluyorum.</p>
   <p>Benimle ilgili daha detaylı bilgi sahibi olmak için linkedin profilime göz gezdirebilirsiniz.</p>
   <button 
    className="btn4" 
    onClick={() => window.open('https://www.linkedin.com/in/mutlucanozel/', '_blank')}
>
    LİNKEDİN ADRESİ
</button>


  <br></br><br></br><br></br> 
  
      </div>
 
    </div>
    
  );
};

export default AboutContent;
