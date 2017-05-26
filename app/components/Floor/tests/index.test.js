// import React from 'react';
import { shallow } from 'enzyme';

import Floor from '../index';

describe('<Floor />', () => {
  it('Expect to Throw', () => {
    expect(() => shallow(<Floor></Floor>)).toThrow();
  });
});
