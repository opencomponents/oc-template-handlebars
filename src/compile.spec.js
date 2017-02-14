const handlebars = require('handlebars');
const compile = require('./compile');

describe('compile method', () => {
  describe('when invoking the method', () => {
    const template = 'Hello';
    compile(template);

    test('should correctly invoke handlebars precompile method', () => {
      expect(handlebars.precompile).toBeCalledWith(template);
    });
  });
});
