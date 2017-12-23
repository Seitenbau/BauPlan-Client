import React from 'react';
import { shallow } from 'enzyme';

import { Plans } from '../index';

describe('<Plans />', () => {
  it('Can handle no plans (empty state)', () => {
    const renderedComponent = shallow(<Plans plans={[]} tables={[]} />);
    expect(renderedComponent).toHaveLength(1);
  });
});
