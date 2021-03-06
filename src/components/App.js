import React, { Component } from 'react';
import Landing from './Landing';
import Playlist from './Playlist';
import '../styles/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/"
              component={Landing} />
            <Route path={'/:id'}
              component={Playlist} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
