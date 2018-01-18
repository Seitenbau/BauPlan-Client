import React from 'react';
import { shallow } from 'enzyme';

import Actionbar from '../index';

describe('<Actionbar />', () => {
  it('should render', () => {
    const renderedComponent = shallow(<Actionbar />);
    expect(renderedComponent.exists()).toEqual(true);
  });
});
