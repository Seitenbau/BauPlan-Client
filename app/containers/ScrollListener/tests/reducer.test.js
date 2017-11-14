
import { fromJS } from 'immutable';
import scrollListenerReducer from '../reducer';

describe('scrollListenerReducer', () => {
  it('returns the initial state', () => {
    expect(scrollListenerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
