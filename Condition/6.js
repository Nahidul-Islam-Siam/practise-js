/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
var age = 9;
var ticket = 800;
var children = "free"
var students = 50 * ticket / 100;
var senior = 15 * ticket /100;
age < 10 ? console.log(children) : (age >= 10|| age<= 25) ? console.log(students) : age >= 60 ? console.log(senior): console.log(ticket)