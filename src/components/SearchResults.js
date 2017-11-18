import React, { Component } from 'react';
import '../styles/SearchResults.css';
import SearchResult from './SearchResult';

class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedResult: null
    }

    this._handleSelectResult = this._handleSelectResult.bind(this);
  }

  _handleSelectResult(result) {
    this.setState({
      selectedResult: result
    });
  }

  render() {
    let resultComps = this.props.results.map((result, key) => {
        return <SearchResult key={key} isSelected={this.state.selectedResult === result}
          result={result} _handleSelectResult={this._handleSelectResult}
          playlistRef={this.props.playlistRef} />
    });

    return(
      <section id="youtube-search-res">
        <div className="song-search-results">
          { resultComps }
        </div>
        <button id="createSongBtn">Add Song to Playlist</button>
        <div id="song-search-thumbnail">

        </div>
      </section>
    );
  }
}

export default SearchResults;
