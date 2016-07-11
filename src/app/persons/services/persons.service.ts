import { Injectable } from '@angular/core';

@Injectable()
export class PersonsService {

  constructor() {
  }

  getUserProfile() {
    return {
      dateOfBirth: "15.07.2001",
      firstName: "John",
      lastName: "Black",
      notes: "Good teacher",
      id: 1
    }
  }

  getCustomer() {
    return {
      userId:1,
      dateOfBirth: "15.07.2001",
      firstName: "First",
      lastName: "Child",
      notes: "Good child",
      id: 1,
      color: "black",
      nickname: "nick"
    }


  }

  getCustomerList() {
    return [
      {
        userId:1,
        dateOfBirth: "15.07.2001",
        firstName: "First",
        lastName: "Child",
        notes: "Good child",
        id: 1,
        color: "black",
        nickname: "nick1stCh"
      },
      {
        userId:1,
        dateOfBirth: "15.07.2001",
        firstName: "Second",
        lastName: "Child",
        notes: "Good child",
        id: 2,
        color: "black",
        nickname: "nick2stCh"
      },
      {
        userId:1,
        dateOfBirth: "15.07.2001",
        firstName: "3d",
        lastName: "Child",
        notes: "Good child",
        id: 3,
        color: "black",
        nickname: "nick3stCh"
      }]
  }

  getProvider() {
    return {
      userId:1,
      dateOfBirth: "15.07.2001",
      firstName: "First",
      lastName: "Provider",
      notes: "Good Provider",
      id: 1,
      color: "black",
      billingPeriod: 1,
      nickname: "nick1Prov"
    }


  }

  getProviderList() {
    return [
      {
        userId:1,
        dateOfBirth: "15.07.2001",
        firstName: "First",
        lastName: "Provider",
        notes: "Good Provider",
        id: 1,
        color: "black",
        billingPeriod: 1,
        nickname: "nick1Prov"
      },
      {
        userId:1,
        dateOfBirth: "15.07.2001",
        firstName: "Second",
        lastName: "Provider",
        notes: "Good Provider",
        id: 1,
        color: "black",
        billingPeriod: 1,
        nickname: "nick2Prov"
      },
      {
        userId:1,
        dateOfBirth: "15.07.2001",
        firstName: "3d",
        lastName: "Provider",
        notes: "Good Provider",
        id: 1,
        color: "black",
        billingPeriod: 1,
        nickname: "nick3Prov"
      }]
  }
}
