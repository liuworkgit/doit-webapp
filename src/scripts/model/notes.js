'use strict';

/**
 * @class Notes
 * 
 * Represents a task's notes.
 */
export default class Notes {
    /**
     * Constructor for a Notes object.
     * @param {String} t - The text of the note.
     */
    constructor(t) {
        this.text = t;
    };

    /**
     * Clears the note's text.
     */
    clearText() {
        this.text = undefined;
    };

    /**
     * Getters and Setters
     */
    /**
     * @param {String} t - New text to be set.
     */
    set setText(t) {
        this.text = t;
    };
    /**
     * @returns {String} The text of the note.
     */
    get getText() {
        return this.text;
    };
};