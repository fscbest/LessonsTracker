import { Component } from '@angular/core';
import { TaskComponent } from './task/task.component'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [TaskComponent]
})
export class AppComponent {
  title = 'app works!';
}
