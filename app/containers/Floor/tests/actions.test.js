import { floorRendered } from 'containers/Floor/actions';
import { FLOOR_RENDERED } from 'containers/Floor/constants';

describe('Floor actions', () => {
  it('floorRendered', () => {
    expect(floorRendered({ test: 123 })).toHaveProperty('data.test', 123);
    expect(floorRendered({ test: 123 })).toHaveProperty('type', FLOOR_RENDERED);
  });
});
