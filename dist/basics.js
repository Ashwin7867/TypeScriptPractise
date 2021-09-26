"use strict";
function add1(n1, n2, showResult, phrase) {
    if (showResult) {
        var resultConstant = n1 + n2;
        console.log(phrase + resultConstant);
    }
    else {
        return n1 + n1;
    }
}
var number1;
number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = "Result is : ";
var result = add1(number1, number2, printResult, resultPhrase);
