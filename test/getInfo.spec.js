const getInfo = require('../src/getInfo');

describe('when invoking the method', () => {
  const info = getInfo();

  test('should return the correct version', () => {
    expect(info.version).toBe('1.0.0');
  });
  test('should return the correct template type', () => {
    expect(info.type).toBe('handlebars');
  });
  test('should return the list of dependencies', () => {
    expect(info.dependencies).toMatchObject(
      {
        handlebars: '^4.0.6'
      }
    );
  });
});
