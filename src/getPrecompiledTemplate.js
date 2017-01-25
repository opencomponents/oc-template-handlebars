const vm = require('vm');

module.exports = (options, templateString) => {
  const context = {};
  vm.runInNewContext(templateString, context);
  return context.oc.components[options.key];
};
