
import { fromJS } from 'immutable';
import floorsReducer from '../reducer';

describe('floorsReducer', () => {
  it('returns the initial state', () => {
    expect(floorsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
