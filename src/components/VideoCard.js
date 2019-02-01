import React from 'react';

class VideoCard extends React.Component {

  onClick = () => {
    this.props.onVideoSelect(this.props.video);
  }

  render(){
    const {snippet} = this.props.video;
    return (
      <div className="ui segment center aligned" onClick={this.onClick}>
        <h4>{snippet.title}</h4>
        <img className="ui small centered image" src={snippet.thumbnails.default.url} alt={snippet.title}/>
      </div>
    );
  }
}

export default VideoCard;
