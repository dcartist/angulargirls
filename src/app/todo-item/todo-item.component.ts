import { Component, Input, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';


@Component({
  selector: 'app-todo-item',
  template: `
    <p>
      todo-item works!
    </p>
  `,
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  // @Input() item;
  @Input() item: TodoItem;
  constructor() { }

  ngOnInit() {
  }

}
