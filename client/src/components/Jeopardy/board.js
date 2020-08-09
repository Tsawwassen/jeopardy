import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'


class Board extends Component {

	constructor(props){
    super(props);
    this.state = {

    }

    this.createRow = this.createRow.bind(this);
  }

	componentDidMount(){
		//console.log(this.props.value);
	}

	createRow(price, i, board){

		return (<tr key={i}>
					{(!board[0].complete && !board[0].asked[i]) ? <td>{price}</td> : <td></td>}
					{(!board[1].complete && !board[1].asked[i]) ? <td>{price}</td> : <td></td>}
					{(!board[2].complete && !board[2].asked[i]) ? <td>{price}</td> : <td></td>}
					{(!board[3].complete && !board[3].asked[i]) ? <td>{price}</td> : <td></td>}
					{(!board[4].complete && !board[4].asked[i]) ? <td>{price}</td> : <td></td>}
					{(!board[5].complete && !board[5].asked[i]) ? <td>{price}</td> : <td></td>}
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
					        	if(category.complete) return (<th key={i}></th>);
						        else return (<th key={i}>{category.category}</th>)
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