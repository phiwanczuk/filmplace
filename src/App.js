import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Movies from './components/Movies/Movies'
import './App.css';

class App extends Component {
  render() {
    return (
        <Router>

                <Route exact
                       path="/"
                       component={Movies} />


        </Router>
    );
  }
}

export default App;