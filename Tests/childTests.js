/* Dependencies */
const tap = require('tap');

function g1Tests(course, callback) {
    // Tests for Gauntlet 1
    tap.pass('Success');
    tap.fail('Fail');
    callback(null, course);
}

function g2Tests(course, callback) {
    // Tests for Gauntlet 2
    tap.pass('Success');
    // tap.fail('Fail');
    callback(null, course);
}

function g3Tests(course, callback) {
    // Tests for Gauntlet 3
    tap.pass('Success');
    // tap.fail('Fail');
    callback(null, course);
}

function g4Tests(course, callback) {
    // Tests for Gauntlet 4
    tap.pass('Success');
    // tap.fail('Fail');
    callback(null, course);
}

module.exports = [
    g1Tests,
    g2Tests,
    g3Tests,
    g4Tests,
];
