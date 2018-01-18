import { fromJS } from 'immutable';
import tableParentReducer from '../reducer';

describe('tableParentReducer', () => {
  it('returns the initial state', () => {
    expect(tableParentReducer(undefined, {})).toEqual(fromJS({}));
  });
});
