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
    let opts = {
      playerVars: {
        autoplay: 1
      }
    };

    return(
      <div id="video-embed">
        <YouTube videoId={this.props.videoId} opts={opts}
        onReady={this._handleOnReady}
        onStateChange={this._handleStateChange}/>
      </div>
    );
  }
}

export default Player;
