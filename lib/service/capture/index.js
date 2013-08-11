/*global exports, console*/

'use strict';

var exec = require('child_process').exec;

var config = require('../../config').config;

var kSnapsBaseDir = config.app.SNAP_BASE_DIR;

function cmd(count) {
    var command = 'screencapture -t tiff '+ kSnapsBaseDir + (count) + '.tiff';

    console.log(command);

    return command;
}

function snapshot(count, then) {
    exec(cmd(count), function (/*error, stdout, stderr*/) {
        then();
    });
}

exports.snapshot = snapshot;
