import React from 'react';
import Navbar from './components/navbar/navbar.js';
import Jeopardy from './components/Jeopardy/jeopardy.js';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
     <div className="App"> 
      <Navbar />
      <div className="container">
        <Jeopardy />
      </div>

     </div>
  );
}

export default App;
