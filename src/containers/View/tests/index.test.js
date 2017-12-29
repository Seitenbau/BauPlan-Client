import React from 'react';
import { shallow } from 'enzyme';

import { View } from '../index';

describe('<View />', () => {
  const renderedComponent = shallow(<View />);
  it('Component renders', () => {
    expect(renderedComponent.exists()).toBe(true);
  });
});
