var computer = {
    price: 29000,
    storage: "256GB",
    color: 'Silver',
    processor: "Intel i5-5600x"
}

//Printing whole Object
//console.log(computer);

//Printing specific properties
console.log(computer.processor);

//setting property as var
var computerPrice = computer.price;
console.log(computerPrice);

//set object property value
computer.price = 22000;
console.log(computer);

//ways to set a value of an object property

computer.price = 22000;
console.log(computer.price);

computer["price"] = 23000;
console.log(computer.price);

var priceProperty = "price";
computer[priceProperty] = 19000;
console.log(computer.price);

var storageProperty = 'storage';
computer[storageProperty] = '512gb';
console.log(computer.storage);

computer["storage"] = '1TB';
console.log(computer.storage);

computer.storage = "5TB";
console.log(computer.storage);