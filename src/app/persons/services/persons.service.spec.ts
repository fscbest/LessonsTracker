/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { PersonsService } from './persons.service';

describe('Persons Service', () => {
  beforeEachProviders(() => [PersonsService]);

  it('should ...',
      inject([PersonsService], (service: PersonsService) => {
    expect(service).toBeTruthy();
  }));
});
