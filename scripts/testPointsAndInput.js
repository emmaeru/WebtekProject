// List of english nouns and corresponding spanish translations for test-function.
const solution = ["huevo", "platano", "pollo", "zanahoria", "vendedor", "pan", "dinero", "pez", "manzana", "perro"];
const english = ["egg", "banana", "chicken", "carrot", "vendor", "bread", "money", "fish", "apple", "dog"];
const scoreMessages = ["YOU SHOULD PRACTICE MORE!","GOOD!","AWESOME!"]

// list of circles to display progress and points in test-function
const circlestr = ["circle1", "circle2", "circle3", "circle4", "circle5", "circle6", "circle7", "circle8", "circle9", "circle10"]

// list to keep track of score
var score = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var counter = 0; // Hvilken glose er vi på

var input = document.getElementById("marketInput");           
const nextButton = document.getElementById("nextButton");     
const checkButton = document.getElementById("checkButton");
const repeatButton = document.getElementById("repeatButton");
const moretestsButton = document.getElementById("moretestsButton");
let scoreMessage = document.getElementById("scoreMessage");
let finalScore = document.getElementById("finalScore");
let feedbackMessage = document.getElementById("feedbackMessage");

input.placeholder = english[counter] + " in spanish..";

// Nr 1: Checks user input against list of solutions
function checkInput() {
    var correct = solution[counter];
    var userInput = input.value.toLowerCase();
    var result = userInput.localeCompare(correct);
    return result;

}

// Nr 2: change of display when the user clicks "next" button.
function nextDisplay() {
    feedbackMessage.style.visibility = "hidden";
    circleID = circlestr[counter];
    document.getElementById(circleID).src = "images/blueCircle.png";
    document.getElementById("marketInput").value = "";
    input.placeholder = english[counter] + " in spanish..";
}

// Nr 3: Calculates and displays score, and changes color of circles correspondingly.
// prints approppriate message to match score.
function scoreFeedback() {
    var scoreSum = 0
    for (var i in score) {
        scoreSum += score[i];
        circleID = circlestr[i];
        if (score[i] == 1) {
            document.getElementById(circleID).src = "images/greenCircle.png";
        }
        else {
            document.getElementById(circleID).src = "images/orangeCircle.png";
        }
    }
    finalScore.innerHTML = scoreSum + "/10"
    if (scoreSum < 5) {
        scoreMessage.innerHTML = scoreMessages[0];
    }
    else if (scoreSum < 8) {
        scoreMessage.innerHTML = scoreMessages[1];
    }
    else {
        scoreMessage.innerHTML = scoreMessages[2];
    }
}

// Nr 4: decidec what elements are visible after the test is complete.
function afterTestDisplay() {
    scoreMessage.style.display = "block";
    finalScore.style.display = "block";
    repeatButton.style.display = "block";
    moretestsButton.style.display = "block";
    checkButton.style.display = "none";
    nextButton.style.display = "none";
    input.style.display = "none";
    feedbackMessage.style.visibility = "hidden"; // endring
}

// ========Button functions==========================================================


// Nr 1: Functon for next-button
function nextFunc() {
    var result = checkInput();
    if (result == 0) {
        score[counter] = 1;
    }
    // ongoing test
    if (counter < (solution.length - 1)) {
        counter++;
        nextDisplay();
        checkButton.disabled = false;

    // test complete
    } else {
        scoreFeedback();
        afterTestDisplay();    
    }          
    if (counter == (solution.length - 1))
        nextButton.innerHTML = "SCORE&longrightarrow;";
}


// Nr 2: Checks if input correct / uncorrect, gives written feedback
function checkFeedback() {
    var result = checkInput();
    if (result == 0) {
        feedbackMessage.innerHTML = "Correct!";
        feedbackMessage.style.color = "#799466";


    } else {
        feedbackMessage.innerHTML = "Wrong. Try &laquo" + solution[counter] + "&raquo" + " next time!";
        feedbackMessage.style.color = "#9F3B00";
    }
    feedbackMessage.style.visibility = "visible";
    checkButton.disabled = true;
}


checkButton.addEventListener("click", checkFeedback); 
nextButton.addEventListener("click", nextFunc);


