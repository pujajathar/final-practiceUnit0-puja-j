/* *****Pseudocode for the 'Homework Check' application:******/
/*
1. Create variables 'name' and 'dueDate' to store homework name and due date (Stringing Characters Together Module).
2. Combine strings using template literals to display a message (Stringing Characters Together Module).
3. Create an Object 'homeWork' to store homework item (Creating and Using Objects Module).
4. Create an Array 'homeWorkList' to store multiple homework objects (Building Arrays Module).
   It Include existing object inside the array. 
5. Add a new homework item to the array (Using Arrays - push method).
6. Print the updated homework list.
7. Display a formatted to-do list using \n and \t (Stringing Characters Together Module(String formatting)).
8. Use a for loop to go through the array and print each homework item (Working With Loops Module).
9. Use if/else conditional statements and Boolean Expressions to check if homework is completed or due (Control 
   Structures and Logic Module).
*/

/* Module- Stringing characters together*/
//Declared two variables to strore the values
let name = "Math Assignment";
let dueDate = "2026-05-01";

// Combined two strings using template literal
let message = `${name} is due on : ${dueDate}`;
console.log(message); //logged message to the console


/*Module- Creating and Using Objects*/
//created object homeWork and assigned values to it.
let homeWork =  { name: "Computer Science", completed: true, dueDate: "2026-05-05"};

/*Module- Creating or building Arrays--and--Module Creating and using Objects*/
//created Array named homeWorkList which contains multiple objects. It also includes the object homeWork which
//  is previously created
let homeWorkList = [homeWork, { name: "Math Assignment", completed: true, dueDate: "2026-05-01" }, 
    { name: "Art Project    ", completed: false, dueDate: "2026-05-02" },
    { name: "Social Studies  ", completed: true, dueDate: "2026-05-03" }, 
    { name: "Science Project ", completed: false, dueDate: "2026-05-04"},
   ];

   /*Module- Using Arrays*/
   //Used Array method .push() to add the item to the array homeWorkList.
  homeWorkList.push({
  name: "Algebra Assignment",
  completed: false,
  dueDate: "2026-05-06"
});
console.log("\nUpdated list Of Homework:", homeWorkList); //Logged output to the console. 

/* Module-Stringing Characters Together*/ 
// Used '\n' and '\t' to organize the text in cleaner way which makes it easy to read*/
    
console.log("\nTo-do list: ", "\nAssignment Title:", "\tDue date: ",  ); 

/*Module- Working with loops */
//used for loop to iterate over and print list of homework.
    for(let i = 0; i < homeWorkList.length; i++) 
    {
        console.log( homeWorkList[i].name, "\t", homeWorkList[i].dueDate); //logged output to the console. 
    }

    console.log("\nStatus of Assignments: ", "\n", "Name", "\t\t\tStatus"); 

/* Module-Control Structures and Logic */ 
//Used conditional statements if else and boolean expression to check status of assignments.*/
   for(let i = 0; i < homeWorkList.length; i++){
    if(homeWorkList[i].completed) 
    {
        console.log(homeWorkList[i].name, "\t:", "Completed! "); /*if the condition is true, it will print
        assignment is completed */ 
    }
    else
    {
        console.log(homeWorkList[i].name, "\t:", "Due on - ", homeWorkList[i].dueDate);/*if the condition is false, it will print 
        assignment is due and due date */
    }}

 

