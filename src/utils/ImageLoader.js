/**
 * Load floor plans images via webpack
 * This has to be a separate module to be able to mock when testing
 *
 * @param  {string} floorPlanName the name of the floor plan according to the filename in images
 * @return {string}               file path
 */
export function imageLoader(floorPlanName) {
  // weird webpack behavior: the directory cant be a dynamic expression
  const req = require.context('floorplans/images', true, /\.(png|jpe?g|svg)$/);
  return req(`./${floorPlanName}`);
}

export default imageLoader;
