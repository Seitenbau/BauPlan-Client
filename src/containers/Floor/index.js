/**
 *
 * Floor
 *
 */

import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import RoomLabel from 'components/RoomLabel';
import Table from 'containers/Table';
import { flatten } from 'utils/helper';
import throttle from 'lodash/debounce';
import withScrollTarget from 'components/ScrollTarget';

import ScaleImg from './ScaleImg';
import StyledFloor from './StyledFloor';
import ImgWrapper from './ImgWrapper';
import Label from './label';
import { announceVisible } from './actions';
import StyledLink from './Link';

const TableWithScrollTarget = withScrollTarget(Table);

export class Floor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageScaleFactor: 1
    };
  }

  find(id) {
    const ids = flatten([id]);
    if (typeof id !== 'undefined') {
      return this.props.projects.filter(e => ids.indexOf(e.id) > -1);
    }
    return [];
  }

  handleResize(val) {
    this.setState({ imageScaleFactor: val });
  }

  componentDidMount() {
    window.addEventListener(
      'scroll',
      throttle(this.isElementInViewport, 10).bind(this)
    );
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.isElementInViewport);
  }

  isElementInViewport() {
    const rect = this.wrapper.getBoundingClientRect();
    const buffer = 10;
    const inViewport = rect.top < buffer && Math.abs(rect.top) < rect.height;
    if (inViewport) {
      this.props.announceVisible(this.props);
    }
  }

  render() {
    const scaleFactor = this.state.imageScaleFactor * this.props.mapScaleFactor;

    return (
      <StyledFloor
        innerRef={ref => {
          this.wrapper = ref;
        }}
      >
        <Label>{this.props.name}</Label>
        <ImgWrapper>
          <ScaleImg
            id={this.props.id}
            name={this.props.name}
            src={this.props.imageUri}
            alt={`Floorplan ${this.props.name}`}
            handleResize={this.handleResize.bind(this)}
          />
          {this.props.labels.map((label, i) => (
            <RoomLabel
              key={i}
              scaleFactor={scaleFactor}
              name={label.name}
              left={label.x}
              top={label.y}
            />
          ))}
          {this.props.tables.map((table, j) => (
            <StyledLink key={j} to={`/table/${table.name}`}>
              <TableWithScrollTarget
                scaleFactor={scaleFactor}
                className={`table table-${j}`}
                name={table.name}
                id={table.id}
                active={table.active}
                scrollOffset={-60}
                projects={this.find(table.projects)}
                x={table.x}
                y={table.y}
                rotation={table.rotation}
              />
            </StyledLink>
          ))}
        </ImgWrapper>
      </StyledFloor>
    );
  }
}

Floor.propTypes = {
  name: PropTypes.string.isRequired,
  imageUri: PropTypes.string.isRequired,
  mapScaleFactor: PropTypes.number,
  active: PropTypes.bool,
  labels: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  id: PropTypes.string,
  tables: PropTypes.array,
  projects: PropTypes.array
};

function mapDispatchToProps(dispatch) {
  return {
    announceVisible: (props, position) =>
      dispatch(announceVisible(props, position))
  };
}

export default connect(() => ({}), mapDispatchToProps)(Floor);
