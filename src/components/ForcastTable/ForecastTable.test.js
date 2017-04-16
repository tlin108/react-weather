import React from 'react';
import { shallow } from 'enzyme';
import ForecastTable from './index';
import mockWeatherList from '../../App.test.js';

describe('ForecastTable test suite', () => {
  const mockSearchCity = 'New York';
  const wrapper = shallow(
    <ForecastTable 
      weatherList={mockWeatherList.list}
      city={mockSearchCity}
    />);

  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('displays city name', () => {
    const cityLabel = <div className="location">New York</div>;
    expect(wrapper.contains(cityLabel)).toEqual(true);
  })
});