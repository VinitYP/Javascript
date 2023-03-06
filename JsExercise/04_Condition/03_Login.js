// Allow user to access app if he/she is:
// logged in from email, google, facebook
var email = true;
var google = false;
var facebook = false;

if(email || google || facebook){
    console.log("Login Successfully");
}

/*
    This condition can never be true because access to the content requires logging in.
else{
    
}
*/