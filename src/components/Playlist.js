import React, { Component } from 'react';
import Search from './Search';
import Songs from './Songs';
import '../styles/Playlist.css';
import { database, firebaseListToArray } from '../utils/firebase';

class Playlist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: ''
    }

    this._handleDeletePlaylist = this._handleDeletePlaylist.bind(this);
  }
  componentDidMount() {
    // pulling playlist id from url since routing didn't work
    this.playlistId = window.location.pathname.slice(1);

    // setting db reference for this playlist
    this.ref = database.ref(`playlists/${this.playlistId}`);

    // listening for changes to this playlist's info
    this.ref.on('value', snapshot => {
      this.setState({
        name: snapshot.val().name,
        description: snapshot.val().description
      });
    });
  }

  componentWillUnmount() {
    this.ref.off();
  }

  _handleDeletePlaylist() {
    this.ref.remove();

    // redirect home
    this._goHome();
  }

  _goHome() {
    window.location.replace('/');
  }

  render() {
    return(
      <div>
        <header>
          <div id="playlist-title">
            <h1 className="playlist-name">{this.state.name}</h1>
            <h2 className="playlist-descr">{this.state.description}</h2>
          </div>
          <nav>
            <button id="go-home"
              onClick={this._goHome}>Go Back Home</button>
          </nav>
          <button id="deletePlaylistBtn"
            onClick={this._handleDeletePlaylist}>Delete playlist</button>
        </header>
        <Search playlistRef={this.ref} />
        <Songs playlistId={this.playlistId} />
      </div>
    )
  }
}

export default Playlist;
