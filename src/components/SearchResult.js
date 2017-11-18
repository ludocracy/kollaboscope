import React, { Component } from 'react';
import { database, firebaseListToArray } from '../utils/firebase';
import '../styles/SearchResult.css';

class SearchResult extends Component {
  render() {
    let data = this.props.result.snippet;

    let thumbnailComp = this.props.isSelected
      ? <img src={data.thumbnails.default.url}/> : <div/>

    let thumbnail = data.thumbnails.default;

    return(
      <div className="SearchResult"
        onClick={e => {this.props._handleSelectResult(this.props.result)}}>
        <p>{`${data.title} – ${data.description}`}</p>
        { thumbnailComp }
      </div>
    );
  }
}

export default SearchResult;
