import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get('http://localhost:8081/api/todo/todos');
  }

  getTodo(todoId) {
    return this.http.get('http://localhost:8081/api/todo/todos/' + todoId);
  }
}
