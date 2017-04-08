import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="site-content">
          <div className="site-header">
            <div className="container">
              <a href="index.html" className="branding">
                <img src="images/logo.png" alt="" className="logo" />
                <div className="logo-type">
                  <h1 className="site-title">Company name</h1>
                  <small className="site-description">tagline goes here</small>
                </div>
              </a>
            </div>
          </div>

          <div className="hero" data-bg-image="images/banner.png">
            <div className="container">
              <form action="#" className="find-location">
                <input type="text" placeholder="Find your location..." />
                <input type="submit" value="Find" />
              </form>
            </div>
          </div>
          <div className="forecast-table">
            <div className="container">
              <div className="forecast-container">
                <div className="today forecast">
                  <div className="forecast-header">
                    <div className="day">Monday</div>
                    <div className="date">6 Oct</div>
                  </div>
                  <div className="forecast-content">
                    <div className="location">New York</div>
                    <div className="degree">
                      <div className="num">23<sup>o</sup>C</div>
                      <div className="forecast-icon">
                        <img src="images/icons/icon-1.svg" alt="" />
                      </div>  
                    </div>
                    <span><img src="images/icon-umberella.png" alt="" />20%</span>
                    <span><img src="images/icon-wind.png" alt="" />18km/h</span>
                    <span><img src="images/icon-compass.png" alt="" />East</span>
                  </div>
                </div>
                <div className="forecast">
                  <div className="forecast-header">
                    <div className="day">Tuesday</div>
                  </div>
                  <div className="forecast-content">
                    <div className="forecast-icon">
                      <img src="images/icons/icon-3.svg" alt=""/>
                    </div>
                    <div className="degree">23<sup>o</sup>C</div>
                    <small>18<sup>o</sup></small>
                  </div>
                </div>
                <div className="forecast">
                  <div className="forecast-header">
                    <div className="day">Wednesday</div>
                  </div> 
                  <div className="forecast-content">
                    <div className="forecast-icon">
                      <img src="images/icons/icon-5.svg" alt="" />
                    </div>
                    <div className="degree">23<sup>o</sup>C</div>
                    <small>18<sup>o</sup></small>
                  </div>
                </div>
                <div className="forecast">
                  <div className="forecast-header">
                    <div className="day">Thursday</div>
                  </div> 
                  <div className="forecast-content">
                    <div className="forecast-icon">
                      <img src="images/icons/icon-7.svg" alt=""/>
                    </div>
                    <div className="degree">23<sup>o</sup>C</div>
                    <small>18<sup>o</sup></small>
                  </div>
                </div>
                <div className="forecast">
                  <div className="forecast-header">
                    <div className="day">Friday</div>
                  </div> 
                  <div className="forecast-content">
                    <div className="forecast-icon">
                      <img src="images/icons/icon-12.svg" alt=""/>
                    </div>
                    <div className="degree">23<sup>o</sup>C</div>
                    <small>18<sup>o</sup></small>
                  </div>
                </div>
                <div className="forecast">
                  <div className="forecast-header">
                    <div className="day">Saturday</div>
                  </div> 
                  <div className="forecast-content">
                    <div className="forecast-icon">
                      <img src="images/icons/icon-13.svg" alt=""/>
                    </div>
                    <div className="degree">23<sup>o</sup>C</div>
                    <small>18<sup>o</sup></small>
                  </div>
                </div>
                <div className="forecast">
                  <div className="forecast-header">
                    <div className="day">Sunday</div>
                  </div> 
                  <div className="forecast-content">
                    <div className="forecast-icon">
                      <img src="images/icons/icon-14.svg" alt=""/>
                    </div>
                    <div className="degree">23<sup>o</sup>C</div>
                    <small>18<sup>o</sup></small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
