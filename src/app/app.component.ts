import { Component } from '@angular/core';

import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [TasksListComponent]
})
export class AppComponent {
  title = 'app works!';
}
