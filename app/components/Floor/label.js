import styled from 'styled-components';
import { rem } from '../../utils/helper';

const label = styled('h2')`
  margin: 0;
  margin-left: ${rem(20)};
  color: ${(props) => props.theme.plans.color ? props.theme.plans.color : '#000000'};
  font-family: ${(props) => props.theme.plans.floorName.font};
  font-size: ${(props) => props.theme.plans.floorName.size ? rem(props.theme.plans.floorName.size) : rem(24)}
`;

export default label;
