
import { fromJS } from 'immutable';
import searchFieldReducer from '../reducer';

describe('searchFieldReducer', () => {
  it('returns the initial state', () => {
    expect(searchFieldReducer(undefined, {})).toEqual(fromJS({}));
  });
});
