import React, { Component } from 'react';
import Player from './Player';
import '../styles/Videos.css';
import Video from './Video';
import { firebaseListToArray } from '../utils/firebase';


class Videos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedVideo: null,
      playingVideoId: null,
      videos: []
    }

    this._handleSelectVideo = this._handleSelectVideo.bind(this);
    this._handlePlayVideo = this._handlePlayVideo.bind(this);
  }

  _handleSelectVideo(video) {
    this.setState({
      selectedVideo: video
    });
  }

  _handlePlayVideo() {
    let videoId = this.state.selectedVideo.id.videoId;
    this.setState({
      playingVideoId: videoId
    });
  }

  componentDidMount() {
    this.videosRef = this.props.playlistRef.child('videos/');
    this.videosRef.on('value', snapshot => {
      this.setState({
        videos: firebaseListToArray(snapshot.val())
      });
    });
  }

  componentWillUnmount() {
    this.videosRef.off();
  }

  render() {
    let videoComps = this.state.videos.map((video, key) => {
      return(
        <Video key={key} video={video}
          videosRef={this.videosRef}
          _handleSelectVideo={this._handleSelectVideo}
          _handlePlayVideo={this._handlePlayVideo}
          isSelected={this.state.selectedVideo === video}/>
      );
    });

    return(
      <div className="Videos overflow-container">
        <h2 id="select-prompt">Select A Video to Play:</h2>
        <ul className="video-container">
          { videoComps }
        </ul>
        <Player videoId={this.state.playingVideoId}/>
      </div>
    );
  }
}

export default Videos;
