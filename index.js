const searchInString = require("./controllers/searchInString");
const searchInObject = require("./controllers/searchInObject");
const searchInArray = require("./controllers/searchInArray");

function searchInValues(data, text) {
  text = String(text).toLowerCase();
  if (Array.isArray(data)) {
    return searchInArray(data, text);
  } else if (typeof data === "object") {
    return searchInObject(data, text);
  } else if (typeof data === "string" || typeof data === "number") {
    return searchInString(data, text);
  }
  return false;
}

module.exports = {
  searchInValues,
  searchInObject,
  searchInString,
  searchInArray,
};
