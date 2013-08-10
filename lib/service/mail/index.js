/*global exports*/

'use strict';

var nodemailer = require('nodemailer');

var config = require('../../config').config;

function send() {
    var smtpTransport = nodemailer.createTransport(config.mail.type, {
        service: config.mail.service,
        auth: {
            user: config.mail.auth.user,
            pass: config.mail.auth.pass
        }
    });

    var mailOptions = {
        from: config.mail.auth,
        to: config.mail.auth,
        subject: 'Check your computer dude!',
        text: 'Something happened on your screeen.',
        html: '<b>Something happened on your screen.</b>'
    };

    smtpTransport.sendMail(mailOptions, function(/*error, response*/) {
        smtpTransport.close();
    });
}

exports.send = send;
