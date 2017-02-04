var fs = require("fs");
var path = require("path");
var controllers = {};
fs.readdirSync(__dirname).filter(function (file) {
  return (file.indexOf(".") !== 0) && (file !== "index.js");
}).forEach(function (file) {
  controllers[file.replace('.js', '')] = require(path.join(__dirname, file));
});
module.exports = controllers;