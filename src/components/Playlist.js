import React, { Component } from 'react';
import Search from './Search';
import Songs from './Songs';
import axios from 'axios';

class Playlist extends Component {
  constructor(props) {
    super(props);
    let playlistId = window.location.pathname.slice(1)
    this.state = {
      playlistId: playlistId,
      songs: [],
      name: '',
      descr: ''
    };

    this.getPlaylistInfo = this.getPlaylistInfo.bind(this);
  }

  getPlaylistInfo() {
    axios.get(`http://localhost:3000/playlists/${this.state.playlistId}`)
    .then(res => {
      this.setState({
        songs: res.data.songs,
        name: res.data.name,
        descr: res.data.description
      });
    })
    .catch(err => {
      console.log(err);
    })
  }

  componentWillMount() {
    this.getPlaylistInfo();
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
            <button id="go-home" onClick={this.props.handlePlaylistDelete}>Go Back Home</button>
          </nav>
          <button id="deletePlaylistBtn">Delete playlist</button>
        </header>
        <Search />
        <Songs />
      </div>
    )
  }
}

export default Playlist;
