
//Scripts for the Multiple Choice activity

//This line sets the Multiple Choice score counter at 0 in local storage for later use
localStorage.setItem('ScoreCounter', '0');

//The below function advances the quiz from question 1 to question 2, directing users to the next page
//It also creates a new variable to track the user's score after question 1, which will be used for question 2's score calculation
function advanceQuestion1(answer) {
    let score = '0';
    if (answer === 'A') {
        score = parseInt(score);
        score += 1;
    } else {
    };
    localStorage.setItem('ScoreCounterQ1', score);
    window.location.href = "MultipleChoiceQ2.html";
}


//The below function advences the quiz from question 2 to question 3, directing users to the next page
//It also creates a new variable to track the user's score after question 2, which will be used for question 3's score calculation
function advanceQuestion2(answer) {
    let score = localStorage.getItem('ScoreCounterQ1');
    if (answer === 'C') {
        score = parseInt(score);
        score += 1;
    } else {};  
    localStorage.setItem('ScoreCounterQ2', score);
    window.location.href = "MultipleChoiceQ3.html";
}

//The below function advences the quiz from question 3 to question 4, directing users to the next page
//It also creates a new variable to track the user's score after question 3, which will be used for question 4's score calculation
function advanceQuestion3(answer) {
    let score = localStorage.getItem('ScoreCounterQ2');
    if (answer === 'C') {
        score = parseInt(score);
        score += 1;
    } else {};  
    localStorage.setItem('ScoreCounterQ3', score);
    window.location.href = "MultipleChoiceQ4.html";


}

//The below function advences the quiz from question 4 to question 5, directing users to the next page
//It also creates a new variable to track the user's score after question 4, which will be used for question 5's score calculation
function advanceQuestion4(answer) {
    let score = localStorage.getItem('ScoreCounterQ3');
    if (answer === 'D') {
        score = parseInt(score);
        score += 1;
    } else {};  
    localStorage.setItem('ScoreCounterQ4', score);
    window.location.href = "MultipleChoiceQ5.html";

}

//The below function advences the quiz from question 5 to the results screen. It also saves the final score variable in localStorage, to preserve it between the screens
function advanceQuestion5(answer) {
    let score = localStorage.getItem('ScoreCounterQ4');
    if (answer === 'A') {
        score = parseInt(score);
        score += 1;
    } else {};  
    localStorage.setItem('ScoreCounterQ5', score);
    window.location.href = "MultipleChoiceResults.html";


}

//The below function displays the score onto the screen. This function is used for every question page including the results page.
function displayScore(currentQuestionNum) {
    let index = currentQuestionNum-2;
    let scoreVariables = ['ScoreCounterQ1','ScoreCounterQ2','ScoreCounterQ3','ScoreCounterQ4','ScoreCounterQ5']
    let score = localStorage.getItem(scoreVariables[index]);
    document.getElementById("scoreDisplay").innerHTML = "Score: " + score;
}

/*End of the Multiple Choice scripts
--------------------------------------------------------------------
Scripts for the Flashcard activity */

//This function flips the flashcard when it is clicked
function flipCard() {
    flashcard.classList.toggle("flipCardAction");
}
/* End of the Flashcard script

--------------------------------------------------------------------

Scripts for the Cloze Passage activity */

const clozePassageText = ["Privacy and accessbility are ___________ of the software developer.", "Statement 2", "Statemetn 3", "Statement 4", "Statement 5", ];
let userInputAnswer = '';
const correctClozeAnswers = ['z', '2a', 'a', '4a', '5a'];
let currentPassageIndex = 0;
const totalPassages = 5;
let clozeScore = 0;

function initiateCloze() {
    document.getElementById("clozePassage").innerHTML = clozePassageText[currentPassageIndex];
    clozeScore = 0;
}

function checkAnswer() {
    userInputAnswer = document.getElementById("userInput").value.trim().toLowerCase();
    if ( currentPassageIndex < totalPassages-1) {
        if ( userInputAnswer == correctClozeAnswers[currentPassageIndex]) {
            
            clozeScore++ ;
            currentPassageIndex++;
            document.getElementById("currentPassageNum").innerHTML = "Passage " + (1 + currentPassageIndex) + " of " + totalPassages;
            document.getElementById("clozePassage").innerHTML = clozePassageText[currentPassageIndex];
            document.getElementById("clozeScoreDisplay").innerHTML = "Passages completed correctly: " + clozeScore;
            ClearAnswerBox();
        }
        else{
            currentPassageIndex++;
            document.getElementById("currentPassageNum").innerHTML = "Passage " + (1 + currentPassageIndex) + " of " + totalPassages;
            document.getElementById("clozePassage").innerHTML = clozePassageText[currentPassageIndex];
            document.getElementById("clozeScoreDisplay").innerHTML = "Passages completed correctly: " + clozeScore;
            ClearAnswerBox();
        }
    }
    else {
        window.location.href = "ClozePassageResults.html";
        localStorage.setItem('ClozePassageScore', clozeScore); // This line stores the user's score in localStorage so that it can be accessed on the results screen

        //reset index
        //go to results
    }

    
}

//The below function displays the user's final score for the Cloze Passage activity
function displayClozeResults() {
    let finalClozeScore = localStorage.getItem('ClozePassageScore');
    document.getElementById("clozeScoreDisplay").innerHTML = "Score: " + finalClozeScore;

}

//The below function clears the text input box for the Cloze Passage activity
function ClearAnswerBox() {

    document.getElementById("userInput").value = "";
}
//End of the Cloze Passage scripts