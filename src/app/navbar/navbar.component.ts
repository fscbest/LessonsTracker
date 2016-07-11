import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input('nickNames') nickNameList = [{
    userId : 0,
    customerId: 0,
    nick: "dummy"
  }];
  constructor() {}

  ngOnInit() {
  }

}
