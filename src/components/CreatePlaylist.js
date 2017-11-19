import React, { Component } from 'react';
import '../styles/CreatePlaylist.css';
import { database } from '../utils/firebase';

class CreatePlaylist extends Component {
  constructor(props) {
    super(props);

    this._handleSubmitPlaylist = this._handleSubmitPlaylist.bind(this);
  }

  componentDidMount() {
    this.ref = database.ref('playlists');
  }

  componentWillUnmount() {
    this.ref.off();
  }

  _handleSubmitPlaylist(e) {
    e.preventDefault();

    let pushRef = this.ref.push();
    pushRef.set({
      name: this.name.value,
      description: this.descr.value
    })
    .then(() => {
      window.location.replace(`/${pushRef.key}`);
    })
  }

  render() {
    return (
      <div className="CreatePlaylist">
        <div className="playlist-crud">
          <form id="initialPlaylistForm" onSubmit={this._handleSubmitPlaylist}>
            <input type="text" id="playlistName"
              ref={input => this.name = input} placeholder="new playlist name" />
            <input type="text" id="playlistDescr"
              ref={input => this.descr = input} placeholder="describe this playlist or leave blank" />
            <button type="submit" id="createPlaylistBtn">Create Playlist</button>
          </form>
        </div>
      </div>
    );
  }
}

export default CreatePlaylist;
