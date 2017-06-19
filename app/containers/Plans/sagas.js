import { put, takeLatest } from 'redux-saga/effects';
import { requestTableDataSuccess, requestProjectDataSuccess } from './actions';
import { REQUEST_TABLE_DATA, REQUEST_PROJECTS_DATA } from './constants';
// Individual exports for testing
export function* defaultSaga() {
  // See example in containers/HomePage/sagas.js
  yield takeLatest(REQUEST_TABLE_DATA, getTables);
  yield takeLatest(REQUEST_PROJECTS_DATA, getProjects);
}

/* parameter : action */
export function* getTables() {
  yield put(requestTableDataSuccess(
    [{
      name: 'Lukas Ochmann',
      x: 200,
      y: 1500,
      floor: 0,
      rotation: 45,
      number: 1,
      projects: 1,
      planId: 'EG',
    }, {
      name: 'Dominik Prill',
      x: 250,
      y: 300,
      floor: 0,
      rotation: 180,
      projects: 1,
      number: 2,
      planId: 'OG',
    }, {
      name: 'Tobias Wursthorn',
      x: 300,
      y: 400,
      floor: 0,
      rotation: 245,
      number: 2,
      planId: 'EG',
    }, {
      name: 'Patrick Blum',
      x: 350,
      y: 500,
      floor: 0,
      rotation: 90,
      number: 3,
      planId: 'OG',
    }]
  ));
}

export function* getProjects() {
  yield put(requestProjectDataSuccess(
    [{
      id: 1,
      name: 'Service Baden-Würtemberg',
      short: 'SBW',
      color: '#FFFF00',
    }, {
      id: 2,
      name: 'Future Comunication Center',
      short: 'FCC',
      color: '#FF00FF',
    }]
  ));
}

// All sagas to be loaded
export default [
  defaultSaga,
  getTables,
  getProjects,
];
