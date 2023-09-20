import { Component, type OnInit, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { provideHttpClient, HttpClient } from '@angular/common/http';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [NgFor],
  template: `
    <h2>Todos</h2>

    <ul>
      <li *ngFor="let todo of __todos">
        {{ todo.title }}
      </li>
    </ul>
  `,
})
export class TodosComponent implements OnInit {
  public static clientProviders = [provideHttpClient()];
  public static renderProviders = [TodosComponent.clientProviders];

  public __todos: Todo[] = [];

  private http = inject(HttpClient);

  public ngOnInit(

  ) {
    this.http
      .get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
      .subscribe((todos) => (this.__todos = todos));
  }
}