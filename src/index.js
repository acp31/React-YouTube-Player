import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSeatch from 'youtube-api-search';
import Searchbar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = ''; //enter your Youtube API Key




class App extends Component{
 constructor(props){
  super(props);

  this.state = { videos: [] };

  YTSeatch({key: API_KEY, term: 'surfboards'}, (videos) => {
    this.setState({ videos });
  });
 }

  render() {
    return (
      <div>
       <Searchbar />
       <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
