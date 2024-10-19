'use strict';
import Notes from "./notes";

/**
 * @class Task
 * 
 * Represents a task to be completed.
 */
export default class Task {
    /**
     * Constructor for a Task object.
     * @param {String} name - The task's name. By default, 
     * is "New Task."
     * @param {Date} due - The task's due date. Consists of 
     * the year, month, day, time (in hours and seconds, am or pm).
     * Is today's date unless chosen otherwise.
     * @param {Number} id - The task's id number. Is a 10-digit 
     * number.
     * @param {Notes} notes - The task's notes.
     */
    constructor(name, due, id, notes) {};

    /**
     * Marks the task as important and vice versa.
     */
    markImportant() {};

    /**
     * Marks the task as done and vice versa.
     */
    markDone() {};

    /**
     * Clears the task's notes.
     */
    clearNotes() {};

    /**
     * Getters and Setters
     */
    /**
     * @param {String} name_ - New name.
     */
    set setName(name_) {};
    /**
     * @returns {String} The task's name.
     */
    get getName() {};
    /**
     * @param {Number} due_ - New due date.
     */
    set setDue(due_) {};
    /**
     * @returns {Number} The task's due date.
     */
    get getDue() {};
    /**
     * @param {String} text_ - New text for the notes.
     */
    set setNotes(text_) {};
    /**
     * @returns {Notes} The task's notes.
     */
    get getNotes() {};
    /**
     * @returns {Number} The task's id.
     */
    get getId() {};
    /**
     * @returns {Boolean} If the task was marked important or not.
     */
    get getImportant() {};
    /**
     * @returns {Boolean} Whether the task is done or not.
     */
    get getDone() {};
};