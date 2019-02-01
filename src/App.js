import React from 'react';
import SearchBar from './components/SearchBar';
import youtube from './externalApi/youtube';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

class App extends React.Component {

  state = {
    searchResult : [],
    loadingResult: 'false',
    input : '',
    selectedVideo: []
  };

  onSearchSubmit = (input) => {
    this.setState({selectedVideo : []});
    if(input === ''){
      this.setState({searchResult : []});
      return;
    }
    this.setState({
      input : input,
      loadingResult : 'true'
    });
    this.requestYoutubeSearchResults(input, '');
  }

  onPagnationChange = (pageToken) => {
    this.requestYoutubeSearchResults(this.state.input, pageToken);
  }

  requestYoutubeSearchResults = async (input, pageToken) => {
    const response = await youtube.get(
      '/search',
      {params : {
        q : input,
        pageToken : pageToken
      }}
    );
    this.setState({
      searchResult : response,
      loadingResult : 'false'
    });
  }

  onVideoSelect = (video) => {
    this.setState({selectedVideo : video});
  }

  render(){
    return (
      <div className ="ui grid container">
        <div className="ui row">
          <div className="sixteen wide column">
            <SearchBar onSearchSubmit={this.onSearchSubmit} loading={this.state.loadingResult}/>
          </div>
        </div>
        <div className="ui row">
          <div className="sixteen wide mobile twelve wide tablet twelve wide computer column">
            <VideoDetail video={this.state.selectedVideo} />
          </div>
          <div className={this.state.selectedVideo.length === 0 ? 'sixteen wide column' : 'right floated sixteen wide mobile four wide tablet four wide computer column'}>
            <VideoList searchResult={this.state.searchResult} input={this.state.input} onVideoSelect={this.onVideoSelect} onPageChange={this.onPagnationChange}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
