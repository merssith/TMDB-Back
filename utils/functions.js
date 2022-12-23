let fs = require("fs");

function generateUUID() {
  var d = new Date().getTime();
  var d2 =
    (typeof performance !== "undefined" &&
      performance.now &&
      performance.now() * 1000) ||
    0;
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = Math.random() * 16;
    if (d > 0) {
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function idsToString(array) {
  let string = "";
  string += array[0].id;
  for (let i = 1; i < array.length; i++) {
    string += "," + array[i].id;
  }
  return string;
}

function checkAge(userAge) {
  if (userAge >= 21) {
    return true;
  } else return false;
}

function readHTMLFile(path, callback) {
  fs.readFile(path, { encoding: "utf-8" }, function (err, html) {
    if (err) {
      callback(err);
    } else {
      callback(null, html);
    }
  });
}

module.exports = {
  generateUUID,
  checkAge,
  idsToString,
  getRandomInt,
  readHTMLFile,
};
