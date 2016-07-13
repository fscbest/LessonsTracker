import { Component, OnInit, Input } from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class NavbarComponent implements OnInit {
  @Input('nickNames') nickNameList = [{
    userId : 0,
    customerId: 0,
    nick: "dummy"
  }];
  userId = this.nickNameList[0].userId;
  constructor(private _router: Router){
  }

  ngOnInit() {
  }

  onClick(nickName){
    this._router.navigate(['/', this.userId, '/task-list', nickName.userId, nickName.customerId]);
  }

  onAddNewClick(){
    console.log("onAddNewClick " + this.userId);
    this._router.navigate(['/', this.userId, '/customer/add-new']);
  }

}
