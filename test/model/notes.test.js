'use strict';

import Notes from '../../src/scripts/model/notes';

// Test cases for Notes.

/**
 * Setup function.
 */
let note = new Notes('The quick brown fox jumped over the lazy dog.');
function beforeEach() {
    note.setText('The quick brown fox jumped over the lazy dog.');
};

/**
 * Tests the constructor.
 */