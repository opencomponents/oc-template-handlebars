const packageJson = require('../package.json');

module.exports = () => ({
  type: 'handlebars',
  version: packageJson.version,
  dependencies: packageJson.dependencies
});
