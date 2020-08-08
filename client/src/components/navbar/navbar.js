import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';

import './navbar.css';

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
        
        </Navbar>
      </div>
    );
  }
}

export default Navigation;