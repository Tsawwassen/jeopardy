import React, { Component } from 'react';
import {Table, Button} from 'react-bootstrap'


class Board extends Component {

	constructor(props){
    super(props);
    this.state = {

    }

    this.createRow = this.createRow.bind(this);
    this.createHeader = this.createHeader.bind(this);
  }

	componentDidMount(){
		//console.log(this.props.value);
	}

	createHeader(category, i){
		if(category.complete) return (<th key={i}></th>);
		else return (<th key={i}>{category.category}</th>);

		//I've tried getting the above code to work with a ternery operations, but it just does not seem to accept it

	}

	createRow(price, i, board){


		//It would be nice to nest the below code in another loop, but for not its working
		return (<tr key={i}>
					{(!board[0].complete && !board[0].asked[i]) ? <td><Button onClick={this.props.onClick} name={`c0q${i}`}>{price}</Button></td> : <td></td>}
					{(!board[1].complete && !board[1].asked[i]) ? <td><Button onClick={this.props.onClick} name={`c1q${i}`}>{price}</Button></td> : <td></td>}
					{(!board[2].complete && !board[2].asked[i]) ? <td><Button onClick={this.props.onClick} name={`c2q${i}`}>{price}</Button></td> : <td></td>}
					{(!board[3].complete && !board[3].asked[i]) ? <td><Button onClick={this.props.onClick} name={`c3q${i}`}>{price}</Button></td> : <td></td>}
					{(!board[4].complete && !board[4].asked[i]) ? <td><Button onClick={this.props.onClick} name={`c4q${i}`}>{price}</Button></td> : <td></td>}
					{(!board[5].complete && !board[5].asked[i]) ? <td><Button onClick={this.props.onClick} name={`c5q${i}`}>{price}</Button></td> : <td></td>}
				</tr>);
	}

  	render () { 
  		//Because the table html needs rows then col to loop nicely when checking the comeplete/asked flag, the board data needs to be formatted into a 2d array.
  		//// When designing the board object and looking at the Jeopardy board, it made 

  		//The given board object has a loop for the category, and then an inner loop for the question
  		// But because the HTML table needs

  		let prices = [200, 400, 600, 800, 1000];
  		let board = this.props.value;

  		return (
  			<div>
  				<Table striped bordered >
				  	<thead>
					    <tr>
					        {board.map((category, i) =>{
					        	return this.createHeader(category, i);
						    })}
					        					    
					    </tr>
				  	</thead>
				  	<tbody>
				    	
					    {prices.map((price, i)=> { 
					    	return this.createRow(price, i, board);
					    })}

				  	</tbody>
				</Table>
  			</div>
  		);
  	}
}

export default Board;