'use strict';
import TaskList from "./tasklist";

/**
 * @class Project
 * 
 * Represents a project containing tasks to do.
 */
export default class Project {
    /**
     * Constructor for a Project object.
     * @param {String} name - The project's name.
     * @param {Number} id - The project's id.  
     */
    constructor(name, id) {};

    /**
     * Adds a new task.
     * @param {Task} t - The task to be added.
     */
    addTask(t) {};

    /**
     * Remove the task with the given id.
     * @param {Number} id - The id of the task to remove.
     */
    removeTask(id) {};

    /**
     * Getters and Setters
     */
    /**
     * @param {String} name_ - New name. 
     */
    set setName(name_) {};
    /**
     * @returns {String} The project's name.
     */
    get getName() {};
    /**
     * @returns {Number} The project's id.
     */
    get getId() {};
    /**
     * @returns {Boolean} The project's completion status.
     */
    get getIsDone() {};
};