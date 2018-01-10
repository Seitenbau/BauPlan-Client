import React from 'react';
import { mount } from 'enzyme';

import { withScrollTarget } from '../index';

const testString = 'bla';

jest.mock('tween');

class TestComponent extends React.Component {
  render() {
    return <h1>Hello, {this.props.title}</h1>;
  }
}

describe('<ScrollTarget />', () => {
  const Component = withScrollTarget(TestComponent);
  const renderedComponent = mount(<Component title={testString} />);

  it('Renders the component', () => {
    expect(renderedComponent.exists()).toBe(true);
  });
  it('Renders the component correctly', () => {
    expect(renderedComponent.contains(testString)).toBe(true);
  });
});
