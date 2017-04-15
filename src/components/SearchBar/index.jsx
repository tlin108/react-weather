import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      cityName: ''
    }
  }

  onCityNameChange(cityName) {
    this.setState({ cityName });
  }

  onFormSubmit(e) {
    e.preventDefault();
    const { cityName } = this.state;
    if (cityName === ''){
      return;
    }
    this.props.onSearchSubmit(cityName);
  }

  render() {
    return (
      <form onSubmit={e => this.onFormSubmit(e)} className="search-location">
        <input type="text" placeholder="Search by..." onChange={(e) => this.onCityNameChange(e.target.value)} />
        <button type="submit" value="Search">Submit</button>
      </form>
    );
  }
}

export default SearchBar;