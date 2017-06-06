const constants = require('../constants');

module.exports = {
  validator: template => {
    const isUnsupported = template.compiler[0] < 7;
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
