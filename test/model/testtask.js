'use strict';

import test from "../test.mjs";
import assert from "../assert.mjs";
import Task from "../../src/scripts/model/task";
import Notes from "../../src/scripts/model/notes";

// Test cases for Task.

/**
 * Run before each test.
 */
let task;
const beforeEach = () => task = new Task(
    'Finish Homework',
    new Date(),
    123456,
    new Notes('Ask teacher about #3.')
);

/**
 * Tests the constructor.
 */
console.log('Testing testConstructor...');
test('testConstructor - task.name', assert.isEqual(task.name, 'Finish Homework'));