import React from 'react';
import { shallow } from 'enzyme';

import { JumpView } from '../index';

const plans = [
  { name: 'eins', id: '1' },
  { name: 'zwei', id: '2' },
  { name: 'drei', id: '3' }
];

describe('<JumpView />', () => {
  const renderedComponent = shallow(
    <JumpView plans={plans} activeScrolledToFloor="2" />
  );

  it('Component renders', () => {
    expect(renderedComponent.exists()).toBe(true);
  });

  it('Sets the second plan to active', () => {
    expect(
      renderedComponent
        .find('Styled(Link)')
        .at(1)
        .props().active
    ).toEqual('active');
  });
});
