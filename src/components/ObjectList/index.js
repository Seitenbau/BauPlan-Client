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
  margin-bottom: ${rem(10)};
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
        <HeadSpan>{this.props.label}:</HeadSpan>
        {this.props.hits.length > 0 ? this.props.hits.map((hit) => <SearchItem prefix={'table'} name={hit.name} />) : <span>-</span>}
      </Container>
    );
  }
}

ObjectList.propTypes = {
  active: PropTypes.bool,
  hits: PropTypes.array,
  label: PropTypes.string,
};

export default ObjectList;
