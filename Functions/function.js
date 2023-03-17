//Functions - performs specific task
//            can be called multiple times
//            optionally takes input as 
//            parameters and optionally
//            returns value


//function declaration
function ispoistive(num){ // parameter
    return num > 0
}
console.log(ispoistive(-4));  //argument

function sayhello(){
    console.log("Hello");
}

sayhello();


//hoisting (calling first , declarition after)
findproduct(2,4)

function findproduct(n1,n2){
    console.log(n1*n2);
}

findproduct(2,4)
console.log(findproduct);
console.log(typeof findproduct);

//default parameter
function greet(name='there'){
    console.log('hi', name);
}
greet('Ram')
greet()

//recursion - function calling itself
//factorial - product of first n numbers
function factorial(num){
    if(num==1)
        return 1
    return num*factorial(num-1)
}
console.log(factorial(5))

//function expression
//hoisting will not work in function expression

let iseven = function(n){
    return (n%2==0)
}

console.log(iseven(10));

let arr= [1,2,3,4,5]
let findsum = function(arr){
    let sum = 0
    for(let val of arr){
        sum = sum + val
    }
    return sum
}
console.log(findsum(arr));

//arrow function
let volume = (l,b,h) => {
    return (l*b*h)
}
console.log(volume(5,6,7));


//find sum in arrow
let array= [1,2,3,4,5]

let sum = () =>{
    let add = 0;
    for(let val of array ){
        add = add + val;
    }
    return add;
}

console.log(sum(array));

//find area of square in arrow

let areaofsquare = (n) => {
    let res = 0;
    for(let i=0; i<4; i++){
        res = res+n
    }
    return res;
}
console.log(areaofsquare(10));

//variable arguments

let prod = function(...arg){
    let res = 1;
    for(let val of arg){
        res = res*val
    }
    return res
}

console.log(prod(1,2,3,4,5));

//Generators
function* indexgenerator(){
    let index = 1
    while(true){
        yield index++
    }
}

const gen = indexgenerator()
console.log(gen.next().value);
console.log(gen.next().value);


//call back function
function greetconsole(name){
    console.log('hello',name);
}

function greetheading(name){
    const heading = document.querySelector('h1');
    heading.innerHTML = 'hello ' + name
}

function greete(callback){
    console.log(callback);
    callback('nantha')
}


 greetconsole('nantha')
 greetheading('nantha')
greete(greetconsole)

//for each

arr = ['deepa', 'nantha', 'suriya']

arr.forEach(print)

function print(val){
    console.log(val);
}

//for each using arrow function

arr.forEach(val =>
    console.log(val)
)


 arr = ['ece', 'it', 'cse', 'mech']

arr.forEach(val => {
    const opt = document.createElement('option')
    opt.textContent = val
    opt.value = val
    document.getElementById('branch').appendChild(opt)
});

let anarr = [6,-5,7,-2,4,6,-1]

  const raghu =(a) => {
//console.log(a+2)  // external resource
    return a+2
  }

  raghu(4)

 //returning variable - higher order function
 //lexical scoping - inner scope can access

 function outer(name){
    let outervar = 'bread'
    function inner(){
        let innervar = 'butter'
        console.log('inner variable',innervar);
        console.log('outer variable',outervar);
        console.log('hello',name);
    }
    return inner
 }
 let call1 = outer('nantha')
 call1()

 let call2 = outer('kumar')
 call2()

 function makeadder(x){
    return function(y){
        return x+y;
    }
 }

 let add5 = makeadder(5)
 console.log(add5(10));