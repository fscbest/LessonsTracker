/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { CustomerFormComponent } from './customer-form.component';

describe('Component: CustomerForm', () => {
  it('should create an instance', () => {
    let component = new CustomerFormComponent();
    expect(component).toBeTruthy();
  });
});
