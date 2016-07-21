import { Component, OnInit, Inject } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { AngularFire, FirebaseListObservable, FirebaseAuth, FirebaseAuthState } from 'angularfire2';
import {} from './../../persons/user';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  directives: [ROUTER_DIRECTIVES],
})
export class LoginComponent implements OnInit {
  email: String;
  password: String;
  user = {};
  status = "loggedOut";

  constructor(@Inject(FirebaseAuth) public auth: FirebaseAuth,
              public af: AngularFire,
              private _router: Router){
    auth.subscribe((state: FirebaseAuthState) => {
      console.log("state " + state);
      if(state != null){
        this.status = "loggedIn";
      }else{
        this.status = "loggedOut";
      }
    });
  }

  ngOnInit() {
  }

  signUp() {
    //this.email = "roman1@gmail.com";
    //this.password = "123456";
    var creds: any = {email: this.email, password: this.password};
    this.af.auth.createUser(creds);
  }

  login() {
    this.email = "roman1@gmail.com";
    this.password = "123456";
    var creds: any = {email: this.email, password: this.password};
    this.auth.login(creds).then(
      (auth) => {
        console.log(auth);
        this.status = "loggedIn";
        this._router.navigate(['/']);
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
