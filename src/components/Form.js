import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './FormStyles.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail(formData.email)) {
      toast.error('Lütfen geçerli bir mail adresi girin.', {
        position: 'top-center',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error('Lütfen tüm alanları doldurduğunzudan emin olun.', {
        position: 'top-center',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    try {
      const response = await fetch('https:mutlucanozel.xyz/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form successfully submitted.');
        window.scrollTo(0, 0);
        toast.success('Mesajınız iletildi ! Vakit ayırdığınız için teşekkür ederim.', {
          position: 'top-center',
          autoClose: 6000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          className: 'success-toast',
          onClose: () => {
            setFormData({
              name: '',
              email: '',
              subject: '',
              message: '',
            });
          },
        });
      } else {
        console.error('An error occurred during form submission.');
      }
    } catch (error) {
      console.error('An error occurred during form submission.', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h1 className="project-heading">İletişim Formu</h1>
        <label>İsim Soyisim</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <label>E-posta</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        <label>Konu</label>
        <input type="text" name="subject" value={formData.subject} onChange={handleChange} />
        <label>Mesaj</label>
        <textarea
          rows="6"
          style={{ resize: 'none' }}
          placeholder="Mesajınızı buraya yazınız..."
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button className="btn" type="submit">
          Gönder
        </button>
      </form>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default Form;