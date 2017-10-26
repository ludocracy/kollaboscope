import React, { Component } from 'react';
import Landing from './components/Landing';
import Playlist from './components/Playlist';
import axios from 'axios';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      curPlaylistId: null,
      curPlaylistName: '',
      curPlaylistDescr: ''
    }

    this.onSubmitPlaylist = this.onSubmitPlaylist.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescrChange = this.handleDescrChange.bind(this);
    this.handlePlaylistDelete = this.handlePlaylistDelete.bind(this);
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
      this.setState({
        curPlaylistId: res._id
      });
      // <Redirect to={'/' + res._id} />
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    let playlistId = this.state.curPlaylistId;

    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/"
              render={props => <Landing {...props} handleNameChange={this.handleNameChange} handleDescrChange={this.handleDescrChange} onSubmitPlaylist={this.onSubmitPlaylist} />} />
            <Route path={'/:id'}
              render={props => <Playlist {...props} handlePlaylistDelete={this.handlePlaylistDelete} playlistId={playlistId} />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
