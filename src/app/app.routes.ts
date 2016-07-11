import { provideRouter, RouterConfig } from '@angular/router';

import {HomeComponent} from './home.component';
import {TaskListComponent} from './../app/tasks/task-list/task-list.component'

export const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'task-list/:userId/:customerId', component: TaskListComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
