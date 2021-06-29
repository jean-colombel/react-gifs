import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return(
      <input type="text" className="form-control form-search" placeholder="Search here"
        onChange={this.handleChange}/>
    )
  }

  handleChange = (event) => {
    this.props.search(event.target.value)
  }
}

export default SearchBar;
