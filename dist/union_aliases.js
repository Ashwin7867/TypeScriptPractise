"use strict";
function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === "number" || resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combineAges = combine(10, 13, "as-text");
console.log("apoorva", combineAges);
var combinedNames = combine("ashwin", "apoorva", "as-text");
console.log(combinedNames);
