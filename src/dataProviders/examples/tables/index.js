import Axios from 'axios';
import config from '../../../settings/config.json';

const zToPlanIdMap = {
  0: '1F',
  1: '2F',
  2: '3F',
  3: '4F'
};

const getTables = plans => {
  return Axios.get(`${config['api-entry-url']}/objects?l=1`).then(res => {
    console.log(res.data.map(t => t.type));
    return Promise.resolve(
      res.data
        .filter(t => t.type === 'table')
        .map(t => {
          const {
            layout_id,
            posx,
            posy,
            posz,
            project,
            rotation,
            tableNumber,
            text
          } = t;
          return {
            name: text || '',
            x: posx,
            y: posy,
            floor: posz,
            rotation,
            id: tableNumber,
            projects: project ? [project] : null,
            planId: zToPlanIdMap[posz]
          };
        })
    );
  });

  return new Promise(res =>
    res([
      {
        name: 'Tim Dresner',
        x: 15,
        y: 20,
        floor: 0,
        rotation: 0,
        id: 1,
        projects: ['HR', 'FD'],
        planId: '1F'
      },
      {
        name: 'Christina Freud',
        x: 20,
        y: 12,
        floor: 0,
        rotation: 180,
        projects: ['FD'],
        id: 2,
        planId: '1F'
      },
      {
        name: 'Martina Huber', // text
        x: 30, // posx value relaative to floor
        y: 25, // posy value relaative to floor
        floor: 1, // layout_id
        rotation: 245, // rotation
        projects: ['HR'], // project ** make array
        id: 2, // id
        // tableNumber need to be added
        planId: '2F' // posz
      },
      {
        name: 'Jan Friedmann',
        x: 25,
        y: 11,
        floor: 0,
        rotation: 90,
        projects: ['FD'],
        id: 3,
        planId: '1F'
      }
    ])
  );
};

export default getTables;
