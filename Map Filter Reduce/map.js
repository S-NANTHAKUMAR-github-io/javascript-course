//map - executes call back for each array elements and return new array
let priceusd = [20,35,13]
let priceinr = priceusd.map(x => x*83)
console.log(priceinr);

priceinr = priceusd.map(convert)

function convert(val){
    return val*83
}
console.log(priceinr);

const input = [ //array of objects
            {name:'John',age:15},
            {name:'Radha',age:45},
            {name:'Kaushik',age:12},
            {name:'Anu',age:21},
            {name:'Divya',age:26}
              ]

const ages = input.map(x => x.age)

console.log(ages);

//filter - returns new array by checking
//        each value of original arr using
//        call back fn

l cost = [35,234,12,34,54,123]

let lessthan100 = cost.filter(x => x<100)
console.log(lessthan100);


//reduce - executes reducer callback
//       and returns accumulated result
//arr.reduce(callback[, initialValue])
//reduce(function (accumulator, currentValue, currentIndex, array)) 

cost = [35,234,12,34,54,123]
let costtotal = cost.reduce((total,ele) => total+ele,1000)
console.log(costtotal);