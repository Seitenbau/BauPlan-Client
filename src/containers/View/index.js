/*
 * View
 *
 */

import React from 'react';
import Plans from 'containers/Plans';
import { Switch, Route } from 'react-router-dom';
import JumpView from 'containers/JumpView';
import Actionbar from 'components/Actionbar';
import Bar from 'components/Bar';
import Header from 'components/Header';
import Search from 'containers/Search';
import styled from 'styled-components';

const Title = styled.h1`
  margin: 0;
  display: inline;
  flex-grow: 3;
  text-transform: uppercase;
  font-size: 1.5rem;
  line-height: 2.5rem;
`;

export class View extends React.PureComponent {
  render() {
    return (
      <div>
        <Header>
          <Search />
          <Title>Bauplan</Title>
        </Header>
        <Bar color="primary" position="left" />
        <Switch>
          <Route path="/:type?/:identifier?" component={Plans} />
        </Switch>
        <Actionbar />
      </div>
    );
  }
}

export default View;
