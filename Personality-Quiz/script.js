/*Add your JavaScript here*/

var happyScore = 0; // Stores happy score 
var sadScore = 0; // Stores sad score

var questionCount = 0;  // Stores the numer of answers clicked on

// // Store HTML elements using the DOM
var result = document.getElementById("result"); 
var restart = document.getElementById("restart"); 

var q1a1 = document.getElementById("q1a1"); 
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2"); 

// Listen for click on answer buttons and call function if clicked
q1a1.addEventListener("click", happy);
q1a2.addEventListener("click", sad);

q2a1.addEventListener("click", sad);
q2a2.addEventListener("click", happy);

q3a1.addEventListener("click", happy);
q3a2.addEventListener("click", sad);

// Functions
function happy() {
  happyScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " happyScore = " + happyScore); 

  if (questionCount == 3) {
    console.log("The quiz is done!")
    updateResult(); 
  } 
} 


function sad() {
  sadScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + "sadScore = " + sadScore);

  if (questionCount == 3) {
    console.log("The quiz is done!")
    updateResult();
  }
} 

function updateResult() {
  if (happyScore >= 2) {
    result.innerHTML = "You are a happy person!";
    console.log("You are a happy person!");
  } else if (sadScore >= 2) {
    result.innerHTML = "You are a sad person :("; 
    console.log("You are a sad person :(");
  }

}  


restart.addEventListener("click", updateRestart);

function updateRestart() {
  document.getElementById("result").innerHTML = "Your result is ";  
  happyScore = 0;
  sadScore = 0;
  questionCount = 0;

}
