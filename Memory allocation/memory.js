//primitive datatype
let a = 100
a=200;
let b= a;
b=300

console.log('a is ',a);
console.log('b is ',b);



//reference datatype
//1.array
//2.function
//3.all objects
let obj1 = {name:'danya', age:24}
let obj2 = obj1

obj1.age = 25
obj2.name = 'ramya'

console.log('obj1',obj1);
console.log('obj2',obj2);

let arr1=[2,3,4]
let arr2 = arr1

arr2[0] = 10;
console.log(arr1,arr2);