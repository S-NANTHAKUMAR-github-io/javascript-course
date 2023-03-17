let item = {
    name:'phone',
    price:20000,
    quantity:1,
    categories:['vivo', 'apple'],
    dimensions:{
        length:7,
        breath:5,
        height:4
    }
}

console.log(item);
//acces array items
console.log(item.categories[1]);
console.log(item.dimensions.length);

//another way to create object

let item2 = new Object();

item2.name = 'charger'
item2.power = 5000
item2.price = 400
console.log(item2);

//accessing the object
//dot notation
console.log(item.price);
item.price = 25000
console.log(item.price);

//adding another property
item.returnable = true
console.log(item);

//square bracket notation
console.log(item['price']);
item['returnable'] = false

let key = 'price';
item[key] = 26000;
console.log(item);

item = {
    name:'phone',
    price:20000,
    quantity:1,
    buy: function(){
        console.log("item added to cart");
    },
    addToList(){
        console.log('item added to list');
    }
}

item.buy()
item.addToList()


