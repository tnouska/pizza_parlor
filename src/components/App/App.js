import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Prime Pizza</h1>
          </header>
          <ul>
            <li>
              <Link to='/'>MENU</Link>
            </li>
            <li>
              <Link to='/checkout'>CHECKOUT</Link>
            </li>
          </ul>
          <br/>
          <p>Pizza is great.</p>
        </div>
        {/* Routes will go here */}
      </Router>
    );
  }
}

export default App;
