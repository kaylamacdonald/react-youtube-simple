import React from 'react';

class SearchBar extends React.Component {

  state = {input : ''};

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSearchSubmit(this.state.input);
  }

  onInputChange = (event) => {
    this.setState({input : event.target.value});
  }

  render(){
    const loadingClass = (this.props.loading === 'true') ? 'loading': '';
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} >
        <h2 className="ui header center aligned">YouTube Video Search</h2>
          <div className={`ui icon fluid input ${loadingClass}`}>
            <input type="text" value={this.state.input} onChange={this.onInputChange} placeholder="Search for videos ..."/>
            <i className="search icon"></i>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
