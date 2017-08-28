
import { fromJS } from 'immutable';
import plansReducer from '../reducer';

describe('plansReducer', () => {
  it('returns the initial state', () => {
    const initialState = {
      plans: [],
    };
    expect(plansReducer(undefined, {})).toEqual(fromJS(initialState));
  });
});
