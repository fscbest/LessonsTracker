import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-task-template',
  templateUrl: 'task-template.component.html',
  styleUrls: ['task-template.component.css']
})
export class TaskTemplateComponent implements OnInit {
  @Input('task-tmpl') taskTemplate = {
    userId: 1,
    customerId: 1,
    providerId: 1,
    title: "EnglishTemplate",
    notes: "English lesson",
    price: 50,
    id: 1
  };
  constructor() {}

  ngOnInit() {
  }

}
