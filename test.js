const app = require('./challenges');
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
  describe('isPrime', () => {
    it('isPrime returns true if passed 7', () => assert.equal(true, app._tests.isPrime(7)));
    it('isPrime returns false if passed 9', () => assert.equal(false, app._tests.isPrime(9)));
  });
  describe('howManyPrimes', () => {
    it('should return 4 if given a range of 0 - 10', () => {
      assert.equal(4, app._tests.howManyPrimes(0, 10));
    })
    it('should return 21 if given a range of 10 - 100', () => {
      assert.equal(21, app._tests.howManyPrimes(10, 100));
    })
  })
});