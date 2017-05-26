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
  return `${(parseInt(pix / REM_BASE, 10))}rem`;
}

export function toTheme(theme, systemStyles) {
  return Object.assign({}, theme, { systemStyles });
}
