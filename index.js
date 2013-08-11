'use strict';

var capture = require('./lib/service/capture').snapshot;
//todo pass this as a continuation.
//var inform = require('./lib/service/mail').send;
var compare = require('./lib/service/compare').compareSync;
var config = require('./lib/config').config;

var kSnapshotCount = config.app.SNAPSHOT_COUNT;
var kCaptureInterval = config.app.CAPTURE_INTERVAL;

var counter = 0;
var timerId = 0;

function executeAfterSnapshot() {
    if(counter > kSnapshotCount) {
        counter = 0;

        compare(loop);

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
