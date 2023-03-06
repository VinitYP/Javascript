// Create an application with following roles:
// admin - gets full access
// subadmin - get access to create/delete courses
// testPrep - get access to create/ delete test
// user - get access to content only



const prompt = require("prompt-sync")();

var user =prompt("Enter User type [ testPrep/ admin/ subadmin/ fro users just enter ] : ");

switch (user) {
    case "testPrep":
        console.log("You will get access to create/ delete test");
        break;

    case "admin":
        console.log("You will get full access");
        break;

    case "subadmin":
        console.log("You will get access to create/delete courses");
        break;

    default:
        console.log("You will get access to content only");

        break;
}