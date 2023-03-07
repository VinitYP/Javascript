// TODO: Falsy 
// always false below condition
// undefined
// null
// 0
// ''
// NaN

var user = "";

if (user) {
    console.log("Codition is true");
}

console.log(2 + "2");  // print: 22

// OR

var user = "2";
if (2 == user) {    // (loosely check)
    console.log("Condition is true");
    
}

if (2===user) {     // (Strict check)
    console.log("Condition pass strict check");
    
}