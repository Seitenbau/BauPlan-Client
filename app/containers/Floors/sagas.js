import { put, takeLatest } from 'redux-saga/effects';
import { requestTableDataSuccess } from './actions';
import { REQUEST_TABLE_DATA } from './constants';
// Individual exports for testing
export function* defaultSaga() {
  // See example in containers/HomePage/sagas.js
  yield takeLatest(REQUEST_TABLE_DATA, getTables);
}

/* parameter : action */
export function* getTables() {
  yield put(requestTableDataSuccess(
    [{
      name: 'Lukas Ochmann',
      x: 200,
      y: 1500,
      rotation: 45,
      number: 1,
      project: '1',
    }, {
      name: 'Dominik Prill',
      x: 250,
      y: 300,
      rotation: 180,
      project: 1,
      number: 2,
    }, {
      name: 'Tobias Wursthorn',
      x: 300,
      y: 400,
      rotation: 245,
      number: 2,
    }, {
      name: 'Patrick Blum',
      x: 350,
      y: 500,
      rotation: 90,
      number: 3,
    }]
  ));
}

// All sagas to be loaded
export default [
  defaultSaga,
  getTables,
];
