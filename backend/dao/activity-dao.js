const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const activityFolderPath = path.join(__dirname, "storage", "activityList");

// Method to read an activity from a file
function get(activityId) {
  try {
    const filePath = path.join(activityFolderPath, `${activityId}.json`);
    const fileData = fs.readFileSync(filePath, "utf8");
    return JSON.parse(fileData);
  } catch (error) {
    if (error.code === "ENOENT") return null;
    throw { code: "failedToReadActivity", message: error.message };
  }
}

// Method to write an activity to a file
function create(activity) {
  try {
    activity.id = crypto.randomBytes(16).toString("hex");
    const filePath = path.join(activityFolderPath, `${activity.id}.json`);
    const fileData = JSON.stringify(activity);
    fs.writeFileSync(filePath, fileData, "utf8");
    return activity;
  } catch (error) {
    throw { code: "failedToCreateActivity", message: error.message };
  }
}

// Method to update activity in a file
function update(activity) {
  try {
    const currentActivity = get(activity.id);
    if (!currentActivity) return null;
    const newActivity = { ...currentActivity, ...activity };
    const filePath = path.join(activityFolderPath, `${activity.id}.json`);
    const fileData = JSON.stringify(newActivity);
    fs.writeFileSync(filePath, fileData, "utf8");
    return newActivity;
  } catch (error) {
    throw { code: "failedToUpdateActivity", message: error.message };
  }
}

// Method to remove an activity from a file
function remove(activityId) {
  try {
    const filePath = path.join(activityFolderPath, `${activityId}.json`);
    fs.unlinkSync(filePath);
    return {};
  } catch (error) {
    if (error.code === "ENOENT") {
      return {};
    }
    throw { code: "failedToRemoveActivity", message: error.message };
  }
}

// Method to list users in a folder
function list() {
  try {
    const files = fs.readdirSync(activityFolderPath);
    const userList = files.map((file) => {
      const fileData = fs.readFileSync(
        path.join(activityFolderPath, file),
        "utf8"
      );
      return JSON.parse(fileData);
    });
    return userList;
  } catch (error) {
    throw { code: "failedToListUsers", message: error.message };
  }
}

module.exports = {
  get,
  create,
  update,
  remove,
  list,
};
