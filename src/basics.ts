function add1(n1 : number, n2:number, showResult : boolean, phrase : string){
    if(showResult){
        const resultConstant = n1+n2
        console.log(phrase + resultConstant)
    }else{
        return n1+n1
    }
}
let number1:number;
number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is : "

const result= add1 (number1, number2, printResult, resultPhrase);