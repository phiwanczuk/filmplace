import React, { Component } from 'react';
import './App.css'
import { Provider } from 'react-redux'
import { store } from './store'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Films from './components/Films'
import FilmsSearch from "./components/Films/FilmsSearch";
import SingleFilm from "./components/SingleFilm/SingleFilm";


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Route exact path="/" component={FilmsSearch}/>
                        <Route exact path="/" component={Films}/>
                        <Route path="/film/:id" component={SingleFilm}/>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;