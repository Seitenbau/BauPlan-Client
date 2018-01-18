import React from 'react';
import { shallow } from 'enzyme';

import { Floor } from '../index';
import Label from '../label';

describe('<Floor />', () => {
  const testName = 'testName 232412412423 ~~`af asd ` テストです。';
  const renderedComponent = shallow(
    <Floor
      name={testName}
      short={'bla'}
      imageUri={'Bauplan_Sample.svg'}
      labels={[]}
      tables={[]}
    />
  );

  it('Component renders', () => {
    expect(renderedComponent.exists()).toBe(true);
  });

  it('Expect to have a correct floor name displayed', () => {
    expect(renderedComponent.contains(<Label>{testName}</Label>)).toEqual(true);
  });
});
