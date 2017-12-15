import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { rem } from '../../utils/helper';
import gear from './gear.svg';
import buddy from './buddy.svg';
import x from './x.svg';
import fullGear from './gear_full.svg';
import magnifyGlass from './magnify_glass.svg';


const Div = styled.div`

  width: 100%;
  padding: ${rem(5)};
  margin-bottom: ${rem(5)};
`;

export default class Icon extends React.Component { //eslint-disable-line
  constructor(props) {
    super(props);
    this.icons = {
      gear,
      buddy,
      x,
      fullGear,
      magnifyGlass,
    };
  }

  render() {
    const MyIcon = this.icons[this.props.name ? this.props.name : 0];
    return (
      <Div>
        <MyIcon width={rem(this.props.width)} height={rem(this.props.height)} />
      </Div>
    );
  }
}
Icon.propTypes = {
  name: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};
