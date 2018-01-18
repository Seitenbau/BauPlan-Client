import React from 'react';
import { shallow } from 'enzyme';

import Bar from '../index';

describe('<Bar />', () => {
  it('should render', () => {
    const renderedComponent = shallow(<Bar />);
    expect(renderedComponent.exists()).toEqual(true);
  });
});
