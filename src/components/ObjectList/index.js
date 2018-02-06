/*
 *
 * ObjectList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SearchItem from 'components/SearchItem';
import { rem } from '../../utils/helper';

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.headerColor};
  color: ${(props) => props.theme.colors.primary};
  width: 20vw;
  height: 100%;
  position: fixed;
  z-index: 2;
  margin-left: ${(props) => !props.active ? '-20vw' : 0};
  transition: all 0.375s ease-in;
  padding:  ${rem(10)};
`;

const HeadSpan = styled.span`
  display: block;
  margin-bottom: ${rem(10)};
  border-bottom: ${rem(1)} solid ${(props) => props.theme.colors.primary}
`;

class ObjectList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <Container active={this.props.active}>
        <HeadSpan>Personen:</HeadSpan>
        {this.props.hits.map((hit) => <SearchItem prefix={'table'} name={hit.name} />)}
      </Container>
    );
  }
}

ObjectList.propTypes = {
  active: PropTypes.bool,
  hits: PropTypes.array,
};

export default ObjectList;
