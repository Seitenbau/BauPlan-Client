import React from 'react';
import { shallow } from 'enzyme';

import { Plans } from '../index';

describe('<Plans />', () => {
  it('Can handle no plans (empty state)', () => {
    const renderedComponent = shallow(
      <Plans
        plans={[]}
        tables={[]}
        match={{ type: 'bla', identifier: 'blu' }}
        requestTableData={() => []}
        requestProjectData={() => []}
        requestPlans={() => []}
      />
    );
    expect(renderedComponent).toHaveLength(1);
  });
});
