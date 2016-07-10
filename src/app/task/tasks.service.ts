import { Injectable } from '@angular/core';

@Injectable()
export class TasksService {

  constructor() {
  }

  getTaskList() {
    return [
      {
        userId: 1,
        customerId: 1,
        providerId: 1,
        date: "15.07.2016",
        title: "English",
        notes: "English lesson",
        price: 50,
        id: 1,
        color: "red"
      },
      {
        userId: 1,
        customerId: 1,
        providerId: 1,
        date: "15.07.2016",
        title: "Russian",
        notes: "Russian lesson",
        price: 50,
        id: 2,
        color: "red"
      },
      {
        userId: 2,
        customerId: 2,
        providerId: 1,
        date: "15.07.2016",
        title: "English",
        notes: "English lesson",
        price: 50,
        id: 3,
        color: "blue"
      }
    ]
  }
}
