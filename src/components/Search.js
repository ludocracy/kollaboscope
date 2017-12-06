import React, { Component } from 'react';
import axios from 'axios';
import '../styles/Search.css';
import SearchResults from './SearchResults';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: []
    }

    this._handleSubmitSearch = this._handleSubmitSearch.bind(this);
  }

  _handleSubmitSearch(e) {
    e.preventDefault();
    let query = this.query.value;
    let url = `https://www.googleapis.com/youtube/v3/search`
    let params = {
      params: {
        q: query,
        part: 'snippet',
        type: 'video',
        maxResults: '25',
        key: 'AIzaSyA57V2_-uR3DOFwmcmH8qZzr0ZXffXdaPY'
      }
    };

    axios.get(url, params)
    .then(response => {
      this.setState({
        results: response.data.items
      });
    })
    .catch(error => {
      console.log(error); // TODO alert user somehow?
    });
  }

  render() {
    return(
      <div className="video-crud display-element">
        <div className="video-search">
          <h2>Search and Add Videos:</h2>
          <form id="searchForm" onSubmit={this._handleSubmitSearch}>
            <input id="searchInput"type="text" placeholder="type in a video" ref={input => this.query = input} />
            <button id="youtube-search-btn" type="submit">Search Youtube</button>
          </form>
          <SearchResults playlistRef={this.props.playlistRef} results={this.state.results} />
        </div>
      </div>
    );
  }
}

export default Search;
