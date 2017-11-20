import React, { Component } from 'react';
import '../styles/Video.css';

class Video extends Component {
  constructor(props) {
    super(props);

    this._handleDeleteVideo = this._handleDeleteVideo.bind(this);
  }

  _handleDeleteVideo(e) {
    if(this.props.videoRef) {
      this.props.videoRef.ref.remove();
    }
  }

  render() {
    let video = this.props.videoRef.val().snippet;
    let videoComp = this.props.isSelected
      ? <div>
          <img src={video.thumbnails.default.url} alt={video.title}/>
          <button className="delete-video-btn"
            onClick={this._handleDeleteVideo}>Delete</button>
          <button className="play-video-btn"
            onClick={this.props._handlePlayVideo}>Play</button>
        </div>
      : <div/>;
    return(
      <div className="Video" onClick={e => this.props._handleSelectVideo(this.props.videoRef)}>
        <p>{video.title}</p>
        { videoComp }
      </div>
    );
  }
}

export default Video;
