/**
*
* Actionbar
*
*/

import React from 'react';
import Icon from 'components/Icon';
import Bar from 'components/Bar';

function Actionbar() {
  return (
    <Bar color="secondary">
      <Icon name={'gear'} width={20} height={20} />
      <Icon name={'gear'} width={20} height={20} />
      <Icon name={'gear'} width={20} height={20} />
    </Bar>
  );
}

Actionbar.propTypes = {

};

export default Actionbar;
