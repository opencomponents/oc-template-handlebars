jest.mock('handlebars');
const handlebars = require('handlebars');
const precompile = require('../src/precompile');

describe('when invoking the method', () => {
  const template = 'Hello';
  precompile(template);

  test('should return the correct version', () => {
    expect(handlebars.precompile).toBeCalledWith(template);
  });
});
