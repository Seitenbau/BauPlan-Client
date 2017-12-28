import plans from './plans.json';

/**
 * Get images and export data
 */
export function getFloorPlans() {
  return plans.map(plan => {
    plan.imageUri = !plan.imageUri
      ? require('./images/' + plan.imageName)
      : plan.imageUri;
    return plan;
  });
}

export default getFloorPlans;
