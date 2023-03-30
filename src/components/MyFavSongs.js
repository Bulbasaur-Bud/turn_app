import React, { Component } from "react";

class MyFavSongs extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Artist</th>
            <th>Title</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {this.props.songs.map((song, index) => {
            return (
              <tr key={index}>
                <td>{song.artist}</td>
                <td>{song.title}</td>
                <td>{song.time}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default MyFavSongs;
