import React, { Component } from 'react';
import { database } from '../utils/firebase';
import '../styles/SearchResult.css';

class SearchResult extends Component {
  constructor(props) {
    super(props);

    this._handleAddVideo = this._handleAddVideo.bind(this);
  }

  _handleAddVideo(e) {
    this.props.playlistRef.child('videos/').push(this.props.result)
    .then(() => {
      // TODO maybe update display somehow? collapse search container?
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    let data = this.props.result.snippet;

    let thumbnailComp = this.props.isSelected
      ? <div>
          <button onClick={this._handleAddVideo}>Add to playlist</button>
          <img src={data.thumbnails.default.url}/>
        </div>
      : <div/>

    let thumbnail = data.thumbnails.default;

    return(
      <div className="SearchResult"
        onClick={e => {this.props._handleSelectResult(this.props.result)}}>
        <p>{data.title}</p>
        { thumbnailComp }
      </div>
    );
  }
}

export default SearchResult;
