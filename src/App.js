import React, { Component } from 'react';
import './App.css';
import {HashRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import routes from './router/router';

class App extends Component {
  render() {
    return (
      <div className="App">
          <HashRouter>
            {renderRoutes(routes)}
          </HashRouter>
      </div>
    );
  }
}

export default App;
