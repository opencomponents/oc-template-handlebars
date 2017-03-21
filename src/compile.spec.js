const handlebars = require('handlebars');
const compile = require('./compile');

describe('compile method', () => {
  describe('when invoking the method', () => {
    const template = 'Hello';
    const callback = jest.fn();
    compile({ template }, callback);

    test('should correctly invoke handlebars precompile method', () => {
      expect(handlebars.precompile).toBeCalledWith(template);
    });
    test('should correctly invoke the callback', () => {
      expect(callback).toBeCalled();
    });
  });
});
