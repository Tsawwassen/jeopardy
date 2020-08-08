import React, { Component } from 'react';
import Home from './home.js';

class Jeopardy extends Component {

  constructor(props){
    super(props);
    this.state = {
    	view: "home",
    	board: [],
    	timer: 5
    }

    this.createView = this.createView.bind(this);
  }

  createView(){
  	this.setState({view: "create"});
  }
  

  //Note, might not need all of these view checks here. Some components might be managed inside other components (ie the question can render the answer, and not managed by this component)
  render () { 
  	if(this.state.view === "home") return (<Home onClick={this.createView}/>);
  	if(this.state.view === "create") return (<h1>create</h1>);
  	if(this.state.view === "board") return (<h1>board</h1>);
  	if(this.state.view === "question") return (<h1>question</h1>);
  	if(this.state.view === "answer") return (<h1>answer</h1>);
  }
}

export default Jeopardy;