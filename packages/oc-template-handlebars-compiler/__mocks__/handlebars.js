'use strict';

const handlebars = jest.genMockFromModule('handlebars');

let linked = jest.fn();
const __setTemplate = fn => {
  linked = fn;
};

const template = jest.fn(() => linked);

handlebars.__setTemplate = __setTemplate;
handlebars.template = template;
module.exports = handlebars;
