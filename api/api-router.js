const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const creds = require('../config');

const transport = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    debug: true,
    logger: true,
    tls: {
        rejectUnauthorized: false
    },
    auth: {
      user: creds.user,
      pass: creds.pass
    }
}

const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take messages');
    }
});

router.post('/send', (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const subject = req.body.subject;
    const content = `name: ${name} \nsubject: ${subject} \nemail: ${email} \nmessage: ${message} `
  
    const mail = {
      from: name,
      to: 'stgary0@gmail.com',  
      subject: subject,
      text: content
    }
  
    transporter.sendMail(mail, (error, data) => {
      if (error) {
        res.json({
          message: error.message
        })
      } else {
        res.json({
         status: 'success'
        })
      }
    })
  })

  
module.exports = router;