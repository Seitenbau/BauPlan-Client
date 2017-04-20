/**
*
* Tabs
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import {Tabs as TabContainer, Tab} from 'material-ui/Tabs';

class Tabs extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <TabContainer>
        <Tab label="Alle">
          <div>Alle</div>
        </Tab>
        <Tab label="EG">
          <div>EG</div>
        </Tab>
        <Tab label="OG">
          <div>OG</div>
        </Tab>
        <Tab label="Bleiche 10">
          <div>BL10</div>
        </Tab>
        <Tab label="Bleiche 12">
          <div>BL112</div>
        </Tab>
        <Tab label="Bleiche 14">
          <div>BL14</div>
        </Tab>
      </TabContainer>
    );
  }
}

Tabs.propTypes = {

};

export default Tabs;
