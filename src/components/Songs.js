import React, { Component } from 'react';
import Player from './Player';

class Songs extends Component {
  render() {
    return(
      <div className="overflow-container">
        <p id="select-prompt">Select A Song to Play:</p>
        <ul className="song-container">

        </ul>
        <button id="deleteSongBtn">Delete Song from Playlist</button>
        <Player />
      </div>
    );
  }
}

export default Songs;
