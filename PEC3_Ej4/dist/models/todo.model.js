"use strict";
/**
 * @class Model
 *
 * Manages the data of the application.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
class Todo {
    constructor({ text, complete } = { text: "", complete: false }) {
        this.id = this.uuidv4();
        this.text = text;
        this.complete = complete;
    }
    uuidv4() {
        return ((1e7).toString() +
            (-1e3).toString() +
            (-4e3).toString() +
            (-8e3).toString() +
            (-1e11).toString()).replace(/[018]/g, (c) => (Number(c) ^
            (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (Number(c) / 4)))).toString(16));
    }
}
exports.Todo = Todo;
