import React from 'react';
import { shallow } from 'enzyme';

import ProjectIdentifier from '../index';

const project = [{
  id: 1,
  name: 'React Bauplan 2.0',
  short: 'RB2.0',
  color: '#FFFFFF',
}];
describe('<ProjectIdentifier />', () => {
  const renderedComponent = shallow(<ProjectIdentifier projects={project} />);

  it('Expect ProjectIdentifier to have projects defined', () => {
    expect(renderedComponent.props.projects).toContain(project[0]);
  });
});
