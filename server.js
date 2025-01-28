const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit', async (req, res) => {
    const { name, email, equipment } = req.body;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'aydanjamal248@gmail.com', // Replace with your email
            pass: 'Aydan1234'  // Replace with your email password
        }
    });

    let mailOptions = {
        from: 'aydanjamal248@Gmail.com',  // Replace with your email
        to: 'aydandbjamal@gmail.com',  // Replace with the email you want to receive the responses
        subject: 'New Golf Equipment Donation',
        text: `Name: ${name}\nEmail: ${email}\nEquipment Details: ${equipment}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Donation details sent successfully.');
    } catch (error) {
        res.status(500).send('Failed to send donation details.');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
