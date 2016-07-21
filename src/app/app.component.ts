import { Component, OnInit, Inject } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { AngularFire, FirebaseListObservable, FirebaseAuth, FirebaseAuthState } from 'angularfire2';

import {HomeComponent} from './home.component';
import { LoginComponent } from './utils/login';
import { NavbarComponent} from './navbar/navbar.component';
import { PersonsService } from'./persons/services/persons.service';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import {User} from "./persons/user";
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [LoginComponent, TaskListComponent, NavbarComponent, ROUTER_DIRECTIVES],
  providers: [PersonsService]

})
export class AppComponent implements OnInit{
  title = 'app works!!!!';
  user = {};//new User();
  customerList = [];
  nickNameList = [];
  private authState: FirebaseAuthState = null;

  constructor(@Inject(FirebaseAuth) public auth: FirebaseAuth,
              private _personsService: PersonsService,
              public af: AngularFire,
              private _router: Router){
    auth.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
      //console.log("state " + state);
    });
    //auth.addAuthStateListener(new FirebaseAuth.AuthStateListener() {
    //  public void onAuthStateChanged(FirebaseAuth firebaseAuth) {
    //    FirebaseUser user = auth.getCurrentUser();
    //    if(user != null){
    //      console.log("User is signed in: " + user.getDisplayName());
    //    }else{
    //      console.log("User is signed out");
    //    }
    //  }
    //});

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
