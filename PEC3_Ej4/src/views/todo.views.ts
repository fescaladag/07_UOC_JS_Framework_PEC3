/**
 * @class View
 *
 * Visual representation of the model.
 */

import { Todo } from '../models/todo.model';  

export class TodoView {

  app: HTMLElement;
  form: HTMLFormElement;
  input: HTMLInputElement;
  submitButton: HTMLButtonElement;
  title: HTMLElement;
  todoList: HTMLElement;
  private _temporaryTodoText: string;

  
/**Para convertir este código en TypeScript debes tener en cuenta que los
elementos html tienen un interface específico HTMLElement (https://developer.mozilla.org/es/docs/Web/API/HTMLElement).  */

  constructor() {
    this.app = this.getElement("#root");
    this.form = this.createElement("form") as HTMLFormElement; // (type assertion) para decirle a TypeScript el elemento devuelto sea de tipo HTMLFormElement.
    this.input = this.createElement("input") as HTMLInputElement;
    this.input.type = "text";
    this.input.placeholder = "Add todo";
    this.input.name = "todo";
    this.submitButton = this.createElement("button") as HTMLButtonElement;
    this.submitButton.textContent = "Submit";
    this.form.append(this.input, this.submitButton);
    this.title = this.createElement("h1");
    this.title.textContent = "Todos";
    this.todoList = this.createElement("ul", "todo-list");
    this.app.append(this.title, this.form, this.todoList);

    this._temporaryTodoText = "";
    this._initLocalListeners();
  }

  get _todoText(): string {
    return this.input.value;
  }

  _resetInput(): void {
    this.input.value = "";
  }

  createElement(tag: string, className?: string): HTMLElement {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);
    return element;
  }

  getElement(selector: string): HTMLElement {
    const element = document.querySelector(selector);
    if (!element) throw new Error(`Element not found for selector: ${selector}`);
    return element as HTMLElement;
  }

  displayTodos(todos: Todo[]): void {
    while (this.todoList.firstChild) {
      this.todoList.removeChild(this.todoList.firstChild);
    }

    if (todos.length === 0) {
      const p = this.createElement("p");
      p.textContent = "Nothing to do! Add a task?";
      this.todoList.append(p);
    } else {
      todos.forEach(todo => {
        const li = this.createElement("li");
        li.id = todo.id;

        const checkbox = this.createElement("input") as HTMLInputElement;
        checkbox.type = "checkbox";
        checkbox.checked = todo.complete;

        const span = this.createElement("span");
        span.contentEditable = "true";
        span.classList.add("editable");

        if (todo.complete) {
          const mark = this.createElement("s");
          mark.textContent = todo.text;
          span.append(mark);
        } else {
          span.textContent = todo.text;
        }

        const deleteButton = this.createElement("button", "delete");
        deleteButton.textContent = "Delete";
        li.append(checkbox, span, deleteButton);

        this.todoList.append(li);
      });
    }
  }

  _initLocalListeners(): void {
    this.todoList.addEventListener("input", event => {
      if ((event.target as HTMLElement).classList.contains("editable")) {
        this._temporaryTodoText = (event.target as HTMLElement).innerText;
      }
    });
  }


  bindAddTodo(handler: (text: string) => void): void {
    this.form.addEventListener("submit", event => {
      event.preventDefault();
      if (this._todoText) {
        handler(this._todoText);
        this._resetInput();
      }
    });
  }

//captura el id del elemento sobre el que se actúa
  bindDeleteTodo(handler: (id: string) => void): void {
    this.todoList.addEventListener("click", event => {
      if ((event.target as HTMLElement).classList.contains("delete")) {
        const id = (event.target as HTMLElement).parentElement!.id;
        handler(id);
      }
    });
  }

  bindEditTodo(handler: (id: string, text: string) => void): void {
    this.todoList.addEventListener("focusout", event => {
      if (this._temporaryTodoText) {
        const id = (event.target as HTMLElement).parentElement!.id;
        handler(id, this._temporaryTodoText);
        this._temporaryTodoText = "";
      }
    });
  }

  bindToggleTodo(handler: (id: string) => void): void {
    this.todoList.addEventListener("change", event => {
      if ((event.target as HTMLInputElement).type === "checkbox") {
        const id = (event.target as HTMLElement).parentElement!.id;
        handler(id);
      }
    });
  }
}