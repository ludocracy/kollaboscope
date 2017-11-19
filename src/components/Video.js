import React, { Component } from 'react';
import '../styles/Video.css';

class Video extends Component {
  constructor(props) {
    super(props);

    this._handleDeleteVideo = this._handleDeleteVideo.bind(this);
  }

  _handleDeleteVideo(e) {
    // this.props.videosRef
  }

  render() {
    let video = this.props.video.snippet;
    let videoComp = this.props.isSelected
      ? <div>
          <img src={video.thumbnails.default.url} alt={video.title}/>
          <button className="delete-video-btn"
            onClick={this._handleDeleteVideo}>Delete</button>
          <button clasName="play-video-btn"
            onClick={this.props._handlePlayVideo}>Play</button>
        </div>
      : <div/>;
    return(
      <div className="Video" onClick={e => this.props._handleSelectVideo(this.props.video)}>
        <p>{video.title}</p>
        { videoComp }
      </div>
    );
  }
}

export default Video;
