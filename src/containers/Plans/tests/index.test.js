import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import { Plans } from '../index';

describe('<Plans />', () => {
  it('Can handle no plans (empty state)', () => {
    const renderedComponent = shallow(
      <Plans
        plans={fromJS([])}
        tables={fromJS([])}
        match={{ type: 'bla', identifier: 'blu' }}
        requestTableData={() => []}
        requestProjectData={() => []}
        requestPlans={() => []}
      />
    );
    expect(renderedComponent.exists()).toBe(true);
  });
});
