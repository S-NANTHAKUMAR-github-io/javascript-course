//Set Object - Collection Of values
//           - Values are unique


let arr= [1,1,2,3,4,5,5,5,5,10,8]
let myset1 = new Set(arr)

console.log(arr);
console.log(myset1);

let myset2 = new Set()
myset2.add(4)
myset2.add(5)
myset2.add('nantha')
myset2.add({'a':10, 'b':20})

console.log(myset2);

let obj1 = {'a':10, 'b':20}
myset2.add(obj1)
console.log(myset2.has(4));

//to change myset into array
let arr2 = Array.from(myset2)
console.log(arr2);

//Map 
//Map object are collection of key value pairs
//A key in the Map may only occur once
//key or value can be object
//key must be unique , values can be similar

let map1 = new Map()
map1.set('a',1)
map1.set('b',2)
map1.set('a',3)
console.log(map1);
map1.set('d',4)
map1.set('e',5)

for(let i of map1){
    console.log(i);
}

for(let [k,v] of map1){
    console.log(v);
}

for(let k of map1.keys()){
    console.log(k);
}

map1.forEach((v,k) => {
    console.log('key',k,'value',v);
})