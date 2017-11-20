import React, { Component } from 'react';
import Player from './Player';
import '../styles/Videos.css';
import Video from './Video';


class Videos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedVideoRef: null,
      playingVideoRef: null,
      videos: []
    }

    this._handleSelectVideo = this._handleSelectVideo.bind(this);
    this._handlePlayVideo = this._handlePlayVideo.bind(this);
    this._playNextVideo = this._playNextVideo.bind(this);
  }

  _handleSelectVideo(videoRef) {
    this.setState({
      selectedVideoRef: videoRef
    });
  }

  _handlePlayVideo() {
    this.setState({
      playingVideoRef: this.state.selectedVideoRef
    });
  }

  _playNextVideo() {
    let lastVideoIndex = this.state.videos.findIndex(videoRef => videoRef === this.state.playingVideoRef);
    let nextVideoIndex = lastVideoIndex + 1;
    if(nextVideoIndex === this.state.videos.length) {
      nextVideoIndex = 0;
    }
    this.setState({
      playingVideoRef: this.state.videos[nextVideoIndex]
    });
  }

  componentDidMount() {
    this.videosRef = this.props.playlistRef.child('videos/');
    this.videosRef.on('value', snapshot => {
      let videoRefAry = [];
      snapshot.forEach(videoRef => {
        videoRefAry.push(videoRef);
      })
      this.setState({
        videos: videoRefAry
      });
    });
  }

  componentWillUnmount() {
    this.videosRef.off();
  }

  render() {
    console.log('re-rendering Videos');
    let videoComps = this.state.videos.map((videoRef, key) => {
      return(
        <Video key={key} videoRef={videoRef}
          _handleSelectVideo={this._handleSelectVideo}
          _handlePlayVideo={this._handlePlayVideo}
          isSelected={this.state.selectedVideoRef === videoRef}/>
      );
    });

    return(
      <div className="Videos overflow-container">
        <h2 id="select-prompt">Select A Video to Play:</h2>
        <ul className="video-container">
          { videoComps }
        </ul>
        <Player videoRef={this.state.playingVideoRef}
          _playNextVideo={this._playNextVideo}/>
      </div>
    );
  }
}

export default Videos;
