import React from 'react';
import { shallow } from 'enzyme';

import RoomLabel from '../index';

describe('<RoomLabel />', () => {
  const testText = 'Here we are now entertain us';
  const renderedComponent = shallow(<RoomLabel name={testText} />);
  it('Expect RoomLabel to have text', () => {
    expect(renderedComponent.contains(testText)).toEqual(true);
  });
});
