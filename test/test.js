'use strict';

import assert from "./assert.mjs";

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
function test(testName, assert) {
    if (assert == true) {
        console.log(`${testName} passed.`);
    } else {
        console.log(`${testName} failed.`);
    }
};