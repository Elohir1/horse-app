const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const horseFolderPath = path.join(__dirname, "storage", "horseList");

// Method to read a horse from a file
function get(horseId) {
  try {
    const filePath = path.join(horseFolderPath, `${horseId}.json`);
    const fileData = fs.readFileSync(filePath, "utf8");
    return JSON.parse(fileData);
  } catch (error) {
    if (error.code === "ENOENT") return null;
    throw { code: "failedToReadHorse", message: error.message };
  }
}

// Method to write a horse to a file
function create(horse) {
  try {
    horse.id = crypto.randomBytes(16).toString("hex");
    const filePath = path.join(horseFolderPath, `${horse.id}.json`);
    const fileData = JSON.stringify(horse);
    fs.writeFileSync(filePath, fileData, "utf8");
    return horse;
  } catch (error) {
    throw { code: "failedToCreateHorse", message: error.message };
  }
}

// Method to update horse in a file
function update(horse) {
  try {
    const currentHorse = get(horse.id);
    if (!currentHorse) return null;
    const newHorse = { ...currentHorse, ...horse };
    const filePath = path.join(horseFolderPath, `${horse.id}.json`);
    const fileData = JSON.stringify(newHorse);
    fs.writeFileSync(filePath, fileData, "utf8");
    return newHorse;
  } catch (error) {
    throw { code: "failedToUpdateHorse", message: error.message };
  }
}

// Method to remove a horse from a file
function remove(horseId) {
  try {
    const filePath = path.join(horseFolderPath, `${horseId}.json`);
    fs.unlinkSync(filePath);
    return {};
  } catch (error) {
    if (error.code === "ENOENT") {
      return {};
    }
    throw { code: "failedToRemoveHorse", message: error.message };
  }
}

// Method to list horses in a folder
function list() {
  try {
    const files = fs.readdirSync(horseFolderPath);
    const horseList = files.map((file) => {
      const fileData = fs.readFileSync(
        path.join(horseFolderPath, file),
        "utf8"
      );
      return JSON.parse(fileData);
    });
    return horseList;
  } catch (error) {
    throw { code: "failedToListHorses", message: error.message };
  }
}

module.exports = {
  get,
  create,
  update,
  remove,
  list,
};
