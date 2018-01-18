import React from 'react';
import { shallow, mount } from 'enzyme';

import { SearchField } from '../index';

describe('<SearchField />', () => {
  it('Displays a search empty field', () => {
    const renderedComponent = shallow(
      <SearchField value={''} dispatch={() => false} />
    );
    expect(renderedComponent.exists()).toEqual(true);
  });
});
