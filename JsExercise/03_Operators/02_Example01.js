var sellingPrice = 199;
var listingPrice = 799;
var discountPrice = ((listingPrice-sellingPrice)/listingPrice)*100;
console.log(discountPrice);

var printDiscount = Math.round(discountPrice);
console.log(printDiscount+"% off");

const prompt = require ("prompt-sync")();

var a = prompt("enter agr");
console.log(a);