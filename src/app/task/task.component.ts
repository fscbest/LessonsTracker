import { Component, OnInit } from '@angular/core';

import { TasksService } from './tasks.service';

@Component({
  moduleId: module.id,
  selector: 'app-task',
  templateUrl: 'task.component.html',
  styleUrls: ['task.component.css'],
  providers: [TasksService]
})
export class TaskComponent implements OnInit {
  tasks: any[];

  constructor(private _tasksService: TasksService) {}

  ngOnInit() {
    this._tasksService.getTaskList()
      .subscribe(tasks => {
        this.tasks = tasks;
      });
  }

}
