import { fromJS } from 'immutable';
import tableParentReducer from '../reducer';
import { LOCATION_CHANGE } from 'react-router-redux';

describe('tableParentReducer', () => {
  it('returns the initial state', () => {
    expect(tableParentReducer(undefined, {})).toEqual(fromJS({active: []}));
  });
  it('returns updated active-state', () => {
    expect(tableParentReducer(undefined, {
      type: LOCATION_CHANGE,
      payload: {
        pathname:  '/table/tim'
      }
    })).toEqual(fromJS({active: ['table', 'tim']}))
  });
});
