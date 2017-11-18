import React, { Component } from 'react';
import YouTube from 'react-youtube';

class Player extends Component {
  render() {
    return(
      <div id="video-embed">
        <YouTube />
      </div>
    )
  }
}

export default Player;
