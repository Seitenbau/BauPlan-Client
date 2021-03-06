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

import { toUrl } from '../../assets/utils/Urlify';

import ScaleImg from './ScaleImg';
import StyledFloor from './StyledFloor';
import ImgWrapper from './ImgWrapper';
import Label from './label';
import { announceVisible } from './actions';
import StyledLink from './Link';

import theme from '../../settings/theme.json';

const TableWithScrollTarget = withScrollTarget(Table);

export class Floor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageScaleFactor: 1
    };
    this.toUI = this.toUI.bind(this);
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
    const buffer = 70;
    const inViewport =
      rect.top < buffer && Math.abs(rect.top - buffer) < rect.height;
    if (inViewport) {
      this.props.announceVisible(this.props);
    }
  }

  toUI = function(posx, posy, posz) {
    const scaleFactor = this.state.imageScaleFactor * this.props.mapScaleFactor;
    console.log('call: toUI');
    const rect = this.wrapper.getBoundingClientRect();
    var d = rect.height;
    var t = theme.plans.marginBottom;
    var y = posy;
    var x = posx;

    // dont check 0 beacuse always same x and y
    for (var i = 1; i <= 4; i++) {
      if (posz === i) {
        y = y + i * (d + t);
      }
    }
    return {
      y: Math.ceil(y),
      x: Math.ceil(x)
    };
  };

  render() {
    const scaleFactor = this.state.imageScaleFactor * this.props.mapScaleFactor;
    const { name, labels, imageUri, id, tables } = this.props;

    return (
      <StyledFloor
        innerRef={ref => {
          this.wrapper = ref;
        }}
      >
        <Label>{name}</Label>
        <ImgWrapper>
          <ScaleImg
            id={id}
            name={name}
            src={imageUri}
            alt={`Floorplan ${name}`}
            handleResize={this.handleResize.bind(this)}
          />
          {labels &&
            labels.map((label, i) => (
              <RoomLabel
                key={i}
                scaleFactor={scaleFactor}
                name={label.name}
                left={label.x}
                top={label.y}
              />
            ))}
          {tables &&
            tables.map((table, j) => (
              <StyledLink key={j} to={`/table/${toUrl(table.name)}`}>
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
                  z={table.z}
                  rotation={table.rotation}
                  toUi={this.toUI}
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

export default connect(
  () => ({}),
  mapDispatchToProps
)(Floor);
