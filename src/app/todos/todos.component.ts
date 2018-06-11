import { Observable } from 'rxjs';
import { TodoServiceService } from './../todo-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos$: Object;

  constructor(private todo: TodoServiceService) { }

  ngOnInit() { this.todo.getTodos().subscribe(
    todo => this.todos$ = todo
    );
  }

}
