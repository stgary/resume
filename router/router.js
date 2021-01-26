const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const { USER_NAME, SMTP_PASSWORD } = require('../config');
const db = require('./router-model.js');

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
      user: USER_NAME,
      pass: PASSWORD
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
    const subject = req.body.subject;
    const message = req.body.message;
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
    });
});

router.put('/count', (req, res) => {
  const view = req.body.views;
  db.getViews()
    .then(res => {
      let curr = res++;
      add(value) 
        .then(res => 'Success')
        .catch(err => 'error')
  })
  .catch(err => 'error getting count');
})
  
module.exports = router;