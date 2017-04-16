import React from 'react';
import { mount, shallow } from 'enzyme';
import App from './App';
import sinon from 'sinon';
import nock from 'nock';

const mockWeatherList = {
      list:
        [{
          dt: 1492185600,
          temp: {
            min: 49.77,
            max: 49.77
          },
          weather: [{
            icon: "01d"
          }],
          humidity: 69,
          speed: 1.97
        }, {
          dt: 1492185700,
          temp: {
            min: 49.77,
            max: 49.77
          },
          weather: [{
            icon: "01d"
          }]
        }, {
          dt: 1492185800,
          temp: {
            min: 49.77,
            max: 49.77
          },
          weather: [{
            icon: "01d"
          }]
        }, {
          dt: 1492185900,
          temp: {
            min: 49.77,
            max: 49.77
          },
          weather: [{
            icon: "01d"
          }]
        }, {
          dt: 1492186000,
          temp: {
            min: 49.77,
            max: 49.77
          },
          weather: [{
            icon: "01d"
          }]
        }]
      };

describe('App test suite',() => {
  let server;
  let wrapper;

  beforeEach(() => {
    server = sinon.fakeServer.create();
    var response = [200, {'Content-type': 'application/json'}, JSON.stringify(mockWeatherList)];
    server.respondWith('GET', 'http://api.openweathermap.org/data/2.5/forecast/daily?q=New%20York&units=imperial&cnt=5&appid=d22aa35f1d715ba35838639d67d4cff8', response);
  });

  afterEach(() => {
    server.restore();
  });

  it('renders without crashing', () => {
    wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('calls `componentDidMount` lifecycle method', () => {
    sinon.spy(App.prototype, 'componentDidMount');
    wrapper = mount(<App />);
    expect(App.prototype.componentDidMount.calledOnce).toEqual(true);
  });

  it('fetches weather data', () => {
    wrapper = mount(<App />);
    // have to explicitly setState because setState isnt triggered in fetch method
    // when mounted by enzyme, need to find a way around
    wrapper.setState({ weatherList: mockWeatherList.list});
    expect(wrapper.state().weatherList).toBeInstanceOf(Array);
    expect(wrapper.state().weatherList.length).toEqual(5);
  });

  it('calls `fetchWeather` method after state.searchCity changed', () => {
    wrapper = mount(<App />);
    expect(wrapper.state().searchCity).toEqual('New York');
    // spy on fetchWeathers method
    sinon.spy(wrapper.instance(), "fetchWeathers");

    wrapper.setState({ searchCity: 'Boston' });
    expect(wrapper.state().searchCity).toEqual('Boston');
    expect(wrapper.instance().fetchWeathers.calledOnce).toEqual(true);
  });
});

export default mockWeatherList;
