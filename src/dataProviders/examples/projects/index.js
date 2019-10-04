import Axios from 'axios';
import config from '../../../settings/config.json';
const getProjects = () =>
  Axios.get(`${config['api-entry-url']}/projects`).then(res =>
    Promise.resolve(
      res.data.map(p => {
        const { project_id, project_short, project_name, project_color } = p;

        return {
          name: project_name,
          id: project_short,
          color: `#${project_color}`,
          sys_id: project_id
        };
      })
    )
  );
// new Promise(res =>
//   res([
//     {
//       name: 'Human Resources', // project_name
//       id: 'HR', // project_short
//       color: '#FFFF00' // project_color
//       // project_id
//     },
//     {
//       name: 'Financial Department',
//       id: 'FD',
//       color: '#FF00FF'
//     }
//   ])
// );

export default getProjects;
