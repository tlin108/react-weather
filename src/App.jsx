import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ForcastTable from './components/ForcastTable';

class App extends Component {
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

          <ForcastTable />
        </div>
      </div>
    );
  }
}

export default App;
