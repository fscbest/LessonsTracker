import { Component, OnInit } from '@angular/core';

import { PersonsService } from'./persons/services/persons.service';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import {User} from "./persons/user";


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [TaskListComponent],
  providers: [PersonsService]

})
export class AppComponent implements OnInit{
  title = 'app works!!!!';
  user = {};//new User();

  constructor(private _personsService: PersonsService ){

  }
  ngOnInit(){
    this.user = this.getUserProfile(); //TODO: Get CURRENT user
  }

  private getUserProfile(){
    var user = this._personsService.getUserProfile();
    console.log(user);

    return user;
  };
}
