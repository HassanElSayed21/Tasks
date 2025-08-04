 // Task 1: Using console.log() and Variables

// Question 1 
var Name = "Hassan" ;   // string 
var Number = 2142 ;     //Number 
var boolean = true ; // booleam
var Null = null ;  // null
var Undefined = undefined ; // undefined 


// Question 2 
console.log(Name) ;
console.log(Number) ;
console.log(boolean) ;
console.log(Null) ;
console.log(Undefined) ; 

// Question 3 

console.log(typeof Name) ;
console.log(typeof Number) ;
console.log(typeof boolean) ;
console.log(typeof Null) ;
console.log(typeof Undefined) ; 

// Question 4 
var Fname = "ElHassan"; 
var Lname = "Elsayed" ;
var Fullname = Fname + " " + Lname ;  // Old way 
var Fullname2 = `${Fname} ${Lname}` ; // Modern Approch 
console.log(Fullname) ; 
console.log(Fullname2) ; 

                       
// Task 2: Working with Data and Basic Validation

// Question 1 
var username = "ElHassan";     
var password = "123";  

// Question 2 
if (username === "") {
    alert("Username is required");
} else if (password.length < 8) {
    alert("Password must be at least 8 characters");
} else {

// Question 3 
    console.log("Username:", username);
    console.log("Password:", password);
}

