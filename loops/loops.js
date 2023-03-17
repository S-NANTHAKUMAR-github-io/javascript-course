//Loops
// for, while, do while

//1.for
for(let i=0; i<5; i++){
    console.log('hello');
}

let i

for(i=0; i<5; i++){
    console.log(i);
}

console.log('out side loop',i);
// print 10 to 1
for(i=10 ; i>=1; i--){
    console.log(i);
}

//while loop (loop runs after executing the condition)
i=10
while (i>=1) {
    console.log(i);
    i--;
}


// do-while loop (loop runs single time and then execute the condition)

do {
    console.log(i);
    i--;
} while (i>=1);

//break - stop the loop
// while (true) {
//    let num = Number(prompt('enter a number'))
//    if(!isNaN(num))
    // break;
// }
// 
//continue - skip the current iteration and continues
console.log("continue demo");
for(i=1; i<=10 ; i++){
    if(i%3==0){
        continue;
    }
    console.log(i);
}

//for...of (array)
let arr = ['apple', 'orrange', 'mango', 'grapes']

for(i=0; i<arr.length; i++){
    console.log(arr[i].toUpperCase());
}

for(let fruit of arr){
    console.log(fruit);
}

// to access object (for..in)
item = {
    name:'phone',
    price:20000,
    quantity:1
}
for(let phones in item){
    console.log(item[phones]);
}