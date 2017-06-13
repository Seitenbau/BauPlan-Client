/**
*
* ProjectIdentifier
*
*/

import React from 'react';
import Wrapper from './Wrapper';
import Rectangle from './Rectangle';
// import styled from 'styled-components';


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

};

export default ProjectIdentifier;
