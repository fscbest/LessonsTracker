import { Component, OnInit } from '@angular/core';

import {HomeComponent} from './home.component';
import { NavbarComponent} from './navbar/navbar.component';
import { PersonsService } from'./persons/services/persons.service';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import {User} from "./persons/user";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [TaskListComponent, NavbarComponent],
  providers: [PersonsService]

})
export class AppComponent implements OnInit{
  title = 'app works!!!!';
  user = {};//new User();
  customerList = [];
  nickNameList = [];

  constructor(private _personsService: PersonsService ){

  }
  ngOnInit(){
    this.user = this.getUserProfile(); //TODO: Get CURRENT user
    this.customerList = this.getCustomerList();
  }

  private getUserProfile(){
    var user = this._personsService.getUserProfile();
    console.log(user);

    return user;
  };

  private getCustomerList(){
    var customerList = this._personsService.getCustomerList();
    customerList.forEach((customer) => {
      var nick = {
        userId : customer.userId,
        customerId: customer.id,
        nick: customer.nickname
      }
      this.nickNameList.push(nick);
    });
    console.log("App component: getCustomerList: " + customerList);

    return customerList;
  };
}
