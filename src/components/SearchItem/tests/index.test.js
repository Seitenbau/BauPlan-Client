import React from 'react';
import { shallow } from 'enzyme';

import SearchItem from '../index';

describe('<SearchItem />', () => {
  it('Expect to show a name', () => {
    const name = 'testname'
    const renderedComponent =shallow(<SearchItem name={name}/>)

    expect(renderedComponent.contains(name)).toEqual(true);
  });
  it('Expect to render Childs', () => {
    const name = 'testname'
    const childname = 'this is a child'
    const renderedComponent =shallow(<SearchItem name={name}><div>{childname}</div></SearchItem>)

    expect(renderedComponent.contains(<div>{childname}</div>)).toEqual(true);
  });
});
