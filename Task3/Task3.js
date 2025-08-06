// Task 1 
var NumberArray = [1 , 2 ,4 , -3 , 5, -6 , 2 , 8 ,14 , -6] ; 
var PostiveNumberSum = 0 ; 
var TotalSum =0 ; 
for (i=0 ; i<10 ; i++) { 
    if(NumberArray[i] > 0 ) { 
        PostiveNumberSum += NumberArray[i] ; 
    } 
    else if(NumberArray[i] < 0 ) { 
        continue ; 
    }
}
for (i=0 ; i<10 ; i++) { 
    TotalSum += NumberArray[i] ;  
}

console.log("Sum of Postive Number : ", PostiveNumberSum) ; 
console.log("Total Sum :",TotalSum );

NumberArray.push(19) ; 
NumberArray.shift() ;
console.log("Modified Array", NumberArray) ; 

//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------

// Task 2 
var student = {
    name: "Hassan",
    age: 22,
    grade: "B",
    isGraduated: false
};

console.log("Student Name:", student.name);
console.log("Student Age:", student.age);

student.grade = "A";

console.log("Property Keys:", Object.keys(student));

console.log("Property Values:", Object.values(student));

student.email = "Hassan@example.com";

delete student.isGraduated;

console.log("Updated Student Object:", student);

//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------

// Task 3

 //1. Create an array of students.
var students = [
    { name: "Ali", age: 20, grade: "B", isGraduated: true },
    { name: "Sara", age: 22, grade: "A", isGraduated: false },
    { name: "Kareem", age: 19, grade: "C", isGraduated: true },
    { name: "Layla", age: 21, grade: "B", isGraduated: false }
];

 //2. Calculate the average age

var totalAge = 0;
var graduatedCount = 0;
var notGraduatedCount = 0;

for (var i = 0; i < students.length; i++) {
    totalAge += students[i].age;

    if (students[i].isGraduated) {
        graduatedCount++;
    } else {
        notGraduatedCount++;
    }
}

var averageAge = totalAge / students.length;

//3.Use the Object.keys() and Object.values() methods: 
console.log("Student Keys and Values:");
students.forEach((student, index) => {
    console.log(`Student ${index + 1} Keys:`, Object.keys(student));
    console.log(`Student ${index + 1} Values:`, Object.values(student));
});

// 4.Add a new student to the array. 
var newStudent = {
    name: "Hassan",
    age: 22,
    grade: "A",
    isGraduated: true
};


newStudent.email = "Hassan@example.com";


students.push(newStudent);

 // 5.Delete the isGraduated property
students.forEach(student => {
    delete student.isGraduated;
});

 // 6. Display the following information : 
var studentNames = students.map(student => student.name);

console.log("\n--- Final Information ---");
console.log("Student Names:", studentNames.join(", "));
console.log("Average Age:", averageAge.toFixed(2));
console.log("Graduated Students:", graduatedCount);
console.log("Non-Graduated Students:", notGraduatedCount);
console.log("Updated Student Objects:", students);
 // ------------------------------------------------------------------------------------------------
