import React from 'react';
import VideoCard from './VideoCard';
import Pagnation from './Pagnation';


class VideoList extends React.Component {

  onPageSelect = (pageToken) => {
    this.props.onPageChange(pageToken);
  }

  render () {
    if(this.props.searchResult.data){
      const list = this.props.searchResult.data.items.map((video) => {
        return (
          <VideoCard video={video} key={video.id.videoId} onVideoSelect={this.props.onVideoSelect}/>
        );
      });
      return (
        <div>
          <p>{this.props.searchResult.data.pageInfo.totalResults} results found for '<i>{this.props.input}</i>'</p>
        {list}
          <Pagnation nextPageToken={this.props.searchResult.data.nextPageToken} prevPageToken={this.props.searchResult.data.prevPageToken} onPageSelect={this.onPageSelect}/>
        </div>
      );
    }
    return null;
  }
}

export default VideoList;
