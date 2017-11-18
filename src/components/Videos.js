import React, { Component } from 'react';
import Player from './Player';
import { database, firebaseListToArray } from '../utils/firebase';
import '../styles/Videos.css';

class Videos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: []
    }

    this._handleDeleteVideo = this._handleDeleteVideo.bind(this);
  }

  _handleDeleteVideo(e) {
    // TODO axio call to API
    // set state

    // TODO make this a button on the video item and make video item its own Component
  }

  render() {
    let videoAry = this.state.videos.map(video => {
      return (
        <li className="videoItem" youtube-hash={video.youTubeHash}
          id={video._id}>{video.title}</li>
      )
    })
    return(
      <div className="overflow-container">
        <p id="select-prompt">Select A Video to Play:</p>
        <ul className="video-container">
          {videoAry}
        </ul>
        <button id="deleteVideoBtn" onClick={this._handleDeleteVideo}>Delete Video from Playlist</button>
        <Player />
      </div>
    );
  }
}

export default Videos;
