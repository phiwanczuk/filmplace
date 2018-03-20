import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Films from './components/Films/Films'


class App extends Component {
  render() {
    return (
        <Router>

                <Route exact
                       path="/"
                       component={Films} />


        </Router>
    );
  }
}

export default App;
