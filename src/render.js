const handlebars = require('handlebars');
const utils = require('./utils');

module.exports = (options, callback) => {
  const validationResult = utils.validator(options.template);
  if (!validationResult.isValid) {
    return callback(validationResult.error);
  }

  const linked = handlebars.template(options.template);
  const html = linked(options.model);

  return callback(null, html);
};
