
import { fromJS } from 'immutable';
import objectListReducer from '../reducer';

describe('objectListReducer', () => {
  it('returns the initial state', () => {
    expect(objectListReducer(undefined, {})).toEqual(fromJS({}));
  });
});
