import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ROUTER_DIRECTIVES} from '@angular/router';

import { Task } from './../task';
import { TaskComponent } from './../task/task.component';
import { TasksService } from './../services/tasks.service';


@Component({
  moduleId: module.id,
  selector: 'app-task-list',
  templateUrl: 'task-list.component.html',
  styleUrls: ['task-list.component.css'],
  providers: [TasksService],
  directives: [ROUTER_DIRECTIVES, TaskComponent]
})
export class TaskListComponent implements OnInit {
  tasks = [];
  private sub: any;

  constructor(
    private _tasksService: TasksService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.sub = this._route.params.subscribe(params => {
      let userId = +params['userId']; // (+) converts string 'id' to a number
      let customerId = +params['customerId'];
      //this._tasksService.getTaskList(userId, customerId).then(tasks => this.tasks = tasks);
      this.tasks = this._tasksService.getTaskList(userId, customerId);
    });

      /*let userId = +this._route.snapshot.params.userId; // (+) converts string 'id' to a number
      let customerId = +this._route.params['customerId'];
      this.tasks = this._tasksService.getTaskList(userId, customerId);*/

      //this._tasksService.getTaskList(this._route.snapshot.params.userId, this._route.snapshot.params.customerId)
      //  .subscribe(tasks => this.tasks = tasks);
   }


  ngOnDestroy() {
    //this.sub.unsubscribe();
  }
}
