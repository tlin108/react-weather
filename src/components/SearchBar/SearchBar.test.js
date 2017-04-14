import React from 'react';
import { mount, shallow } from 'enzyme';
import SearchBar from './index';

describe('SearchBar test suite', () => {
  const onButtonSubmit = jest.fn();
  const wrapper = shallow(
    <SearchBar onSearchSubmit={onButtonSubmit} />
  );

  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('simulates submit event', () => {
    const wrapperMount = mount(
      <SearchBar onSearchSubmit={onButtonSubmit} />
    );
    wrapperMount.find('[type="submit"]').get(0).click();
    expect(onButtonSubmit).toHaveBeenCalled();
  });

  it('simulates onchange event', () => {
    const value = 'Boston';
    expect(wrapper.instance().state.cityName).toEqual('');
    wrapper.find('input').simulate('change', {
      target: { value }
    });
    expect(wrapper.instance().state.cityName).toEqual('Boston');
  });
});
