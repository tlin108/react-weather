import React from 'react';
import { shallow } from 'enzyme';
import ForecastTable from './index';

describe('ForecastTable test suite', () => {
  it('renders without crashing', () => {
    const mockSearchCity = 'New York';
    const mockWeatherList = 
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
        dt: 1492185600,
        temp: {
          min: 49.77,
          max: 49.77
        },
        weather: [{
          icon: "01d"
        }]
      }, {
        dt: 1492185600,
        temp: {
          min: 49.77,
          max: 49.77
        },
        weather: [{
          icon: "01d"
        }]
      }, {
        dt: 1492185600,
        temp: {
          min: 49.77,
          max: 49.77
        },
        weather: [{
          icon: "01d"
        }]
      }, {
        dt: 1492185600,
        temp: {
          min: 49.77,
          max: 49.77
        },
        weather: [{
          icon: "01d"
        }]
      }];
    const wrapper = shallow(
      <ForecastTable 
        weatherList={mockWeatherList}
        city={mockSearchCity}
      />);
    expect(wrapper).toMatchSnapshot();
  });
});