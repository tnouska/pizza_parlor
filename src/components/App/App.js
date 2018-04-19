import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Menu from '../menu/menu.js';
import { connect } from 'react-redux';
import Checkout from '../checkout/checkout.js'

const mapStateToProps = reduxState => ({
  reduxState,
});


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
          <Route exact path="/" component={Menu} />
          <Route path="/checkout" component={Checkout} />
        </div>
      </Router>
    );
  }
}

export default connect(mapStateToProps)(App);
