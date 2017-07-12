import React from 'react';
import { shallow } from 'enzyme';

import StyledTable from '../StyledTable';

describe('<TableDisplay />', () => {
  const renderedComponent = shallow(<StyledTable height={80} width={40} left={100} top={100} rotation={90} />);
  it('Expect StyledTable to have styles defined', () => {
    expect(renderedComponent).toMatchSnapshot();
  });
});
