const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const { USER_NAME, SMTP_PASSWORD, DATABASE_URL } = require('../config');
const db = require('./router-model.js');
const { Client } = require('pg');

// const client = new Client({
//   connectionString: DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false
//   }
// });

// client.connect();

// client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
//   // if (err) throw err;
//   // for (let row of res.rows) {
//   //   console.log(JSON.stringify(row));
//   // }
//   client.end();
// });

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
      pass: SMTP_PASSWORD
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

router.get('/count', (req, res) => {
  db.find()
    .then(count => {
      if(count) {
        res.send(count)
      } else {
        res.status(404).json({ WHOOPS: 'NO COUNT'})
      }
    })
    .catch(error => {
      res.status(500).json({
        WHOOPS: 'This should be working, try again'
      })
    })
})
  
module.exports = router;