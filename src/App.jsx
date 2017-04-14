import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ForcastTable from './components/ForcastTable';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      weatherList: [],
      searchCity: 'New York'
    };
    this.onSearchCityChange = this.onSearchCityChange.bind(this);
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
    fetch(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.searchCity}&units=imperial&cnt=5&appid=d22aa35f1d715ba35838639d67d4cff8`)
    .then(res => res.json())
    .then(data => {
      this.setState({ weatherList: data.list })
    })
    .catch(err => console.log(err));
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
          />
        </div>
      </div>
    );
  }
}

export default App;
