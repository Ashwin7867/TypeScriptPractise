function add(n1 : number,n2:number) : number{
    return n1+n2
}

function printResult1(num : number) : void {
    console.log("Result :",num);
};

function addAndHandle(n1: number, n2:number, cb : (num:number) => void){
    const result = n1+ n2;
    cb(result)
}

printResult1(add(12,7));

let combineValues : (a:number, b:number) => number;

combineValues = add;
// combineValues =  printResult1;

console.log(combineValues(7,8));

addAndHandle(10,20, (res) => {
    console.log("In addand handle", res)
})