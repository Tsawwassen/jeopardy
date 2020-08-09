import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

class Question extends Component {

  	render () { 
  		console.log(this.props.value);
  		return (
  			<div>
  				<h1>{this.props.value}</h1>
  				<Button onClick={this.props.onClick}> Show Answer </Button>
  			</div>
  		);
  	}
}

export default Question;