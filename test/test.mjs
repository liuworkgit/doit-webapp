'use strict';

/**
 * @module Test
 * 
 * Module for creating tests.
 */

/**
 * Creates a new test.
 * @param {String} testName - the name of the test.
 * @param {Function} assert - the assertion.
 */
export default function test(testName, assert) {
    if (assert == true) {
        console.log(`${testName} passed.`);
    } else {
        console.log(`${testName} failed.`);
    };
};