import React from 'react';
import { shallow } from 'enzyme';

import { App } from '../index';

describe('<App />', () => {
  const renderedComponent = shallow(<App />);
  it('Component renders', () => {
    expect(renderedComponent.exists()).toBe(true);
  });
});
