import { Component, OnInit, Input } from '@angular/core';

import { Task } from './../task';

@Component({
  moduleId: module.id,
  selector: 'app-task',
  templateUrl: 'task.component.html',
  styleUrls: ['task.component.css']
})
export class TaskComponent implements OnInit {
  @Input('task') task = {
    userId: 1,
    customerId: 1,
    providerId: 1,
    date: "15.07.2016",
    title: "English",
    notes: "English lesson",
    price: 50,
    id: 1,
    color: "red"
  };

  constructor() {}

  ngOnInit() {  }

}
