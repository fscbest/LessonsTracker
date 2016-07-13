import { provideRouter, RouterConfig } from '@angular/router';

import {CustomerFormComponent} from './../app/persons/customer-form/customer-form.component';
import {HomeComponent} from './home.component';
import {TaskListComponent} from './../app/tasks/task-list/task-list.component';

export const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: ':userId/home', component: HomeComponent },
  { path: ':userId/task-list/:userId/:customerId', component: TaskListComponent },
  { path: ':userId/customer/add-new', component: CustomerFormComponent },
  { path: ':userId/customer/:customerId', component: CustomerFormComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
