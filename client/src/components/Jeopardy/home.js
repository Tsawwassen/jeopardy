import React, { Component } from 'react';

class Home extends Component {


  render () { 
  	return (
  		<div>
  			<button onClick={this.props.onClick}> Create Jeopardy Game </button>
  		</div>
  		);
  	
  }
}

export default Home;