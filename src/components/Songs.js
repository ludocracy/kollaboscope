import React, { Component } from 'react';
import Player from './Player';

class Songs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: this.props.songs
    }

    this.deleteSong = this.deleteSong.bind(this);
  }

  deleteSong(e) {
    // TODO axio call to API
    // set state

    // TODO make this a button on the song item and make song item its own Component
  }

  render() {
    let songAry = this.state.songs.map(song => {
      return (
        <li className="songItem" youtube-hash={song.youTubeHash}
          id={song._id}>{song.title}</li>
      )
    })
    return(
      <div className="overflow-container">
        <p id="select-prompt">Select A Song to Play:</p>
        <ul className="song-container">
          {songAry}
        </ul>
        <button id="deleteSongBtn" onClick={this.deleteSong}>Delete Song from Playlist</button>
        <Player />
      </div>
    );
  }
}

export default Songs;
