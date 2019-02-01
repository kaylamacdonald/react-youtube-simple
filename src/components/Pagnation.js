import React from 'react';
import VideoCard from './VideoList';

class Pagnation extends React.Component {

  state = {};

  constructor () {
    super();

    this.state = {
      nextPageButton :
      <button className="ui right labeled icon button" onClick={this.onClickNextPage}>
        <i className="right arrow icon"></i>
        Next Page
      </button>,
      prevPageButton :
      <button className="ui left labeled icon button" onClick={this.onClickPrevPage}>
        <i className="left arrow icon"></i>
        Previous Page
      </button>
    };

  }

  onClickNextPage = () => {
    this.props.onPageSelect(this.props.nextPageToken);
  }

  onClickPrevPage = () => {
    this.props.onPageSelect(this.props.prevPageToken);
  }

  renderButtons = () => {
    console.log(this.props);
    if(this.props.nextPageToken && this.props.prevPageToken){
      return (
        <div className="two mini ui buttons">
          {this.state.prevPageButton}
          {this.state.nextPageButton}
        </div>
      );
    } else if (this.props.nextPageToken){
      return (
        <div className="one fluid mini ui buttons">
          {this.state.nextPageButton}
        </div>
      );
    } else if (this.props.prevPageToken){
      return (
        <div className="one fluid mini ui buttons">
          {this.state.prevPageButton}
        </div>
      );
    }
    return;
  }

  render(){
    return (
      <div>
        {this.renderButtons()}
      </div>
    );
  }
}

export default Pagnation;
