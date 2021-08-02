// Single Parameter
function bringShingara(taka) {
    console.log("Shingara er jonno dise", taka);
    console.log("mama shingara den");
    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice;
    return singaraQuantity;
}

var money = 100;
console.log("Ei nen Shingara ", bringShingara(money));

//Multiple Parameters
function addTwoNumbers(num1, num2) {
    console.log("num1: ", num1);
    console.log("num2: ", num2);

    return num1 + num2;
}

console.log("Total: ", addTwoNumbers(21, 59));