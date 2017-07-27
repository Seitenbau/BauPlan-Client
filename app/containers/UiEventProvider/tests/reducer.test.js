
import { fromJS } from 'immutable';
import uiEventProviderReducer from '../reducer';

describe('uiEventProviderReducer', () => {
  it('returns the initial state', () => {
    expect(uiEventProviderReducer(undefined, {})).toEqual(fromJS({}));
  });
});
