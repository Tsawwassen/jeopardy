import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

class Home extends Component {
  	render () { 
  		return (
  			<div>
  				<Button onClick={this.props.onClick[0]}> Create Jeopardy Game </Button>
  				<Button onClick={this.props.onClick[1]}> Use Default Jeopardy Game </Button>
  			</div>
  		);
  	}
}

export default Home;