import React from 'react';
import { shallow } from 'enzyme';

import Label from '../label';
import Floor from '../index';
jest.mock('floorplans');


describe('<Floor />', () => {
  const testName = 'testName 232412412423 ~~`af asd ` テストです。';
  const renderedComponent = shallow(
    <Floor
      name={testName}
      short={'bla'}
      imageName={'sample.svg'}
      labels={[]}
      tables={[]}
    />
  );

  it('Expect to have a correct floor name displayed', () => {
    expect(renderedComponent.contains(
      <Label>{testName}</Label>
    )).toEqual(true);
  });
});
