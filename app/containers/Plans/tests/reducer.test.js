
import { fromJS } from 'immutable';
import plansReducer from '../reducer';

describe('plansReducer', () => {
  it('returns the initial state', () => {
    const initialState = {
      floors: [],
      tables: [],
      projects: [],
    };
    expect(plansReducer(undefined, {})).toEqual(fromJS(initialState));
  });
});
