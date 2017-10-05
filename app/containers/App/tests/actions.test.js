import { windowLifeResize } from 'containers/App/actions';
import { WINDOW_LIFE_RESIZE } from 'containers/App/constants';

describe('App actions', () => {
  it('windowLifeResize', () => {
    expect(windowLifeResize()).toEqual({ type: WINDOW_LIFE_RESIZE });
  });
});
