## Weekend Project, Jeopardy
Create a Jeopardy app using React.

## Goal
Make something fun, rather then a business app.
### Allow a host to create a game board
	- Input needed is 6 categories, 5 questions and answers for each category.
#### Bonus 
		- Allow host to set question time limit.
		- Allow the host to upload pictures/videos that can be displayed/played when the question is selected.
		- (DONE*) Create a way to upload pre-created game board.
		- If the app is going to have two rounds and a daily double, allow the host to enter more questions.
### Display game board
	- Given the board information, display the Jeopardy board.
	- Host is able to click a square to see the question, then click again to show the answer.
	- Once the answer has been shown, return back to the board, and disable that square so that it can't be clicked again.
#### Bonus
		- Display a timer on the questions screen.
### Game rules
	- The game will have one round.
	- The  round will have one daily double.
	- The scores will be 200, 400, 600, 800, 1000.
#### Bonus
		- The game will have two rounds, and a final jeopardy.
		- The secound round will have two daily doubles.
		- The scores are doubled in the secound round.
### Game flow
	- A player will select a category and score, then the host will click that square.
	- The board will then be hidden, and the question will be displayed.
	- The players will then have a chance to buz in to answer the question.
	- If a player gets it correct or the (bonus) timer ends, then the anwer is displayed, and the board is displayed again with the last asked question unavailable.

## Plan of action
### (DONE) Create home component
	-Button to create game.
	-(bonus) Button to upload game questions.
### (DONE) Create input component
	- Fields for categories (6) and questions/answers (5 for each categorie).
	- Button to start game (check that all fields have been filled in before starting the game).
	- When the game is started a questions to be the daily double (two questions for round two).
### (DONE) Create board component
	- Display a table with categories on the top row, and scores in the rest of the table.
	- Allow the host to click a score to view that question.
	- If the question have already been asked, don't allow the host to select that question again.
### (DONE) Create question component
	- Display the selected question.
	- Button to reveal the answer.
	- If the question is a daily double, show that it is when the question is displayed.
### (DONE) Create answer component
	- Display the answer to the selected question.
	- Button to return to the board component.

## Still ToDo
	- Track when a game/round is over
	- Implement the time restriction
	- Implement the daily double
	- The 'Bonus' notes from this README

##Post Weekend Project Comment
	- Using React to manage the different views went well.
	- The way I organized the board object did give me some troubles when displaying the table, but isolate what I needed to loop and make it work.
	- I would like to work on the board render since there is some hard coded indexes that I would like to put into a loop.
	- The logic to manage what categories and questions are asked worked well.
	- The input component sounded like a good idea in my head, but when I implemented it, there is way too many text fields and does not look nice.
	- Overall, happy with how the project went. I got the idea of making it multiplayer with sockets in the future, but I will need to clean up this code before I take the sockets on.



## Motivation
Code a game using React.

## Features
-React
-Bootstrap

## Code Example


## Installation


## How to use?
use 'npm start' from project root

## Contribute


## Credits
Jeopardy! (NBC)

#### Anything else that seems useful

## License
MIT (I still dont understand this License thing)

MIT © Mitchell()
