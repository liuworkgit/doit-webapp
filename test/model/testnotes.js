'use strict';

import test from '../test.mjs';
import assert from '../assert.mjs';
import Notes from '../../src/scripts/model/notes.js';

// Test cases for Notes.

/**
 * Setup function.
 */
let note = new Notes('The quick brown fox jumped over the lazy dog.');
function beforeEach() {
    note.text = 'The quick brown fox jumped over the lazy dog.';
};

/**
 * Tests the constructor.
 */
beforeEach();
test(
    'testConstructor', 
    assert.isEqual(note.text, 'The quick brown fox jumped over the lazy dog.')
);

/**
 * Tests if able to clear text.
 */
beforeEach();
note.clearText();
test(
    'testClearNonEmpty',
    assert.isEqual(note.text, undefined)
);

/**
 * Tests clearing a note that's already been cleared.
 */
beforeEach();
note.clearText();
note.clearText();
test(
    'testClearEmpty',
    assert.isEqual(note.text, undefined)
);