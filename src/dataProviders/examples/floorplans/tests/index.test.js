import { getFloorPlans } from '../index';

jest.mock(
  '../plans.json',
  () => [
    {
      imageName: 'blubb.svg'
    }
  ],
  { virtual: true }
);

jest.mock('../images/blubb.svg', () => '<svg/>', { virtual: true });

describe('floorplans', () => {
  const plans = getFloorPlans();
  it('Returns image from image name', () => {
    expect(plans[0].imageUri).toBe('<svg/>');
  });
});
