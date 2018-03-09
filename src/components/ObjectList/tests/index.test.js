import React from 'react';
import { shallow } from 'enzyme';

import ObjectList from '../index';

describe('<ObjectList />', () => {
  xit('Render a label', () => {
    const label = 'a simple label';
    const renderedComponent = shallow(<ObjectList label={label}>{[1,2,3].map((e) => <span key={e}>{e}</span>)}</ObjectList>);
    expect(renderedComponent.html().indexOf(`${label}:`)).toBeGreaterThan(-1);
  });
  it('returns nothing', () => {
    const label = 'a simple label';
    const renderedComponent = shallow(
    <ObjectList label={label}>
    </ObjectList>);
    expect(renderedComponent.html()).toEqual('<span></span>');
  });
});
