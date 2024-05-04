const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const planFolderPath = path.join(__dirname, "storage", "planList");

// Method to read a plan from a file
function get(planId) {
  try {
    const filePath = path.join(planFolderPath, `${planId}.json`);
    const fileData = fs.readFileSync(filePath, "utf8");
    return JSON.parse(fileData);
  } catch (error) {
    if (error.code === "ENOENT") return null;
    throw { code: "failedToReadPlan", message: error.message };
  }
}

// Method to write a plan to a file
function create(plan) {
  try {
    plan.id = crypto.randomBytes(16).toString("hex");
    const filePath = path.join(planFolderPath, `${plan.id}.json`);
    const fileData = JSON.stringify(plan);
    fs.writeFileSync(filePath, fileData, "utf8");
    return plan;
  } catch (error) {
    throw { code: "failedToCreatePlan", message: error.message };
  }
}

// Method to update a plan in a file
function update(plan) {
  try {
    const currentPlan = get(plan.id);
    if (!currentPlan) return null;
    const newPlan = { ...currentPlan, ...plan };
    const filePath = path.join(planFolderPath, `${plan.id}.json`);
    const fileData = JSON.stringify(newPlan);
    fs.writeFileSync(filePath, fileData, "utf8");
    return newPlan;
  } catch (error) {
    throw { code: "failedToUpdatePlan", message: error.message };
  }
}

// Method to remove a plan from a file
function remove(planId) {
  try {
    const filePath = path.join(planFolderPath, `${planId}.json`);
    fs.unlinkSync(filePath);
    return {};
  } catch (error) {
    if (error.code === "ENOENT") {
      return {};
    }
    throw { code: "failedToRemovePlan", message: error.message };
  }
}

// Method to list plans in a folder
function list() {
  try {
    const files = fs.readdirSync(planFolderPath);
    const planList = files.map((file) => {
      const fileData = fs.readFileSync(
        path.join(planFolderPath, file),
        "utf8"
      );
      return JSON.parse(fileData);
    });
    return planList;
  } catch (error) {
    throw { code: "failedToListPlans", message: error.message };
  }
}

module.exports = {
  get,
  create,
  update,
  remove,
  list,
};
