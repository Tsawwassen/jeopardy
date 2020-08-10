import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

class Answer extends Component {

  	render () { 
  		return (
  			<div>
  				<h1>{this.props.value}</h1>
  				<Button onClick={this.props.onClick}> Back to Board</Button>
  			
  			</div>
  		);
  	}
}

export default Answer;
