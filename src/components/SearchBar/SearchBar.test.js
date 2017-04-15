import React from 'react';
import { mount, shallow } from 'enzyme';
import SearchBar from './index';

describe('SearchBar test suite', () => {
  const value = 'Boston';
  const onButtonSubmit = jest.fn();
  const wrapper = shallow(
    <SearchBar onSearchSubmit={onButtonSubmit} />
  );

  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('simulates onchange event', () => {
    expect(wrapper.instance().state.cityName).toEqual('');
    wrapper.find('input').simulate('change', {
      target: { value }
    });
    expect(wrapper.instance().state.cityName).toEqual('Boston');
  });

  it('simulates submit event', () => {
    const wrapperMount = mount(
      <SearchBar onSearchSubmit={onButtonSubmit} />
    );
    wrapperMount.find('input').simulate('change', {
      target: { value }
    });
    wrapperMount.find('[type="submit"]').get(0).click();
    expect(onButtonSubmit).toHaveBeenCalled();
  });
});
