const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'svpparameshkumar2004@gmail.com',
        pass: 'hrvrklhvbhzsvnjr' // REMOVE SPACES!
    }
});

const name = 'VP';
const email = 'vp@gmail.com';
const message = 'Hi VP';

const mailOptions = {
    from: 'svpparameshkumar2004@gmail.com',
    to: 'svpparameshkumar2004@gmail.com',
    subject: 'Nodemailer Test',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log('❌ Error:', error.message);
    }
    console.log('✅ Email sent:', info.response);
});

export function SendMail()