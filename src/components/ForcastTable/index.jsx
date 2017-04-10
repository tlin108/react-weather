import React, { Component } from 'react';
import './ForecastTable.css'

class ForecastTable extends Component {
  constructor(props) {
    super(props);
    
  }

  renderWeather(weather) {
    return(
      <div className="forecast" key={weather.dt}>
        <div className="forecast-header">
          <div className="day">{weather.dt}</div>
        </div>
        <div className="forecast-content">
          <div className="forecast-icon">
            <img src="images/icons/icon-3.svg" alt=""/>
          </div>
          <div className="degree">{Math.round(weather.temp.max)}<sup>o</sup> F</div>
          <small>{Math.round(weather.temp.min)}<sup>o</sup></small>
        </div>
      </div>
    );
  }

  renderTodayWeather(todayWeather) {
    console.log(todayWeather);
    return (
      <div className="today forecast" key={todayWeather.dt}>
        <div className="forecast-header">
          <div className="day">Monday</div>
          <div className="date">{todayWeather.dt}</div>
        </div>
        <div className="forecast-content">
          <div className="location">New York</div>
          <div className="degree">
            <div className="num">{Math.round(todayWeather.temp.max)}<sup>o</sup> F</div>
            <div className="forecast-icon">
              <img src="images/icons/icon-1.svg" alt="" />
            </div>
          </div>
          <span> Min: {Math.round(todayWeather.temp.min)}<sup>o</sup> F</span>
          <span> Humidity: {todayWeather.humidity} %</span>
          <span><img src="images/icon-wind.png" alt="" />{todayWeather.speed} km/h</span>
        </div>
      </div>
    );
  }

  renderForcastTable() {
    return this.props.weatherList.map((weather, index) => {
      return index === 0 ? 
        this.renderTodayWeather(weather) 
        : 
        this.renderWeather(weather)
    });
  }

  render() {
    return (
      <div className="forecast-table">
        <div className="container">
          <div className="forecast-container">
            {this.renderForcastTable()}
          </div>
        </div>
      </div>
    );
  }
}

export default ForecastTable;
