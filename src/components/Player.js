import React, { Component } from 'react';
import YouTube from 'react-youtube';

class Player extends Component {
  constructor(props) {
    super(props);

    this._handleOnReady = this._handleOnReady.bind(this);
    this._handleStateChange = this._handleStateChange.bind(this);
  }

  _handleOnReady(e) {
    this.player = e.target;
  }

  _handleStateChange(e) {
    if(e.data === 0) {
      this.props._playNextVideo();
    }
  }

  render() {
    if(this.props.videoRef) {
      let opts = {
        playerVars: {
          autoplay: 1
        }
      };

      let videoId = this.props.videoRef.val().id.videoId;

      return(
        <div id="video-embed">
          <YouTube videoId={videoId} opts={opts}
          onReady={this._handleOnReady}
          onStateChange={this._handleStateChange}/>
        </div>
      );
    } else {
      return(
        <div />
      )
    }
  }
}

export default Player;
