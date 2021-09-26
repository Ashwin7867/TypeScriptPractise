"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult1(num) {
    console.log("Result :", num);
}
;
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult1(add(12, 7));
var combineValues;
combineValues = add;
console.log(combineValues(7, 8));
addAndHandle(10, 20, function (res) {
    console.log("In addand handle", res);
});
