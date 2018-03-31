import _ from "lodash";
import React, { Component } from "react";
import { render } from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

const API_KEY = "AIzaSyBB0iqGuzUsawSxlJTSY7tok1g0XERgQLI";
const mountNode = document.getElementById("root");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch("surfboards");
  }
  videoSearch(term) {
    YTSearch(
      {
        key: API_KEY,
        term: term
      },
      videos => {
        this.setState({
          videos: videos,
          selectedVideo: videos[0]
        });
      }
    );
  }
  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);

    return (
      <div>
        <SearchBar handleSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo =>
            this.setState({
              selectedVideo
            })
          }
          videos={this.state.videos}
        />
      </div>
    );
  }
}
render(<App />, mountNode);
