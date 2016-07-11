import { Component } from '@angular/core';

import { TaskListComponent } from './tasks/task-list/task-list.component';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [TaskListComponent]
})
export class AppComponent {
  title = 'app works!!!!';
}
