import { fromJS } from 'immutable';
import plansReducer from '../reducer';

describe('plansReducer', () => {
  it('returns the initial state', () => {
    const initialState = fromJS({
      nextActiveFloor: false
    });
    initialState.set('plans', []);
    initialState.set('tables', []);
    initialState.set('projects', []);
    expect(plansReducer(undefined, {})).toEqual(fromJS(initialState));
  });
});
