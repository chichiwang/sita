import data from '../index';

const testCases = [{
  description: 'it returns a script to safely assign a nested value',
  params: ['foo.bar.baz', 5],
  expected: 'window.foo = window.foo || {};\nwindow.foo.bar = window.foo.bar || {};\nwindow.foo.bar.baz = 5;',
}, {
  description: 'it returns the correct assignment when passed a string value',
  params: ['foo.bar', 'baz'],
  expected: 'window.foo = window.foo || {};\nwindow.foo.bar = "baz";',
}, {
  description: 'it returns the correct assignment when passed an array value',
  params: ['foo.bar', ['baz']],
  expected: 'window.foo = window.foo || {};\nwindow.foo.bar = ["baz"];',
}, {
  description: 'it returns the correct assignment when passed an object value',
  params: ['foo.bar', {baz: 5}],
  expected: 'window.foo = window.foo || {};\nwindow.foo.bar = {"baz":5};',
}];

describe('globalData - set', function setGlobalData() {
  testCases.forEach(function setGlobalDataTest(testCase) {
    test(testCase.description, function testSetGlobalData() {
      expect(data.set(...testCase.params)).toBe(testCase.expected);
    });
  });
});
