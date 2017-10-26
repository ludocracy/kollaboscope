import React, { Component } from 'react';
import Landing from './components/Landing';
import Playlist from './components/Playlist';
import axios from 'axios';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      curPlaylistId: null,
      curPlaylistName: '',
      curPlaylistDescr: ''
    }

    this.semiAutobind(['onSubmitPlaylist', 'handlePlaylistDelete',
      'handleDescrChange', 'handleNameChange', 'renderLanding', 'renderPlaylist']);
  }

  semiAutobind(fns) {
    fns.forEach(fn => this[fn] = this[fn].bind(this));
  }

  handleDescrChange(e) {
    this.setState({
      curPlaylistDescr: e.target.value
    })
  }

  handleNameChange(e) {
    this.setState({
      curPlaylistName: e.target.value
    })
  }

  handlePlaylistDelete(e) {
    this.setState({
      curPlaylistId: null,
      curPlaylistName: '',
      curPlaylistDescr: ''
    })
  }

  onSubmitPlaylist(e) {
    e.preventDefault();
    axios.post('http://localhost:3000/playlists', {
      name: this.state.curPlaylistName,
      description: this.state.curPlaylistDescr
    })
    .then(res => {
      let playlistId = res.data._id;
      this.setState({
        curPlaylistId: playlistId
      });
      window.location.replace(`/${playlistId}`)
    })
    .catch(err => {
      console.log(err);
    })
  }

  renderLanding(props) {
    return(
      <Landing {...props}
        handleNameChange={this.handleNameChange}
        handleDescrChange={this.handleDescrChange}
        onSubmitPlaylist={this.onSubmitPlaylist} />
    );
  }

  renderPlaylist(props) {
    return(
      <Playlist {...props}
        handlePlaylistDelete={this.handlePlaylistDelete}
        playlistId={this.state.curPlaylistId} />
    );
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/"
              render={this.renderLanding} />
            <Route path={'/:id'}
              render={this.renderPlaylist} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
