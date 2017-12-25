import React from 'react';
import { shallow } from 'enzyme';

import TableDisplay from '../index';

describe('<TableDisplay />', () => {
  const testText = 'Here we are now entertain us';
  const renderedComponent = shallow(<TableDisplay name={testText} />);
  it('Expect TableDisplay to have text', () => {
    expect(renderedComponent.contains(testText)).toEqual(true);
  });
});
