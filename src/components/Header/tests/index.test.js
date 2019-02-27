import React from 'react';
import { shallow } from 'enzyme';

import Header from '../index';

describe('<Header />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(<Header />);
    expect(renderedComponent.exists()).toBe(true);
  });
});
