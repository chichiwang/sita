// eslint-disable-next-line fp/no-mutation
Object.prototype.toString.call = jest.fn(function mockToString() {
  return '[object Undefined]';
});

describe('runtime - running in an unknown environment', function runtimeOther() {
  const runtime = require('../index').default; // eslint-disable-line

  test('get() returns undefined', function runtimeOtherGet() {
    expect(runtime.get()).toBe(undefined);
  });

  test('isNode is false', function runtimeOtherIsNode() {
    expect(runtime.isNode).toBe(false);
  });

  test('isBrowser is false', function runtimeOtherIsBrowser() {
    expect(runtime.isBrowser).toBe(false);
  });
});
