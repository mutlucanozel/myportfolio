const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const validator = require('validator');
const nodemailer = require('nodemailer');

const app = express();
const socket = new WebSocket('wss://www.mutlucanozel.com.tr');

socket.addEventListener('open', (event) => {
    console.log('WebSocket bağlantısı başarılı.');
    // Diğer işlemleri burada gerçekleştirebilirsiniz.
});

socket.addEventListener('message', (event) => {
    console.log('Mesaj alındı:', event.data);
    // Gelen mesajları işleyebilirsiniz.
});

socket.addEventListener('close', (event) => {
    console.log('WebSocket bağlantısı kapandı.');
    // Bağlantı kapandığında gerekli işlemleri burada yapabilirsiniz.
});

socket.addEventListener('error', (event) => {
    console.error('WebSocket hatası:', event);
    // Hata durumunda gerekli işlemleri burada yapabilirsiniz.
});


app.use(bodyParser.json());
app.use(cors());

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Define your API route for form submission
app.post('https://www.mutlucanozel.com.tr/submit-form', async (req, res) => {
  const formData = req.body;

  // Email address validation
  if (!validator.isEmail(formData.email)) {
    return res.status(400).json({ error: 'Geçerli bir e-posta adresi girmelisiniz. Bu e-posta adresi kullanılmayacaktır.' });
  }

  try {
    // Email sending using nodemailer
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // Replace with your email service provider (e.g., Gmail)
      auth: {
        user: 'deneme1999827@gmail.com', // Replace with your email address
        pass: 'ajusqktnqvzlrkfm', // Replace with your email password
      },
    });

    const mailOptions = {
      from: 'deneme1999827@gmail.com',
      to: 'mutlu-26@hotmail.com', // Set the recipient email address here
      subject: formData.subject,
      text: `Gönderen: ${formData.name}\nE-posta: ${formData.email}\nKonu: ${formData.subject}\nMesaj: ${formData.message}`,
    };

    await transporter.sendMail(mailOptions);

    // You can process and store the data here
    console.log(formData);
    res.json({ message: 'Form verileri başarıyla alındı ve e-posta gönderildi.' });
  } catch (error) {
    console.error('E-posta gönderimi sırasında bir hata oluştu.', error);
    res.status(500).json({ error: 'E-posta gönderimi sırasında bir hata oluştu.' });
  }
});

// Catch-all route
app.use(express.static(path.join(__dirname, 'public')));

// Diğer middleware'leri ve rotaları ekleyin
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor.`);
});

