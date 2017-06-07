const template = require('../packages/oc-template-handlebars');
const compiler = require('../packages/oc-template-handlebars-compiler');

describe('template APIs', () => {
  test('should expose the correct methods', () => {
    expect(template).toMatchSnapshot();
  });
});

describe('template-compiler APIs', () => {
  test('should expose the correct methods', () => {
    expect(compiler).toMatchSnapshot();
  });
});
