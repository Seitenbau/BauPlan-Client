import React from 'react';
import { shallow } from 'enzyme';

import { View } from '../index';

describe('<View />', () => {
  const renderedComponent = shallow(<View />);
  it('Component renders', () => {
    expect(renderedComponent.exists()).toBe(true);
  });

  it('should render the page message', () => {
    expect(renderedComponent.contains('Bauplan')).toEqual(true);
  });
});
