/* eslint-disable no-var */

const handlebars = require('handlebars');

module.exports = (options, callback) => {
  var compiled;
  try {
    compiled = handlebars.precompile(options.template);
  } catch (err) {
    return callback(err);
  }
  return callback(null, compiled);
};
