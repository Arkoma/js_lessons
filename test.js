const app = require('./myFirstApp');
const assert = require('assert');

describe('My first functions', () => {
  describe('helloworld function', () => {
    it('should return a string of "Hello World"', () => {
      assert.equal(app._tests.helloWorld(), "Hello World");
    });
  });
  describe('cube function', () => {
    it('should return 27 when passed a 3', () => {
      assert.equal(app._tests.cube(3), 27);
    });
    it('should return 8 when passed a 2', () => {
      assert.equal(app._tests.cube(2), 8);
    });
  });
});