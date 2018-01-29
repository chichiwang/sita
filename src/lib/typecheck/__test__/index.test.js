import typecheck, * as Type from '../index';

const testcases = [
  {
    type: 'Array',
    value: [],
  },
  {
    type: 'Boolean',
    value: false,
  },
  {
    type: 'Date',
    value: new Date(),
  },
  {
    type: 'Function',
    value: function functionTest() {
      console.log('Function');
    },
  },
  {
    type: 'GeneratorFunction',
    value: function* generatorTest() {
      yield;
      console.log('Generator Function');
    },
  },
  {
    type: 'NaN',
    value: NaN,
  },
  {
    type: 'Null',
    value: null,
  },
  {
    type: 'Number',
    value: 42,
  },
  {
    type: 'Object',
    value: {
      test: 'Object',
    },
  },
  {
    type: 'Promise',
    value: new Promise(function promiseTest() {
      setTimeout(function promiseOutput() {
        console.log('Promise');
      }, 0);
    }),
  },
  {
    type: 'RegExp',
    value: new RegExp('testRegExp'),
  },
  {
    type: 'String',
    value: 'testString',
  },
  {
    type: 'Undefined',
    value: undefined,
  },
];

function indefiniteArticle(noun) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  return vowels.indexOf(noun.charAt(0).toLowerCase()) < 0 ? 'a' : 'an';
}

function inputType(type) {
  return `${indefiniteArticle(type)} ${type.toLowerCase()}`;
}

describe('typecheck', function typecheckDefault() {
  testcases.forEach(function typecheckTests(testcase) {
    const { type, value } = testcase;
    test(`it returns ${type} for ${inputType(type)}`, function typecheckTest() {
      expect(typecheck(value)).toEqual(type);
    });
  });
});

describe('type detection helpers', function typeDetections() {
  testcases.forEach(function typeDetectionsTests(testcase) {
    const { type, value } = testcase;
    const detectorName = `is${type}`;

    describe(detectorName, function typeDetectionTest() {
      test(`it returns true for ${inputType(type)}`, function typePositive() {
        expect(Type[detectorName](value)).toEqual(true);
      });

      const negativeCases = testcases.filter(function filterNegativeTestCases(
        tc,
      ) {
        return tc.type !== type;
      });

      negativeCases.forEach(function typeNegatives(negCase) {
        const description = `it returns false for ${inputType(negCase.type)}`;
        test(description, function typeNegative() {
          expect(Type[detectorName](negCase.value)).toEqual(false);
        });
      });
    });
  });
});
