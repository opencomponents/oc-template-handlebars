const handlebars = require('handlebars');
const precompile = require('../src/precompile');

describe('precompile method', () => {
  describe('when invoking the method', () => {
    const template = 'Hello';
    precompile(template);

    test('should correctly invoke handlebars precompile method', () => {
      expect(handlebars.precompile).toBeCalledWith(template);
    });
  });
});
