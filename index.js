'use strict';

var capture = require('./service/capture').snapshot;
var inform = require('./service/mail').send;

var config = require('./config').config;
var kSnapshotCount = config.app.SNAPSHOT_COUNT;
var kCaptureInterval = config.app.CAPTURE_INTERVAL;

var counter = 0;
var timerId = 0;

function executeAfterSnapshot() {
    if(counter > kSnapshotCount) {
        counter = 0;

        // compute diff sync

        return;
    }

    loop();
}


function loop() {
    clearTimeout(timerId);

    timerId = setTimeout(function() {
        capture(counter++, executeAfterSnapshot);
    }, kCaptureInterval);
}

loop();
