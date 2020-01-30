module.exports = stringToArray =>
  stringToArray.split(",").map(item => item.trim());
