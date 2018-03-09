/*eslint-env node, es6*/

/* Dependencies */
const tap = require('tap');

var gauntlet1Tests = (test) => {

    console.log('potato');

    test.pass('potato');
    test.end();
};

module.exports = [
    gauntlet1Tests
];

