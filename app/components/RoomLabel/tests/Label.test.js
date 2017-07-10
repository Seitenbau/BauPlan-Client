import React from 'react';
import { shallow } from 'enzyme';
import Label from '../Label';


describe('<Label />', () => {
  const testData = {
    top: 100,
    left: 100,
  };
  const fakeTheme = {
    plans: {
      color: '#FFFFFF',
      roomName: {
        font: 'Helvetica',
        size: 16,
      },
    },
  };

  const renderedComponent = shallow(<Label theme={fakeTheme} left={testData.left} top={testData.top} />);
  it('Expect to match Snapshot', () => {
    expect(renderedComponent).toMatchSnapshot();
  });

  it('Expect to have prop ', () => {
    it('left', () => {
      expect(renderedComponent.props.left).toEqual(testData.left);
      expect(renderedComponent.props.left).not.toEqual(testData.right);
    });
    it('right', () => {
      expect(renderedComponent.props.right).toEqual(testData.right);
      expect(renderedComponent.props.right).not.toEqual(testData.left);
    });
  });
});
