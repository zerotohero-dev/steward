/*global exports*/

'use strict';

var exec = require('child_process').exec;

function cmd(count) {
    var command = 'screencapture -t tiff '+ (count) + '.tiff';


    return command;
}

function snapshot(count, then) {
    exec(cmd(count), function (/*error, stdout, stderr*/) {
        then();
    });
}

exports.snapshot = snapshot;
