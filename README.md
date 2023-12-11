# SDD-Code-Project-2023-T4

SDD Study App (Prototype) by Timothy

After downloading the files, open the Login.html file to begin. As this is a prototype, some graphics and features may not yet be implemented (eg. the weekly study goal system, language options and theme options). However, the main functionality of the app is complete.

This is a prototype of a study app for year 12 SDD (Software Development and Design) students. The full app will include the following features:
- **A Weekly Goal system**, where you can set a weekly study goal for the app
- **A Multiple Choice activity**, where students can test themselves on a variety of questions
- **A Flashcards activity**, where students can study using a variety of flashcards
- **A Cloze Passage activity**, where students can test their knowledge on the SDD module
- **A variety of language options**, allowing for greater user accessibility
- **Multiple appearance themes**, allowing for more effective user experience
There are currently 5 questions for each activity in this prototype.

**How to access the different screens:**
 To access the home page from the login page, input any text into the studentID and Password fields.
 To access the settings page, click the top-right cog icon on any page after logging in.

**For question and answer customisations:**

To alter the multiple-choice questions and answers, do the following:
1. Open the respective MultipleChoiceQ.html file for each question and alter the text written for each question
2. Also in the MultipleChoice.html file, alter the four 'button' elements at the bottom of the file to change the answer options
3. Open the script.js file, look for the respective advanceQuestion() function and alter the 'if' condition as required

To alter the flashcards, do the following:
1. Open each respective Flashcard.html file and alter the elements with class 'front' and 'back' to change the text on the front and back of each card

To alter the Cloze Passages, do the following:
1. Open the script.js file and look for the clozePassageText array
2. Alter each element in the clozePassageText array
3. Find and alter the contents in the correctClozeAnswers array into the correct answers for the new cloze passages
