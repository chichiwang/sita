// eslint-disable-next-line fp/no-mutation
Object.prototype.toString.call = jest.fn(function mockToString() {
  return '[object Window]';
});

describe('runtime - running in a browser', function runtimeWindow() {
  const BROWSER = require('../index').BROWSER; // eslint-disable-line
  const runtime = require('../index').default; // eslint-disable-line

  test(`get() returns ${BROWSER}`, function runtimeWindowGet() {
    expect(runtime.get()).toBe(BROWSER);
  });

  test('isNode is false', function runtimeWindowIsNode() {
    expect(runtime.isNode).toBe(false);
  });

  test('isBrowser is true', function runtimeWindowIsBrowser() {
    expect(runtime.isBrowser).toBe(true);
  });
});
