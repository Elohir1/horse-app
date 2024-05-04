const ACTIVITIES = require("../config/activities.js");

function validatePlan(plan) {
  return ACTIVITIES.includes(plan)
}

module.exports = validatePlan;
