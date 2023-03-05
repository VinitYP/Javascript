// Calculate percentage of any 5 subjects with total of 500 marks and identify there grades # A=above 90% , B= 80 to 90% , C=70 to 80% , D= 60 to 70% , E=below 60%

const prompt = require("prompt-sync")();

var Physics = prompt("Enter Marks of Physics     ")
var Chemistry = prompt("Enter Marks of Chemistry   ")
var Maths = prompt("Enter Marks of Maths       ")
var English = prompt("Enter Marks of English     ")
var Biology = prompt("Enter Marks of Biology     ")

Physics = Number(Physics)
Chemistry = Number(Chemistry)
Maths = Number(Maths)
English = Number(English)
Biology = Number(Biology)

var marks = (Physics+Chemistry+Maths+Biology+English)
var percentage = Math.round((marks*100)/500)

//percentage = Number(percentage)

if(percentage >91){
    console.log("PASS WITH "+percentage+" with Grade 'A'")
}
else if (percentage >= 80 && percentage<=90) {
    console.log("PASS WITH "+percentage+" with Grade 'B'")
    
} else if(percentage >= 70 && percentage<=79){
    console.log("PASS WITH "+percentage+" with Grade 'C'")
}
else if(percentage >= 60 && percentage<=69){
    console.log("PASS WITH "+percentage+" with Grade 'D'")
}
else if(percentage >50 && percentage <=59){
    console.log("PASS WITH "+percentage+" with Grade 'E'")
}
else
{
    console.log("ATKT")
}

