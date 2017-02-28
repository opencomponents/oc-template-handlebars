const handlebars = require('handlebars');

module.exports = (options, callback) =>
  callback(handlebars.precompile(options.template));
