//
//  run json server by using command
//  json-server index.js
//  under this floder
//
module.exports = () => {
  const people = require("./resoures/people.json");
  const test = require("./resoures/test.json");
  const data = { people: people, test: test };
  return data;
};
