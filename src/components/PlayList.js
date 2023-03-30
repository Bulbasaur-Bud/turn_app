import React, { Component } from "react";
import Song from "./Songs";

class PlayList extends Component {
  render() {
    return (
      <div className="playlist">
        <h1>{this.props.playlists.title}</h1>
        <table>
          <thead>
            <tr>
              <th>Artist</th>
              <th>Title</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {this.props.playlists.songs.map((song, index) => {
              return (
                <Song
                  song={song}
                  key={index}
                  index={index} //after handleDelete
                  handleAdd={this.props.handleAdd}
                  handleDelete={this.props.handleDelete}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default PlayList;

// this.props.playlists.songs.map((song, index) this line will
