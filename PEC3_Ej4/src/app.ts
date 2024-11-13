
import { TodoService } from './services/todo.service';  
import { TodoView } from './views/todo.views';  
import { TodoController } from './controllers/todo.controller';

const app = new TodoController(new TodoService(), new TodoView());
