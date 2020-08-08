import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

class Home extends Component {
  	render () { 
  		return (
  			<div>
  				<Button onClick={this.props.onClick}> Create Jeopardy Game </Button>
  			</div>
  		);
  	}
}

export default Home;