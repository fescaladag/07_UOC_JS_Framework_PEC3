"use strict";
/**
 * @class Service
 *
 * Manages the data of the application.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const todo_model_1 = require("../models/todo.model");
class TodoService {
    constructor() {
        this.todos = JSON.parse(localStorage.getItem("todos") || "[]").map(todo => new todo_model_1.Todo(todo));
    }
    bindTodoListChanged(callback) {
        this.onTodoListChanged = callback;
    }
    _commit(todos) {
        this.onTodoListChanged(todos);
        localStorage.setItem("todos", JSON.stringify(todos));
    }
    addTodo(text) {
        this.todos.push(new todo_model_1.Todo({ text, complete: false }));
        this._commit(this.todos);
    }
    editTodo(id, updatedText) {
        this.todos = this.todos.map(todo => todo.id === id ? new todo_model_1.Todo(Object.assign(Object.assign({}, todo), { text: updatedText })) : todo);
        this._commit(this.todos);
    }
    deleteTodo(_id) {
        this.todos = this.todos.filter(({ id }) => id !== _id);
        this._commit(this.todos);
    }
    toggleTodo(_id) {
        this.todos = this.todos.map(todo => todo.id === _id ? new todo_model_1.Todo(Object.assign(Object.assign({}, todo), { complete: !todo.complete })) : todo);
        this._commit(this.todos);
    }
    getTodos() {
        return this.todos;
    }
}
exports.TodoService = TodoService;
