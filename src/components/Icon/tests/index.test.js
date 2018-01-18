import React from 'react';
import { shallow } from 'enzyme';

import { Icon } from '../index';

describe('<Icon />', () => {
  const renderedComponent = shallow(<Icon />);
  it('Component renders', () => {
    expect(renderedComponent.exists()).toBe(true);
  });
});
