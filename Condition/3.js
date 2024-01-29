/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
var grade = 61;
if(grade <=100 && grade >= 90){

    console.log("A")
}else if(grade <=89 && grade >= 80){
    console.log("B")
}else if(grade <= 79 && grade >= 70){
    console.log("C")
}else if(grade <= 69 && grade >= 60){
    console.log("D")
}else
console.log("F") 