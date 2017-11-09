const childModule = require('../myChildModule.js');
const preImportEnv = require('child-development-kit').preImportEnv;
const updateD2L = require('child-development-kit').updateD2L;
const runTest = require('../Tests/childTests.js');
// const updateCanvas = require('child-development-kit').updateCanvas;

/* Run Tests on Gauntlet Courses */
preImportEnv(childModule, -1, (error, allCourses) => {
    if (error) console.error(error);
    else {
        allCourses.forEach((course, index) => {
            runTest[index](allCourses[index],
                (err, course) => console.log(`Gauntlet ${index + 1} Tests Complete`));
        });
    }
});
