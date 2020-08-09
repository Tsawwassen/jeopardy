import React, { Component } from 'react';
import Home from './home.js';
import Create from './create.js';
import Board from './board.js';

class Jeopardy extends Component {

  	constructor(props){
	    super(props);
	    this.state = {
	    	view: "home",
	    	board: [],
	    	timer: 5
	    };

	    this.createView = this.createView.bind(this);

	    this.createOnChange = this.createOnChange.bind(this);
	    this.createOnSubmit = this.createOnSubmit.bind(this);

	    this.updateCategory = this.updateCategory.bind(this);
	    this.updateQuestion = this.updateQuestion.bind(this);
	    this.updateAnswer = this.updateAnswer.bind(this);

	    this.useDefaultBoard = this.useDefaultBoard.bind(this);
	}

	componentDidMount(){
		let t_board = this.state.board;
      	for(let i = 0 ; i < 6 ; i++){
      		t_board.push({
      			category: "",
      			complete: false,
      			questions: new Array(5),
      			answers: new Array(5),
      			asked: new Array(5).fill(false)
      		});
      	}
      	this.setState({board: t_board})

      	
  	}

  	createView(){
  		this.setState({view: "create"});
  	}

  	createOnChange(event){
  		//Event target will either be two digit in the format c[0-5], 
  		// or four digits in the format c[0-5][q or a][0-4].

  		//If event.target.name is length 2, then a category field was updated.
  		if(event.target.name.length === 2) return this.updateCategory(event.target);
  		//If the third character is an 'q', a question field was updated.
  		if(event.target.name[2] === 'q') return this.updateQuestion(event.target);
  		//Else, the third character is an 'a', a answer field was updated.
  		if(event.target.name[2] === 'a') return this.updateAnswer(event.target);
  		
  		console.log("this log should never print");

  	}

  	////update the category of the last digit of the event.target.name.
  	updateCategory(category){
  		let t_board = this.state.board;
  		let cat_index = category.name[1];
  		let cat_update = category.value;

  		t_board[cat_index].category = cat_update;
  		this.setState({board: t_board});

  	}

  	////update the question number of the given category.
  	updateQuestion(question){
  		let t_board = this.state.board;
  		let cat_index = question.name[1];
  		let que_index = question.name[3];
  		let que_update = question.value;

  		t_board[cat_index].questions[que_index] = que_update;
  		this.setState({board: t_board});

  	}

  	////Update the answer number of the given category.
  	updateAnswer(answer){
  		let t_board = this.state.board;
  		let cat_index = answer.name[1];
  		let ans_index = answer.name[3];
  		let ans_update = answer.value;

  		t_board[cat_index].answers[ans_index] = ans_update;
  		this.setState({board: t_board});
  	}

  	//Add function to create a default board for testing purposes
  	useDefaultBoard(){
  		let t_board = [
			{"category":"c0","complete":false,"questions":["q00","q01","q02","q03","q04"],"answers":["a00","a01","a02","a03","a04"],"asked":[false,false,false,false,false]},
			{"category":"c1","complete":false,"questions":["q10","q11","q12","q13","q14"],"answers":["a10","a11","a12","a13","a14"],"asked":[false,false,false,false,false]},
			{"category":"c2","complete":false,"questions":["q20","q21","q22","q23","q24"],"answers":["a20","a21","a22","a23","a24"],"asked":[false,false,false,false,false]},
			{"category":"c3","complete":false,"questions":["q30","q31","q32","q33","q34"],"answers":["a30","a31","a32","a33","a34"],"asked":[false,false,false,false,false]},
			{"category":"c4","complete":false,"questions":["q40","q41","q42","q43","q44"],"answers":["a40","a41","a42","a43","a44"],"asked":[false,false,false,false,false]},
			{"category":"c5","complete":false,"questions":["q50","q51","q52","q53","q54"],"answers":["a50","a51","a52","a53","a54"],"asked":[false,false,false,false,false]}
		];
		this.setState({board: t_board, view: "play"});
  	}
  	
  	//The host has input all board information and is ready to start the game
  	createOnSubmit(event){
  		this.setState({view: "play"});
  		event.preventDefault();
  	}

  	//Note, might not need all of these view checks here. Some components might be managed inside other components 
  	//(ie the question can render the answer, and not managed by this component)
  	render () { 
	  	if(this.state.view === "home") return (<Home onClick={[this.createView, this.useDefaultBoard]} />);
	  	if(this.state.view === "create") return (<Create onChange={this.createOnChange} onSubmit={this.createOnSubmit} />);
	  	if(this.state.view === "play") return (<Board value={this.state.board} />);
	  	if(this.state.view === "question") return (<h1>question</h1>);
	  	if(this.state.view === "answer") return (<h1>answer</h1>);
  	}
}

export default Jeopardy;