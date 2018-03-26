import data from '../index';

const testObj = {
  foo: {
    bar: {
      baz: 'foobaz',
    },
  },
};

describe('globalData - get', function getGlobalData() {
  test('it retrieves a nested value', function getGlobalDataNestedValue() {
    expect(data.get('foo.bar.baz', testObj)).toBe(testObj.foo.bar.baz);
  });

  test('it returns undefined for invalid object chains', function getGlobalDataUndefined() {
    expect(data.get('foo.invalid.bar', testObj)).toBe(undefined);
  });
});
