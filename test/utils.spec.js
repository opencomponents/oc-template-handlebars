const utils = require('../packages/oc-template-handlebars/utils');

describe('utils module', () => {
  describe('when validating component', () => {
    describe("when component's handlebars version is obsolete", () => {
      const template = {
        compiler: [6, '>= 2.0.0-beta.1'],
        main: function() {
          return 'Hello world!';
        },
        useData: !0
      }; // eslint-disable-line
      const result = utils.validator(template);

      test('should error', () => {
        expect(result.isValid).toBe(false);
        expect(result.error).toBe(
          "The component can't be rendered because it was published with an older OC version"
        );
      });
    });

    describe("when component's handlebars version is supported", () => {
      const template = {
        compiler: [7, '>= 4.0.0'],
        main: function() {
          return 'Hello world!';
        },
        useData: !0
      }; // eslint-disable-line
      const result = utils.validator(template);

      test('should be valid', () => {
        expect(result.isValid).toBe(true);
      });
    });
  });
});
