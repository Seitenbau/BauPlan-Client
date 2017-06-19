import { put, takeLatest } from 'redux-saga/effects';
import { requestProjectsDataSuccess } from './actions';
import { REQUEST_PROJECTS_DATA } from './constants';
// Individual exports for testing
export function* defaultSaga() {
  // See example in containers/HomePage/sagas.js
  yield takeLatest(REQUEST_PROJECTS_DATA, getProjects);
}


export function* getProjects() {
  yield put(requestProjectsDataSuccess(
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
  getProjects,
];
