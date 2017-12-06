import React, { Component } from 'react';
import Search from './Search';
import Videos from './Videos';
import '../styles/Playlist.css';
import { database } from '../utils/firebase';

class Playlist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      playlistRef: null // loading db reference in state because it loads asynchronously
    }

    this._handleDeletePlaylist = this._handleDeletePlaylist.bind(this);
  }

  componentDidMount() {
    // pulling playlist id from url since routing didn't work
    let playlistId = window.location.pathname.slice(1);
    let playlistRef = database.ref(`playlists/${playlistId}`);

    // setting db reference for this playlist
    this.setState({
      playlistRef: playlistRef
    });

    // listening for changes to this playlist's info
    playlistRef.on('value', snapshot => {
      this.setState({
        name: snapshot.val().name,
        description: snapshot.val().description
      });
    });
  }

  componentWillUnmount() {
    this.state.playlistRef.off();
  }

  _handleDeletePlaylist() {
    if(window.confirm("Are you sure? Anyone else who uses this playlist will no longer be able to!")) {
      this.state.playlistRef.remove();

      this._goHome();
    }
  }

  _goHome() {
    window.location.replace('/');
  }

  render() {
    if(this.state.playlistRef) {
      return(
        <div>
          <header>
            <p>copy and share this link to kollaborate with your friends:</p>
            <span id="share-link">kollaboscope-183217.firebaseapp.com/{window.location.pathname.slice(1)}</span>
            <div id="playlist-title">
              <h1 className="playlist-name">{this.state.name}</h1>
              <h2 className="playlist-descr">{this.state.description}</h2>
            </div>
            <nav>
              <button id="go-home"
                onClick={this._goHome}>Go Back Home
              </button>
              <button id="deletePlaylistBtn"
                onClick={this._handleDeletePlaylist}>Delete playlist
              </button>
            </nav>
          </header>
          <div className="playlist-container">
            <Search playlistRef={this.state.playlistRef} />
            <Videos playlistRef={this.state.playlistRef} />
          </div>
        </div>
      );
    } else {
      return <div/>
    }
  }
}

export default Playlist;
