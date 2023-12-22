// Chapter 6

// Practise exercise 6.1

function adder(a , b) {
    return a + b
}
let val1 = 12;
let val2 = 15 ;

console.log(adder(val1, val2));
console.log(adder(12, 15))

// Practise exercise 6.2
const adj = ["superb", "wonderful", "good", "bad", "nice"];

function myFun(){
    let question = prompt("What's you're Name?");
    const namAdj = Math.floor(Math.random() * adj.length);
    console.log(adj[namAdj] + " " + question );
};
myFun();

// Practise 6.4
const arr=[];
for (x = 0 ; x < 10 ; x++){
    let val1 = 5 * x ;
    let val2 = x * x ;
    let result = cal(val1, val2, " + ");
    arr.push(result);
}
console.log(arr);
function cal(a, b, op){
    if (op == "-"){
        return a - b ;
    }else {
        return a + b
    }
}
// practise 6.5
let val = "1000" ;
(function(){
    let val = "900";
    console.log("IIFE!")
})
();
let result = (function () {
    let val = "Laurence";
    return val;
    })();
    console.log(result);
    console.log(val);
    (function (val) {
    console.log(`My name is ${val}`);
    })("Laurence");
// Practise 6.6
function calcFactorial(nr) {
    console.log(nr);
    if (nr === 0) {
    return 1;
    }
    else {
    return nr * calcFactorial(--nr);
    }
    }
    console.log(calcFactorial(4));

    // Practise 6.7
    let start = 10;
function loop1(val) {
console.log(val);
if (val < 1) {
return;
}
return loop1(val - 1);
}
loop1(start);
function loop2(val) {
console.log(val);
if (val > 0) {
    val--;
return loop2(val);
}
return;
}
loop2(start);

// Practise 6.8
const test = function(val){
    console.log(val);
    }
    test('hello 1');
    function test1(val){
    console.log(val);
    }
    test1("hello 2");
    // Project
    const main = function counter(i) {
        console.log(i);
        if (i < 10) {
        return counter(i + 1);
        }
        return;
        }
        main(0);
        // Set Timeout order
        const one = ()=> console.log('one');
const two = ()=> console.log('two');
const three = () =>{
console.log('three');
one();
two();
}
const four = () =>{
    console.log('four');
    setTimeout(one,0);
    three();
    }
    four();
