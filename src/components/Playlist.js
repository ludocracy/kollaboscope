import React, { Component } from 'react';
import Search from './Search';
import Songs from './Songs';
import '../styles/Playlist.css';
import { database, firebaseListToArray } from '../utils/firebase';

class Playlist extends Component {
  constructor(props) {
    super(props);

    let playlistId = window.location.pathname.slice(1);
    this.state = {
      playlistId: playlistId,
      songs: [],
      name: '',
      descr: ''
    };

    this.getPlaylistInfo = this.getPlaylistInfo.bind(this);
    this.deletePlaylist = this.deletePlaylist.bind(this);
  }

  // TODO websocket client code to invoke getPlaylistInfo()

  getPlaylistInfo() {
    // TODO get host URL from env var
    // axios.get(`http://localhost:3000/playlists/${this.state.playlistId}`)
    // .then(res => {
    //   this.setState({
    //     songs: res.data.songs,
    //     name: res.data.name,
    //     descr: res.data.description
    //   });
    // })
    // .catch(err => console.log(err) )
  }

  deletePlaylist() {
    // TODO get host URL from env var
    // axios.delete(`http://localhost:3000/playlists/${this.state.playlistId}`)
    // .then(res => {
    //   this.redirectHome();
    // })
    // .catch(err => console.log(err));
  }

  componentWillMount() {
    this.getPlaylistInfo();
  }

  redirectHome() {
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
              onClick={this.redirectHome}>Go Back Home</button>
          </nav>
          <button id="deletePlaylistBtn"
            onClick={this.deletePlaylist}>Delete playlist</button>
        </header>
        <Search />
        <Songs songs={this.state.songs} />
      </div>
    )
  }
}

export default Playlist;
