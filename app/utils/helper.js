import React from 'react';
import { ThemeProvider } from 'styled-components';
import system from './System';
import theme from './theme.json';
// FIXME: why no import allowed?  import { shallow } from 'enzyme';

import {
  REM_BASE,
 } from './constants';


export function importAll(r) {
  const images = {};
  // eslint-disable-next-line no-return-assign
  r.keys().map((item) =>
    images[item.replace('./', '')] = r(item)
  );
  return images;
}

export function rem(pix) {
  const multi = pix.toString().split(' ');
  if (multi.length > 1) {
    return multi.map((p) => rem(p));
  }
  return `${(parseFloat(pix / REM_BASE, 10))}rem`;
}

export function toTheme(theme, systemStyles) {
  return Object.assign({}, theme, { systemStyles });
}

/*
  percent = 0.x -> shade
  percent = -0.x -> darken
  https://stackoverflow.com/a/13542669/5871835
*/
export function shadeColor(color, percent) {
    const f = parseInt(color.slice(1), 16),
    const t = percent < 0 ? 0 : 255,
    const p = percent < 0 ? percent * -1 : percent,
    const R = f >> 16,
    const G = f >> 8 & 0x00FF,
    const B = f & 0x0000FF;

    return "#"+(0x1000000 +
              (Math.round((t - R) * p) + R) * 0x10000 +
              (Math.round((t - G) * p ) + G) * 0x100 +
              (Math.round((t - B) * p ) + B))
              .toString(16).slice(1);
}

export function prefixNumber(number) {
  if(number <= 9) {
    return `#00${number}`;
  } else if(number <= 99) {
    return `#0${number}`
  }
  return `#${number}`
}

export const shallowWithTheme = (children, options) => {
  const wrapper = shallow(<ThemeProvider theme={theme}>{children}</ThemeProvider>, options)
  const instance = wrapper.root.instance()
  return wrapper.shallow({ context: instance.getChildContext() })
}
