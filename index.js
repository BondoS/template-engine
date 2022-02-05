"use strict";
exports.__esModule = true;
var render = function (text, data) {
    return text.replace(/{{.*?}}/g, function (match) {
        return data[match.slice(2, match.length - 2).trim()];
    });
};
// test
(function () {
    var test = function (desc, result, expectedRes) {
        console.log("Test: " + desc);
        if (result === expectedRes) {
            console.log('%c Test successful', 'color: green');
        }
        else {
            console.log('%c Test fail', 'color: green');
        }
    };
    test('Template engine test with 1 variable', render('Hi, my name is {{name}}', { name: 'John doe' }), 'Hi, my name is John doe');
    test('Template engine test with multiple variable', render('Hi, my name is {{name}}, and I work as {{work}}', {
        name: 'John doe',
        work: 'Software Engineer'
    }), 'Hi, my name is John doe, and I work as Software Engineer');
})();
