/* .js files add interaction to your website */

var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");

if (scriptBtn) {
  scriptBtn.addEventListener("click", generateScript);
}

function generateScript() {
  var name = document.getElementById("name").value;
  var location = document.getElementById("location").value;
  var questions = document.getElementById("questions").value; 

  displayScript.innerHTML = "Hello, my name is " + name + " and I live in " + location + ". I have a few questions about your organization I want to ask. They are: " + questions + " Please get back to me as soon as possible. Looking forward to your response. Thank you! -" + name;
} 

var factList = [
  "There are three different types of elephants: the Asian elephant, the African Savannah elephant, the African Forest elephant!",
  "You can easily tell the difference between the African and Asian elephant: African elephants have ears that are shaped like the continent Africa and Asian elephant have ears that are shaped like the country India!",
  "Elephants spend 12-18 hours eating plants, grass, and fruit every day!!",
  "The word 'elephant' is from the greek word 'elephas' which means 'ivory'!", 
  "A newborn elephant baby weighs up to 260 pounds!",
  "An elephant's ear radiates excess heat away from its large body!", 
];

var fact = document.getElementById("fact");
var factBtn = document.getElementById("myButton");
var count = 0;

if (factBtn) {
  factBtn.addEventListener("click", displayFact); 
}

function displayFact() {  
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}