const getInfo = require('../getInfo');
const constants = require('../constants');

module.exports = {
  validator: (template, templateType) => {
    const isHandlebars = templateType === getInfo().type;
    const isUnsupported = isHandlebars && template.compiler[0] < 7;
    if (isUnsupported) {
      return {
        isValid: false,
        error: constants.messages.legacyComponent
      };
    }

    return {
      isValid: true
    };
  }
};
