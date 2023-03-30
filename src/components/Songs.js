import React, { Component } from "react";

class Song extends Component {
  constructor(props) {
    super(props);
    this.state = {
      like: false,
    };
    this.toggleLike = this.toggleLike.bind(this);
  }

  toggleLike(event) {
    this.setState({ like: !this.state.like });
  }

  render() {
    return (
      <tr key={this.props.index}>
        <td
          onClick={() => {
            this.toggleLike();
            this.props.handleAdd(this.props.song);
          }}
        >
          {this.props.song.artist}
        </td>
        <td>{this.props.song.title}</td>
        <td>{this.props.song.time}</td>
        <td
          onClick={() => {
            this.props.handleDelete(this.props.index);
          }}
        >
          X
        </td>
        {this.state.like ? <td>❤️</td> : <td>💔</td>}
      </tr>
    );
  }
}

export default Song;
