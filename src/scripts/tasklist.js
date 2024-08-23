'use strict';
import Task from "./task";

/**
 * @class TaskList
 * 
 * Represents a collection of tasks.
 */
export default class TaskList {
    /**
     * Constructor for a TaskList object.
     */
    constructor() {};

    /**
     * Adds a new task.
     * @param {Task} t - The task to be added.
     */
    add(t) {};

    /**
     * Remove the task with the given id.
     * @param {Number} id - The id of the task to remove.
     */
    remove(id) {};

    /**
     * Getters and Setters
     */
    /**
     * @returns {Number} The TaskList's total number of tasks.
     */
    get getTotal() {};
    /**
     * @returns {Number} The number of finished tasks in TaskList.
     */
    get getNumDone() {};
};