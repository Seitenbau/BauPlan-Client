import React from 'react';
import { shallow } from 'enzyme';

import Input from '../index';
const testValue = 'asdafds1312341435$#%%';

const renderedComponent1 = shallow(
  <Input value={testValue}>
    <div>{testValue}</div>
  </Input>
);

describe('<Input />', () => {
  it('should render the children', () => {
    expect(renderedComponent1.contains(testValue)).toEqual(true);
  });
});
