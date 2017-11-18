import React, { Component } from 'react';
import Player from './Player';
import { database, firebaseListToArray } from '../utils/firebase';
import '../styles/Video.css';

class Video extends Component {
  constructor(props) {
    super(props);

    this._handleDeleteVideo = this._handleDeleteVideo.bind(this);
  }

  _handleDeleteVideo(e) {
    this.props.videosRef // TODO delete this.props.video from here
  }

  render() {
    let videoComp = this.props.isSelected
      // ? < show thumbnail and delete button >
      // : <just show video title and maybe playtime?
    return(
      <div className="Video">
        <button id="deleteVideoBtn" onClick={this._handleDeleteVideo}>Delete Video from Playlist</button>
      </div>
    );
  }
}

export default Video;
