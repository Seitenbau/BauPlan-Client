import plans from './plans.json';

/**
 * Get images and export data
 */
export function getFloorPlans() {
  return plans.map(plan => {
    plan.imageUri = require('./images/' + plan.imageName);
    return plan;
  });
}

export default getFloorPlans;
