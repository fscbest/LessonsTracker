import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ROUTER_DIRECTIVES, CanDeactivate } from '@angular/router';
import {ControlGroup, FormBuilder} from '@angular/common';
import {Validators} from '@angular/common';

import { Customer } from './../customer';
import { PersonsService } from './../services/persons.service';


@Component({
  moduleId: module.id,
  selector: 'app-customer-form',
  templateUrl: 'customer-form.component.html',
  styleUrls: ['customer-form.component.css'],
  providers: [ PersonsService ],
  directives: [ ROUTER_DIRECTIVES ]
})
export class CustomerFormComponent implements OnInit {
  form: ControlGroup;
  private sub: any;
  title: String;
  customer = new Customer();
  id: string;

  constructor(
    private _fb: FormBuilder,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.form = this._fb.group({
      firstName: ['', Validators.compose([
        Validators.required
      ])],
      lastName: ['', Validators.compose([
        Validators.required
      ])]
    });

    this.sub = this._route.params.subscribe(params => {
      this.id = params['userId'].toString();
      let custId = params['customerId'] ? params['customerId'].toString() : undefined;
      this.customer.id = custId;
      console.log("CustomerFormComponent-> ngOnInit:");
      console.log("\t url parameters: userId = " + this.id);
      console.log("\t url parameters: customerId = " + this.customer.id);
    });

    this.title = this.customer.id ? "Edit User" : "New User";

    if(!this.customer.id){
      return;
    }

  }

  routerCanDeactivate(){
    if(this.form.dirty){
      return confirm("The form is changed. Are you sure?");
    }
    return true;
  }

  save(){
    console.log("CustomerFormComponent-> save");
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
