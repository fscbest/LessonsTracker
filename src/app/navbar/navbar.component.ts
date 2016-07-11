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
  constructor(private _router: Router){
  }

  //isCurrentRoute(route){
  //  var instruction = this._router.generate(route);
  //  return this._router.isRouteActive(instruction);
  //
  //}

  ngOnInit() {
  }

}
