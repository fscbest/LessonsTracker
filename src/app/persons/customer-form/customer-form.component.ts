import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ROUTER_DIRECTIVES, CanDeactivate } from '@angular/router';
import { NgForm } from '@angular/forms';

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
  private sub: any;
  id: string;
  title: String;
  modelCustomer = new Customer();
  submitted = false;
  active = true;

  constructor(
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log("jhg11" + this.modelCustomer.firstName);

    this.sub = this._route.params.subscribe(params => {
      this.id = params['userId'].toString();
      let custId = params['customerId'] ? params['customerId'].toString() : undefined;
      this.modelCustomer.id = custId;
      console.log("CustomerFormComponent-> ngOnInit:");
      console.log("\t url parameters: userId = " + this.id);
      console.log("\t url parameters: customerId = " + this.modelCustomer.id);
    });

    this.title = this.modelCustomer.id ? "Edit User" : "New User";

    if(!this.modelCustomer.id){
      return;
    }

  }

  routerCanDeactivate(){
/*    if(this.form.dirty){
      return confirm("The form is changed. Are you sure?");
    }
    return true;*/
  }

  onSubmit(){
    console.log("CustomerFormComponent-> save");
    this.submitted = true;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onClear() {
    this.modelCustomer = new Customer();
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }


  // TODO: Remove this when we're done
  //get diagnostic() { return JSON.stringify(this.modelCustomer); }
}
