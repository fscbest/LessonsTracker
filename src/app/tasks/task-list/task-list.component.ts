import { Component, OnInit } from '@angular/core';

import { Task } from './../task';
import { TaskComponent } from './../task/task.component';
import { TasksService } from './../services/tasks.service';


@Component({
  moduleId: module.id,
  selector: 'app-task-list',
  templateUrl: 'task-list.component.html',
  styleUrls: ['task-list.component.css'],
  providers: [TasksService],
  directives: [TaskComponent]
})
export class TaskListComponent implements OnInit {
  tasks = [];

  constructor(private _tasksService: TasksService) {}

  ngOnInit() {
    this.tasks = this._tasksService.getTaskList();
   }

}
