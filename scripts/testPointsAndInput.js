//=== Her ligger fasiten og de engelske ordene 
const solution = ["huevo", "platano", "pollo", "zanahoria", "vendedor", "pan", "dinero", "pez", "manzana", "perro"];
const english = ["egg", "banana", "chicken", "carrot", "vendor", "bread", "money", "fish", "apple", "dog"];
const scoreMessages = ["YOU SHOULD PRACTICE MORE!","GOOD!","AWESOME!"]

// Listen under gir ID-ene til alle sirklene, skal spørre studass om tips til hvordan ikke bruke den, men nå funker det hvertfall
const circlestr = ["circle1", "circle2", "circle3", "circle4", "circle5", "circle6", "circle7", "circle8", "circle9", "circle10"]

//= Her lagres poengene for hver oppgave========
var score = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var counter = 0; // Hvilken glose er vi på

//Tar inn elementer fra dokumentet===============
var input = document.getElementById("marketInput");           
const nextButton = document.getElementById("nextButton");     
const checkButton = document.getElementById("checkButton");
const repeatButton = document.getElementById("repeatButton");
const moretestsButton = document.getElementById("moretestsButton");
let scoreMessage = document.getElementById("scoreMessage");
let finalScore = document.getElementById("finalScore");
let feedbackMessage = document.getElementById("feedbackMessage");

input.placeholder = english[counter] + " in spanish..";

// Fire funksjoner som skal brukes i nextFunc og checkFeedback, funksjonene som kalles når man trykker på henholdsvis "nextButton" og "checkButton"

// Nr 1: Funksjon som sjekker input mot tilhørende element i listen "solution"
function checkInput() {
    var correct = solution[counter];
    var userInput = input.value;
    var result = userInput.localeCompare(correct);
    return result;

}

// Nr 2: endrer display når man trykker på next, mens testen pågår
function nextDisplay() {
    feedbackMessage.style.visibility = "hidden";
    circleID = circlestr[counter];
    document.getElementById(circleID).src = "images/blueCircle.png"; // Skifter farge p� sirklene mens vi forflytter oss
    document.getElementById("marketInput").value = ""; // Gj�r feltet tomt slik at det er klart for ny input, trengs det med placeholder?
    input.placeholder = english[counter] + " in spanish..";    // legger det engelske ordet inn i placeholder
}

// Nr 3:Regner ut og printer score + endrer fargene i sirklene etter hvilke spørsmål som var riktige/feil
// Vil også printe en melding som endres etter hvor høy score brukeren har fått
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

// Nr 4: endrer hva som vises og ikke etter testen
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

// ========To hovedfunksjoner som kalles på to knapper==========================================================


// Nr 1: Funksjonen som kalles når man trykker next, ulik funksjon etter om vi er ferdig med testen eller ikke.
function nextFunc() {
    var result = checkInput();
    if (result == 0) {
        score[counter] = 1;
    }
    // Når testen pågår
    if (counter < (solution.length - 1)) {
        counter++;
        nextDisplay();
        checkButton.disabled = false;
    // Når testen er ferdig
    } else {
        scoreFeedback();
        afterTestDisplay();    
    }          
    if (counter == (solution.length - 1))
        nextButton.innerHTML = "SCORE&longrightarrow;";
}


// Nr 2: Funksjon som sjekker om input er riktig og skriver ut til skjerm om svaret er riktig eller galt
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
    checkButton.disabled = true; // har bare en sjangse til å checke
}


//=== Kaller funksjonene ved knappetrykk ==================
checkButton.addEventListener("click", checkFeedback); 
nextButton.addEventListener("click", nextFunc);
//=========================================================


