import { windowLifeResize } from '../actions';
import { WINDOW_LIFE_RESIZE } from '../constants';

describe('UiEventProvider actions', () => {
  describe('WINDOW_LIFE_RESIZE', () => {
    it('has a type of WINDOW_LIFE_RESIZE', () => {
      const data = {
        width: '10px'
      };
      const expected = {
        type: WINDOW_LIFE_RESIZE,
        data
      };
      expect(windowLifeResize(data)).toEqual(expected);
    });
  });
});
