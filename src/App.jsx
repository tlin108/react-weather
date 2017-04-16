import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ForcastTable from './components/ForcastTable';

import API_KEY from './Api';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      weatherList: [],
      searchCity: 'New York',
      fetchError: false
    };
    this.onSearchCityChange = this.onSearchCityChange.bind(this);
    this.fetchWeathers = this.fetchWeathers.bind(this);
  }

  componentDidMount() {
    this.fetchWeathers();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchCity !== this.state.searchCity){
      this.fetchWeathers();
    }
  }

  fetchWeathers() {
    let URL = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.searchCity}&units=imperial&cnt=5&appid=${API_KEY}`;
    fetch(URL)
    .then(res => res.json())
    .then(data => {
      this.setState({ 
        weatherList: data.list,
        searchCity: data.city.name
      })
    })
    .catch(() =>
      this.setState({fetchError: true})
    );
  }

  onSearchCityChange(searchCity) {
    this.setState({ searchCity });
  }

  render() {
    return (
      <div className="App">
        <div className="site-content">
          <Header />

          <div className="hero" data-bg-image="images/banner.png">
            <div className="container">
              <SearchBar onSearchSubmit={this.onSearchCityChange} />
            </div>
          </div>

          <ForcastTable 
            weatherList={this.state.weatherList}
            city={this.state.searchCity}
            error={this.state.fetchError}
          />
        </div>
      </div>
    );
  }
}

export default App;
