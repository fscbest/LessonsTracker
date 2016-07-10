/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { TasksService } from './tasks.service.ts';

describe('Tasks Service', () => {
  beforeEachProviders(() => [TasksService]);

  it('should ...',
      inject([TasksService], (service: TasksService) => {
    expect(service).toBeTruthy();
  }));
});
