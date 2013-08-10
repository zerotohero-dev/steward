/*global exports*/

'use strict';

var config = {
    mail: {
        type: 'SMTP',
        service: 'Gmail',
        auth: {
            user: 'user@gmail.com',
            pass: 'password'
        }
    }
};

exports.config = config;
