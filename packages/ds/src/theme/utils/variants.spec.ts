import { getColorSchemeOrDefault } from './variants';

describe('utils', function () {
  describe('variants', function () {
    describe('getColorSchemeOrDefault', function () {
      const testCases = [
        [[{ colorScheme: 'red', colorSchemeDefault: 'gray' }, 'red']],
        [[{ colorScheme: null, colorSchemeDefault: 'gray' }, 'gray']],
      ];
      it.each(testCases)('should return color schema: %j', function ([value, expected]) {
        const color = getColorSchemeOrDefault<string>(value as any);
        expect(color).toBe(expected);
      });
    });
  });
});
