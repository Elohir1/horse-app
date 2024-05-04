const ACTIVITIES = require("../config/activities.js");

function validateActivity(activity) {
  return ACTIVITIES.includes(activity)
}

module.exports = validateActivity;
