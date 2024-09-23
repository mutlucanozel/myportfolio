const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const validator = require('validator');
const nodemailer = require('nodemailer');
const fs = require('fs');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// API route for form submission
app.post('/submit-form', async (req, res) => {
  const formData = req.body;

  // Email validation
  if (!validator.isEmail(formData.email)) {
    return res.status(400).json({ error: 'Geçerli bir e-posta adresi girmelisiniz. Bu e-posta adresi kullanılmayacaktır.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail', 
      auth: {
        user: 'deneme1999827@gmail.com', 
        pass: 'ajusqktnqvzlrkfm', 
      },
    });

    const mailOptions = {
      from: 'deneme1999827@gmail.com',
      to: 'mutlu-26@hotmail.com',
      subject: formData.subject,
      text: `Gönderen: ${formData.name}\nE-posta: ${formData.email}\nKonu: ${formData.subject}\nMesaj: ${formData.message}`,
    };

    await transporter.sendMail(mailOptions);
    console.log(formData);
    res.json({ message: 'Form verileri başarıyla alındı ve e-posta gönderildi.' });
  } catch (error) {
    console.error('E-posta gönderimi sırasında bir hata oluştu.', error);
    res.status(500).json({ error: 'E-posta gönderimi sırasında bir hata oluştu.' });
  }
});

// Dinamik sitemap.xml oluşturma
app.get('/sitemap.xml', (req, res) => {
  const baseUrl = 'https://www.mutlucanozel.com';
  
  // Sitemap içerikleri (örnek sayfalar)
  const pages = [
    { url: '/', lastmod: '2024-09-23T12:36:00+00:00' },
    { url: '/about', lastmod: '2024-09-23T12:36:00+00:00' },
    { url: '/contact', lastmod: '2024-09-23T12:36:00+00:00' },
    { url: '/project', lastmod: '2024-09-23T12:36:00+00:00' },
    // Diğer sayfaları buraya ekleyebilirsiniz
  ];

  // XML formatında sitemap oluşturma
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  pages.forEach(page => {
    sitemap += `<url>\n`;
    sitemap += `  <loc>${baseUrl}${page.url}</loc>\n`;
    sitemap += `  <lastmod>${page.lastmod}</lastmod>\n`;
    sitemap += `</url>\n`;
  });

  sitemap += `</urlset>`;

  // XML olarak yanıt döndürme
  res.header('Content-Type', 'application/xml');
  res.send(sitemap);
});

// Diğer rotalar ve middleware
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor.`);
});
