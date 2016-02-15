import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSeatch from 'youtube-api-search';
import Searchbar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyB7N0zqw1tzHar836Bnv8HfZ3EnQVPZ9MQ'; //enter your Youtube API Key




class App extends Component{
 constructor(props){
  super(props);

  this.state = { 
    videos: [],
    selectedVideo: null
     };

  YTSeatch({key: API_KEY, term: 'surfboards'}, (videos) => {
    this.setState({ 
      videos: videos,
      selectedVideo: videos[0]
    });
  });
 }

  render() {
    return (
      <div>
       <Searchbar />
       <VideoDetail video={this.state.selectedVideo} />
       <VideoList 
       onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
       videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
