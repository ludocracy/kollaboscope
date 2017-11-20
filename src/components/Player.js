import React, { Component } from 'react';
import YouTube from 'react-youtube';

class Player extends Component {
  render() {
    let opts = {
      playerVars: {
        autoplay: 1
      }
    };

    return(
      <div id="video-embed">
        <YouTube videoId={this.props.videoId} opts={opts}/>
      </div>
    );
  }
}

export default Player;
