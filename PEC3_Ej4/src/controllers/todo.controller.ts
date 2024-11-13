/**
 * @class Controller
 *
 * Links the user input and the view output.
 *
 * @param model
 * @param view
 */

import { TodoService } from '../services/todo.service';
import { TodoView } from '../views/todo.views';
import { Todo } from '../models/todo.model';

export class TodoController {
  private service: TodoService;
  private view: TodoView;

  constructor(service: TodoService, view: TodoView) {
    this.service = service;
    this.view = view;

    this.service.bindTodoListChanged(this.onTodoListChanged);
    this.view.bindAddTodo(this.handleAddTodo);
    this.view.bindEditTodo(this.handleEditTodo);
    this.view.bindDeleteTodo(this.handleDeleteTodo);
    this.view.bindToggleTodo(this.handleToggleTodo);

    //obtiene el array de tareas de la clase 'service'
    //usa el metodo 'getTodos()' por ser TodoService.todos una propiedad privada 
    this.onTodoListChanged(this.service.getTodos()); 
  }

  //este metodo actualiza la lista y se pasa como callback a la función 'bindTodoListChanged' de la clase service
  onTodoListChanged = (todos: Todo[]): void => {
    this.view.displayTodos(todos);
  };


  //metodo para conectar el envento del botón "submit" de la clase 'view'
  //con el método 'addTodo' de la clase 'service' que que añade una tarea nueva.
  handleAddTodo = (text: string): void => {
    this.service.addTodo(text);
  };

  handleEditTodo = (id: string, text: string): void => {
    this.service.editTodo(id, text);
  };

  //metodo para conectar el envento que marca una tarea como completa de la clase 'view'
  //con el método 'deleteTodo' de la clase 'service' que que elimina una tarea
  handleDeleteTodo = (id: string): void => {
    this.service.deleteTodo(id);
  };

  handleToggleTodo = (id: string): void => {
    this.service.toggleTodo(id);
  };
}