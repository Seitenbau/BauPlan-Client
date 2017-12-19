/**
*
* ProjectIdentifier
*
*/

import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { rem } from 'utils/helper';
import Wrapper from './Wrapper';
import Rectangle from './Rectangle';

const Absolute = styled.div`
  position: absolute;
  margin: 0 ${rem(-1)} ${rem(-1)} 0;
  bottom: 0;
  right: 0;
`;

class ProjectIdentifier extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Absolute>
        <Wrapper scaleFactor={this.props.scaleFactor}>
          {
            this.props.projects != null ?
            this.props.projects.map((project, i) => <Rectangle scaleFactor={this.props.scaleFactor} key={i} id={project.id} color={project.color} />) :
            ''
          }
        </Wrapper>
      </Absolute>
    );
  }
}

ProjectIdentifier.propTypes = {
  projects: PropTypes.oneOfType([
    PropTypes.array,
    (props, propName, componentName) =>
      typeof props[propName] === 'undefined' ?
      true :
      new Error(`Invalid prop ${propName} supplied to ${componentName} need to be undefined. Recived ${props[propName]}:${typeof props[propName]}`),
  ]),
  scaleFactor: PropTypes.number,
};

export default ProjectIdentifier;
