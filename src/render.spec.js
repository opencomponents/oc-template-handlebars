/* eslint-disable no-underscore-dangle, no-console */

const handlebars = require('handlebars');

jest.mock('../src/utils');
const utils = require('../src/utils');
const render = require('../src/render');

const callback = jest.fn();
const options = {
  model: 'aModel',
  template: 'aTemplate'
};

const linked = jest.fn(() => 'html');
handlebars.__setTemplate(linked);

describe('render method', () => {
  describe('when invoked with a valid template', () => {
    utils.validator.mockReturnValue({ isValid: true });
    render(options, callback);

    test('should correctly invoke handlebars template method', () => {
      expect(handlebars.template).toBeCalledWith(options.template);
    });

    test('should correctly invoke linkedTemplate with the model', () => {
      expect(linked).toBeCalledWith(options.model);
    });

    test('should correctly invoke the callback', () => {
      expect(callback).toBeCalledWith(null, 'html');
    });
  });

  describe('when invoked with an ivalid template', () => {
    utils.validator.mockReturnValue({ isValid: false, error: 'errorMsg' });
    render(options, callback);

    test('should correctly invoke the callback', () => {
      expect(callback).toBeCalledWith('errorMsg');
    });
  });
});

