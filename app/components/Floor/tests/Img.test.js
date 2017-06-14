import React from 'react';
import { shallowWithTheme } from 'utils/helper';

import Img from '../Img';

describe('<Img />', () => {
  const cut = shallowWithTheme(<Img src="floor.svg"></Img>);
  it('Expect to have a name', () => {
    expect(cut.props.src).not().toBeDefined();
  });
});
