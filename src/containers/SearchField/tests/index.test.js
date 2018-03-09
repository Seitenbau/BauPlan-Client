import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import { SearchField } from '../index';

describe('<SearchField />', () => {
  it('Displays a search empty field', () => {
    const renderedComponent = shallow(
      <SearchField tables={[]} projects={[]} value={''} dispatch={() => false} />
    );
    expect(renderedComponent.exists()).toEqual(true);
  });
  it('should filter correctly', () => {
    const spy = sinon.spy()
    const renderedComponent = shallow(
      <SearchField tables={[{name: 'Anthon'}, {name: 'Alf'}, {name: 'olaf'}]} projects={[]} value={''} dispatch={spy} />
    );
    // renderedComponent.find('button').simulate('click')
    expect(renderedComponent.instance().props.value).toEqual('');
    expect(renderedComponent.instance().filterTables('l').length).toEqual(2)
    expect(renderedComponent.instance().filterTables('*').length).toEqual(3)
    renderedComponent.instance().onEmptySearch()
    expect(spy.called).toEqual(true)
  });
});
