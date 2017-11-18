import React, { Component } from 'react';
import { database, firebaseListToArray } from '../utils/firebase';
import '../styles/SearchResult.css';

class SearchResult extends Component {
  render() {
    console.log(this.props.result)
    return(
      <div className="SearchResult"
        onClick={e => {this.props._handleSelectResult(this.props.result)}}>
        <p>{this.props.result.toString()}</p>
      </div>
    );
  }
}

export default SearchResult;
