'use strict';

/**
 * @class Assert
 * 
 * A collection of assertions and methods to 
 * use in the test suites.
 */
export default class Assert {
    /**
     * Constructor for Assert.
     */
    constructor() {}

    /**
     * Asserts if the given value is true.
     * @param {boolean} value - Value to check.
     * @returns boolean
     */
    isTrue(value) {};

    /**
     * Asserts if the given value is false.
     * @param {boolean} value - value to check.
     */
    isFalse(value) {};

    /**
     * Asserts if the given values are equal.
     * @param {*} value1 - first value to compare.
     * @param {*} value2 - second value to compare.
     * @returns boolean
     */
    isEqual(value1, value2) {};
};