/*global exports*/

'use strict';

var config = {
    app: {
        SNAPSHOT_COUNT: 10,
        MIN_DIFF_PERCENTAGE_TO_WARN: 2,
        CAPTURE_INTERVAL: 1000,
        SNAP_BASE_DIR: '../../../snaps',
        CHECK_BASE_DIR: '../../..check'
    },
    mail: {
        TYPE: 'SMTP',
        SERVICE: 'Gmail',
        auth: {
            USER: 'user@gmail.com',
            PASS: 'password'
        }
    }
};

exports.config = config;
