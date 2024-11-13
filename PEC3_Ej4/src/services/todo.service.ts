/**
 * @class Service
 *
 * Manages the data of the application.
 */

import { Todo } from '../models/todo.model';  

//tipo de dato personalizado de tipo fución que recibe un array de tareas y no devuelve ningún valor
type TodoListChangedCallback = (todos: Todo[]) => void;

export class TodoService {
  
   private todos: Todo[]; // tipo de dato tarea de la calse modelo
   private onTodoListChanged!: TodoListChangedCallback; //tipo de dato personalizado. El uso de '!' hace que no sea neceasrio inicilizarla inmediatamente.

  //envía una las tareas al almacenamiento local creando un array de tareas.
  constructor() {
    this.todos = (JSON.parse(localStorage.getItem("todos") || "[]") as any[]).map(
      todo => new Todo(todo)
    );
  }



  bindTodoListChanged(callback:TodoListChangedCallback): void{
    //onTodoListChanged actualiza la lista en pantalla
    this.onTodoListChanged = callback;
  }

  //metodo que se usa cada vez que modifica la lista de tareas
  //invoca el el metodo onTodoListChanged para actualizar la lista por pantalla
  //y añade la nueva tarea al almacenamiento local
  _commit(todos: Todo[]): void {
    this.onTodoListChanged(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  addTodo(text: string): void {
    this.todos.push(new Todo({  text, complete: false }));
    this._commit(this.todos);
  }


  editTodo(id: string, updatedText: string) {
  this.todos = this.todos.map(todo =>
      todo.id === id ? new Todo({ ...todo, text: updatedText }) : todo
    );
    this._commit(this.todos);
  }

  deleteTodo(_id: string) {
    this.todos = this.todos.filter(({ id }) => id !== _id);

    this._commit(this.todos);
  }

  toggleTodo(_id: string) {
    this.todos = this.todos.map(todo =>
      todo.id === _id ? new Todo({ ...todo, complete: !todo.complete }) : todo
    );

    this._commit(this.todos);
  }


//metodo creado para que sea posible acceder al array de tareas.
//ya que el atributo 'todos' se definió como privado al inicia de la clase
//si se definiera como publico no haría falta crear este método
  public getTodos(): Todo[] {
    return this.todos;
  }


}
