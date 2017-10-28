import React, { Component } from 'react';
import '../styles/CreatePlaylist.css';
import { database, firebaseListToArray } from '../utils/firebase';

class CreatePlaylist extends Component {
  constructor(props) {
    super(props);

    this.onSubmitPlaylist = this.onSubmitPlaylist.bind(this);
  }

  onSubmitPlaylist(e) {
    e.preventDefault();
    // axios.post('http://localhost:3000/playlists', {
    //   name: this.name.value,
    //   description: this.descr.value
    // })
    // .then(res => {
    //   window.location.replace(`/${res.data._id}`);
    // })
    // .catch(err => {
    //   console.log(err);
    // })
  }

  render() {
    return (
      <div className="CreatePlaylist">
        <div className="playlist-crud">
          <form id="initialPlaylistForm" onSubmit={this.onSubmitPlaylist}>
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
