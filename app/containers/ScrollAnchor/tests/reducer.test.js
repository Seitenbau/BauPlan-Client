
import { fromJS } from 'immutable';
import scrollAnchorReducer from '../reducer';

describe('scrollAnchorReducer', () => {
  it('returns the initial state', () => {
    expect(scrollAnchorReducer(undefined, {})).toEqual(fromJS({}));
  });
});
