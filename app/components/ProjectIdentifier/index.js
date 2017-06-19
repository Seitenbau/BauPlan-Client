/**
*
* ProjectIdentifier
*
*/

import React, { PropTypes } from 'react';
import Wrapper from './Wrapper';
import Rectangle from './Rectangle';


class ProjectIdentifier extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        {
          this.props.projects != null ?
          this.props.projects.map((project, i) => <Rectangle key={i} id={project.id} color={project.color} />) :
          ''
        }
      </Wrapper>
    );
  }
}

ProjectIdentifier.propTypes = {
  projects: PropTypes.array,
};

export default ProjectIdentifier;
