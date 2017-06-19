/**
*
* ProjectIdentifier
*
*/

import React, { PropTypes } from 'react';
import Wrapper from './Wrapper';
// import Rectangle from './Rectangle';
// import styled from 'styled-components';


class ProjectIdentifier extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        {this.props.projects.map((project, i) => <span key={i}>{project}</span>)}
      </Wrapper>
    );
  }
}
// <Rectangle key={i} id={project.id} color={project.color} />
ProjectIdentifier.propTypes = {
  projects: PropTypes.array,
};

export default ProjectIdentifier;
