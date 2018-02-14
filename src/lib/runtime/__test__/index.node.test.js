// eslint-disable-next-line fp/no-mutation
Object.prototype.toString.call = jest.fn(function mockToString() {
  return '[object global]';
});

describe('runtime - running in Node.js', function runtimeNode() {
  const NODE = require('../index').NODE; // eslint-disable-line
  const runtime = require('../index').default; // eslint-disable-line

  test(`get() returns ${NODE}`, function runtimeNodeGet() {
    expect(runtime.get()).toBe(NODE);
  });

  test('isNode is true', function runtimeNodeIsNode() {
    expect(runtime.isNode).toBe(true);
  });

  test('isBrowser is false', function runtimeNodeIsBrowser() {
    expect(runtime.isBrowser).toBe(false);
  });
});
