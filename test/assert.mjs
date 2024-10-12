'use strict';

/**
 * @class Assert
 * 
 * A collection of assertions and methods to 
 * use in the test suites.
 * 
 * Assert allows for global access via a single object.
 * 
 * Code referenced from https://www.patterns.dev/vanilla/singleton-pattern/
 */
let instance;
class Assert {
    /**
     * Constructor for Assert.
     * @throws Instance already exists errors
     */
    constructor() {
        if (instance) {
            throw new Error('An instance of Assert already exists.');
        };
        instance = this;
    };

    /**
     * Returns the single instance of Assert.
     * @returns Assert
     */
    getInstance() {
        return this;
    }

    /**
     * Asserts if the given value is true.
     * @param {boolean} value - Value to check.
     * @throws Incorrect type error
     * @returns boolean
     */
    isTrue(value) {
        if (typeof value !== typeof true) {
            throw new Error('value must be a boolean.');
        }
        return value === true;
    };

    /**
     * Asserts if the given value is false.
     * @param {boolean} value - value to check.
     * @throws Incorrect type error
     * @returns boolean
     */
    isFalse(value) {
        if (typeof value !== typeof false) {
            throw new Error('value must be a boolean');
        }
        return value === false;
    };

    /**
     * Asserts if the given values are equal.
     * @param {*} value1 - first value to compare.
     * @param {*} value2 - second value to compare.
     * @throws Types not equal error
     * @returns boolean
     */
    isEqual(value1, value2) {
        if (typeof value1 !== typeof value2) {
            throw new Error('value1 and value2 are different types.');
        }
        return value1 === value2;
    };
};

// prevent modification by consuming code,
const assert = Object.freeze(new Assert());
export default assert;