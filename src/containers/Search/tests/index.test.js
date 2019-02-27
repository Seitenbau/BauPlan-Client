import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { fromJS } from 'immutable';
import { Search } from '../index';

describe('<Search />', () => {
  it('Displays a search empty field', () => {
    const renderedComponent = shallow(
      <Search
        tables={fromJS([])}
        projects={fromJS([])}
        value={''}
        dispatch={() => false}
      />
    );
    expect(renderedComponent.exists()).toEqual(true);
  });
  it('should filter correctly', () => {
    const spy = sinon.spy();
    const renderedComponent = shallow(
      <Search
        tables={fromJS([{ name: 'Anthon' }, { name: 'Alf' }, { name: 'olaf' }])}
        projects={fromJS([])}
        value={''}
        dispatch={spy}
      />
    );
    // renderedComponent.find('button').simulate('click')
    expect(renderedComponent.instance().props.value).toEqual('');
    expect(renderedComponent.instance().filterTables('l').length).toEqual(2);
    expect(renderedComponent.instance().filterTables('*').length).toEqual(3);
    renderedComponent.instance().onEmptySearch();
    expect(spy.called).toEqual(true);
  });
});
