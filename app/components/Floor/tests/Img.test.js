// import React from 'react';
import { shallow } from 'enzyme';

import Img from '../Img';

describe('<Img />', () => {
  it('Expect to have a name', () => {
    const cut = shallow(<Image></Image>)
    expect(cut.props.src).not().toBeDefined()
  });
});
