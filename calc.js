function myFunction() {

var participants = document.getElementById("n").value;
var errors = document.getElementById("e").value;

errors = errors * errors;

errors = participants * errors;

errors = errors + 1;

participants = participants / errors;

participants =  Math.round(participants);

document.getElementById("result").innerHTML = "Result: " + participants; 

}


