// Calculate temperature range category 0 to 20 = Cold, 20 to 30 = Medium , 30 to 45 = hot, above 45 = extreme hot , below 0 = extreme cold

const prompt = require ("prompt-sync")();
var temp = prompt("Enter City Temperature in Celcius ");

if(temp >=0 && temp <=20)
{
    console.log("COLD");
}
else if(temp >=21 && temp <=35)
{
    console.log("Medium")
}
else if(temp >36)
{
    console.log("Extreme Hot")
}
else
{
    console.log("Extreme Cold")
}
