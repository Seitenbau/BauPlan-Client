import React from 'react';
import { shallow } from 'enzyme';

import { ScaleImg } from '../index';

describe('<ScaleImg />', () => {
  const renderedComponent = shallow(<ScaleImg alt="bla" src="test.png" />);
  it('Component renders', () => {
    expect(renderedComponent.exists()).toBe(true);
  });
});
