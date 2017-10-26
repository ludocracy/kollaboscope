import React, { Component } from 'react';
import '../App.css';

class CreatePlaylist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      curPlaylistId: null
    }
  }

  render() {
    return (
      <div className="CreatePlaylist">
        <div className="playlist-crud">
          <form id="initialPlaylistForm" onSubmit={this.props.onSubmitPlaylist}>
            <input onChange={this.props.handleNameChange} type="text" id="playlistName" ref="name" placeholder="new playlist name" />
            <input onChange={this.props.handleDescrChange} type="textarea" id="playlistDescr" ref="descr" placeholder="describe this playlist or leave blank" />
            <button type="submit" id="createPlaylistBtn">Create Playlist</button>
          </form>
        </div>
      </div>
    );
  }
}

export default CreatePlaylist;
