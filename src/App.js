import React, { Component } from "react";
import "./App.css";
import playlists from "./data.js";
import PlayList from "./components/PlayList";
import MyFavSongs from "./components/MyFavSongs";

//console.log(playlists);
class App extends Component {
  constructor() {
    super();
    this.state = {
      playlists: playlists, //this is to refer to playlist
      artist: "", //this is set the artist as empty
      title: "", //this is set the title as empty
      time: "0:00", //this is set the time as default
      favSongs: [], //this is to add in the fav song!
    };

    //this is binding the handleChange with constructor so that setState is referring to constructor
    this.handleChange = this.handleChange.bind(this);

    //this is binding the handleSubmit with constructor so that setState is referring to constructor
    this.handleSubmit = this.handleSubmit.bind(this);

    //this is binding the addFavSongs with constructor so that setState is referring to constructor
    this.addFavSongs = this.addFavSongs.bind(this);

    //this is binding the deleteSong with constructor so that setState is referring to constructor
    this.deleteSong = this.deleteSong.bind(this);
  }

  addFavSongs(song) {
    this.setState({ favSongs: [song, ...this.state.favSongs] });
  }

  deleteSong(index) {
    console.log(...this.state.playlists.songs.slice(0, index));
    this.setState({
      playlists: {
        songs: [
          ...this.state.playlists.songs.slice(0, index),
          //if click on 1
          ...this.state.playlists.songs.slice(index + 1),
          //if click on 1, 1+1 = 2
        ],
      },
    });
  }

  handleChange(event) {
    //console.log(event.target.id);
    //console.log(event.target.value);
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newSong = {
      artist: this.state.artist,
      title: this.state.title,
      time: this.state.time,
    };

    const updatedSongs = [...this.state.playlists.songs, newSong];
    this.setState({
      playlists: {
        ...playlists,
        songs: updatedSongs,
      },
      artist: "",
      title: "",
      time: "0:00",
    });
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.playlists.title}</h1>
        <form onSubmit={this.handleSubmit}>
          <lable htmlFor="artist">Artist:</lable>
          <input
            type="text"
            id="artist"
            value={this.state.artist}
            onChange={this.handleChange}
          />
          <lable htmlFor="title">Title:</lable>
          <input
            type="text"
            id="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <lable htmlFor="time">Time:</lable>
          <input
            type="text"
            id="time"
            value={this.state.time}
            onChange={this.handleChange}
          />

          <input type="submit" />
        </form>
        {/* { <div>
          <h2>Our Data Entered</h2>
          <h3>{this.state.artist}</h3>
          <h3>{this.state.title}</h3>
          <h3>{this.state.time}</h3>
        </div> } */}

        <div className="playlists">
          <PlayList
            playlists={this.state.playlists}
            handleAdd={this.addFavSongs}
            handleDelete={this.deleteSong} //passing function as props so that we can use as child component
          />
          <MyFavSongs songs={this.state.favSongs} />
        </div>
      </div>
    );
  }
}

export default App;
