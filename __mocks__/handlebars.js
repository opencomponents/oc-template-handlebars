/* eslint-disable no-underscore-dangle, no-var */

const handlebars = jest.genMockFromModule('handlebars');

var linked = jest.fn();
const __setTemplate = (fn) => {
  linked = fn;
};

const template = jest.fn(() => linked);

handlebars.__setTemplate = __setTemplate;
handlebars.template = template;
module.exports = handlebars;
