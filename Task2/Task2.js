// 1. Gather Employee Data:
var name = prompt("Enter Your name ") ; 
var age = prompt("Enter Your age ") ; 
var years_of_experience = prompt("Enter Your years of experience.  ") ; 
var rating = prompt("Rate your self from 1 to 10  ") ; 

// 2. Determine Job Category 
var jobCategory = " " ; 
if (years_of_experience < 2)
{
  jobCategory = "Junior" ; 
}
else if ( years_of_experience >= 2 || years_of_experience < 5 )
{
     jobCategory = "Mid-Level" ;  
}
else if ( years_of_experience >= 5 || years_of_experience <= 10 )
{
   jobCategory = "Senior" ;
}
else {
    jobCategory = "Expert" ;
}

console.log("Job Category ", jobCategory) ;


// 3. Check Performance Level: 
var performance = "";
switch (true) {
  case (rating > 10 || rating < 1):
    performance = "Invalid rating. Must be between 1 and 10.";
    break;
  case (rating >= 9):
    performance = "Excellent";
    break;
  case (rating >= 7 && rating < 9):
    performance = "Good";
    break;
  case (rating >= 5 && rating < 7):
    performance = "Average";
    break;
  default:
    performance = "Needs Improvement";
}
console.log("Performance:", performance);

// 4. Salary Calculation: 

var base_salary = 10000 ; 
var bonusRate;
    if (years_of_experience >= 0 && years_of_experience <= 2) {
        bonusRate = 0.10;
    } else if (years_of_experience > 2 && years_of_experience <= 5) {
        bonusRate = 0.15;
    } else {
        bonusRate = 0.20;
    }

    var bonus = base_salary * bonusRate;
    var final_salary = base_salary + bonus;

    console.log("Final Salary:", final_salary);

// 5. Work Shift Time Calculation:  

var CurretDate = new Date() ; 
var CurrentTime = CurretDate.getTime() ; 

var ShiftTime ; 
if (CurrentTime >= 9 && CurrentTime < 18) { 
    ShiftTime = "Day Shift" ; 
}
else { 
    ShiftTime = "Night Shift" ;
}
    console.log("Shift Time:", ShiftTime);

// 6. Summary Output:  
//a. 

console.log("=== Employee Summary ===");
console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Experience: ${years_of_experience}`);
console.log(`Job Category: ${jobCategory}`);
console.log(`Rating: ${rating} (${performance})`);
console.log(`Base Salary: $${base_salary}`);
console.log(`Bonus: $${bonus} (${bonusRate * 100}%)`);
console.log(`Final Salary: $${final_salary}`);
console.log(`Shift: ${ShiftTime}`);

// Output to alert
alert(`Hello ${name}, your final salary is $${final_salary.toFixed(2)} and you are on the ${ShiftTime}.`);

// b. Output to DOM

// c. Output the report using console.log() and document.getElementById().





    
