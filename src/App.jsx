import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ForcastTable from './components/ForcastTable';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      weatherList: []
    };
  }

  componentDidMount() {
    fetch('http://api.openweathermap.org/data/2.5/forecast/daily?q=NewYork&units=imperial&cnt=5&appid=f0f1687e32559d0a80157ee1cba91a66')
    .then(res => res.json())
    .then(data => this.setState({ weatherList: data.list }))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <div className="site-content">
          <Header />

          <div className="hero" data-bg-image="images/banner.png">
            <div className="container">
              <SearchBar />
            </div>
          </div>

          <ForcastTable weatherList={this.state.weatherList}/>
        </div>
      </div>
    );
  }
}

export default App;
