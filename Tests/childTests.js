/* Dependencies */
const tap = require('tap');

module.exports = (course, callback) => {
    tap.test('child-template', (test) => {

        test.pass('potato');
        test.pass('potato');
        test.pass('potato');
        test.pass('potato');
        test.pass('potato');
        test.pass('potato');
        test.pass('potato');
        test.pass('potato');
        test.pass('potato');
        test.pass('potato');
        test.pass('potato');
        test.pass('potato');
        test.end();
    });

    callback(null, course);
};