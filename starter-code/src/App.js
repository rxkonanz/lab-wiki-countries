import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar.js';
import CountryList from './components/CountryList.js';
import CountryInfo from './components/CountryInfo.js';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="container">
          <div className="row">
            <CountryList />
            <Switch>
              <Route exact path='/:id' component={CountryInfo}/>
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
