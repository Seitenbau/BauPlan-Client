import React from 'react';
import { shallow } from 'enzyme';

import Rectangle from '../Rectangle';

const project = [
  {
    id: 1,
    name: 'React Bauplan 2.0',
    short: 'RB2.0',
    color: '#FFFFFF'
  }
];
describe('<ProjectIdentifier />', () => {
  const renderedComponent = shallow(<Rectangle projects={project} />);

  it('Expect Rectangle to have styles defined', () => {
    expect(renderedComponent).toMatchSnapshot();
  });
});
