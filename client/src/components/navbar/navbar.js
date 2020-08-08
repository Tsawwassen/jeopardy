import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';

class Navigation extends Component {

  constructor(props){
    super(props);
    this.state = {
    }
  }

  render () {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">!Jeopardy</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#"></Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;