import React from 'react';

const VideoDetail = ({video}) => {
  if(video.id){
    return (
      <div>
        <div className="ui embed">
          <iframe title="video player" src={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=true`} ></iframe>
        </div>
        <div className="ui segment">
          <h2>{video.snippet.title}</h2>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    );
  }
  return null;
}

export default VideoDetail;
