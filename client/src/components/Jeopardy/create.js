import React, { Component } from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap';
import _ from "lodash";

class Create extends Component {

	constructor(props){
    super(props);
    this.state = {

    }

    this.populateForm = this.populateForm.bind(this);
  }


 
	testOnSubmit(event){
		console.log("hello");

		event.preventDefault();
	}

	testOnChange(event){

		console.log(event.target.name);
	}

	populateForm(category){
		let form = [];

		
		form.push(<hr />);
		form.push(
			<Row>
				<Col><Form.Label>Category {category + 1}</Form.Label></Col>
				<Col><Form.Control name={'c' + category} type="text" placeholder={'Category ' + (category + 1)} onChange={this.props.onChange} /></Col>
			</Row>
		);
		form.push(<br />);
		form.push(<br />);
		for(let question = 0 ; question < 5 ; question++){
			form.push( <div>
				<Row>
		    		<Col><Form.Label>Question {question + 1}</Form.Label></Col>
		    		<Col><Form.Control name={'c' + category + 'q' + question} type="text" placeholder={'Question ' + (question + 1)} onChange={this.props.onChange} /></Col>
		    	</Row>
		    	<Row>
		    		<Col><Form.Label>Answer {question + 1}</Form.Label></Col>
					<Col><Form.Control name={'c' + category + 'a' + question} type="text" placeholder={'Answer ' + (question + 1)} onChange={this.props.onChange} /></Col>
				</Row>
				<br /></div>
			);
		}

		return form;
	}


  render () { 
  	return (
  		<div>
  			<Form>
  				<Form.Group >
  					{_.times(6, (category) => (
	  					this.populateForm(category)
	    			))}
	  			</Form.Group>
	  			<Button variant="primary" type="submit" onClick={this.props.onSubmit}>
    				Create
  				</Button>
	  		</Form>
  		</div>
  	);
  }
}

export default Create;