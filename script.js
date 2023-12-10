
//This login function is a stub. It only permits login if there is an input for both studentID and Password. It then redirects users to the Main page
function checkLogin() {
    loginStudentID = document.getElementById("inputStudentID").value;
    loginPassword = document.getElementById("inputPassword").value;
    if (loginStudentID != "" && loginPassword != ""){
        window.location.href='Main.html';
    }
    else{
        document.getElementById("loginUnsuccessful").innerHTML = "Invalid username or password. Please try again.";
    }
}


/* Scripts for the Multiple Choice activity */

//This line sets the Multiple Choice score counter at 0 in local storage for later use
localStorage.setItem('scoreMultipleChoice', '0');
const totalMultipleChoiceQuestions = 5;

/*The below function advances the quiz from question 1 to question 2.
It checks if the user's answer matches the correct answer and increments the score if they match.
It also creates a new localStorage variable to track the user's score after question 1, which will be used for question 2's score calculation */
function advanceQuestion1(answer) {
    let scoreMultipleChoice = '0';
    if (answer === 'A') {
        scoreMultipleChoice = parseInt(scoreMultipleChoice);
        scoreMultipleChoice += 1;
    } else {
    };
    localStorage.setItem('scoreMultipleChoiceQ1', scoreMultipleChoice);
    window.location.href = "MultipleChoiceQ2.html";
}


/*The below function advances the quiz from question 2 to question 3
It checks if the user's answer matches the correct answer and increments the score if they match.
It also creates a new localStorage variable to track the user's score after question 2, which will be used for question 3's score calculation */
function advanceQuestion2(answer) {
    let scoreMultipleChoice = localStorage.getItem('scoreMultipleChoiceQ1');
    if (answer === 'C') {
        scoreMultipleChoice = parseInt(scoreMultipleChoice);
        scoreMultipleChoice += 1;
    } else {};  
    localStorage.setItem('scoreMultipleChoiceQ2', scoreMultipleChoice);
    window.location.href = "MultipleChoiceQ3.html";
}

/*The below function advances the quiz from question 3 to question 4.
It checks if the user's answer matches the correct answer and increments the score if they match.
It also creates a new localStorage variable to track the user's score after question 3, which will be used for question 4's score calculation */
function advanceQuestion3(answer) {
    let scoreMultipleChoice = localStorage.getItem('scoreMultipleChoiceQ2');
    if (answer === 'C') {
        scoreMultipleChoice = parseInt(scoreMultipleChoice);
        scoreMultipleChoice += 1;
    } else {};  
    localStorage.setItem('scoreMultipleChoiceQ3', scoreMultipleChoice);
    window.location.href = "MultipleChoiceQ4.html";


}

/*The below function advances the quiz from question 4 to question 5.
It checks if the user's answer matches the correct answer and increments the score if they match.
It also creates a new localStorage variable to track the user's score after question 4, which will be used for question 5's score calculation */
function advanceQuestion4(answer) {
    let scoreMultipleChoice = localStorage.getItem('scoreMultipleChoiceQ3');
    if (answer === 'D') {
        scoreMultipleChoice = parseInt(scoreMultipleChoice);
        scoreMultipleChoice += 1;
    } else {};  
    localStorage.setItem('scoreMultipleChoiceQ4', scoreMultipleChoice);
    window.location.href = "MultipleChoiceQ5.html";

}

/*The below function advances the quiz from question 5 to the results screen.
It checks if the user's answer matches the correct answer and increments the score if they match.
It also saves the final score variable in localStorage to preserve it between the screens */
function advanceQuestion5(answer) {
    let scoreMultipleChoice = localStorage.getItem('scoreMultipleChoiceQ4');
    if (answer === 'A') {
        scoreMultipleChoice = parseInt(scoreMultipleChoice);
        scoreMultipleChoice += 1;
    } else {};  
    localStorage.setItem('scoreMultipleChoiceQ5', scoreMultipleChoice);
    window.location.href = "MultipleChoiceResults.html";


}

/*The below function displays the score onto the screen. To do this, it gets the score variable stored in localStorage for the respective question.
This function is used for every question page including the results page.
For the results page, it will display additional text before the score itself*/
function displayScore(currentQuestionNum) {
    let index = currentQuestionNum-2;
    let scoreVariables = ['scoreMultipleChoiceQ1','scoreMultipleChoiceQ2','scoreMultipleChoiceQ3','scoreMultipleChoiceQ4','scoreMultipleChoiceQ5']
    let scoreMultipleChoice = localStorage.getItem(scoreVariables[index]);
    if (index === 4) {
    document.getElementById("scoreDisplay").innerHTML = "You scored: " + scoreMultipleChoice + " / " + totalMultipleChoiceQuestions;
    }
    else{
    document.getElementById("scoreDisplay").innerHTML = "Score: " + scoreMultipleChoice;
    }
}

/*End of the Multiple Choice scripts
-----------------------------------------------------------------------
Scripts for the Flashcard activity */
const totalFlashcards = 5;

//This function flips the flashcard when it is clicked
function flipCard() {
    flashcard.classList.toggle("flipCardAction");
}

//This function displays how many flashcards were available for study
function displayFlashcardResults() {
    document.getElementById("flashcardEndDisplay").innerHTML = "You have studied " + totalFlashcards + " flashcards";
    
}
/* End of the Flashcard script

-----------------------------------------------------------------------

Scripts for the Cloze Passage activity */

//The below code globally declares the variables required for the cloze passage
const clozePassageText = ["Software developers need to consider their products' social and _____ impacts.",
"The ______ software development approach involves distinct formal stages and is usually used for large-scale projects.",
"A _____ licence allows a software product to be installed on multiple devices in one location with one licence.",
"Software ______ is the act of illegally copying, modifying, distributing, sharing, or selling software protected by copyright laws.",
"A _______ chart represents the hierarchical structure of modules and the data that flows between them in a software project.", ];
let userInputAnswer = '';
const correctClozeAnswers = ['ethical', 'structured', 'site', 'piracy', 'structure'];
let currentPassageIndex = 0;
const totalPassages = 5;
let clozeScore = 0;

//This function displays the first cloze passage on the screen, setting the score to 0
function initiateCloze() {
    document.getElementById("clozePassage").innerHTML = clozePassageText[currentPassageIndex];
    clozeScore = 0;
}

/*This function checks whether the correct answer has been submitted to the respective cloze passage. Then it updates the screen with the
new passage number, new passage text, new score and clears the input field box. 
When the user completes question 5, their answer is checked and they are sent to the results screen.
*/
function checkAnswer() {
    userInputAnswer = document.getElementById("userInput").value.trim().toLowerCase();
    
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
        };
    if ( currentPassageIndex === totalPassages) {
        window.location.href = "ClozePassageResults.html";
        localStorage.setItem('ClozePassageScore', clozeScore); // This line stores the user's score in localStorage so that it can be accessed on the results screen
    }

    
}

//The below function displays the user's final score for the Cloze Passage activity on the cloze passage results screen
function displayClozeResults() {
    let finalClozeScore = localStorage.getItem('ClozePassageScore');
    document.getElementById("clozeScoreDisplay").innerHTML = "You scored: " + finalClozeScore + " / " + totalPassages;

}

//The below function clears the text input box for the Cloze Passage activity
function ClearAnswerBox() {

    document.getElementById("userInput").value = "";
}
//End of the Cloze Passage scripts