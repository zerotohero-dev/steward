/*global exports*/

'use strict';

var nodemailer = require('nodemailer');

var config = require('../../config').config;

function send() {
    var smtpTransport = nodemailer.createTransport(config.mail.TYPE, {
        service: config.mail.SERVICE,
        auth: {
            user: config.mail.auth.USER,
            pass: config.mail.auth.PASS
        }
    });

    var mailOptions = {
        from: config.mail.auth.USER,
        to: config.mail.auth.USER,
        subject: 'Check your computer dude!',
        text: 'Something happened on your screeen.',
        html: '<b>Something happened on your screen.</b>'
    };

    smtpTransport.sendMail(mailOptions, function(/*error, response*/) {
        smtpTransport.close();
    });
}

exports.send = send;
