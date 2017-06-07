const compile = require('./compile');
const template = require('oc-template-handlebars');

module.exports = {
  compile,
  getCompiledTemplate: template.getCompiledTemplate,
  render: template.render,
  getInfo: template.getInfo
};
