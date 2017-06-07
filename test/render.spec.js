const handlebars = require('handlebars');

jest.mock('../packages/oc-template-handlebars/utils');
const utils = require('../packages/oc-template-handlebars/utils');
const render = require('../packages/oc-template-handlebars/render');

const linked = jest.fn(() => 'html');
handlebars.__setTemplate(linked);

describe('render method', () => {
  describe('when invoked with a valid template', () => {
    utils.validator.mockReturnValue({ isValid: true });
    const options = { model: 'aModel', template: 'aTemplate' };
    const callback = jest.fn();

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

  describe('when invoked with a broken template', () => {
    utils.validator.mockReturnValue({ isValid: true });
    const callback = jest.fn();
    const brokenOptions = { model: 'aModel', template: 'aTemplate' };
    jest.spyOn(handlebars, 'template').mockImplementation(() => {
      throw new Error('blargh');
    });

    render(brokenOptions, callback);
    handlebars.template.mockRestore();

    test('should correctly invoke the callback', () => {
      expect(callback).toBeCalledWith(new Error('blargh'));
    });
  });

  describe('when invoked with an ivalid template', () => {
    utils.validator.mockReturnValue({ isValid: false, error: 'errorMsg' });
    const callback = jest.fn();
    const options = { model: 'aModel', template: 'aTemplate' };
    render(options, callback);

    test('should correctly invoke the callback', () => {
      expect(callback).toBeCalledWith('errorMsg');
    });
  });
});
