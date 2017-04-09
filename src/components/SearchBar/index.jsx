import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <form action="#" className="search-location">
        <input type="text" placeholder="Search by..." />
        <input type="submit" value="Search" />
      </form>
    );
  }
}

export default SearchBar;