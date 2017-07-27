/*
 *
 * UiEventProvider actions
 *
 */

 import {
   WINDOW_LIFE_RESIZE,
 } from './constants';

 export function windowLifeResize(data) {
   return {
     type: WINDOW_LIFE_RESIZE,
     data,
   };
 }
